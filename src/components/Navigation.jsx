import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, Users, Calendar, BookOpen, Phone, Info } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Shield },
    { name: 'Sobre', path: '/sobre', icon: Info },
    { name: 'Para Membros', path: '/membros', icon: Users },
    { name: 'Para Patrocinadores', path: '/patrocinadores', icon: Shield },
    { name: 'Eventos', path: '/eventos', icon: Calendar },
    { name: 'Conteúdo', path: '/conteudo', icon: BookOpen },
    { name: 'Contato', path: '/contato', icon: Phone },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-bold ${isScrolled ? 'text-foreground' : 'text-white'}">
                CISO's Club
              </h1>

            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-muted ${
                    isActive(item.path)
                      ? `${isScrolled ? 'text-primary' : 'text-white'} ${isScrolled ? 'bg-primary/10' : 'bg-white/10'}`
                      : `${isScrolled ? 'text-foreground' : 'text-white'} ${isScrolled ? 'hover:text-primary' : 'hover:text-gray-300'}`
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild className={`${isScrolled ? 'text-foreground border-border hover:bg-accent/10' : 'text-white border-white hover:bg-white/10'}`}>
              <Link to="/membros">Seja Membro</Link>
            </Button>
            <Button size="sm" className={`gradient-primary ${isScrolled ? 'text-primary-foreground' : 'text-white'}`} asChild>
              <Link to="/patrocinadores">Seja Patrocinador</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white backdrop-blur-md border-t border-border shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive(item.path)
                         ? `${isScrolled ? 'text-primary' : 'text-white'} ${isScrolled ? 'bg-primary/10' : 'bg-white/10'}`
                      : `${isScrolled ? 'text-foreground' : 'text-white'} ${isScrolled ? 'hover:text-primary' : 'hover:text-gray-300 hover:bg-muted'}`
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              <div className="pt-4 space-y-3">
                <Button variant="outline" className={`w-full ${isScrolled ? 'text-foreground border-border hover:bg-accent/10' : 'text-white border-white hover:bg-white/10'}`} asChild>
                  <Link to="/membros" onClick={() => setIsOpen(false)}>
                    Seja Membro
                  </Link>
                </Button>
                <Button className={`w-full gradient-primary ${isScrolled ? 'text-primary-foreground' : 'text-white'}`} asChild>
                  <Link to="/patrocinadores" onClick={() => setIsOpen(false)}>
                    Seja Patrocinador
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
