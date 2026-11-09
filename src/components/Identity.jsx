import React, { useState } from 'react';
import { Target, Compass, HeartHandshake, CheckCircle2, Cpu, Sparkles, Quote, Award, ShieldCheck, Calendar, Flame } from 'lucide-react';

export default function Identity() {
  const [activeTab, setActiveTab] = useState('mision');

  const pillars = {
    mision: {
      id: 'mision',
      title: 'Misión',
      badge: 'Nuestro Propósito Diario',
      icon: Target,
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-brand-cyan',
      bgLight: 'bg-cyan-50/80',
      borderLight: 'border-cyan-200',
      text: 'Transformar ideas y marcas en experiencias visuales tangibles mediante tecnología de punta en impresión y publicidad, superando los estándares de calidad, rapidez y compromiso en cada entrega.',
      points: [
        'Tecnología de última generación Heidelberg e inyección UV',
        'Tiempos de entrega estrictamente garantizados',
        'Asesoría técnica personalizada para cada proyecto'
      ]
    },
    vision: {
      id: 'vision',
      title: 'Visión',
      badge: 'Hacia Dónde Vamos',
      icon: Compass,
      color: 'from-pink-500 to-rose-600',
      textColor: 'text-brand-magenta',
      bgLight: 'bg-pink-50/80',
      borderLight: 'border-pink-200',
      text: 'Consolidarnos como la empresa referente y más confiable de publicidad e impresión a nivel nacional en México, reconocidos por nuestra capacidad de resolver cualquier reto gráfico sin límites de formato o volumen.',
      points: [
        'Cobertura y logística para todo México',
        'Crecimiento continuo en maquinaria industrial',
        'Innovación en sustratos ecológicos y tintas premium'
      ]
    },
    filosofia: {
      id: 'filosofia',
      title: 'Filosofía Institucional',
      badge: 'Nuestra Esencia y ADN',
      icon: HeartHandshake,
      color: 'from-amber-500 to-yellow-600',
      textColor: 'text-amber-600',
      bgLight: 'bg-amber-50/80',
      borderLight: 'border-amber-200',
      text: 'Enfoque en la satisfacción absoluta del cliente, precisión artesanal combinada con tecnología industrial y una mentalidad orientada a soluciones: si el cliente lo imagina, Masperr lo imprime.',
      points: [
        'Precisión artesanal combinada con potencia industrial',
        'Pasión y empatía en cada interacción con el cliente',
        'Flexibilidad total: resolvemos lo que otros rechazan'
      ]
    }
  };

  const current = pillars[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="font-extrabold text-slate-900">Fundada en 2008</span>
            <span className="text-slate-300">•</span>
            <span className="text-brand-magenta font-extrabold">+18 Años de Excelencia Gráfica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Pasión por la <span className="cmyk-gradient-text">precisión gráfica</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Desde 2008 en Masperr combinamos tecnología industrial de vanguardia y dedicación artesanal para superar las expectativas de las mejores marcas de México.
          </p>
        </div>

        {/* Tab Navigation Pill */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 max-w-md w-full justify-between shadow-inner">
            {Object.keys(pillars).map((key) => {
              const item = pillars[key];
              const Icon = item.icon;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center justify-center gap-2 py-3 px-4 sm:px-6 rounded-xl font-extrabold text-sm transition-all duration-300 flex-1 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-md scale-100'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? item.textColor : 'text-slate-400'}`} />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Content Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className={`glass-card rounded-3xl p-8 sm:p-12 border-2 ${current.borderLight} shadow-xl transition-all duration-500`}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center text-white shadow-lg`}>
                  <CurrentIcon className="w-7 h-7" />
                </div>
                <div>
                  <span className={`text-xs font-black uppercase tracking-widest ${current.textColor}`}>
                    {current.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {current.title} Masperr
                  </h3>
                </div>
              </div>

              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                <Cpu className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Estándar Industrial CDMX</span>
              </div>
            </div>

            <p className="mt-8 text-xl sm:text-2xl text-slate-700 font-medium leading-relaxed">
              "{current.text}"
            </p>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Compromisos clave
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {current.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-sm">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${current.textColor}`} />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* HIGH-IMPACT FOUNDER PHILOSOPHY SHOWCASE */}
        <div className="max-w-5xl mx-auto mb-20 relative">
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 p-8 sm:p-14 text-white shadow-2xl border-2 border-cyan-500/30 overflow-hidden">
            
            {/* CMYK Glowing Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-magenta/20 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Decorative Quote Icon */}
            <div className="absolute top-6 right-8 opacity-10">
              <Quote className="w-32 h-32 text-white" />
            </div>

            <div className="relative z-10">
              
              {/* Header Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 text-xs font-black uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-amber-400" />
                  Manifiesto & Filosofía del Fundador
                </span>
                <span className="text-xs font-extrabold text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20">
                  Trayectoria Oficial 2008 – 2026
                </span>
              </div>

              {/* Bold Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-8 leading-tight">
                “Más que tinta sobre un sustrato, <span className="text-brand-cyan">forjamos el prestigio</span> y el éxito de cada cliente.”
              </h3>

              {/* Founder's High-Impact Quote */}
              <blockquote className="space-y-4 text-slate-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed italic border-l-4 border-brand-magenta pl-6 my-8">
                <p>
                  «Cuando fundamos Masperr en <strong>2008</strong>, entendí una verdad innegociable que nos ha guiado por más de 18 años: 
                  un cliente no nos entrega un simple archivo para imprimir; nos está confiando su reputación, sus ventas y el rostro de su marca ante el mundo.
                </p>
                <p>
                  Si una tarjeta de presentación no tiene el corte exacto, o si una campaña en gran formato llega una hora tarde a su inauguración, habremos fallado como aliados. 
                  Por eso en Masperr no competimos por ser los más baratos de la calle; <strong>competimos por ser los más precisos, los más puntuales y el único taller que jamás le dice 'no se puede' a un desafío creativo.</strong> Si tu marca lo sueña con ambición, nosotros lo imprimimos con orgullo industrial.»
                </p>
              </blockquote>

              {/* 3 Founder Commitments Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-slate-700/80 mb-8">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="text-brand-cyan font-black text-sm uppercase tracking-wider mb-1">
                    1. Obsesión por el Detalle
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    Revisión minuciosa de registros, perfiles de color CMYK y calibración milimétrica en cada tiraje.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="text-amber-400 font-black text-sm uppercase tracking-wider mb-1">
                    2. Puntualidad Inquebrantable
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    Desde 2008, la palabra y los tiempos pactados de entrega son un compromiso de honor con el cliente.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="text-brand-magenta font-black text-sm uppercase tracking-wider mb-1">
                    3. Sin Límites Técnicos
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    Inversión constante en maquinaria alemana y plotters industriales para resolver lo que otros rechazan.
                  </p>
                </div>
              </div>

              {/* Signature / Authority footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-cyan via-brand-magenta to-amber-400 p-0.5">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-black text-sm">
                      MP
                    </div>
                  </div>
                  <div>
                    <div className="font-extrabold text-white text-base">Dirección & Fundador</div>
                    <div className="text-xs text-brand-cyan font-semibold">Masperr Publicidad & Impresión • Fundada en 2008</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-xs font-bold text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>18 Años de Compromiso Ininterrumpido</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Brand Promise Banner */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-100 p-8 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-cyan-100 text-brand-cyan text-xs font-black uppercase tracking-wider inline-block mb-3">
                Garantía Masperr Desde 2008
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                "Si tu marca lo imagina, Masperr lo imprime."
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                Contamos con la infraestructura, prensas Heidelberg y plotters de alta resolución para cumplir cualquier especificación técnica.
              </p>
            </div>
            <a
              href="#cotizador"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm shadow-md hover:scale-105 transition-all"
            >
              Iniciar Cotización
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
