import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { 
  BookOpen,
  Search,
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Shield,
  Globe,
  Target,
  Award,
  Download,
  Eye,
  Clock,
  Tag,
  Filter,
  Star,
  FileText,
  Video,
  Podcast,
  Image as ImageIcon
} from 'lucide-react';

const Conteudo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos', icon: BookOpen },
    { id: 'artigos', name: 'Artigos', icon: FileText },
    { id: 'relatorios', name: 'Relatórios', icon: Download },
    { id: 'videos', name: 'Vídeos', icon: Video },
    { id: 'podcasts', name: 'Podcasts', icon: Podcast },
    { id: 'infograficos', name: 'Infográficos', icon: ImageIcon }
  ];

  const featuredContent = [
    {
      id: 1,
      type: 'relatorios',
      title: 'Estado da Cibersegurança no Brasil 2024',
      description: 'Análise completa do cenário de segurança digital nas empresas brasileiras, com dados exclusivos da comunidade CISO\'s Club.',
      author: 'Allex Amorim',
      date: '2024-01-15',
      readTime: '15 min',
      category: 'Pesquisa',
      featured: true,
      downloads: 1250,
      image: '/api/placeholder/600/300'
    },
    {
      id: 2,
      type: 'artigos',
      title: 'O Futuro da Liderança em Cibersegurança',
      description: 'Como os CISOs estão evoluindo para se tornarem líderes estratégicos de negócios e não apenas gestores de tecnologia.',
      author: 'Allex Amorim',
      date: '2024-01-10',
      readTime: '8 min',
      category: 'Liderança',
      featured: true,
      views: 2340,
      image: '/api/placeholder/600/300'
    },
    {
      id: 3,
      type: 'videos',
      title: 'War Room: Lições Aprendidas',
      description: 'Principais insights e aprendizados dos nossos eventos War Room, com depoimentos de participantes.',
      author: 'CISO\'s Club',
      date: '2024-01-05',
      readTime: '12 min',
      category: 'Eventos',
      featured: true,
      views: 890,
      image: '/api/placeholder/600/300'
    }
  ];

  const recentContent = [
    {
      id: 4,
      type: 'artigos',
      title: 'Zero Trust: Implementação Prática em Grandes Empresas',
      description: 'Guia prático para implementar arquitetura Zero Trust baseado em experiências reais de CISOs.',
      author: 'Carlos Silva',
      date: '2024-01-20',
      readTime: '10 min',
      category: 'Tecnologia',
      views: 1560
    },
    {
      id: 5,
      type: 'relatorios',
      title: 'Tendências de Investimento em Segurança 2024',
      description: 'Análise dos principais investimentos em cibersegurança planejados pelas empresas brasileiras.',
      author: 'Ana Santos',
      date: '2024-01-18',
      readTime: '12 min',
      category: 'Mercado',
      downloads: 890
    },
    {
      id: 6,
      type: 'podcasts',
      title: 'CISO Talk: Gestão de Crise em Cibersegurança',
      description: 'Conversa com especialistas sobre como gerenciar crises de segurança e comunicação com stakeholders.',
      author: 'Roberto Lima',
      date: '2024-01-16',
      readTime: '45 min',
      category: 'Gestão',
      views: 670
    },
    {
      id: 7,
      type: 'infograficos',
      title: 'Mapa de Ameaças Cibernéticas Brasil 2024',
      description: 'Visualização das principais ameaças e vetores de ataque identificados no país.',
      author: 'CISO\'s Club Research',
      date: '2024-01-14',
      readTime: '5 min',
      category: 'Pesquisa',
      downloads: 1120
    },
    {
      id: 8,
      type: 'artigos',
      title: 'Compliance e LGPD: Desafios dos CISOs',
      description: 'Como os líderes de segurança estão lidando com os desafios de compliance e adequação à LGPD.',
      author: 'Marina Costa',
      date: '2024-01-12',
      readTime: '7 min',
      category: 'Compliance',
      views: 980
    },
    {
      id: 9,
      type: 'videos',
      title: 'Masterclass: Comunicação Executiva para CISOs',
      description: 'Como comunicar riscos de segurança para o board e stakeholders de forma efetiva.',
      author: 'Allex Amorim',
      date: '2024-01-08',
      readTime: '25 min',
      category: 'Liderança',
      views: 1450
    }
  ];

  const topAuthors = [
    {
      name: 'Allex Amorim',
      role: 'Founder & Top Voice',
      articles: 15,
      followers: 25000,
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'Carlos Silva',
      role: 'CISO, Banco ABC',
      articles: 8,
      followers: 12000,
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'Ana Santos',
      role: 'Head of Security, TechCorp',
      articles: 6,
      followers: 8500,
      avatar: '/api/placeholder/80/80'
    }
  ];

  const allContent = [...featuredContent, ...recentContent];
  
  const filteredContent = allContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || item.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'artigos': return FileText;
      case 'relatorios': return Download;
      case 'videos': return Video;
      case 'podcasts': return Podcast;
      case 'infograficos': return ImageIcon;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'artigos': return 'bg-blue-500';
      case 'relatorios': return 'bg-green-500';
      case 'videos': return 'bg-red-500';
      case 'podcasts': return 'bg-purple-500';
      case 'infograficos': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen hero-gradient">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Conteúdo & Insights
            <span className="block text-gradient-accent">
              para Líderes de Segurança
            </span>
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Conhecimento estratégico, tendências de mercado e insights exclusivos 
            curados pela maior comunidade de CISOs do Brasil
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Buscar conteúdo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 ${
                    selectedCategory === category.id ? 'gradient-primary text-white' : ''
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      {selectedCategory === 'todos' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark-bg-title">
                Conteúdo em Destaque
              </h2>
              <p className="text-xl dark-bg-subtitle max-w-3xl mx-auto">
                Os insights mais relevantes e atuais para líderes de cibersegurança
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredContent.map((content) => {
                const TypeIcon = getTypeIcon(content.type);
                return (
                  <Card key={content.id} className="hover-lift border-0 shadow-lg overflow-hidden group">
                    <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <TypeIcon className="w-16 h-16 text-white/50" />
                    </div>
                    
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={`${getTypeColor(content.type)} text-white`}>
                          {content.type.charAt(0).toUpperCase() + content.type.slice(1)}
                        </Badge>
                        <Badge variant="outline" className="text-accent border-accent">
                          {content.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                        {content.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {content.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{content.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(content.date).toLocaleDateString('pt-BR')}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{content.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          {content.views && (
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{content.views}</span>
                            </div>
                          )}
                          {content.downloads && (
                            <div className="flex items-center space-x-1">
                              <Download className="w-4 h-4" />
                              <span>{content.downloads}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-muted-foreground">Destaque</span>
                        </div>
                      </div>
                      
                      <Button className="w-full gradient-primary">
                        Ler Conteúdo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedCategory === 'todos' ? 'Conteúdo Recente' : `${categories.find(c => c.id === selectedCategory)?.name}`}
                </h2>
                <p className="text-muted-foreground">
                  {filteredContent.length} {filteredContent.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
                </p>
              </div>
              
              <div className="space-y-8">
                {filteredContent.map((content) => {
                  const TypeIcon = getTypeIcon(content.type);
                  return (
                    <Card key={content.id} className="hover-lift border-0 shadow-lg">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="w-full md:w-48 h-32 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                            <TypeIcon className="w-12 h-12 text-white/50" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <Badge className={`${getTypeColor(content.type)} text-white`}>
                                {content.type.charAt(0).toUpperCase() + content.type.slice(1)}
                              </Badge>
                              <Badge variant="outline" className="text-accent border-accent">
                                {content.category}
                              </Badge>
                            </div>
                            
                            <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors duration-200 cursor-pointer">
                              {content.title}
                            </h3>
                            
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {content.description}
                            </p>
                            
                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                  <User className="w-4 h-4" />
                                  <span>{content.author}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{new Date(content.date).toLocaleDateString('pt-BR')}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{content.readTime}</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-4">
                                {content.views && (
                                  <div className="flex items-center space-x-1">
                                    <Eye className="w-4 h-4" />
                                    <span>{content.views}</span>
                                  </div>
                                )}
                                {content.downloads && (
                                  <div className="flex items-center space-x-1">
                                    <Download className="w-4 h-4" />
                                    <span>{content.downloads}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            <Button variant="outline">
                              Ler Conteúdo
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* Top Authors */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6">
                      Principais Autores
                    </h3>
                    
                    <div className="space-y-6">
                      {topAuthors.map((author, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold">{author.name}</div>
                            <div className="text-sm text-muted-foreground">{author.role}</div>
                            <div className="text-xs text-accent">
                              {author.articles} artigos • {author.followers} seguidores
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="border-0 shadow-lg gradient-primary text-white">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Newsletter Exclusiva
                    </h3>
                    <p className="text-white/90 mb-6">
                      Receba os melhores insights de cibersegurança diretamente no seu e-mail.
                    </p>
                    <div className="space-y-4">
                      <Input
                        placeholder="Seu e-mail"
                        className="bg-white/10 border-white/20 text-white placeholder-white/60"
                      />
                      <Button className="w-full bg-white text-primary hover:bg-white/90">
                        Inscrever-se
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6">
                      Tags Populares
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {['Zero Trust', 'LGPD', 'Ransomware', 'Cloud Security', 'DevSecOps', 'Compliance', 'Threat Intelligence', 'Incident Response'].map((tag, index) => (
                        <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Quer contribuir com conteúdo?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Compartilhe seu conhecimento com a maior comunidade de líderes 
            de segurança da América Latina
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto" asChild>
              <Link to="/membros">
                <BookOpen className="w-6 h-6 mr-3" />
                Tornar-se autor
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 h-auto" asChild>
              <Link to="/contato">
                <Target className="w-6 h-6 mr-3" />
                Propor conteúdo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conteudo;
