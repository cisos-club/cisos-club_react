# Configuração do Airtable - CISO's Club

## 📋 Passo a Passo para Configurar o Airtable

### **1. Criar a Base no Airtable**

1. Acesse [airtable.com](https://airtable.com) e faça login
2. Clique em **"Create a base"**
3. Escolha **"Start from scratch"**
4. Nomeie a base como: **"CISOs Club - Novos Membros"**

### **2. Configurar a Tabela**

1. Renomeie a tabela padrão para: **"Membros Interessados"**
2. Delete os campos padrão existentes
3. Crie os seguintes campos **exatamente com estes nomes**:

#### **Campos Obrigatórios**
| Nome do Campo | Tipo | Configuração |
|---------------|------|--------------|
| `Nome` | Single line text | - |
| `Empresa` | Single line text | - |
| `Email Corporativo` | Email | - |
| `WhatsApp` | Phone number | - |

#### **Campos Opcionais - Informações Profissionais**
| Nome do Campo | Tipo | Configuração |
|---------------|------|--------------|
| `Segmento` | Single select | Opções: Varejo, Financeiro, Saúde, Indústria, Governo, Educação, Agro, Tecnologia, Logística, Outro |
| `Cargo` | Single select | Opções: Analista, Especialista / Consultor, Coordenador, Gerente, Gerente Sênior, Superintendente, Diretor, Outro |
| `Tempo na Empresa` | Single line text | - |
| `Tempo no Cargo` | Single line text | - |

#### **Campos Opcionais - Localização**
| Nome do Campo | Tipo | Configuração |
|---------------|------|--------------|
| `Residência (Estado/Cidade)` | Single line text | - |
| `Trabalho (Estado/Cidade)` | Single line text | - |

#### **Campos Opcionais - Contato**
| Nome do Campo | Tipo | Configuração |
|---------------|------|--------------|
| `Email Pessoal` | Email | - |
| `LinkedIn` | URL | - |

#### **Campos de Aceite**
| Nome do Campo | Tipo | Configuração |
|---------------|------|--------------|
| `Aceite Grupo WhatsApp` | Single select | Opções: SIM, NÃO |
| `Aceite Divulgação Foto` | Single select | Opções: SIM, NÃO |

#### **Campos de Texto Longo**
| Nome do Campo | Tipo | Configuração |
|---------------|------|--------------|
| `Objetivo Profissional` | Long text | - |
| `Barreiras de Carreira` | Long text | - |
| `Objetivo na Comunidade` | Long text | - |

#### **Campos de Controle**
| Nome do Campo | Tipo | Configuração |
|---------------|------|--------------|
| `Origem` | Single line text | - |
| `Data de Cadastro` | Date and time | Include time |

### **3. Obter Credenciais de API**

#### **3.1 Personal Access Token**
1. Clique no seu avatar (canto superior direito)
2. Selecione **"Account"**
3. Na aba **"API"**, clique em **"Generate token"**
4. Nomeie o token: **"CISOs Club Website"**
5. Selecione os scopes:
   - ✅ `data:records:read`
   - ✅ `data:records:write`
6. Selecione a base criada: **"CISOs Club - Novos Membros"**
7. Clique em **"Create token"**
8. **COPIE E GUARDE** o token gerado (não será mostrado novamente)

#### **3.2 Base ID**
1. Acesse [airtable.com/api](https://airtable.com/api)
2. Clique na base **"CISOs Club - Novos Membros"**
3. Na documentação que abrir, encontre o **Base ID**
4. Será algo como: `appXXXXXXXXXXXXXX`
5. **COPIE E GUARDE** este ID

### **4. Configurar no Hostinger**

#### **Opção A: Variáveis de Ambiente (Recomendado)**
Se o Hostinger suportar variáveis de ambiente:
1. No painel do Hostinger, procure por **"Environment Variables"**
2. Adicione as seguintes variáveis:
   - `AIRTABLE_API_TOKEN` = seu token gerado
   - `AIRTABLE_BASE_ID` = seu base ID
   - `AIRTABLE_TABLE` = `Membros Interessados`

#### **Opção B: Edição Direta do Arquivo**
Se não houver suporte a variáveis de ambiente:
1. Abra o arquivo `api/airtable-proxy.php`
2. Localize as linhas:
   ```php
   $AIRTABLE_API_TOKEN = getenv('AIRTABLE_API_TOKEN') ?: 'CONFIGURE_SEU_TOKEN_AQUI';
   $AIRTABLE_BASE_ID   = getenv('AIRTABLE_BASE_ID')   ?: 'CONFIGURE_SEU_BASE_ID_AQUI';
   ```
3. Substitua por:
   ```php
   $AIRTABLE_API_TOKEN = getenv('AIRTABLE_API_TOKEN') ?: 'SEU_TOKEN_AQUI';
   $AIRTABLE_BASE_ID   = getenv('AIRTABLE_BASE_ID')   ?: 'SEU_BASE_ID_AQUI';
   ```

### **5. Testar a Configuração**

1. Acesse seu site em `/inscricao`
2. Preencha o formulário com dados de teste
3. Clique em **"Enviar inscrição"**
4. Verifique se:
   - Você foi redirecionado para `/obrigado`
   - Um novo registro apareceu na tabela do Airtable
   - Todos os campos foram preenchidos corretamente

### **6. Monitoramento e Manutenção**

#### **Verificações Regulares**
- ✅ Token de API não expirou
- ✅ Base ID ainda é válido
- ✅ Campos da tabela não foram alterados
- ✅ Logs de erro do servidor (se disponíveis)

#### **Backup de Dados**
- Configure exportações automáticas no Airtable
- Mantenha backup das configurações de campos
- Documente qualquer customização adicional

## 🔐 Segurança das Credenciais

### **⚠️ IMPORTANTE - Proteção de Dados**
- **NUNCA** compartilhe o Personal Access Token
- **NUNCA** commite o token em repositórios Git
- **SEMPRE** use variáveis de ambiente quando possível
- **REVOGUE** tokens antigos se necessário
- **MONITORE** o uso da API no painel do Airtable

### **Permissões Mínimas**
O token criado tem apenas as permissões necessárias:
- ✅ Leitura de registros (para validação)
- ✅ Escrita de registros (para novos cadastros)
- ❌ Não pode deletar registros
- ❌ Não pode alterar estrutura da base
- ❌ Não pode acessar outras bases

## 📞 Suporte

Em caso de problemas:
1. Verifique se todos os campos foram criados exatamente como especificado
2. Confirme se o token tem as permissões corretas
3. Teste a API diretamente usando a documentação do Airtable
4. Verifique os logs de erro do servidor PHP

---

**Status:** ✅ **PRONTO PARA CONFIGURAÇÃO**  
**Versão:** v27  
**Data:** 03/10/2025
