import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-slate-800 via-slate-900 to-black relative overflow-hidden">
      {/* Industrial background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(148, 163, 184, 0.1) 2px,
            rgba(148, 163, 184, 0.1) 4px
          )`,
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        {/* Accent elements */}
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
        </div>
        
        {/* Headline */}
        <div className="space-y-6">
          <h2 className="text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Transform Your Ideas
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-slate-300 bg-clip-text text-transparent">
              Into Precision Reality
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied clients who trust us with their most critical manufacturing needs. 
            Get your free quote today and experience the difference precision makes.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold text-xl tracking-wide transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 min-w-[240px]">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center justify-center gap-3">
              Get Your Free Quote Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          
          <button className="group px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-xl tracking-wide transition-all duration-300 hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 min-w-[240px] rounded-lg">
            <span className="flex items-center justify-center gap-3">
              Schedule Consultation
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </button>
        </div>
        
        {/* Contact Options */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-slate-300 mb-12">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
              <Phone className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">Call Direct</div>
                <div className="text-sm text-slate-400">(555) 123-4567</div>
              </div>
            </div>
            <div className="w-px h-6 bg-slate-600"></div>
            <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
              <Mail className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">Email Us</div>
                <div className="text-sm text-slate-400">quotes@cncprecision.com</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Urgency/Scarcity Elements */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">Limited Time: Free DFM Review</span>
            </div>
            <div className="text-cyan-300 font-bold">
              Save up to 30% on manufacturing costs
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="pt-12 border-t border-slate-700">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <span>Same-Day Quotes</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>99.8% On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}