
import React, { useState, useEffect } from 'react';
import { SERVICES } from './constants';
import { Service, ChatMessage } from './types';
import { geminiService } from './services/geminiService';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAiConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const query = chatInput;
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', content: query }]);
    setIsTyping(true);

    const response = await geminiService.getExpertInsight(
      selectedService?.title || "Protección Radiológica General", 
      query
    );
    
    setChatMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <i className="fas fa-radiation"></i>
            </div>
            <span className={`text-xl font-black tracking-tighter uppercase italic ${scrolled ? 'text-slate-900' : 'text-blue-600'}`}>Aleph SAC</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#nosotros" className="text-sm font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">Nosotros</a>
            <a href="#contacto" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-md">Contáctanos</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 -z-10 rounded-l-[100px] opacity-50"></div>
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Certificación IPEN & MINSA
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Protección <span className="text-gradient">Radiológica</span> con Precisión de Ingeniería.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Somos líderes en soluciones de seguridad nuclear, calibración y consultoría técnica. Transformamos el cumplimiento normativo en una ventaja estratégica para su empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#servicios" className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 text-center">Explorar Servicios</a>
              <a href="#ia" className="bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest hover:border-blue-600 transition-all text-center">Consultar con IA</a>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="animate-float relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1579154273821-4a5530965c26?auto=format&fit=crop&q=80&w=800" 
                className="rounded-[40px] shadow-2xl border-8 border-white"
                alt="Aleph Precision Technology"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-slate-100">
               <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <i className="fas fa-shield-check text-2xl"></i>
               </div>
               <div>
                  <p className="text-xs font-black uppercase text-slate-400 leading-none mb-1">Confianza Total</p>
                  <p className="text-lg font-bold text-slate-900 leading-none">100% Cumplimiento</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Hub */}
      <section id="servicios" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Nuestra Especialidad</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6">Servicios de Clase Mundial</h3>
            <p className="text-slate-600 font-medium">Desde calibraciones dosimétricas hasta gestión de desechos radiactivos, cubrimos todo el espectro de seguridad nuclear con rigor científico.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group bg-white p-8 rounded-[32px] border border-slate-200 hover:border-blue-600 transition-all cursor-pointer hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">{service.description}</p>
                <span className="text-xs font-black uppercase tracking-widest text-blue-600 flex items-center gap-2">
                  Detalles Técnicos <i className="fas fa-arrow-right text-[10px]"></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Detail Modal (Overlay) */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setSelectedService(null)}></div>
          <div className="relative w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row h-full max-h-[85vh]">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <i className="fas fa-times text-slate-900"></i>
            </button>
            
            <div className="lg:w-1/2 relative bg-slate-900 overflow-hidden">
               <img src={`https://picsum.photos/seed/${selectedService.id}/800/800`} className="w-full h-full object-cover opacity-60" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent"></div>
               <div className="absolute bottom-10 left-10 right-10">
                  <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 inline-block">{selectedService.category}</span>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight leading-none">{selectedService.title}</h2>
               </div>
            </div>

            <div className="lg:w-1/2 p-10 overflow-y-auto custom-scrollbar flex flex-col">
               <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-10 h-1 bg-blue-600 rounded-full"></span>
                    Información Técnica
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8">{selectedService.fullContent}</p>
                  
                  <div className="grid gap-4 mb-10">
                    {selectedService.keyBenefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                          <i className="fas fa-check text-[10px]"></i>
                        </div>
                        <span className="text-sm font-bold text-slate-700">{b}</span>
                      </div>
                    ))}
                  </div>
               </div>
               
               <div className="pt-8 border-t border-slate-100">
                  <a href="#contacto" onClick={() => setSelectedService(null)} className="w-full block bg-slate-900 text-white py-4 rounded-2xl text-center font-bold uppercase tracking-widest hover:bg-blue-600 transition-all">Solicitar Cotización</a>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Expert Section */}
      <section id="ia" className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[60px] p-10 lg:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 translate-x-1/2"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 relative z-10">
                <div className="w-16 h-16 bg-blue-600 rounded-[24px] flex items-center justify-center text-white text-3xl shadow-xl shadow-blue-600/40">
                  <i className="fas fa-microchip"></i>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">
                  Consulta a nuestro <span className="text-blue-500">Experto Virtual</span>
                </h2>
                <p className="text-slate-400 text-lg font-medium">
                  ¿Tienes dudas técnicas sobre la normativa o un servicio específico? Nuestra IA, entrenada con protocolos de seguridad internacional, te responde al instante.
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1,2,3].map(i => <img key={i} className="w-12 h-12 rounded-full border-4 border-slate-900" src={`https://i.pravatar.cc/100?img=${i+10}`} />)}
                  </div>
                  <p className="text-xs font-bold text-white uppercase tracking-widest">+500 consultas resueltas hoy</p>
                </div>
              </div>

              <div className="relative z-10">
                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col h-[500px]">
                  <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-black uppercase tracking-widest text-slate-500">Consultoría en tiempo real</span>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                    {chatMessages.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center px-10">
                         <i className="fas fa-comment-dots text-4xl text-slate-200 mb-4"></i>
                         <p className="text-slate-400 font-medium">Pregúntame, por ejemplo: "¿Qué requisitos necesito para calibrar un densímetro nuclear?"</p>
                      </div>
                    ) : (
                      chatMessages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm ${
                            msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-slate-100 text-slate-700 rounded-bl-none'
                          }`}>
                            {msg.content}
                          </div>
                        </div>
                      ))
                    )}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-slate-100 px-5 py-3 rounded-2xl rounded-bl-none">
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <form onSubmit={handleAiConsult} className="p-6 bg-slate-50 border-t border-slate-100">
                    <div className="relative">
                      <input 
                        type="text" 
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder="Escribe tu consulta aquí..."
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all pr-14"
                      />
                      <button 
                        type="submit"
                        disabled={!chatInput.trim() || isTyping}
                        className="absolute right-2 top-2 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50"
                      >
                        <i className="fas fa-paper-plane text-sm"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Ponte en Contacto</h2>
              <h3 className="text-5xl font-black text-slate-900 mb-8 leading-tight">¿Listo para asegurar tu <span className="text-gradient">Operación</span>?</h3>
              <p className="text-slate-600 text-lg font-medium mb-12">Nuestro equipo técnico está disponible 24/7 para emergencias y consultas especializadas.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                   <div className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <i className="fas fa-phone-alt"></i>
                   </div>
                   <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Central de Atención</p>
                      <p className="text-xl font-bold text-slate-900">+51 (01) 444 5566</p>
                   </div>
                </div>
                <div className="flex items-center gap-6 group">
                   <div className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <i className="fas fa-envelope"></i>
                   </div>
                   <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Email Corporativo</p>
                      <p className="text-xl font-bold text-slate-900">contacto@alephsac.com</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-200">
               <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Nombre Completo</label>
                      <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all" placeholder="Juan Pérez" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Empresa</label>
                      <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all" placeholder="Industrial S.A." />
                    </div>
                  </div>
                  <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Servicio de Interés</label>
                      <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all appearance-none">
                        <option>Seleccionar servicio...</option>
                        {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                      </select>
                  </div>
                  <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Mensaje / Requerimiento</label>
                      <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all" placeholder="Describe brevemente tu necesidad técnica..."></textarea>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">Enviar Solicitud</button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-xs space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <i className="fas fa-radiation"></i>
                </div>
                <span className="text-xl font-black tracking-tighter uppercase italic">Aleph SAC</span>
              </div>
              <p className="text-slate-400 text-sm font-medium">Líderes en protección radiológica y seguridad nuclear en la región. Compromiso total con la excelencia técnica.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-instagram"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Compañía</h5>
                <ul className="space-y-2 text-sm text-slate-400 font-bold">
                  <li><a href="#" className="hover:text-white transition-colors">Nosotros</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Certificaciones</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Proyectos</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Legal</h5>
                <ul className="space-y-2 text-sm text-slate-400 font-bold">
                  <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">&copy; 2024 Aleph SAC. Todos los derechos reservados.</p>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 italic">Protegiendo el futuro a través de la precisión.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
