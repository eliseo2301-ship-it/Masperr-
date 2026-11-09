import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import InteractiveLogo from './InteractiveLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Cotizador', href: '#cotizador' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-md py-2.5' : 'bg-white/95 backdrop-blur-md py-4 shadow-sm'}`}>
      {/* CMYK Top accent strip */}
      <div className="absolute top-0 left-0 right-0 h-1 cmyk-bar"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo Brand: Interactive, Responsive, with Business Name */}
          <a href="#inicio" className="group py-1 shrink min-w-0">
            <InteractiveLogo size="md" showText={true} theme="light" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/70 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-semibold text-slate-700 hover:text-brand-cyan hover:bg-white rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Phone & WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="tel:5549407510" 
              className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-slate-700 hover:text-brand-cyan transition-colors"
              title="Llamar a Masperr"
            >
              <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-brand-cyan">
                <Phone className="w-4 h-4" />
              </div>
              <span>55 49 40 75 10</span>
            </a>

            <a
              href="https://wa.me/525549407510?text=Hola%20Masperr%20Publicidad,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/525549407510"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-500 text-white rounded-full shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-slate-200 px-4 pt-3 pb-6 mt-2 space-y-3 shadow-xl">
          {/* Logo Showcase inside Mobile Menu */}
          <div className="pb-3 border-b border-slate-200/80 flex items-center justify-between">
            <InteractiveLogo size="sm" showText={true} theme="light" />
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-cyan-50 hover:text-brand-cyan transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href="tel:5549407510"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-brand-cyan" />
              <span>Llamar: 55 49 40 75 10</span>
            </a>
            <a
              href="https://wa.me/525549407510?text=Hola%20Masperr%20Publicidad,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inmediato</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
