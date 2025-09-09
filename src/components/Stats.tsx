import React from 'react';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    number: '10,000+',
    label: 'Projects Completed',
    description: 'Precision components delivered',
  },
  {
    icon: Users,
    number: '500+',
    label: 'Happy Clients',
    description: 'Across 25+ industries',
  },
  {
    icon: Clock,
    number: '99.8%',
    label: 'On-Time Delivery',
    description: 'Reliable project completion',
  },
  {
    icon: Award,
    number: '30+',
    label: 'Years Experience',
    description: 'Industry expertise',
  },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255, 255, 255, 0.1) 20px,
            rgba(255, 255, 255, 0.1) 40px
          )`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="w-16 h-1 bg-white/30 rounded-full mx-auto"></div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white">
            Proven Track Record
            <span className="block text-cyan-200">
              of Excellence
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Numbers that speak to our commitment to precision, quality, and customer satisfaction.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group text-center space-y-4 p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
                    {stat.number}
                  </h3>
                  <h4 className="text-xl font-bold text-cyan-200">
                    {stat.label}
                  </h4>
                  <p className="text-blue-100">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Message */}
        <div className="text-center mt-16 space-y-6">
          <p className="text-2xl font-bold text-white">
            Ready to join our growing list of satisfied clients?
          </p>
          <button className="group relative px-10 py-5 bg-white text-blue-700 font-bold text-xl tracking-wide transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded-lg">
            <span className="relative flex items-center justify-center gap-3">
              Get Your Free Quote
              <TrendingUp className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}