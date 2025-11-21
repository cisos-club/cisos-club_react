import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Linkedin,
  Globe,
  Users,
  Award,
  Calendar,
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    cargo: '',
    email: '',
    telefone: '',
    assunto: '',
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
    alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.');
    setFormData({
      nome: '',
      empresa: '',
      cargo: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@cisosclub.com.br',
      description: 'Para dúvidas gerais e informações'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (11) 99999-9999',
      description: 'Atendimento comercial e suporte'
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'São Paulo, Brasil',
      description: 'Sede principal da comunidade'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      content: 'Segunda a Sexta, 9h às 18h',
      description: 'Horário comercial brasileiro'
    }
  ];

  const contactReasons = [
    {
      icon: Users,
      title: 'Quero ser membro',
      description: 'Informações sobre como fazer parte da comunidade',
      action: 'Candidatar-se',
      link: '/membros'
    },
    {
      icon: Award,
      title: 'Quero patrocinar',
      description: 'Oportunidades de patrocínio e parcerias',
      action: 'Ver opções',
      link: '/patrocinadores'
    },
    {
      icon: Calendar,
      title: 'Informações sobre eventos',
      description: 'Agenda, inscrições e detalhes dos eventos',
      action: 'Ver eventos',
      link: '/eventos'
    },
    {
      icon: MessageSquare,
      title: 'Imprensa e mídia',
      description: 'Assessoria de imprensa e materiais para mídia',
      action: 'Contatar',
      link: '#contato'
    }
  ];

  const team = [
    {
      name: 'Allex Amorim',
      role: 'Founder & CEO',
      description: 'Líder visionário e Top Voice em cibersegurança',
      linkedin: 'https://linkedin.com/in/allexamorim'
    },
    {
      name: 'Equipe Comercial',
      role: 'Parcerias e Patrocínios',
      description: 'Especialistas em relacionamento com parceiros',
      email: 'comercial@cisosclub.com.br'
    },
    {
      name: 'Equipe de Eventos',
      role: 'Organização e Logística',
      description: 'Responsáveis pela execução dos eventos',
      email: 'eventos@cisosclub.com.br'
    }
  ];

  const faqs = [
    {
      question: 'Como posso me tornar membro do CISO\'s Club?',
      answer: 'Para se tornar membro, você deve ocupar uma posição de liderança em segurança (CISO, Head of Security, etc.) e preencher nosso formulário de candidatura. Nossa equipe avaliará seu perfil e entrará em contato.'
    },
    {
      question: 'Quais são os critérios para participar dos eventos?',
      answer: 'Os eventos são exclusivos para membros da comunidade. Alguns eventos específicos podem ter critérios adicionais baseados no perfil profissional e experiência.'
    },
    {
      question: 'Como funciona o processo de patrocínio?',
      answer: 'Oferecemos diversas modalidades de patrocínio para diferentes tipos de eventos. Entre em contato conosco para receber o media kit completo com todas as opções disponíveis.'
    },
    {
      question: 'O CISO\'s Club tem presença em outras cidades?',
      answer: 'Sim, realizamos eventos em São Paulo, Rio de Janeiro, Belo Horizonte, Brasília e outras capitais. Também temos eventos online que conectam membros de todo o país.'
    }
  ];

  return (
    <div className="min-h-screen hero-gradient">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Entre em Contato
            <span className="block text-gradient-accent">
              Conosco
            </span>
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Estamos aqui para ajudar você a fazer parte da maior comunidade 
            de líderes de segurança da América Latina
          </p>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Como podemos ajudar?
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Escolha a opção que melhor descreve seu interesse
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="text-center hover-lift border-0 shadow-lg group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {reason.description}
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={reason.link}>
                        {reason.action}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Envie sua mensagem
              </h2>
              
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
                        <Label htmlFor="empresa">Empresa</Label>
                        <Input
                          id="empresa"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="cargo">Cargo</Label>
                        <Input
                          id="cargo"
                          name="cargo"
                          value={formData.cargo}
                          onChange={handleInputChange}
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
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="assunto">Assunto *</Label>
                        <Input
                          id="assunto"
                          name="assunto"
                          value={formData.assunto}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-2"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full gradient-primary text-lg py-4">
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Informações de contato
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="hover-lift border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-accent-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-lg font-medium text-primary mb-1">{info.content}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Team */}
              <h3 className="text-2xl font-bold mb-6">
                Nossa Equipe
              </h3>
              
              <div className="space-y-4">
                {team.map((member, index) => (
                  <Card key={index} className="hover-lift border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{member.name}</h4>
                          <p className="text-sm text-accent font-medium mb-1">{member.role}</p>
                          <p className="text-sm text-muted-foreground mb-3">{member.description}</p>
                          <div className="flex items-center space-x-3">
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 transition-colors duration-200"
                              >
                                <Linkedin className="w-4 h-4" />
                              </a>
                            )}
                            {member.email && (
                              <a
                                href={`mailto:${member.email}`}
                                className="text-primary hover:text-primary/80 transition-colors duration-200"
                              >
                                <Mail className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Perguntas Frequentes
            </h2>
            <p className="text-xl dark-bg-subtitle">
              Respostas para as dúvidas mais comuns sobre o CISO's Club
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed ml-8">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Links */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Conecte-se conosco
          </h2>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="https://linkedin.com/company/cisos-club"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Linkedin className="w-8 h-8 text-white" />
            </a>
            <a
              href="https://cisosclub.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Globe className="w-8 h-8 text-white" />
            </a>
            <a
              href="mailto:contato@cisosclub.com.br"
              className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Mail className="w-8 h-8 text-accent-foreground" />
            </a>
          </div>
          
          <p className="text-muted-foreground">
            Siga-nos nas redes sociais para ficar por dentro das novidades e eventos da comunidade
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para fazer parte?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Junte-se aos principais líderes de segurança do Brasil e 
            transforme sua carreira com networking estratégico
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto" asChild>
              <a href="/membros">
                <Users className="w-6 h-6 mr-3" />
                Tornar-se membro
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 h-auto" asChild>
              <a href="/patrocinadores">
                <Award className="w-6 h-6 mr-3" />
                Ser patrocinador
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
