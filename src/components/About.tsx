import React from 'react';
import { ShieldCheck, Users, Target, History } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-steel-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-primary-400 font-bold tracking-wide uppercase text-sm mb-3">About Us</h2>
              <h3 className="text-4xl font-bold text-white mb-6">
                Engineering Excellence Since 2002
              </h3>
              <p className="text-lg text-steel-300 leading-relaxed">
                Unix Mould Engineering has established itself as a premier partner for <strong>high-precision CNC manufacturing</strong> in Malaysia. 
                What started as a small tool and die shop has grown into a full-service engineering facility 
                trusted by <strong>aerospace, automotive, and medical device manufacturers</strong> worldwide.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-steel-800 rounded-sm flex items-center justify-center shrink-0 border border-steel-700">
                  <ShieldCheck className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Quality First</h4>
                  <p className="text-sm text-steel-400">ISO 9001:2015 certified processes ensuring zero-defect delivery.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-steel-800 rounded-sm flex items-center justify-center shrink-0 border border-steel-700">
                  <Users className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Expert Team</h4>
                  <p className="text-sm text-steel-400">Master machinists with average 15+ years of industry experience.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-steel-800 rounded-sm flex items-center justify-center shrink-0 border border-steel-700">
                  <Target className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Precision</h4>
                  <p className="text-sm text-steel-400">Uncompromising accuracy down to the micron level.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-steel-800 rounded-sm flex items-center justify-center shrink-0 border border-steel-700">
                  <History className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Reliability</h4>
                  <p className="text-sm text-steel-400">99.8% on-time delivery record across all projects.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-sm overflow-hidden border border-steel-700">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80" 
                alt="Engineering Team" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary-600/30 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-steel-700/30 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
