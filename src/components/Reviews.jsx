import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, Building2, Briefcase, Sparkles, CheckCircle } from 'lucide-react';

export default function Reviews() {
  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      author: 'Lic. Rodrigo Fuentes',
      role: 'Director Creativo',
      company: 'Agencia Nexus Brand CDMX',
      category: 'agencia',
      stars: 5,
      date: 'Hace 3 semanas',
      review: 'Mandamos a imprimir 25,000 catálogos corporativos con acabado mate y barniz UV a registro. La fidelidad de color CMYK de Masperr superó por mucho a otros talleres con los que trabajábamos. Entregaron 1 día antes de lo pactado.',
      highlight: 'Fidelidad cromática insuperable'
    },
    {
      id: 2,
      author: 'Ing. Mariana Valenzuela',
      role: 'Gerente de Mercadotecnia',
      company: 'Grupo Retail Mexicana',
      category: 'retail',
      stars: 5,
      date: 'Hace 1 mes',
      review: 'Equipamos más de 40 puntos de venta con roll ups reforzados y muros expandibles de tela sublimada. El armado es sencillísimo y las estructuras de aluminio se sienten robustas. Además, el servicio por WhatsApp fue inmediato.',
      highlight: 'Displays de máxima resistencia'
    },
    {
      id: 3,
      author: 'Dr. Héctor Solís',
      role: 'Coordinador Médico',
      company: 'Clínica San Ángel',
      category: 'corporativo',
      stars: 5,
      date: 'Hace 1 semana',
      review: 'Nuestros recetarios foliados, notas de remisión y papelería membretada siempre salen impecables. La nitidez de los trazos finos y la calidad del papel autocopiante es de primer nivel.',
      highlight: 'Papelería oficial con foliado exacto'
    },
    {
      id: 4,
      author: 'Valeria Cárdenas',
      role: 'Coordinadora de Eventos & Expos',
      company: 'Expo Capital México',
      category: 'eventos',
      stars: 5,
      date: 'Hace 2 semanas',
      review: 'Tuvimos una urgencia a 24 horas del evento: necesitábamos 150 metros lineales de lona mesh y vinil microperforado para fachada. Masperr nos resolvió en tiempo récord sin perder ni un pixel de resolución.',
      highlight: 'Respuesta exprés en urgencias'
    },
    {
      id: 5,
      author: 'Carlos Alberto Mendívil',
      role: 'Fundador & CEO',
      company: 'Kroma Gourmet',
      category: 'retail',
      stars: 5,
      date: 'Hace 1 mes',
      review: 'La impresión digital de tiraje corto para nuestras etiquetas de producto y empaques prototipo quedó espectacular. Colores vibrantes y corte suajado milimétrico.',
      highlight: 'Tirajes cortos de alta definición'
    },
    {
      id: 6,
      author: 'Sofía Navarro',
      role: 'Productora Gráfica Senior',
      company: 'Studio Bloom Publicidad',
      category: 'agencia',
      stars: 5,
      date: 'Hace 2 meses',
      review: 'Llevamos más de 3 años trabajando de la mano con Masperr. Cuando un cliente exigente nos pide igualación de Pantone y acabados especiales, sabemos que con ellos no hay sorpresas.',
      highlight: 'Socio de producción confiable'
    }
  ];

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(r => r.category === filter);

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-white/50 backdrop-blur-[2px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Calificación 5.0 Estrellas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            La confianza de <span className="cmyk-gradient-text">grandes marcas</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Empresas, agencias de publicidad y emprendedores respaldan nuestra precisión de color y compromiso de entrega.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Todas las Reseñas' },
              { id: 'agencia', label: 'Agencias Creativas' },
              { id: 'retail', label: 'Retail & Tiendas' },
              { id: 'corporativo', label: 'Corporativo & Salud' },
              { id: 'eventos', label: 'Expos & Eventos' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  filter === f.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
            >
              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{rev.date}</span>
                </div>

                {/* Highlight Badge */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-cyan-50 border border-cyan-100 text-brand-cyan text-xs font-extrabold mb-3">
                  {rev.highlight}
                </div>

                {/* Body Text */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                  "{rev.review}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
                  {rev.author.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm leading-tight">{rev.author}</h4>
                  <p className="text-xs text-slate-500">{rev.role} • <strong className="text-slate-700">{rev.company}</strong></p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-14 max-w-3xl mx-auto p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
              <span className="text-xl font-black text-brand-cyan">G</span>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="font-extrabold text-slate-900 text-base">Ficha verificada en Google Maps</span>
                <span className="flex items-center text-amber-500 font-black text-sm">
                  ★ 5.0
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">Taller y oficinas ubicadas en Benito Juárez, CDMX</p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/place/MASPERRPUBLCIDAD/@19.3873977,-99.1450275,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1feffc376fc33:0x4c08f16d0a6f76f5!8m2!3d19.3873977!4d-99.1450275!16s%2Fg%2F1hhxs_jc1?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 shadow-sm transition-all"
          >
            Ver reseñas en Google
          </a>
        </div>

      </div>
    </section>
  );
}
