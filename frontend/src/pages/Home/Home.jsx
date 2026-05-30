import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
        Economía Circular Impulsada por <span className="text-eco-green">IA</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-10">
        Conecta residuos industriales de Santa Cruz con empresas que los necesitan. 
        Clasificación automática, matching inteligente y cálculo de impacto CO₂ en tiempo real.
      </p>
      <div className="flex gap-4">
        <Link to="/" className="bg-eco-green text-white px-8 py-3 rounded-lg font-bold hover:bg-eco-dark transition">
          Ir al Dashboard
        </Link>
      </div>
    </div>
  );
}