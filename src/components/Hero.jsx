import React from 'react';
import { MessageCircle, MapPin, Layers, Award, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const highlights = [
    { title: 'Tiempos Récord', desc: 'Entregas express y puntuales', icon: Zap, color: 'text-amber-500 bg-amber-50' },
    { title: 'Calidad Gráfica', desc: 'Fidelidad CMYK y resolución HD', icon: Award, color: 'text-brand-magenta bg-pink-50' },
    { title: 'Cualquier Formato', desc: 'Desde tarjetas hasta lonas monumentales', icon: Layers, color: 'text-brand-cyan bg-cyan-50' },
  ];

  return (
    <section id="inicio" className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-slate-50">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-10 left-10 w-80 h-80 rounded-full bg-cyan-300/30 blur-3xl"></div>
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-pink-300/25 blur-3xl"></div>
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 rounded-full bg-amber-200/35 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-200/80 text-xs sm:text-sm font-bold text-slate-800">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="bg-gradient-to-r from-brand-cyan to-brand-magenta bg-clip-text text-transparent font-extrabold uppercase tracking-wide">
              Líderes en México
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">Gran Formato, Offset & Impresión Industrial</span>
          </div>
        </div>

        {/* Main Title & Slogan */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.08] mb-6">
            Impulsa el impacto de tu marca con{' '}
            <span className="cmyk-gradient-text block sm:inline">
              impresión de élite
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            <span className="font-bold text-slate-900">“Hacemos realidad cualquier proyecto que tu marca requiera</span> con la más alta calidad y precisión de México.”
          </p>
        </div>

        {/* Dynamic CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 max-w-xl mx-auto">
          {/* CTA 1: WhatsApp */}
          <a
            href="https://wa.me/525549407510?text=Hola%20Masperr%20Publicidad,%20quisiera%20cotizar%20un%20proyecto%20con%20ustedes."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Cotizar por WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-emerald-100 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* CTA 2: Google Maps */}
          <a
            href="https://www.google.com/maps/place/MASPERRPUBLCIDAD/@19.3873977,-99.1450275,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1feffc376fc33:0x4c08f16d0a6f76f5!8m2!3d19.3873977!4d-99.1450275!16s%2Fg%2F1hhxs_jc1?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border-2 border-slate-200 hover:border-brand-cyan shadow-md hover:shadow-lg transition-all duration-200"
          >
            <MapPin className="w-5 h-5 text-red-500" />
            <span>Ver Ubicación en Maps</span>
          </a>

          {/* CTA 3: Catalogo */}
          <a
            href="#servicios"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Layers className="w-5 h-5 text-brand-cyan" />
            <span>Explorar Catálogo</span>
          </a>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">{item.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Numbers Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">+15 Años</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">Liderando el mercado</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-brand-cyan tracking-tight">+50,000</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">Proyectos impresos</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-brand-magenta tracking-tight">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">Fidelidad de color CMYK</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-amber-500 tracking-tight">5 Estrellas</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">Satisfacción garantizada</div>
          </div>
        </div>

      </div>
    </section>
  );
}
