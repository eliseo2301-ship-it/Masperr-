import React, { useState } from 'react';
import { Layers, Printer, Maximize, LayoutGrid, CheckCircle2, MessageCircle, ArrowRight, Sparkles, Sliders } from 'lucide-react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const services = [
    {
      id: 'offset',
      category: 'offset',
      badge: 'Alto Tiraje & Tirajes Masivos',
      title: 'Impresión Offset',
      image: '/images/offset-printing.jpg',
      color: 'border-brand-cyan/60 hover:border-brand-cyan',
      tagColor: 'bg-cyan-50 text-brand-cyan border-cyan-200',
      description: 'La máxima precisión de color para producciones corporativas y comerciales de gran volumen con prensas industriales.',
      items: [
        'Tarjetas de presentación de lujo (laminado mate, barniz a registro)',
        'Volantes publicitarios y flyers de alto tiraje',
        'Trípticos, dípticos y folletería corporativa',
        'Recetas médicas, notas de remisión foliadas y órdenes de trabajo',
        'Pósters promocionales de alta definición',
        'Revistas, catálogos y libros engrapados o rústicos'
      ],
      specs: 'Ideal para tirajes de 1,000 unidades en adelante. Excelente costo unitario y uniformidad cromática absoluta.',
      waText: 'Hola Masperr Publicidad, me interesa cotizar Impresión Offset (tarjetas, folletos, revistas, papelería).'
    },
    {
      id: 'digital',
      category: 'digital',
      badge: 'Tiros Cortos & Urgencias Express',
      title: 'Impresión Digital',
      image: '/images/digital-printing.jpg',
      color: 'border-brand-magenta/60 hover:border-brand-magenta',
      tagColor: 'bg-pink-50 text-brand-magenta border-pink-200',
      description: 'Soluciones rápidas y de máxima nitidez sin mínimos de tiraje. Imprime exactamente lo que necesitas hoy mismo.',
      items: [
        'Formato máximo de hoja: hasta 30.5 x 45 cm (Super Tabloide)',
        'Tiros cortos urgentes con entrega el mismo día',
        'Etiquetas y stickers personalizados suajados',
        'Invitaciones de boda, XV años y eventos exclusivos',
        'Menús de restaurantes plastificados y resistentes',
        'Diplomas, reconocimientos y personalización unitaria dato variable'
      ],
      specs: 'Formato máximo de 30.5 x 45 cm. Sin gastos de placas ni preparación, entrega express.',
      waText: 'Hola Masperr Publicidad, requiero una cotización de Impresión Digital express (formato max 30.5x45 cm).'
    },
    {
      id: 'plotter',
      category: 'plotter',
      badge: 'Impacto Visual a Gran Escala',
      title: 'Gran Formato & Plotter',
      image: '/images/large-format-plotter.jpg',
      color: 'border-amber-400 hover:border-amber-500',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description: 'Gráficos monumentales y sustratos resistentes para exteriores, fachadas, interiores y flotillas comerciales.',
      items: [
        'Lonas publicitarias: Frontlit, Mesh perforada, Backlight translúcida',
        'Vinil: Adhesivo brillante/mate, corte de color, esmerilado para cristal',
        'Microperforado de alta visibilidad para cristales y flotillas vehiculares',
        'Sustratos rígidos: Coroplast, Estireno, Foamboard y PVC espumado (Sintra)',
        'Telas sublimadas y canvas artístico montado en bastidor',
        'Floor graphics con laminado antiderrapante de tráfico pesado'
      ],
      specs: 'Resoluciones hasta 1440 DPI, tintas UV y ecosolventes de alta resistencia solar e intemperie.',
      waText: 'Hola Masperr Publicidad, quiero cotizar Gran Formato y Plotter (lonas, vinil, rígidos, microperforado).'
    },
    {
      id: 'displays',
      category: 'displays',
      badge: 'Puntos de Venta & Exposiciones',
      title: 'Displays & Puntos de Venta',
      image: '/images/exhibition-displays.jpg',
      color: 'border-blue-500 hover:border-blue-600',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Sistemas portátiles y estructuras visuales desmontables de alto impacto para eventos, expos y retail.',
      items: [
        'Muros expandibles (Backdrops) rectos y curvos con maletín de transporte',
        'Roll Ups de aluminio reforzado (80x200 cm, 85x200 cm, 100x200 cm)',
        'Módulos demoset portátiles y mesas de degustación para retail',
        'X-Banners y arañas ligeras para activaciones de marca',
        'Caballetes publicitarios y marcos abatibles porta-póster',
        'Diseño y adaptación de estructuras de exhibición personalizadas'
      ],
      specs: 'Fácil armado sin herramientas, estructura de aluminio liviana y telas/gráficos intercambiables.',
      waText: 'Hola Masperr Publicidad, deseo cotizar Muros expandibles, Roll Ups o Stands para evento/expo.'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  return (
    <section id="servicios" className="py-20 md:py-28 bg-slate-50/50 backdrop-blur-[2px] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-200">
            <Layers className="w-3.5 h-3.5" />
            <span>Showcase Interactivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Servicios <span className="cmyk-gradient-text">Especializados</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Equipamiento industrial, sustratos certificados y acabados que elevan el valor percibido de tu marca.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Todos los Servicios' },
              { id: 'offset', label: 'Impresión Offset' },
              { id: 'digital', label: 'Impresión Digital' },
              { id: 'plotter', label: 'Gran Formato & Plotter' },
              { id: 'displays', label: 'Displays & Expos' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-md scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`glass-card rounded-3xl overflow-hidden border-2 ${service.color} shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col group`}
            >
              {/* Image banner with overlay */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border shadow-sm ${service.tagColor} bg-white/95 backdrop-blur-sm`}>
                    {service.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Capacidades y Productos:
                    </h4>
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                        <span className="text-xs sm:text-sm text-slate-700 font-semibold leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-100/80 border border-slate-200 text-xs text-slate-600 font-medium mb-6">
                    <strong className="text-slate-800">Nota técnica:</strong> {service.specs}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`https://wa.me/525549407510?text=${encodeURIComponent(service.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Cotizar {service.title}</span>
                  </a>

                  <a
                    href="#cotizador"
                    className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-200 transition-colors text-center"
                  >
                    Calcular Exprés
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
