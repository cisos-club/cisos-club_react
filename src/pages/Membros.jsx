import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Network, 
  BookOpen, 
  TrendingUp,
  Calendar,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Target,
  Zap,
  Coffee,
  GraduationCap,
  Plane,
  MessageSquare,
  Play
} from 'lucide-react';

const Membros = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    cargo: '',
    email: '',
    telefone: '',
    experiencia: '',
    motivacao: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
    alert('Obrigado pelo seu interesse! Nossa equipe entrará em contato em breve.');
  };

  const benefits = [
    {
      icon: Network,
      title: 'Networking Estratégico',
      description: 'Conecte-se com mais de 500 CISOs e líderes de segurança das principais empresas do Brasil.',
      details: ['Acesso a grupos exclusivos no WhatsApp', 'Networking em eventos presenciais', 'Conexões que geram oportunidades reais']
    },
    {
      icon: BookOpen,
      title: 'Conteúdo Global e Curado',
      description: 'Acesso a insights, tendências e conhecimento estratégico sem viés comercial.',
      details: ['Relatórios exclusivos de mercado', 'Análises de tendências globais', 'Conteúdo curado por especialistas']
    },
    {
      icon: Calendar,
      title: 'Eventos Exclusivos',
      description: 'Participe de mais de 30 eventos anuais em formatos únicos e imersivos.',
      details: ['CISO\'s Dinners em várias cidades', 'War Rooms e simulações', 'Conference anual da comunidade']
    },
    {
      icon: TrendingUp,
      title: 'Aceleração de Carreira',
      description: 'Mentoria, diagnósticos personalizados e oportunidades de desenvolvimento através da Academy.',
      details: ['Programa PACS de diagnóstico', 'Mentoria com líderes seniores', 'Oportunidades de carreira exclusivas']
    }
  ];

  const eventFormats = [
    {
      icon: Coffee,
      name: 'Dinners Privados',
      description: 'Encontros reservados para discussões estratégicas',
      details: 'Grupos de 15-20 CISOs em jantares exclusivos para networking e troca de experiências em ambiente reservado.',
      frequency: 'Mensal em SP, RJ, BH, BSB'
    },
    {
      icon: Shield,
      name: 'War Room',
      description: 'Simulações de crise para aprendizado prático e intenso',
      details: 'Simulações imersivas de incidentes cibernéticos com participação de jornalistas, executivos e especialistas.',
      frequency: 'Trimestral'
    },
    {
      icon: Users,
      name: 'Happy Hour',
      description: 'Conexão e networking em ambiente descontraído',
      details: 'Encontros casuais para ampliar a rede de contatos e fortalecer relacionamentos da comunidade.',
      frequency: 'Bimestral'
    },
    {
      icon: GraduationCap,
      name: 'Academy',
      description: 'Treinamentos, mentorias e diagnósticos de carreira',
      details: 'Programa estruturado de desenvolvimento com mentoria, diagnóstico PACS e capacitação em liderança.',
      frequency: 'Contínuo'
    },
    {
      icon: Award,
      name: 'Conference',
      description: 'O grande encontro anual de toda a comunidade',
      details: 'Evento principal com palestrantes internacionais, premiações e networking em grande escala.',
      frequency: 'Anual'
    },
    {
      icon: Plane,
      name: 'Missões Internacionais',
      description: 'Delegações para os principais eventos globais',
      details: 'Participação em grupos exclusivos nos maiores eventos mundiais como RSA, Black Hat e CyberTech.',
      frequency: 'Conforme calendário global'
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'CISO, Banco ABC',
      company: 'Instituição Financeira',
      content: 'O CISO\'s Club transformou minha rede de contatos. Aqui encontrei parceiros estratégicos e oportunidades que aceleraram minha carreira.',
      rating: 5
    },
    {
      name: 'Ana Santos',
      role: 'Head of Security, TechCorp',
      company: 'Tecnologia',
      content: 'A qualidade dos eventos e o nível das discussões são incomparáveis. É o espaço que faltava para discutir nossos desafios reais.',
      rating: 5
    },
    {
      name: 'Roberto Lima',
      role: 'CISO, Empresa XYZ',
      company: 'Varejo',
      content: 'Através da Academy, consegui um diagnóstico preciso da minha carreira e mentoria que me posicionou melhor no mercado.',
      rating: 5
    }
  ];

  const requirements = [
    'Cargo de liderança em segurança (CISO, Head of Security, Security Manager)',
    'Experiência comprovada na área de cibersegurança',
    'Atuação em empresa de médio ou grande porte',
    'Comprometimento com a participação ativa na comunidade'
  ];

  return (
    <div className="min-h-screen hero-gradient">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            Exclusivo para líderes de segurança
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Entre para a comunidade que está
            <span className="block text-gradient-accent">
              redefinindo a segurança digital
            </span>
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Conecte-se com mais de 500 CISOs, acelere sua carreira e transforme 
            sua rede de contatos com experiências exclusivas
          </p>
          
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto">
            <Users className="w-6 h-6 mr-3" />
            Quero fazer parte
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Benefícios Exclusivos para Membros
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Vantagens que aceleram sua carreira e expandem suas oportunidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover-lift border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {benefit.description}
                        </p>
                        <ul className="space-y-2">
                          {benefit.details.map((detail, detailIndex) => (
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

      {/* Event Formats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Formatos de Participação
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Experiências únicas desenvolvidas especialmente para líderes de segurança
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventFormats.map((format, index) => {
              const Icon = format.icon;
              return (
                <Card key={index} className="hover-lift border-0 shadow-lg group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                      {format.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {format.description}
                    </p>
                    <p className="text-sm leading-relaxed mb-4">
                      {format.details}
                    </p>
                    <div className="text-xs text-accent font-medium">
                      {format.frequency}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Depoimentos de Membros
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Histórias reais de transformação e crescimento profissional
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-accent">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Quem pode ser membro?
            </h2>
            <p className="text-xl dark-bg-subtitle">
              Critérios para fazer parte da nossa comunidade exclusiva
            </p>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg leading-relaxed">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Candidatura para Membro
            </h2>
            <p className="text-xl dark-bg-subtitle">
              Preencha o formulário abaixo e nossa equipe entrará em contato
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
                    <Label htmlFor="cargo">Cargo Atual *</Label>
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
                  <Label htmlFor="experiencia">Experiência em Segurança (anos) *</Label>
                  <Input
                    id="experiencia"
                    name="experiencia"
                    value={formData.experiencia}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="motivacao">Por que deseja fazer parte do CISO's Club? *</Label>
                  <Textarea
                    id="motivacao"
                    name="motivacao"
                    value={formData.motivacao}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="mt-2"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full gradient-primary text-lg py-4">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Enviar Candidatura
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
            Pronto para transformar sua carreira?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Junte-se aos principais líderes de segurança do Brasil e acelere 
            seu crescimento profissional com networking estratégico
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto" asChild>
              <Link to="/eventos">
                <Calendar className="w-6 h-6 mr-3" />
                Ver próximos eventos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 h-auto" asChild>
              <Link to="/contato">
                <Zap className="w-6 h-6 mr-3" />
                Falar com nossa equipe
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membros;
