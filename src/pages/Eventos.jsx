import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Calendar,
  MapPin,
  Users,
  Clock,
  Shield,
  Coffee,
  GraduationCap,
  Plane,
  Award,
  ArrowRight,
  Filter,
  Image,
  Play,
  Star,
  CheckCircle,
  Globe,
  Network,
  Target
} from 'lucide-react';

const Eventos = () => {
  const [selectedFilter, setSelectedFilter] = useState('todos');

  const eventTypes = [
    { id: 'todos', name: 'Todos os Eventos', icon: Calendar },
    { id: 'dinner', name: 'CISO\'s Dinner', icon: Coffee },
    { id: 'warroom', name: 'War Room', icon: Shield },
    { id: 'academy', name: 'Academy', icon: GraduationCap },
    { id: 'conference', name: 'Conference', icon: Award },
    { id: 'missoes', name: 'Missões Internacionais', icon: Plane }
  ];

  const upcomingEvents = [
    {
      id: 1,
      type: 'dinner',
      title: 'CISO\'s Dinner São Paulo',
      date: '2024-02-15',
      time: '19:00',
      location: 'Restaurante Fasano, São Paulo',
      description: 'Jantar exclusivo com 20 CISOs para networking estratégico e discussão sobre tendências de mercado.',
      attendees: 20,
      status: 'Inscrições Abertas',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      type: 'warroom',
      title: 'War Room: Resposta a Incidentes',
      date: '2024-02-28',
      time: '09:00',
      location: 'Centro de Convenções, São Paulo',
      description: 'Simulação imersiva de crise cibernética com cenário realista de ransomware.',
      attendees: 35,
      status: 'Últimas Vagas',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      type: 'academy',
      title: 'CISO\'s Academy: Liderança em Segurança',
      date: '2024-03-10',
      time: '14:00',
      location: 'Online',
      description: 'Programa de desenvolvimento para CISOs com foco em habilidades de liderança e gestão.',
      attendees: 25,
      status: 'Inscrições Abertas',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      type: 'conference',
      title: 'CISO\'s Club Conference 2024',
      date: '2024-04-20',
      time: '08:00',
      location: 'Centro de Convenções Rebouças, São Paulo',
      description: 'O maior encontro anual da comunidade com palestrantes internacionais e networking premium.',
      attendees: 200,
      status: 'Em Breve',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      type: 'missoes',
      title: 'Missão RSA Conference 2024',
      date: '2024-05-06',
      time: '06:00',
      location: 'San Francisco, EUA',
      description: 'Delegação brasileira para o maior evento de cibersegurança do mundo.',
      attendees: 15,
      status: 'Lista de Espera',
      image: '/api/placeholder/400/250'
    }
  ];

  const pastEvents = [
    {
      id: 6,
      type: 'dinner',
      title: 'CISO\'s Dinner Rio de Janeiro',
      date: '2024-01-25',
      location: 'Copacabana Palace, Rio de Janeiro',
      attendees: 18,
      highlights: ['Networking premium', 'Discussões estratégicas', 'Novos relacionamentos'],
      photos: 12,
      testimonial: 'Evento excepcional que proporcionou conexões valiosas para minha carreira.'
    },
    {
      id: 7,
      type: 'warroom',
      title: 'War Room: Ataque APT',
      date: '2024-01-15',
      location: 'Centro Empresarial, São Paulo',
      attendees: 32,
      highlights: ['Simulação realista', 'Aprendizado prático', 'Trabalho em equipe'],
      photos: 25,
      testimonial: 'A experiência mais imersiva que já participei em cibersegurança.'
    }
  ];

  const eventFormatsDetails = [
    {
      icon: Coffee,
      name: 'CISO\'s Dinners',
      description: 'Encontros exclusivos em ambiente sofisticado',
      details: [
        'Grupos de 15-20 CISOs selecionados',
        'Restaurantes premium em grandes centros',
        'Discussões estratégicas sem viés comercial',
        'Networking de alto nível',
        'Frequência mensal em SP, RJ, BH, BSB'
      ],
      duration: '3-4 horas',
      format: 'Presencial'
    },
    {
      icon: Shield,
      name: 'War Room',
      description: 'Simulações imersivas de crise cibernética',
      details: [
        'Cenários realistas de incidentes',
        'Participação de jornalistas e executivos',
        'Tomada de decisão sob pressão',
        'Aprendizado através da prática',
        'Debriefing com especialistas'
      ],
      duration: '6-8 horas',
      format: 'Presencial'
    },
    {
      icon: GraduationCap,
      name: 'CISO\'s Academy',
      description: 'Desenvolvimento e capacitação contínua',
      details: [
        'Programa PACS de diagnóstico de carreira',
        'Mentoria com líderes seniores',
        'Workshops de liderança',
        'Conteúdo estratégico exclusivo',
        'Certificações e reconhecimentos'
      ],
      duration: 'Contínuo',
      format: 'Híbrido'
    },
    {
      icon: Award,
      name: 'Conference',
      description: 'O grande encontro anual da comunidade',
      details: [
        'Palestrantes internacionais renomados',
        'Premiações e reconhecimentos',
        'Exposição de soluções inovadoras',
        'Networking em grande escala',
        'Cobertura de mídia especializada'
      ],
      duration: '2 dias',
      format: 'Presencial'
    },
    {
      icon: Plane,
      name: 'Missões Internacionais',
      description: 'Delegações para eventos globais',
      details: [
        'Participação em RSA, Black Hat, CyberTech',
        'Grupos exclusivos de 15-25 executivos',
        'Networking internacional',
        'Acesso a conteúdo global',
        'Experiências culturais premium'
      ],
      duration: '5-7 dias',
      format: 'Internacional'
    }
  ];

  const filteredEvents = selectedFilter === 'todos' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === selectedFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Inscrições Abertas': return 'bg-green-500';
      case 'Últimas Vagas': return 'bg-yellow-500';
      case 'Lista de Espera': return 'bg-red-500';
      case 'Em Breve': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen hero-gradient">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Eventos Exclusivos
            <span className="block text-gradient-accent">
              para Líderes de Segurança
            </span>
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Experiências únicas que conectam, desenvolvem e transformam 
            a carreira de CISOs e executivos de segurança
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto" asChild>
              <Link to="/membros">
                <Users className="w-6 h-6 mr-3" />
                Participar dos Eventos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Event Types Filter */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {eventTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Button
                  key={type.id}
                  variant={selectedFilter === type.id ? "default" : "outline"}
                  onClick={() => setSelectedFilter(type.id)}
                  className={`flex items-center space-x-2 ${
                    selectedFilter === type.id ? 'gradient-primary text-white' : ''
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{type.name}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Próximos Eventos
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Agenda de eventos exclusivos para membros da comunidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="hover-lift border-0 shadow-lg overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Image className="w-16 h-16 text-white/50" />
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${getStatusColor(event.status)} text-white`}>
                      {event.status}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {event.attendees} participantes
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-sm">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{new Date(event.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-primary" asChild>
                    <Link to="/membros">
                      Inscrever-se
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Formats Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Formatos de Eventos
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Cada formato foi desenvolvido para atender diferentes necessidades de desenvolvimento
            </p>
          </div>
          
          <div className="space-y-12">
            {eventFormatsDetails.map((format, index) => {
              const Icon = format.icon;
              return (
                <Card key={index} className="hover-lift border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                      <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <h3 className="text-2xl font-semibold mb-2 lg:mb-0">
                            {format.name}
                          </h3>
                          <div className="flex space-x-4 text-sm text-muted-foreground">
                            <span>Duração: {format.duration}</span>
                            <span>Formato: {format.format}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {format.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {format.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                              <span className="text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
              Eventos Realizados
            </h2>
            <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
              Galeria de momentos e resultados dos nossos eventos anteriores
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">
                      {event.title}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      {event.photos} fotos
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-sm">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{new Date(event.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Users className="w-4 h-4 text-accent" />
                      <span>{event.attendees} participantes</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Destaques do evento:</h4>
                    <div className="space-y-2">
                      {event.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-sm text-muted-foreground italic border-l-4 border-accent pl-4 mb-6">
                    "{event.testimonial}"
                  </blockquote>
                  
                  <Button variant="outline" className="w-full">
                    <Image className="w-4 h-4 mr-2" />
                    Ver Galeria de Fotos
                  </Button>
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
            Pronto para participar?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Faça parte da maior comunidade de líderes de segurança e 
            participe de eventos que transformam carreiras
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto" asChild>
              <Link to="/membros">
                <Users className="w-6 h-6 mr-3" />
                Tornar-se membro
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 h-auto" asChild>
              <Link to="/patrocinadores">
                <Award className="w-6 h-6 mr-3" />
                Patrocinar eventos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eventos;
