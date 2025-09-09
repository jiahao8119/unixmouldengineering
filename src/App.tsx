import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Industries from './components/Industries';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Background pattern overlay */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-slate-900/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(148, 163, 184, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>
      
      <main className="relative z-10">
        <Hero />
        <Features />
        <Process />
        <Testimonials />
        <Industries />
        <Stats />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
    </div>
  );
}

export default App;