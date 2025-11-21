import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Obrigado() {
  return (
    <section className="pt-28 pb-16 hero-gradient">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Inscrição realizada com sucesso!</h1>
        <p className="mt-6 text-xl text-white/90 leading-relaxed">
          Obrigado por se candidatar a fazer parte do CISO&apos;s Club. 
        </p>
        <p className="mt-4 text-lg text-white/80 leading-relaxed">
          Nossa equipe analisará suas informações e em breve daremos um retorno sobre sua candidatura.
        </p>
        <div className="mt-8">
          <Link to="/">
            <Button>Voltar à página inicial</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
