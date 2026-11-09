import React from 'react';
import { MapPin, Phone, Mail, Navigation, Clock, ExternalLink, MessageCircle, ShieldCheck } from 'lucide-react';

export default function MapLocation() {
  const googleMapsUrl = "https://www.google.com/maps/place/MASPERRPUBLCIDAD/@19.3873977,-99.1450275,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1feffc376fc33:0x4c08f16d0a6f76f5!8m2!3d19.3873977!4d-99.1450275!16s%2Fg%2F1hhxs_jc1?hl=es";
  const mapEmbedUrl = "https://maps.google.com/maps?q=19.3873977,-99.1450275&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-4 border border-red-200">
            <MapPin className="w-3.5 h-3.5" />
            <span>Taller Industrial & Oficinas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Visítanos en la <span className="cmyk-gradient-text">Ciudad de México</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Instalaciones equipadas para recepción de archivos, revisión de pruebas de color y entrega de proyectos.
          </p>
        </div>

        {/* Grid: Map + Contact Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Map Column (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-premium border-2 border-slate-200/80 bg-white flex flex-col min-h-[420px] relative">
            
            {/* Live Map Iframe */}
            <div className="relative flex-1 w-full h-full min-h-[350px]">
              <iframe
                title="Ubicación oficial Masperr Publicidad"
                src={mapEmbedUrl}
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Direct Map Action Bar */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Coordenadas: <strong>19.3873977, -99.1450275</strong></span>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Abrir en Google Maps para llegar</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border-2 border-slate-200/80 shadow-premium flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-brand-cyan">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">Masperr Publicidad</h3>
                  <p className="text-xs text-slate-500">Matriz de Producción CDMX</p>
                </div>
              </div>

              {/* Contact list */}
              <div className="space-y-4 mb-8">
                {/* Phone */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <Phone className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase">Teléfono de Atención</span>
                    <a href="tel:5549407510" className="text-sm sm:text-base font-extrabold text-slate-800 hover:text-brand-cyan">
                      55 49 40 75 10
                    </a>
                  </div>
                </div>

                {/* WhatsApp Direct */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/70">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-emerald-700 uppercase">WhatsApp de Cotizaciones</span>
                    <a 
                      href="https://wa.me/525549407510" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm sm:text-base font-extrabold text-emerald-900 hover:underline"
                    >
                      +52 55 4940 7510 (Respuesta Exprés)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <Mail className="w-5 h-5 text-brand-magenta shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase">Correo Electrónico Oficial</span>
                    <a href="mailto:masperrpublicidad@hotmail.com" className="text-sm sm:text-base font-extrabold text-slate-800 hover:text-brand-magenta break-all">
                      masperrpublicidad@hotmail.com
                    </a>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase">Horario de Taller</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700">
                      Lunes a Viernes: 9:00 AM – 7:00 PM<br />
                      Sábados: 9:00 AM – 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Footer */}
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href="https://wa.me/525549407510?text=Hola%20Masperr,%20me%20gustar%C3%ADa%20visitar%20el%20taller%20o%20hacer%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar vía WhatsApp</span>
              </a>

              <a
                href="tel:5549407510"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-cyan" />
                <span>Llamar al taller (55 49 40 75 10)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
