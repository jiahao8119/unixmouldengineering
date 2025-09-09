import React from 'react';
import { Plane, Car, Heart, Wrench, Lightbulb } from 'lucide-react';

const industries = [
  {
    icon: Plane,
    name: 'Aerospace',
    description: 'Critical components for aviation and space applications',
    image: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Car,
    name: 'Automotive',
    description: 'Precision parts for automotive manufacturing',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Heart,
    name: 'Medical',
    description: 'Life-critical medical device components',
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Wrench,
    name: 'Mould Fabrication',
    description: 'Custom tooling and injection moulds',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Lightbulb,
    name: 'Prototyping',
    description: 'Rapid prototyping and product development',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Industries() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-16 space-y-4">
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white">
            Industries
            <span className="block bg-gradient-to-r from-cyan-300 to-slate-300 bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            From aerospace to medical devices, we deliver precision across critical industries.
          </p>
        </div>
        
        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105"
              >
                {/* Image Background */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {industry.name}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
                
                {/* Metallic bottom border */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}