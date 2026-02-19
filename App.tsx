import React, { useState, useEffect } from 'react';
import { SERVICES } from './constants';
import { Service } from './types';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-700">

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-slate-200/50 py-3 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
              <i className="fas fa-radiation text-xl"></i>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className={`text-xl font-black tracking-tighter uppercase italic ${scrolled ? 'text-slate-900' : 'text-blue-600'}`}>
                Aleph SAC
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Protección Radiológica</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {['Servicios', 'Nosotros', 'Proceso', 'Contacto'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contacto" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200/50 hover:-translate-y-0.5 active:translate-y-0">
              Solicitar Cotización
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[100%] bg-gradient-to-b from-blue-50/50 to-transparent -z-10 rounded-[100%] blur-3xl opacity-50"></div>
        <div className="container mx-auto px-6 text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest animate-pulse">
            <i className="fas fa-shield-halved"></i>
            Seguridad Nuclear & Calibración
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
            Protección <span className="text-gradient">Radiológica</span> <br />
            <span className="text-slate-400">con Precisión.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Soluciones técnicas avanzadas para garantizar la seguridad de tu personal, equipos y cumplimiento normativo en entornos radiológicos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#servicios"
              className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-2xl hover:shadow-blue-200/50"
            >
              Ver Catálogo de Servicios
            </a>
            <a
              href="#contacto"
              className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-slate-50 transition-all"
            >
              Hablar con un Especialista
            </a>
          </div>
        </div>
      </section>

      {/* Key Stats / Why Us */}
      <section id="nosotros" className="py-20 border-y border-slate-100 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Años Experiencia', val: '15+', icon: 'fa-history' },
              { label: 'Servicios Realizados', val: '5k+', icon: 'fa-check-double' },
              { label: 'Clientes Confían', val: '200+', icon: 'fa-handshake' },
              { label: 'Certificaciones', val: 'ISO/IPEN', icon: 'fa-award' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2 group">
                <i className={`fas ${stat.icon} text-blue-100 text-3xl group-hover:text-blue-200 transition-colors`}></i>
                <div className="text-3xl font-black text-slate-900 tracking-tighter">{stat.val}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-32 bg-slate-50/50 reveal">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">Nuestro Expertizaje</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Servicios Especializados</h2>
            </div>
            <p className="text-slate-500 max-w-md text-sm font-medium">
              Ofrecemos una gama completa de soluciones técnicas para la industria minera, médica y de construcción.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group relative bg-white p-8 rounded-[2rem] border border-slate-200/60 hover:border-blue-500 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-100/40 hover:-translate-y-2"
              >
                <div className="absolute top-6 right-8 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-blue-200 transition-colors">
                  {service.category}
                </div>
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <i className={`fas ${service.icon} text-2xl`}></i>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.keyBenefits.slice(0, 2).map((benefit, i) => (
                    <span key={i} className="text-[9px] font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-wider group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Didactic Section */}
      <section id="proceso" className="py-32 bg-white relative overflow-hidden reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">¿Cómo trabajamos?</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Tu Seguridad en 4 Pasos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-100 -z-10"></div>
            {[
              { step: '01', title: 'Consultoría', desc: 'Evaluamos tus necesidades específicas y riesgos radiológicos.', icon: 'fa-comments' },
              { step: '02', title: 'Planificación', desc: 'Diseñamos un plan de acción bajo normativas IPEN/OTAN.', icon: 'fa-file-signature' },
              { step: '03', title: 'Ejecución', desc: 'Nuestros ingenieros realizan las pruebas y calibraciones.', icon: 'fa-microscope' },
              { step: '04', title: 'Certificación', desc: 'Entregamos reportes técnicos y avales oficiales.', icon: 'fa-certificate' },
            ].map((p, i) => (
              <div key={i} className="space-y-6 text-center md:text-left group">
                <div className="relative inline-block md:block">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-xl shadow-blue-200 group-hover:scale-110 transition-transform duration-500">
                    <i className={`fas ${p.icon}`}></i>
                  </div>
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px] font-black border-4 border-white">
                    {p.step}
                  </div>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-black text-slate-900">{p.title}</h5>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-1/2 -z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px]">Canales de Atención</span>
                <h2 className="text-5xl font-black tracking-tight">Impulsa tu <br /><span className="text-blue-500 italic font-medium">Seguridad Radiológica</span></h2>
                <p className="text-slate-400 text-lg max-w-md font-medium leading-relaxed">
                  Estamos listos para asesorarte. Completa el formulario y un especialista se pondrá en contacto en menos de 24 horas.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: 'fa-envelope', label: 'Correo Electrónico', val: 'contacto@alephsac.com' },
                  { icon: 'fa-phone', label: 'Central Telefónica', val: '+51 (01) 444 5566' },
                  { icon: 'fa-location-dot', label: 'Oficina Principal', val: 'Lima, Perú' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <i className={`fas ${item.icon} text-blue-400 group-hover:text-white transition-colors`}></i>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.label}</div>
                      <div className="text-lg font-bold text-slate-200">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
              {formStatus === 'success' ? (
                <div className="py-20 text-center space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl animate-bounce">
                    <i className="fas fa-check"></i>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">¡Mensaje Enviado!</h3>
                  <p className="text-slate-500 font-medium">Gracias por confiar en Aleph SAC. <br />Pronto estaremos en contacto.</p>
                  <button onClick={() => setFormStatus('idle')} className="text-blue-600 font-bold text-sm uppercase tracking-widest">Enviar otro mensaje</button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Nombre Completo</label>
                      <input required type="text" placeholder="Ej. Juan Pérez" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-500 transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Empresa</label>
                      <input required type="text" placeholder="Ej. Clínica Santa Fé" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-500 transition-all font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Correo Corporativo</label>
                    <input required type="email" placeholder="juan@empresa.com" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-500 transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Mensaje o Requerimiento</label>
                    <textarea required rows={4} placeholder="¿Cómo podemos ayudarte?" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-500 transition-all font-medium resize-none"></textarea>
                  </div>
                  <button 
                    disabled={formStatus === 'sending'}
                    className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <i className="fas fa-circle-notch animate-spin"></i>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Solicitud
                        <i className="fas fa-paper-plane"></i>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal - Improved Didactic Detail */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedService(null)}
          ></div>
          <div className="relative bg-white rounded-[3rem] max-w-4xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col md:flex-row max-h-[90vh]">
            <div className="md:w-2/5 bg-blue-600 p-12 text-white flex flex-col justify-between overflow-y-auto">
              <div className="space-y-8">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
                  <i className={`fas ${selectedService.icon}`}></i>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{selectedService.category}</span>
                  <h2 className="text-3xl font-black leading-tight tracking-tight">
                    {selectedService.title}
                  </h2>
                </div>
              </div>
              <div className="space-y-6 pt-10">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Beneficios Clave</div>
                <div className="space-y-4">
                  {selectedService.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px]">
                        <i className="fas fa-check"></i>
                      </div>
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-12 bg-white flex flex-col justify-between overflow-y-auto">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-8 w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors z-10"
              >
                <i className="fas fa-times"></i>
              </button>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Descripción Detallada</h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {selectedService.fullContent}
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-3xl space-y-4 border border-slate-100">
                  <h4 className="text-sm font-black text-slate-900">¿Por qué Aleph SAC para este servicio?</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium italic">
                    Contamos con equipamiento de última generación y personal calificado por el IPEN, asegurando que cada {selectedService.title.toLowerCase()} cumpla con la normativa nacional e internacional.
                  </p>
                </div>
              </div>

              <div className="pt-12">
                <a 
                  href="#contacto" 
                  onClick={() => setSelectedService(null)}
                  className="inline-flex items-center gap-3 text-blue-600 font-bold text-sm uppercase tracking-widest group"
                >
                  Consultar por este servicio
                  <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 py-20 text-white border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  <i className="fas fa-radiation"></i>
                </div>
                <span className="text-xl font-black tracking-tighter uppercase italic">Aleph SAC</span>
              </div>
              <p className="text-slate-500 max-w-sm text-sm font-medium leading-relaxed">
                Líderes en servicios de protección radiológica y metrología nuclear en el Perú, comprometidos con la seguridad industrial y médica.
              </p>
            </div>
            <div className="space-y-6">
              <h5 className="font-bold text-sm uppercase tracking-widest">Navegación</h5>
              <ul className="space-y-3 text-sm text-slate-500 font-medium">
                <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#proceso" className="hover:text-white transition-colors">Nuestro Proceso</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-bold text-sm uppercase tracking-widest">Legal</h5>
              <ul className="space-y-3 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Certificaciones</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
              © 2024 Aleph SAC. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><i className="fab fa-linkedin text-xl"></i></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><i className="fab fa-facebook text-xl"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
