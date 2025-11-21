import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Membros from './pages/Membros';
import Patrocinadores from './pages/Patrocinadores';
import Eventos from './pages/Eventos';
import Conteudo from './pages/Conteudo';
import Contato from './pages/Contato';
import Inscricao from './pages/Inscricao';
import Obrigado from './pages/Obrigado';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/membros" element={<Membros />} />
            <Route path="/patrocinadores" element={<Patrocinadores />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/conteudo" element={<Conteudo />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/inscricao" element={<Inscricao />} />
            <Route path="/obrigado" element={<Obrigado />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
