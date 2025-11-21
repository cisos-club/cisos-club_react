import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const initialState = {
  nome: '',
  empresa: '',
  segmento: '',
  tempoEmpresa: '',
  cargo: '',
  tempoCargo: '',
  residencia: '',
  trabalho: '',
  emailCorporativo: '',
  emailPessoal: '',
  whatsapp: '',
  linkedin: '',
  aceiteGrupo: false,
  aceiteDivulgacao: false,
  objetivoProfissional: '',
  barreirasCarreira: '',
  objetivoComunidade: '',
  origem: 'Site'
};

const segmentOptions = [
  'Varejo','Financeiro','Saúde','Indústria','Governo','Educação','Agro','Tecnologia','Logística','Outro'
];

const cargoOptions = [
  'Analista','Especialista / Consultor','Coordenador','Gerente','Gerente Sênior','Superintendente','Diretor','Outro'
];

export default function Inscricao() {
  const [data, setData] = useState(initialState);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    if (!data.nome.trim()) return 'Por favor, informe seu nome completo.';
    if (!data.empresa.trim()) return 'Por favor, informe sua empresa.';
    if (!data.emailCorporativo.trim() || !data.emailCorporativo.includes('@')) return 'Informe um e-mail corporativo válido.';
    if (data.linkedin && !/^https?:\/\//i.test(data.linkedin)) return 'Informe a URL completa do seu LinkedIn (com http:// ou https://).';
    if (!data.whatsapp.trim()) return 'Informe seu WhatsApp.';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) { setError(v); return; }
    setError('');
    setSending(true);
    try {
      const res = await fetch('/api/airtable-proxy.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: {
            'Nome': data.nome,
            'Empresa': data.empresa,
            'Segmento': data.segmento,
            'Tempo na Empresa': data.tempoEmpresa,
            'Cargo': data.cargo,
            'Tempo no Cargo': data.tempoCargo,
            'Residência (Estado/Cidade)': data.residencia,
            'Trabalho (Estado/Cidade)': data.trabalho,
            'Email Corporativo': data.emailCorporativo,
            'Email Pessoal': data.emailPessoal,
            'WhatsApp': data.whatsapp,
            'LinkedIn': data.linkedin,
            'Aceite Grupo WhatsApp': data.aceiteGrupo ? 'SIM' : 'NÃO',
            'Aceite Divulgação Foto': data.aceiteDivulgacao ? 'SIM' : 'NÃO',
            'Objetivo Profissional': data.objetivoProfissional,
            'Barreiras de Carreira': data.barreirasCarreira,
            'Objetivo na Comunidade': data.objetivoComunidade,
            'Origem': data.origem
          }
        })
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || 'Falha ao enviar.');
      }
      navigate('/obrigado');
    } catch (err) {
      setError('Erro ao enviar: ' + err.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="pt-28 pb-16 hero-gradient">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Faça parte do CISO&apos;s Club</h1>
          <p className="mt-2 text-white/80">Comunidade exclusiva para líderes de segurança. Preencha seus dados e nossa equipe entrará em contato.</p>
        </header>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-lg p-6 md:p-10 space-y-6">
          {error && <div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm">{error}</div>}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome completo *</label>
              <input name="nome" value={data.nome} onChange={handleChange} className="w-full border rounded-lg p-3" placeholder="Seu nome" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Empresa *</label>
              <input name="empresa" value={data.empresa} onChange={handleChange} className="w-full border rounded-lg p-3" placeholder="Empresa atual" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Segmento</label>
              <select name="segmento" value={data.segmento} onChange={handleChange} className="w-full border rounded-lg p-3">
                <option value="">Selecione</option>
                {segmentOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Cargo/Função</label>
              <select name="cargo" value={data.cargo} onChange={handleChange} className="w-full border rounded-lg p-3">
                <option value="">Selecione</option>
                {cargoOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tempo na empresa</label>
              <input name="tempoEmpresa" value={data.tempoEmpresa} onChange={handleChange} className="w-full border rounded-lg p-3" placeholder="Ex.: 2 anos" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tempo no cargo</label>
              <input name="tempoCargo" value={data.tempoCargo} onChange={handleChange} className="w-full border rounded-lg p-3" placeholder="Ex.: 1 ano" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Residência (Estado/Cidade)</label>
              <input name="residencia" value={data.residencia} onChange={handleChange} className="w-full border rounded-lg p-3" placeholder="SP / São Paulo" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Trabalho (Estado/Cidade)</label>
              <input name="trabalho" value={data.trabalho} onChange={handleChange} className="w-full border rounded-lg p-3" placeholder="SP / São Paulo" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">E-mail corporativo *</label>
              <input type="email" name="emailCorporativo" value={data.emailCorporativo} onChange={handleChange} className="w-full border rounded-lg p-3" placeholder="seuemail@empresa.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">E-mail pessoal</label>
              <input type="email" name="emailPessoal" value={data.emailPessoal} onChange={handleChange} className="w-full border rounded-lg p-3" placeholder="voce@email.com" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">WhatsApp *</label>
              <input name="whatsapp" value={data.whatsapp} onChange={handleChange} className="w-full border rounded-lg p-3" placeholder="+55 11 90000-0000" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">LinkedIn (URL completa)</label>
              <input name="linkedin" value={data.linkedin} onChange={handleChange} className="w-full border rounded-lg p-3" placeholder="https://linkedin.com/in/seu-usuario" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <label className="inline-flex items-center space-x-2">
              <input type="checkbox" name="aceiteGrupo" checked={data.aceiteGrupo} onChange={handleChange} />
              <span>Concordo em ser adicionado ao grupo de WhatsApp dos membros</span>
            </label>
            <label className="inline-flex items-center space-x-2">
              <input type="checkbox" name="aceiteDivulgacao" checked={data.aceiteDivulgacao} onChange={handleChange} />
              <span>Autorizo a divulgação da minha foto como membro</span>
            </label>
          </div>

          <div className="grid md:grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Objetivo profissional neste momento</label>
              <textarea name="objetivoProfissional" value={data.objetivoProfissional} onChange={handleChange} className="w-full border rounded-lg p-3" rows={3} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Principais barreiras para acelerar a carreira</label>
              <textarea name="barreirasCarreira" value={data.barreirasCarreira} onChange={handleChange} className="w-full border rounded-lg p-3" rows={3} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Qual seu objetivo ao se unir à comunidade?</label>
              <textarea name="objetivoComunidade" value={data.objetivoComunidade} onChange={handleChange} className="w-full border rounded-lg p-3" rows={3} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Ao enviar, você concorda com nossos termos de comunidade.</div>
            <Button type="submit" disabled={sending}>
              {sending ? 'Enviando…' : 'Enviar inscrição'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
