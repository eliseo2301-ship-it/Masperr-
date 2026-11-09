import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, MapPin, ExternalLink, MessageCircle, Sparkles, ChevronRight, RefreshCw, Bot } from 'lucide-react';

export default function VirtualBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: '¡Hola! Soy Maspi, el asistente virtual de Masperr Publicidad & Impresión. ¿En qué proyecto gráfico te puedo orientar hoy?',
      options: [
        'Diferencia entre Offset y Digital',
        'Materiales de Plotter y Gran Formato',
        'Displays para Eventos y Expos',
        '¿Dónde está ubicado el taller?'
      ]
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const botResponses = {
    'Diferencia entre Offset y Digital': {
      text: '¡Excelente pregunta técnica!\n\n• **Impresión Offset:** Es la ideal para tirajes medianos y masivos (más de 1,000 pzas como volantes, catálogos o revistas). Logra el menor costo unitario y una uniformidad cromática perfecta.\n\n• **Impresión Digital:** Perfecta para tiros cortos, urgencias del mismo día o personalización con dato variable. En Masperr manejamos un formato máximo de hasta **30.5 x 45 cm** con una nitidez fotográfica impecable.\n\n¿Tienes un estimado de piezas para recomendarte la mejor opción?',
      followUps: ['Cotizar Offset por WhatsApp', 'Cotizar Digital por WhatsApp', 'Ver otra pregunta']
    },
    'Materiales de Plotter y Gran Formato': {
      text: 'En Gran Formato contamos con la más alta resolución y resistencia UV:\n\n1. **Lonas:** Frontlit brillante/mate, Mesh perforada (resistente a vientos fuertes) y Backlight translúcida.\n2. **Viniles:** Adhesivo permanente, vinil de corte en colores sólidos, esmerilado para oficinas y floor graphic antiderrapante.\n3. **Microperforado:** Permite ver hacia afuera desde adentro; ideal para ventanales y vehículos.\n4. **Rígidos:** Impresión directa en Coroplast, Estireno, Foamboard y PVC espumado Sintra.\n\n¿Qué tipo de aplicación necesitas?',
      followUps: ['Cotizar Gran Formato', '¿Dónde está ubicado el taller?']
    },
    'Displays para Eventos y Expos': {
      text: 'Para stands y activaciones de marca contamos con sistemas portátiles de aluminio de fácil armado:\n\n• **Muros Expandibles (Backdrops):** En tela sublimada sin arrugas o paneles magnéticos con maletín transportador.\n• **Roll Ups de Aluminio:** Medidas de 80x200 cm, 85x200 cm y 100x200 cm con lona o tela de alta definición.\n• **Módulos Demoset:** Mesas portátiles de atención al cliente y degustación.\n• **X-Banners y Arañas:** Económicos y súper livianos.',
      followUps: ['Cotizar Displays por WhatsApp', 'Ver otra pregunta']
    },
    '¿Dónde está ubicado el taller?': {
      text: 'Nos encontramos en la Ciudad de México:\n\n📍 **Coordenadas:** 19.3873977, -99.1450275\n📌 **Zona:** Benito Juárez, CDMX.\n⏰ **Horario:** Lunes a Viernes de 9:00 a 19:00 hrs y Sábados de 9:00 a 14:00 hrs.\n\nPuedes visitarnos para revisar muestras de papel, pruebas de color o recolectar tus pedidos.',
      showMapButton: true,
      followUps: ['Hablar con un asesor en WhatsApp', 'Diferencia entre Offset y Digital']
    }
  };

  const handleSelectOption = (option) => {
    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text: option };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      if (option === 'Cotizar Offset por WhatsApp') {
        window.open('https://wa.me/525549407510?text=Hola%20Masperr,%20me%20gustar%C3%ADa%20cotizar%20Impresi%C3%B3n%20Offset', '_blank');
        return;
      }
      if (option === 'Cotizar Digital por WhatsApp') {
        window.open('https://wa.me/525549407510?text=Hola%20Masperr,%20me%20gustar%C3%ADa%20cotizar%20Impresi%C3%B3n%20Digital%20(hasta%2030.5x45cm)', '_blank');
        return;
      }
      if (option === 'Cotizar Gran Formato' || option === 'Cotizar Displays por WhatsApp' || option === 'Hablar con un asesor en WhatsApp') {
        window.open('https://wa.me/525549407510?text=Hola%20Masperr%20Publicidad,%20deseo%20asesor%C3%ADa%20personalizada.', '_blank');
        return;
      }
      if (option === 'Ver otra pregunta') {
        setMessages(prev => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'bot',
            text: '¡Claro! Elige el tema que te interese explorar:',
            options: [
              'Diferencia entre Offset y Digital',
              'Materiales de Plotter y Gran Formato',
              'Displays para Eventos y Expos',
              '¿Dónde está ubicado el taller?'
            ]
          }
        ]);
        return;
      }

      const match = botResponses[option];
      if (match) {
        setMessages(prev => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'bot',
            text: match.text,
            showMapButton: match.showMapButton,
            options: match.followUps
          }
        ]);
      } else {
        setMessages(prev => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'bot',
            text: 'Para darte el mejor costo y tiempo exacto para tu proyecto, un asesor especializado puede atenderte directamente por WhatsApp.',
            options: ['Hablar con un asesor en WhatsApp', '¿Dónde está ubicado el taller?']
          }
        ]);
      }
    }, 700);
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: 'Conversación reiniciada. ¿En qué proyecto gráfico de Masperr te puedo orientar hoy?',
        options: [
          'Diferencia entre Offset y Digital',
          'Materiales de Plotter y Gran Formato',
          'Displays para Eventos y Expos',
          '¿Dónde está ubicado el taller?'
        ]
      }
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 p-2.5 sm:px-4 sm:py-3 rounded-full bg-white shadow-2xl border-2 border-brand-cyan/60 hover:border-brand-cyan hover:scale-105 transition-all duration-300"
          aria-label="Abrir Asistente Virtual Masperr"
        >
          {/* Avatar using Secondary Logo */}
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-brand-cyan bg-white shrink-0 p-0.5">
            <img
              src="/assets/logo-secundario.jpeg"
              alt="Asistente Masperr"
              className="w-full h-full object-contain rounded-full"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-full h-full bg-brand-cyan text-white items-center justify-center font-bold text-xs">
              MP
            </div>
            {/* Online green indicator */}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>

          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-black uppercase tracking-wider text-brand-cyan flex items-center gap-1">
              Asistente Masperr
              <Sparkles className="w-3 h-3 text-amber-400" />
            </span>
            <span className="text-xs font-bold text-slate-700">¿Dudas con tu proyecto?</span>
          </div>

          {/* CMYK animated ring */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-brand-cyan via-brand-magenta to-amber-400 opacity-30 group-hover:opacity-75 blur-sm transition-opacity -z-10"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[410px] h-[560px] max-h-[85vh] glass-card rounded-3xl shadow-2xl border-2 border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-brand-cyan bg-white p-0.5">
                <img
                  src="/assets/logo-secundario.jpeg"
                  alt="Avatar Masperr"
                  className="w-full h-full object-contain rounded-full"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-extrabold text-sm leading-tight text-white flex items-center gap-1.5">
                  Asistente Virtual Masperr
                </h4>
                <p className="text-[11px] text-brand-cyan font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  En línea • Soporte técnico
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Reiniciar chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Cerrar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/70 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 shadow-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-brand-cyan text-white font-semibold rounded-tr-sm'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-sm font-medium'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Optional Map Link Button inside message */}
                  {msg.showMapButton && (
                    <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
                      <a
                        href="https://www.google.com/maps/place/MASPERRPUBLCIDAD/@19.3873977,-99.1450275,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1feffc376fc33:0x4c08f16d0a6f76f5!8m2!3d19.3873977!4d-99.1450275!16s%2Fg%2F1hhxs_jc1?hl=es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-sm transition-all"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Abrir ubicación en Google Maps</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Quick suggestions pills */}
                {msg.options && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[90%]">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelectOption(opt)}
                        className="text-left text-xs px-3 py-1.5 rounded-full bg-white hover:bg-cyan-50 text-slate-700 hover:text-brand-cyan border border-slate-200/90 font-semibold shadow-xs hover:border-brand-cyan transition-all flex items-center gap-1"
                      >
                        <span>{opt}</span>
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white p-3 rounded-2xl rounded-tl-sm border border-slate-200/80 w-16">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-brand-magenta animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Action: WhatsApp Advisor Handover */}
          <div className="p-3 bg-white border-t border-slate-200">
            <a
              href="https://wa.me/525549407510?text=Hola%20Masperr%20Publicidad,%20estaba%20en%20el%20asistente%20web%20y%20deseo%20hablar%20con%20un%20asesor."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hablar con un asesor en WhatsApp</span>
            </a>
          </div>

        </div>
      )}

    </div>
  );
}
