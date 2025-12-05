import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-steel-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-900/95 to-steel-900/80 z-10"></div>
        {/* Placeholder for Hero Image - Industrial CNC Environment */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              Precision Engineering
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Mastering the Art of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
                Precision CNC & Mould
              </span> <br />
              Fabrication
            </h1>

            <p className="text-lg lg:text-xl text-steel-300 max-w-xl leading-relaxed">
              Unix Mould Engineering delivers ultra-precision <strong>5-axis CNC machining</strong> and <strong>custom mould solutions</strong> in Malaysia. 
              We turn complex geometries into production-ready reality with ±0.01mm tolerance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary-600 rounded-sm hover:bg-primary-500 transition-all duration-300 shadow-lg shadow-primary-900/20">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-steel-700 bg-steel-800/50 backdrop-blur-sm rounded-sm hover:bg-steel-800 transition-all duration-300">
                View Capabilities
                <ChevronRight className="ml-2 w-5 h-5 text-steel-400 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 flex items-center gap-8 text-steel-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-1 h-8 bg-steel-800"></div>
                <span>ISO 9001:2015<br/>Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-8 bg-steel-800"></div>
                <span>20+ Years<br/>Experience</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Abstract/Technical Representation */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 bg-steel-800/30 backdrop-blur-md border border-steel-700/50 rounded-lg p-2 shadow-2xl">
               {/* Placeholder for a technical drawing or 3D model view */}
               <div className="aspect-[4/3] rounded bg-steel-900/80 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
                  
                  {/* Overlay UI elements to look like CAD software */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-primary-400 font-mono border border-primary-500/30">
                    X: 124.500 Y: 85.200 Z: -12.050
                  </div>
               </div>
            </div>
            
            {/* Decorative background blobs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}