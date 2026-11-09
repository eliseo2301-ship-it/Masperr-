import React from 'react';
import DynamicBackgroundVideo from './components/DynamicBackgroundVideo';
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
    <div className="min-h-screen flex flex-col relative selection:bg-brand-cyan selection:text-white">
      {/* Global Fixed Dynamic Background Video (RFC Implementation) */}
      <DynamicBackgroundVideo />

      {/* Institutional Top Navbar */}
      <Navbar />

      {/* Main Content Sections: Scrolls smoothly above the fixed centered background */}
      <main className="flex-1 relative z-10">
        <Hero />
        <Services />
        <Identity />
        <ExpressQuote />
        <Reviews />
        <MapLocation />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Interactive Virtual Assistant Bot */}
      <VirtualBot />
    </div>
  );
}
