import React from 'react';
import { ArrowRight, Cog, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Accent line */}
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-tight">
              <span className="block">Precision</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-slate-300 bg-clip-text text-transparent">
                CNC Engineering
              </span>
              <span className="block text-3xl lg:text-4xl text-slate-300 font-semibold mt-4">
                for Every Industry
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              Trust in precision. Rely on accuracy. From aerospace components to custom moulds, 
              we deliver engineered excellence with cutting-edge CNC technology.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
            <div className="hidden sm:flex items-center gap-3 text-slate-400">
              <div className="flex items-center gap-1">
                <Cog className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Precision</span>
              </div>
              <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
              <div className="flex items-center gap-1">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">Speed</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Visual Placeholder */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Main placeholder for CNC machine image */}
            <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg shadow-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                  <Cog className="w-12 h-12 text-white animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <p className="text-slate-400 text-sm">CNC Machine Visual</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-slate-500/20 to-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}