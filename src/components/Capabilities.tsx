import React from 'react';
import { CheckCircle2, Monitor, Ruler, Layers } from 'lucide-react';

export default function Capabilities() {
  return (
    <section className="py-24 bg-steel-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">Technical Strengths</h2>
              <h3 className="text-4xl font-bold text-steel-900 mb-6">
                Precision Equipment & <br/>
                Advanced Capabilities
              </h3>
              <p className="text-lg text-steel-600 leading-relaxed">
                Our facility is equipped with industry-leading machinery and software, allowing us to maintain 
                tight tolerances and deliver consistent quality across all production runs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-sm border border-steel-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Monitor className="w-6 h-6 text-primary-600" />
                  <h4 className="font-bold text-steel-900">Software Suite</h4>
                </div>
                <ul className="space-y-2 text-steel-600 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div> SolidWorks
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div> Mastercam
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div> Siemens NX
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-sm border border-steel-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Ruler className="w-6 h-6 text-primary-600" />
                  <h4 className="font-bold text-steel-900">Tolerances</h4>
                </div>
                <ul className="space-y-2 text-steel-600 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div> CNC Milling: ±0.01mm
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div> EDM: ±0.005mm
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div> Grinding: ±0.002mm
                  </li>
                </ul>
              </div>
            </div>

            {/* List of Machines/Materials */}
            <div className="space-y-6 pt-4">
              <div>
                <h4 className="font-bold text-steel-900 mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-primary-600" />
                  Materials Handled
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Aluminum 6061/7075', 'Stainless Steel 304/316', 'Tool Steel D2/A2', 'Titanium', 'Inconel', 'Engineering Plastics'].map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-steel-100 text-steel-700 text-sm font-medium rounded-full border border-steel-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-steel-900 mb-3">Machine Inventory</h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-steel-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    <span>5-Axis CNC Centers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    <span>Wirecut EDM Machines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    <span>Sinker EDM Units</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    <span>CMM Inspection Labs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative h-full min-h-[500px] rounded-sm overflow-hidden shadow-2xl group">
             {/* Placeholder for Machine Shop Floor */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-steel-900/90 via-steel-900/20 to-transparent"></div>
             
             <div className="absolute bottom-0 left-0 p-8">
                <div className="text-white text-3xl font-bold mb-2">15+</div>
                <div className="text-steel-300">High-Precision Machines Operational</div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
