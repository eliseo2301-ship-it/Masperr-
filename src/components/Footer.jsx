import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden pt-16 pb-12">
      {/* Top CMYK accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 cmyk-bar"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white rounded-xl shadow-md">
                <img
                  src="/assets/logo-principal.jpeg"
                  alt="Masperr Publicidad"
                  className="h-12 w-auto object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-tight">MASPERR</span>
                <span className="block text-xs uppercase font-bold text-brand-cyan tracking-widest">
                  Publicidad & Impresión
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Fundada en 2008. Líderes en México en publicidad, gran formato, offset e impresión digital e industrial con más de 18 años de excelencia. Hacemos realidad cualquier proyecto que tu marca requiera con la más alta calidad y precisión de México.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-emerald-400">Taller operativo en CDMX</span>
            </div>
          </div>

          {/* Col 2: Servicios */}
          <div>
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li><a href="#servicios" className="hover:text-brand-cyan transition-colors">Impresión Offset</a></li>
              <li><a href="#servicios" className="hover:text-brand-cyan transition-colors">Impresión Digital Express</a></li>
              <li><a href="#servicios" className="hover:text-brand-cyan transition-colors">Gran Formato & Plotter</a></li>
              <li><a href="#servicios" className="hover:text-brand-cyan transition-colors">Lonas Frontlit y Mesh</a></li>
              <li><a href="#servicios" className="hover:text-brand-cyan transition-colors">Vinil & Microperforado</a></li>
              <li><a href="#servicios" className="hover:text-brand-cyan transition-colors">Displays & Backdrops</a></li>
            </ul>
          </div>

          {/* Col 3: Enlaces Rápidos */}
          <div>
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li><a href="#inicio" className="hover:text-brand-cyan transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-brand-cyan transition-colors">Misión y Visión</a></li>
              <li><a href="#testimonios" className="hover:text-brand-cyan transition-colors">Reseñas de Clientes</a></li>
              <li><a href="#cotizador" className="hover:text-brand-cyan transition-colors">Cotizador Exprés</a></li>
              <li><a href="#ubicacion" className="hover:text-brand-cyan transition-colors">Ubicación en Google Maps</a></li>
            </ul>
          </div>

          {/* Col 4: Contacto Oficial */}
          <div>
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-4">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href="tel:5549407510" className="hover:text-white transition-colors">
                  55 49 40 75 10
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/525549407510" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
                  WhatsApp Directo
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-magenta shrink-0 mt-0.5" />
                <a href="mailto:masperrpublicidad@hotmail.com" className="hover:text-white transition-colors break-all">
                  masperrpublicidad@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/place/MASPERRPUBLCIDAD/@19.3873977,-99.1450275,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1feffc376fc33:0x4c08f16d0a6f76f5!8m2!3d19.3873977!4d-99.1450275!16s%2Fg%2F1hhxs_jc1?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Benito Juárez, Ciudad de México
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Masperr Publicidad & Impresión • Fundada en 2008. Todos los derechos reservados. Hecho con precisión en México.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors font-semibold"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-cyan" />
          </button>
        </div>

      </div>
    </footer>
  );
}
