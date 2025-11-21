import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Users, 
  Award, 
  Globe, 
  Calendar,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Zap,
  Network,
  BookOpen,
  Trophy
} from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Users, value: '+500', label: 'CISOs Membros', description: 'Líderes de segurança ativos' },
    { icon: Award, value: '+380', label: 'Empresas', description: 'Representadas na comunidade' },
    { icon: Globe, value: 'R$ 3,5Bi', label: 'Orçamentos', description: 'Sob gestão dos membros' },
    { icon: Calendar, value: '+30', label: 'Eventos/Ano', description: 'Experiências exclusivas' },
  ];

  const benefits = [
    {
      icon: Network,
      title: 'Networking Estratégico',
      description: 'Conecte-se com os principais líderes de segurança do Brasil e América Latina em eventos exclusivos.'
    },
    {
      icon: BookOpen,
      title: 'Conteúdo Premium',
      description: 'Acesso a insights globais, tendências de mercado e conhecimento curado por especialistas.'
    },
    {
      icon: TrendingUp,
      title: 'Aceleração de Carreira',
      description: 'Mentoria, diagnósticos personalizados e oportunidades para evoluir sua liderança.'
    },
    {
      icon: Trophy,
      title: 'Experiências Únicas',
      description: 'Participe de War Rooms, missões internacionais e eventos que transformam sua visão.'
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'CISO, Banco ABC',
      content: 'O CISO\'s Club transformou minha rede de contatos e me deu acesso a insights que não encontraria em lugar nenhum.',
      rating: 5
    },
    {
      name: 'Ana Santos',
      role: 'Head of Security, TechCorp',
      content: 'Os eventos são excepcionais. A qualidade do networking e o nível das discussões são incomparáveis.',
      rating: 5
    },
    {
      name: 'Roberto Lima',
      role: 'CISO, Empresa XYZ',
      content: 'Através da Academy, consegui acelerar minha carreira e me posicionar melhor no mercado.',
      rating: 5
    }
  ];

  const eventTypes = [
    {
      name: 'CISO\'s Dinner',
      description: 'Jantares exclusivos para networking estratégico',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      name: 'War Room',
      description: 'Simulações imersivas de crise cibernética',
      icon: Shield,
      color: 'bg-red-500'
    },
    {
      name: 'Conference',
      description: 'Encontro anual da comunidade',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      name: 'Academy',
      description: 'Treinamentos e mentoria para líderes',
      icon: BookOpen,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg lg:text-xl text-gradient-accent mb-4 animate-fade-in">
              A maior comunidade de líderes de segurança da América Latina
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
              Conectando
              <span className="block text-gradient-accent">
                Líderes de Segurança
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Networking, conhecimento e experiências exclusivas que transformam 
              o futuro da cibersegurança no Brasil
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto" asChild>
                <Link to="/inscricao">
                  <Users className="w-6 h-6 mr-3" />
                  Sou CISO e quero fazer parte
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 h-auto" asChild>
                <Link to="/patrocinadores">
                  <Award className="w-6 h-6 mr-3" />
                  Quero patrocinar e conectar minha marca
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Números que Impressionam
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Uma comunidade que reúne os principais decisores de segurança do país
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
                    <div className="text-lg font-semibold mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center items-center mt-16">
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 h-auto" asChild>
              <Link to="/contato">
                <Zap className="w-6 h-6 mr-3" />
                Falar com nossa equipe
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Por que fazer parte do CISO's Club?
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Benefícios exclusivos que aceleram sua carreira e expandem sua rede de contatos
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Experiências Exclusivas
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Formatos únicos de eventos que conectam e desenvolvem líderes
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, index) => {
              const Icon = event.icon;
              return (
                <Card key={index} className="hover-lift border-0 shadow-lg overflow-hidden group">
                  <CardContent className="p-0">
                    <div className={`h-32 ${event.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                        {event.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/eventos">
                <Calendar className="w-5 h-5 mr-2" />
                Ver Todos os Eventos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              O que dizem nossos membros
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Depoimentos reais de líderes que transformaram suas carreiras
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para acelerar sua carreira?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Junte-se aos principais líderes de segurança do Brasil e transforme 
            sua rede de contatos, conhecimento e oportunidades de carreira.
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

export default Home;
