import React from 'react';
import { Gauge, Settings, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Precision Engineering',
    description: 'Sub-micron accuracy with state-of-the-art 5-axis CNC machines and quality control systems.',
  },
  {
    icon: Settings,
    title: 'Custom Moulds',
    description: 'Bespoke tooling and mould fabrication for complex geometries and specialized applications.',
  },
  {
    icon: Users,
    title: 'Skilled Team',
    description: 'Master machinists and engineers with decades of experience in precision manufacturing.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Reliable project timelines with real-time progress tracking and quality assurance.',
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-16 space-y-4">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white">
            Engineering
            <span className="block bg-gradient-to-r from-slate-300 to-blue-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            Four pillars of precision manufacturing that drive our commitment to quality.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-105"
              >
                {/* Metallic accent line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}