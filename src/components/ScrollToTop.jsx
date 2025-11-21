import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Rola para o topo da página quando a rota muda
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
