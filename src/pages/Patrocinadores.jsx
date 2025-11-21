import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  BarChart3,
  Shield,
  Network,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Coffee,
  Calendar,
  GraduationCap,
  Plane,
  MessageSquare,
  Download,
  Building,
  Handshake,
  Eye,
  Camera
} from 'lucide-react';

const Patrocinadores = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    cargo: '',
    email: '',
    telefone: '',
    segmento: '',
    interesse: '',
    mensagem: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Obrigado pelo seu interesse! Nossa equipe entrará em contato em breve para enviar o Media Kit exclusivo.');
  };

  const whySponsor = [
    {
      icon: Target,
      title: 'Acesso Direto a Decisores',
      description: 'Conecte-se diretamente com mais de 500 CISOs, CIOs e CTOs das principais empresas do Brasil.',
      details: ['Networking qualificado', 'Tomadores de decisão', 'Orçamentos de R$ 3,5 bilhões']
    },
    {
      icon: Award,
      title: 'Branding Premium',
      description: 'Associe sua marca a experiências exclusivas e de alto valor em ambientes sofisticados.',
      details: ['Eventos exclusivos', 'Audiência qualificada', 'Posicionamento premium']
    },
    {
      icon: Network,
      title: 'Relacionamento Estratégico',
      description: 'Construa relacionamentos duradouros sem o ruído de feiras massificadas.',
      details: ['Ambiente intimista', 'Conversas estratégicas', 'Relacionamentos de longo prazo']
    },
    {
      icon: BarChart3,
      title: 'ROI Mensurável',
      description: 'Relatórios detalhados com métricas, fotos e resultados pós-evento.',
      details: ['Relatórios completos', 'Métricas de engajamento', 'Fotos profissionais']
    }
  ];

  const sponsorshipFormats = [
    {
      icon: Coffee,
      name: 'CISO\'s Dinners',
      description: 'Jantares exclusivos com 15-20 líderes',
      benefits: [
        'Apresentação de case ou solução',
        'Networking direto com CISOs',
        'Ambiente intimista e estratégico',
        'Gestão de convites personalizada'
      ],
      audience: '15-20 CISOs por evento',
      frequency: 'Mensal em SP, RJ, BH, BSB'
    },
    {
      icon: Shield,
      name: 'War Room',
      description: 'Simulações imersivas de crise cibernética',
      benefits: [
        'Demonstração de soluções em cenário real',
        'Participação ativa na simulação',
        'Visibilidade durante a crise simulada',
        'Networking pós-evento'
      ],
      audience: '30-40 executivos',
      frequency: 'Trimestral'
    },
    {
      icon: Users,
      name: 'Happy Hour',
      description: 'Networking em ambiente descontraído',
      benefits: [
        'Branding em ambiente casual',
        'Volume maior de participantes',
        'Networking ampliado',
        'Exposição de marca contínua'
      ],
      audience: '50-80 profissionais',
      frequency: 'Bimestral'
    },
    {
      icon: GraduationCap,
      name: 'Academy',
      description: 'Programas de capacitação e mentoria',
      benefits: [
        'Conteúdo educacional patrocinado',
        'Posicionamento como thought leader',
        'Acesso a programa de mentoria',
        'Branding em materiais educativos'
      ],
      audience: 'Membros selecionados',
      frequency: 'Contínuo'
    },
    {
      icon: Award,
      name: 'Conference',
      description: 'Encontro anual da comunidade',
      benefits: [
        'Máxima visibilidade da marca',
        'Palestra ou keynote',
        'Estande ou área de demonstração',
        'Networking em grande escala'
      ],
      audience: '200+ participantes',
      frequency: 'Anual'
    },
    {
      icon: Plane,
      name: 'Missões Internacionais',
      description: 'Delegações para eventos globais',
      benefits: [
        'Branding internacional',
        'Networking global',
        'Experiência premium',
        'Associação com inovação'
      ],
      audience: '15-25 executivos',
      frequency: 'Conforme calendário'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Geração de Leads Qualificados',
      description: 'Acesso direto a tomadores de decisão com orçamento e necessidade real.'
    },
    {
      icon: BarChart3,
      title: 'Relatórios Pós-Evento',
      description: 'Métricas detalhadas, fotos profissionais e análise de engajamento.'
    },
    {
      icon: Eye,
      title: 'Exposição Premium',
      description: 'Visibilidade em ambientes exclusivos, digitais e presenciais.'
    },
    {
      icon: Handshake,
      title: 'Networking Estratégico',
      description: 'Relacionamentos diretos com executivos de alto nível.'
    }
  ];

  const partnerLogos = [
    'Darktrace', 'SentinelOne', 'Halcyon', 'CrowdStrike', 'Palo Alto Networks',
    'Microsoft', 'AWS', 'Cisco', 'Fortinet', 'Check Point'
  ];

  const testimonials = [
    {
      company: 'TechSecurity Corp',
      representative: 'João Silva, Diretor de Marketing',
      content: 'O CISO\'s Club nos proporcionou acesso direto aos principais decisores de segurança do país. O ROI foi excepcional.',
      results: '15 novos leads qualificados em um único evento'
    },
    {
      company: 'CyberDefense Solutions',
      representative: 'Maria Santos, VP de Vendas',
      content: 'A qualidade do networking e o ambiente exclusivo fazem toda a diferença. Fechamos 3 contratos importantes.',
      results: 'R$ 2.5M em pipeline gerado'
    }
  ];

  const stats = [
    { value: '500+', label: 'CISOs Alcançados', icon: Users },
    { value: '380+', label: 'Empresas Representadas', icon: Building },
    { value: 'R$ 3,5Bi', label: 'Orçamentos Sob Gestão', icon: BarChart3 },
    { value: '30+', label: 'Eventos Anuais', icon: Calendar }
  ];

  return (
    <div className="min-h-screen hero-gradient">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            Acesso exclusivo a decisores de segurança
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Conecte sua marca aos
            <span className="block text-gradient-accent">
              líderes que definem o futuro
            </span>
            da cibersegurança
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Acesso direto e qualificado a mais de 500 CISOs e decisores de segurança 
            das principais empresas do Brasil
          </p>
          
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto">
            <Download className="w-6 h-6 mr-3" />
            Receber Media Kit Exclusivo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Alcance e Impacto
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Números que demonstram o poder da nossa comunidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover-lift border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gradient-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Por que patrocinar o CISO's Club?
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Vantagens exclusivas para conectar sua marca aos principais decisores
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {whySponsor.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="hover-lift border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-14 h-14 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {reason.description}
                        </p>
                        <ul className="space-y-2">
                          {reason.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sponsorship Formats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Formatos de Ativação
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Diversas oportunidades para conectar sua marca com nossa comunidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorshipFormats.map((format, index) => {
              const Icon = format.icon;
              return (
                <Card key={index} className="hover-lift border-0 shadow-lg group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                      {format.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {format.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {format.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4 space-y-2">
                      <div className="text-xs text-muted-foreground">
                        <strong>Audiência:</strong> {format.audience}
                      </div>
                      <div className="text-xs text-accent font-medium">
                        {format.frequency}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Benefícios para Patrocinadores
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Resultados concretos e mensuráveis para sua estratégia de marketing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center hover-lift border-0 shadow-lg group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 mx-auto mb-6 gradient-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Parceiros que Confiam
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Empresas líderes que já investiram em nossa comunidade
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {partnerLogos.map((partner, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {partner}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Resultados Comprovados
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Depoimentos de parceiros que obtiveram sucesso conosco
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.company}</div>
                    <div className="text-sm text-muted-foreground mb-2">{testimonial.representative}</div>
                    <div className="text-sm text-accent font-medium">{testimonial.results}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Solicite o Media Kit Exclusivo
            </h2>
            <p className="text-xl dark-bg-subtitle">
              Preencha o formulário e receba informações detalhadas sobre oportunidades de patrocínio
            </p>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="empresa">Empresa *</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="cargo">Cargo *</Label>
                    <Input
                      id="cargo"
                      name="cargo"
                      value={formData.cargo}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="segmento">Segmento da Empresa *</Label>
                    <Input
                      id="segmento"
                      name="segmento"
                      value={formData.segmento}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="interesse">Interesse em Patrocínio *</Label>
                  <Input
                    id="interesse"
                    name="interesse"
                    placeholder="Ex: Dinners, War Room, Conference..."
                    value={formData.interesse}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="mensagem">Mensagem Adicional</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-2"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full gradient-primary text-lg py-4">
                  <Download className="w-5 h-5 mr-2" />
                  Receber Media Kit Exclusivo
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para conectar sua marca?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Junte-se às empresas líderes que já investem na maior comunidade 
            de CISOs da América Latina
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto">
              <MessageSquare className="w-6 h-6 mr-3" />
              Agendar reunião
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 h-auto" asChild>
              <Link to="/eventos">
                <Calendar className="w-6 h-6 mr-3" />
                Ver próximos eventos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patrocinadores;
