import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Target, 
  Eye, 
  Heart,
  Users,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Star,
  TrendingUp,
  Network,
  BookOpen,
  Calendar
} from 'lucide-react';

const Sobre = () => {
  const mission = {
    icon: Target,
    title: 'Nossa Missão',
    description: 'Conectar, fortalecer e acelerar líderes de segurança da informação, criando um ecossistema único para troca estratégica e evolução do mercado de cibersegurança no Brasil.'
  };

  const vision = {
    icon: Eye,
    title: 'Nossa Visão',
    description: 'Ser a referência na América Latina como comunidade de executivos de segurança, promovendo a excelência em liderança e inovação no setor.'
  };

  const values = [
    {
      icon: Shield,
      title: 'Exclusividade',
      description: 'Acesso restrito a executivos em posição de liderança, garantindo networking de alto nível.'
    },
    {
      icon: BookOpen,
      title: 'Curadoria de Conteúdo',
      description: 'Alto nível técnico e estratégico, sem viés comercial, focado em valor real para os membros.'
    },
    {
      icon: Network,
      title: 'Experiências Imersivas',
      description: 'Eventos e formatos únicos que geram conexões reais e aprendizado prático.'
    },
    {
      icon: TrendingUp,
      title: 'Desenvolvimento Contínuo',
      description: 'Foco na evolução profissional e pessoal dos líderes de segurança.'
    }
  ];

  const differentials = [
    {
      title: 'Comunidade Qualificada',
      description: 'Mais de 500 CISOs e líderes de segurança de grandes empresas brasileiras.',
      icon: Users
    },
    {
      title: 'Eventos Exclusivos',
      description: 'Formatos únicos como War Room, Dinners e missões internacionais.',
      icon: Calendar
    },
    {
      title: 'Networking Estratégico',
      description: 'Conexões que geram valor real para negócios e carreira.',
      icon: Network
    },
    {
      title: 'Conteúdo Premium',
      description: 'Insights globais e tendências de mercado curados por especialistas.',
      icon: BookOpen
    },
    {
      title: 'Desenvolvimento de Carreira',
      description: 'Academy com mentoria e diagnósticos personalizados (PACS).',
      icon: TrendingUp
    },
    {
      title: 'Alcance Internacional',
      description: 'Participação em eventos globais como RSA, Black Hat e CyberTech.',
      icon: Globe
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Fundação',
      description: 'Criação do CISO\'s Club com foco em conectar líderes de segurança do Brasil.'
    },
    {
      year: '2019',
      title: 'Primeiros Eventos',
      description: 'Início dos CISO\'s Dinners em São Paulo, estabelecendo o formato de networking exclusivo.'
    },
    {
      year: '2020',
      title: 'Expansão Nacional',
      description: 'Eventos em Rio de Janeiro, Brasília e outras capitais, adaptando-se ao formato híbrido.'
    },
    {
      year: '2021',
      title: 'War Room',
      description: 'Lançamento do formato War Room, simulações imersivas de crise cibernética.'
    },
    {
      year: '2022',
      title: 'CISO\'s Club Academy',
      description: 'Criação da Academy com foco em desenvolvimento de carreira e mentoria.'
    },
    {
      year: '2023',
      title: 'Missões Internacionais',
      description: 'Primeira delegação brasileira para eventos internacionais de cibersegurança.'
    },
    {
      year: '2024',
      title: 'Consolidação',
      description: 'Mais de 500 membros ativos e reconhecimento como principal comunidade de CISOs do país.'
    }
  ];

  const leadership = {
    name: 'Allex Amorim',
    role: 'Founder & Top Voice',
    description: 'Líder visionário em cibersegurança com mais de 15 anos de experiência. Reconhecido como Top Voice em segurança da informação, Allex é responsável por conectar e desenvolver os principais líderes do setor no Brasil.',
    achievements: [
      'Top Voice LinkedIn em Cibersegurança',
      'Mais de 15 anos de experiência em segurança',
      'Palestrante em eventos nacionais e internacionais',
      'Mentor de dezenas de líderes de segurança'
    ]
  };

  return (
    <div className="min-h-screen hero-gradient">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Sobre o CISO's Club
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            A história da maior comunidade de líderes de segurança da América Latina
          </p>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="hover-lift border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gradient-primary">
                  {mission.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {mission.description}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-accent-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gradient-primary">
                  {vision.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {vision.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Nossos Valores
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Os pilares que guiam nossa comunidade e definem nossa identidade
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover-lift border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 gradient-secondary rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 dark-bg-title">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Liderança
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Conheça quem está por trás da maior comunidade de CISOs do Brasil
            </p>
          </div>

          <Card className="max-w-4xl mx-auto hover-lift border-0 shadow-lg">
            <CardContent className="p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                <div className="w-48 h-48 gradient-primary rounded-3xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-24 h-24 text-white" />
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold mb-2 text-gradient-primary">
                    {leadership.name}
                  </h3>
                  <p className="text-xl text-accent font-semibold mb-6">
                    {leadership.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {leadership.description}
                  </p>
                  
                  <div className="space-y-3">
                    {leadership.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://linkedin.com/in/allexamorim" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
                        Conectar no LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Nossa Jornada
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              A evolução do CISO's Club ao longo dos anos
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <Card className="hover-lift border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-gradient-accent mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-lg font-semibold mb-3 dark-bg-title">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Nossos Diferenciais
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              O que torna o CISO's Club único no mercado de cibersegurança
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((differential, index) => {
              const Icon = differential.icon;
              return (
                <Card key={index} className="hover-lift border-0 shadow-lg group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                      {differential.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {differential.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Faça parte da nossa história
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Junte-se aos líderes que estão transformando o futuro da cibersegurança no Brasil
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto" asChild>
              <Link to="/membros">
                <Users className="w-6 h-6 mr-3" />
                Quero ser membro
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 h-auto" asChild>
              <Link to="/contato">
                <Award className="w-6 h-6 mr-3" />
                Falar conosco
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
