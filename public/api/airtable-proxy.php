<?php
// public/api/airtable-proxy.php
header('Content-Type: application/json');

// Configuração de CORS segura
$allowed_origins = [
    'https://cisosclub.com.br',
    'https://www.cisosclub.com.br',
    'http://localhost:5173',
    'http://localhost:3000'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("Access-Control-Allow-Origin: https://cisosclub.com.br");
}

header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Max-Age: 86400");

// Responder a requisições OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Verificar se é uma requisição POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Método não permitido. Use POST."]);
    exit();
}

// Configuração do Airtable - usar variáveis de ambiente quando possível
$AIRTABLE_API_TOKEN = getenv('AIRTABLE_API_TOKEN') ?: 'CONFIGURE_SEU_TOKEN_AQUI';
$AIRTABLE_BASE_ID   = getenv('AIRTABLE_BASE_ID')   ?: 'CONFIGURE_SEU_BASE_ID_AQUI';
$AIRTABLE_TABLE     = getenv('AIRTABLE_TABLE')     ?: 'Membros Interessados';

// Verificar se as credenciais estão configuradas
if ($AIRTABLE_API_TOKEN === 'CONFIGURE_SEU_TOKEN_AQUI' || $AIRTABLE_BASE_ID === 'CONFIGURE_SEU_BASE_ID_AQUI') {
    error_log("Airtable credentials not configured");
    http_response_code(500);
    echo json_encode(["error" => "Configuração do servidor incompleta. Entre em contato com o administrador."]);
    exit();
}

// Validar e sanitizar entrada
$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['fields']) || !is_array($input['fields'])) {
    http_response_code(400);
    echo json_encode(["error" => "Dados inválidos. Formato esperado: JSON com objeto 'fields'."]);
    exit();
}

// Validação básica dos campos obrigatórios
$required_fields = ['Nome', 'Empresa', 'Email Corporativo', 'WhatsApp'];
foreach ($required_fields as $field) {
    if (empty($input['fields'][$field])) {
        http_response_code(400);
        echo json_encode(["error" => "Campo obrigatório não preenchido: $field"]);
        exit();
    }
}

// Sanitizar dados de entrada
$sanitized_fields = [];
foreach ($input['fields'] as $key => $value) {
    if (is_string($value)) {
        $sanitized_fields[$key] = trim(strip_tags($value));
    } else {
        $sanitized_fields[$key] = $value;
    }
}

// Validação adicional de email
if (!filter_var($sanitized_fields['Email Corporativo'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Email corporativo inválido."]);
    exit();
}

// Validação de LinkedIn (se fornecido)
if (!empty($sanitized_fields['LinkedIn']) && !filter_var($sanitized_fields['LinkedIn'], FILTER_VALIDATE_URL)) {
    http_response_code(400);
    echo json_encode(["error" => "URL do LinkedIn inválida."]);
    exit();
}

// Adicionar timestamp
$sanitized_fields['Data de Cadastro'] = date('Y-m-d H:i:s');

// Preparar payload para o Airtable
$payload = json_encode([
    "fields" => $sanitized_fields
], JSON_UNESCAPED_UNICODE);

// Configurar cURL com timeout e verificação SSL
$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => "https://api.airtable.com/v0/" . $AIRTABLE_BASE_ID . "/" . rawurlencode($AIRTABLE_TABLE),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_CONNECTTIMEOUT => 10,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_SSL_VERIFYHOST => 2,
    CURLOPT_HTTPHEADER => [
        "Authorization: Bearer " . $AIRTABLE_API_TOKEN,
        "Content-Type: application/json",
        "User-Agent: CISOsClub-Website/1.0"
    ],
    CURLOPT_POSTFIELDS => $payload
]);

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curl_error = curl_error($ch);
curl_close($ch);

// Verificar erros de cURL
if ($curl_error) {
    error_log("cURL Error: " . $curl_error);
    http_response_code(500);
    echo json_encode(["error" => "Erro de conexão com o servidor. Tente novamente."]);
    exit();
}

// Log de erro para códigos de status não-sucesso (sem expor detalhes)
if ($httpcode >= 400) {
    error_log("Airtable API Error - HTTP $httpcode: " . $response);
    
    if ($httpcode === 422) {
        http_response_code(400);
        echo json_encode(["error" => "Dados inválidos. Verifique os campos preenchidos."]);
    } else if ($httpcode === 401 || $httpcode === 403) {
        http_response_code(500);
        echo json_encode(["error" => "Erro de autorização no servidor. Entre em contato com o administrador."]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Erro interno do servidor. Tente novamente em alguns minutos."]);
    }
    exit();
}

// Retornar resposta de sucesso (sem expor dados sensíveis)
http_response_code(200);
echo json_encode([
    "success" => true,
    "message" => "Cadastro realizado com sucesso!"
]);
?>
