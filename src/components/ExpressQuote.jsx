import React, { useState } from 'react';
import { Calculator, Send, MessageCircle, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ExpressQuote() {
  const [serviceType, setServiceType] = useState('offset');
  const [product, setProduct] = useState('Tarjetas de Presentación de Lujo');
  const [quantity, setQuantity] = useState('1000');
  const [customDetails, setCustomDetails] = useState('');
  const [customerName, setCustomerName] = useState('');

  const productOptions = {
    offset: [
      'Tarjetas de Presentación de Lujo (Laminado Mate / Barniz a Registro)',
      'Volantes / Flyers Publicitarios',
      'Trípticos / Dípticos Corporativos',
      'Recetas Médicas Foliadas',
      'Notas de Remisión / Órdenes de Trabajo Foliadas',
      'Revistas / Catálogos Engrapados o Rústicos',
      'Pósters Comerciales'
    ],
    digital: [
      'Impresión Urgente Express (hasta 30.5 x 45 cm)',
      'Stickers / Etiquetas Adhesivas Suajadas',
      'Invitaciones Sociales y Sobres de Lujo',
      'Menús Plastificados para Restaurante',
      'Diplomas y Reconocimientos con Dato Variable',
      'Prototipos de Empaque Corto Tiraje'
    ],
    plotter: [
      'Lona Frontlit Publicitaria con Ojalillos',
      'Lona Mesh Perforada (para viento / edificios)',
      'Lona Backlight Translúcida para Cajas de Luz',
      'Vinil Adhesivo Brillante o Mate con Laminado',
      'Vinil Microperforado para Cristales o Autos',
      'Impresión Rígida en Coroplast / Estireno / PVC Sintra',
      'Floor Graphic de Tráfico Pesado'
    ],
    displays: [
      'Muro Expandible (Backdrop) Recto / Curvo con Maletín',
      'Roll Up de Aluminio Reforzado 85x200 cm',
      'Roll Up de Aluminio Reforzado 100x200 cm',
      'Módulo Demoset Promocional Portátil',
      'X-Banner Estructura Ligera',
      'Caballete Publicitario Doble Vista'
    ]
  };

  const handleServiceChange = (e) => {
    const newService = e.target.value;
    setServiceType(newService);
    setProduct(productOptions[newService][0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceLabels = {
      offset: 'Impresión Offset Industrial',
      digital: 'Impresión Digital Express (Max 30.5x45 cm)',
      plotter: 'Gran Formato & Plotter',
      displays: 'Displays & Puntos de Venta'
    };

    let message = `¡Hola Masperr Publicidad! Solicito una cotización exprés desde su sitio web:\n\n`;
    if (customerName.trim()) {
      message += `👤 *Cliente:* ${customerName.trim()}\n`;
    }
    message += `🖨️ *Servicio:* ${serviceLabels[serviceType]}\n`;
    message += `📦 *Producto:* ${product}\n`;
    message += `🔢 *Cantidad / Medida:* ${quantity}\n`;
    if (customDetails.trim()) {
      message += `📝 *Detalles adicionales:* ${customDetails.trim()}\n`;
    }
    message += `\n¿Me podrían compartir costos y tiempos estimados de entrega? Gracias.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/525549407510?text=${encoded}`, '_blank');
  };

  return (
    <section id="cotizador" className="py-20 md:py-28 bg-gradient-to-b from-white to-sky-50/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Cotizador Exprés en Línea</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Cotiza tu proyecto en <span className="cmyk-gradient-text">menos de 1 minuto</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Selecciona tu producto y recibe atención directa de nuestros asesores por WhatsApp con presupuesto personalizado.
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 shadow-premium border-2 border-slate-200/90 relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Grid 1: Name & Service Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Tu Nombre o Empresa
                </label>
                <input
                  type="text"
                  placeholder="Ej. Roberto Martínez / Agencia Nova"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-brand-cyan focus:bg-white focus:ring-2 focus:ring-cyan-200 transition-all text-sm font-medium text-slate-900 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Línea de Servicio
                </label>
                <select
                  value={serviceType}
                  onChange={handleServiceChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-brand-cyan focus:bg-white focus:ring-2 focus:ring-cyan-200 transition-all text-sm font-semibold text-slate-900 outline-none cursor-pointer"
                >
                  <option value="offset">Impresión Offset (Alto Tiraje)</option>
                  <option value="digital">Impresión Digital Express (Max 30.5x45 cm)</option>
                  <option value="plotter">Gran Formato & Plotter (Lonas / Vinil / Rígidos)</option>
                  <option value="displays">Displays & Puntos de Venta (Backdrops / Roll Ups)</option>
                </select>
              </div>
            </div>

            {/* Grid 2: Specific Product & Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Producto Específico
                </label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-brand-cyan focus:bg-white focus:ring-2 focus:ring-cyan-200 transition-all text-sm font-semibold text-slate-900 outline-none cursor-pointer"
                >
                  {productOptions[serviceType].map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Cantidad o Medidas (aprox.)
                </label>
                <input
                  type="text"
                  placeholder="Ej. 1,000 pzas / 3 x 2 metros"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-brand-cyan focus:bg-white focus:ring-2 focus:ring-cyan-200 transition-all text-sm font-medium text-slate-900 outline-none"
                  required
                />
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Especificaciones adicionales (sustrato, acabados, urgencia, etc.)
              </label>
              <textarea
                rows={3}
                placeholder="Ej. Necesito laminado mate con barniz a registro. ¿Tendrán entrega para este viernes?"
                value={customDetails}
                onChange={(e) => setCustomDetails(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-brand-cyan focus:bg-white focus:ring-2 focus:ring-cyan-200 transition-all text-sm font-medium text-slate-900 outline-none resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Enviar Cotización a WhatsApp (+52 55 4940 7510)</span>
            </button>

            <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Atención técnica directa sin intermediarios. Respuesta en horario laboral.</span>
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}
