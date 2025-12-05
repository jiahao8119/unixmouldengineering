import React from 'react';
import { Cpu, Zap, Layers, PenTool, Wrench, Settings, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'CNC Milling (3/4/5 Axis)',
    description: 'High-precision 5-axis CNC milling for complex aerospace and medical components with micron-level accuracy.',
  },
  {
    icon: Zap,
    title: 'Wirecut EDM Services',
    description: 'Advanced Electrical Discharge Machining for intricate contours and hardened steel parts.',
  },
  {
    icon: Layers,
    title: 'Sinker EDM Machining',
    description: 'Precision die-sinking EDM for creating deep cavities and blind shapes in mould tooling.',
  },
  {
    icon: Settings,
    title: 'Precision Grinding',
    description: 'Surface grinding and polishing services achieving mirror finishes and tight dimensional tolerances.',
  },
  {
    icon: PenTool,
    title: 'Custom Mould Design',
    description: 'End-to-end plastic injection mould design and fabrication using SolidWorks and Mastercam.',
  },
  {
    icon: Wrench,
    title: 'Mould Repair Services',
    description: 'Expert mould repair and engineering changes to restore tooling performance and extend lifespan.',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-steel-900 mb-6">
            Comprehensive Engineering Solutions
          </h3>
          <p className="text-lg text-steel-600 leading-relaxed">
            From prototype to production, we leverage cutting-edge technology and decades of expertise 
            to deliver superior manufacturing results for the most demanding industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-steel-50 rounded-sm border border-steel-100 hover:border-primary-200 hover:bg-white hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-sm border border-steel-200 flex items-center justify-center mb-6 group-hover:border-primary-500 group-hover:bg-primary-50 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-steel-600 group-hover:text-primary-600 transition-colors" />
                </div>
                
                <h4 className="text-xl font-bold text-steel-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-steel-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <a href="#" className="inline-flex items-center text-sm font-bold text-primary-600 hover:text-primary-700">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
