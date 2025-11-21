import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Users,
  Calendar,
  BookOpen,
  Award,
  Globe
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Navegação',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Sobre o CISO\'s Club', path: '/sobre' },
        { name: 'Para Membros', path: '/membros' },
        { name: 'Para Patrocinadores', path: '/patrocinadores' },
        { name: 'Eventos', path: '/eventos' },
        { name: 'Conteúdo & Insights', path: '/conteudo' },
      ]
    },
    {
      title: 'Eventos',
      links: [
        { name: 'CISO\'s Club Dinner', path: '/eventos#dinner' },
        { name: 'War Room', path: '/eventos#warroom' },
        { name: 'CISO\'s Club Conference', path: '/eventos#conference' },
        { name: 'Missões Internacionais', path: '/eventos#missoes' },
        { name: 'Academy', path: '/eventos#academy' },
      ]
    },
    {
      title: 'Comunidade',
      links: [
        { name: 'Seja Membro', path: '/membros' },
        { name: 'Seja Patrocinador', path: '/patrocinadores' },
        { name: 'Depoimentos', path: '/sobre#depoimentos' },
        { name: 'Galeria de Eventos', path: '/eventos#galeria' },
        { name: 'Blog', path: '/conteudo' },
      ]
    }
  ];

  const stats = [
    { icon: Users, value: '+500', label: 'CISOs' },
    { icon: Award, value: '+380', label: 'Empresas' },
    { icon: Globe, value: 'R$ 3,5Bi', label: 'Orçamentos Gerenciados' },
    { icon: Calendar, value: '+30', label: 'Eventos/Ano' },
  ];

  return (
    <footer className="bg-secondary text-white">
      {/* Stats Section */}
      <div className="border-b border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">
              A Maior Comunidade de Líderes de Segurança
            </h3>
            <p className="text-white">
              Conectando executivos que definem o futuro da cibersegurança
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gradient-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gradient-primary">
                  CISO's Club
                </h2>
                <p className="text-sm text-white -mt-1">
                  Líderes em Segurança
                </p>
              </div>
            </Link>
            
            <p className="text-white mb-6 leading-relaxed">
              A maior comunidade de líderes de segurança da América Latina. 
              Conectamos CISOs e executivos para networking estratégico, 
              troca de experiências e aceleração de carreira.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-white">contato@cisosclub.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-white">+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-white">São Paulo, Brasil</span>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6 text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-white hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 gradient-primary rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Pronto para fazer parte da comunidade?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Junte-se aos principais líderes de segurança do Brasil e 
            acelere sua carreira com networking estratégico e experiências exclusivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/membros">
                <Users className="w-5 h-5 mr-2" />
                Seja Membro
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/patrocinadores">
                <Award className="w-5 h-5 mr-2" />
                Seja Patrocinador
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm dark-bg-muted">
              © {currentYear} CISO's Club. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link
                to="/privacidade"
                className="text-sm text-white hover:text-accent transition-colors duration-200"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos"
                className="text-sm text-white hover:text-accent transition-colors duration-200"
              >
                Termos de Uso
              </Link>
              <a
                href="https://linkedin.com/company/cisos-club"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
