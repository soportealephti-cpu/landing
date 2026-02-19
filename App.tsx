import React, { useState, useEffect } from 'react';
import { SERVICES } from './constants';
import { Service } from './types';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <i className="fas fa-radiation"></i>
            </div>
            <span className={`text-xl font-black tracking-tighter uppercase italic ${scrolled ? 'text-slate-900' : 'text-blue-600'}`}>
              Aleph SAC
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-md">
              Contáctanos
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
            Protección <span className="text-blue-600">Radiológica</span> con Precisión
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Soluciones técnicas avanzadas en seguridad nuclear, calibración y cumplimiento normativo.
          </p>
          <a
            href="#servicios"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl"
          >
            Explorar Servicios
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-600 transition-all cursor-pointer hover:shadow-xl"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-slate-500 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSelectedService(null)}
          ></div>
          <div className="relative bg-white p-10 rounded-3xl max-w-2xl w-full">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-slate-500"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {selectedService.title}
            </h2>
            <p className="text-slate-600">
              {selectedService.fullContent}
            </p>
          </div>
        </div>
      )}

      {/* Contact */}
      <section id="contacto" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-black text-slate-900">
            Contáctanos
          </h2>
          <p className="text-slate-600">
            contacto@alephsac.com | +51 (01) 444 5566
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-10 text-white text-center">
        <p className="text-sm">
          © 2024 Aleph SAC. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;
