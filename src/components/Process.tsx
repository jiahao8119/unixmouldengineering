import React from 'react';
import { FileText, Cog, CheckCircle, Truck } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Project Consultation',
    description: 'Share your specifications, drawings, or concepts. Our engineers analyze requirements and provide expert recommendations.',
    duration: '24-48 hours',
  },
  {
    icon: Cog,
    number: '02',
    title: 'Precision Manufacturing',
    description: 'State-of-the-art CNC machines and skilled machinists bring your designs to life with sub-micron accuracy.',
    duration: '3-14 days',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Quality Assurance',
    description: 'Rigorous inspection using CMM and advanced metrology ensures every component meets exact specifications.',
    duration: '1-2 days',
  },
  {
    icon: Truck,
    number: '04',
    title: 'Secure Delivery',
    description: 'Carefully packaged and shipped with full traceability. Real-time tracking keeps you informed throughout.',
    duration: '1-3 days',
  },
];

export default function Process() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto"></div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            Our Proven
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Manufacturing Process
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From concept to delivery, our streamlined process ensures precision, quality, and on-time results every time.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-blue-200 to-cyan-200 z-0"></div>
                )}
                
                <div className="relative bg-white border-2 border-slate-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-200 group-hover:scale-105 z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-lg px-4 py-2 rounded-lg">
                    {step.number}
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {step.duration}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <span className="relative flex items-center gap-2">
              Start Your Project Today
              <CheckCircle className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}