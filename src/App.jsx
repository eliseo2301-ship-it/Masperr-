import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Identity from './components/Identity';
import Services from './components/Services';
import ExpressQuote from './components/ExpressQuote';
import Reviews from './components/Reviews';
import MapLocation from './components/MapLocation';
import VirtualBot from './components/VirtualBot';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-brand-cyan selection:text-white">
      {/* Institutional Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <Services />
        <Identity />
        <ExpressQuote />
        <Reviews />
        <MapLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Virtual Assistant Bot */}
      <VirtualBot />
    </div>
  );
}
