import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Aerospace Turbine Component',
    category: '5-Axis CNC Milling',
    image: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&q=80',
    description: 'Complex turbine blade geometry machined from Inconel 718 with strict surface finish requirements.'
  },
  {
    title: 'Automotive Injection Mould',
    category: 'Mould Fabrication',
    image: 'https://images.unsplash.com/photo-1622466023758-45229e6e728c?auto=format&fit=crop&q=80',
    description: 'Multi-cavity injection mould for high-volume automotive connector production.'
  },
  {
    title: 'Medical Device Prototype',
    category: 'Micro-Machining',
    image: 'https://images.unsplash.com/photo-1580982327559-c1202864eb05?auto=format&fit=crop&q=80',
    description: 'Surgical instrument prototype machined from Titanium Grade 5 with ±0.005mm tolerance.'
  }
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">Our Work</h2>
            <h3 className="text-4xl font-bold text-steel-900">
              Featured Projects
            </h3>
          </div>
          <button className="flex items-center gap-2 text-steel-900 font-bold hover:text-primary-600 transition-colors">
            View Full Portfolio <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-steel-100 mb-6">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                  role="img"
                  aria-label={`Close up of ${project.title} - ${project.category}`}
                ></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              
              <div className="space-y-2">
                <div className="text-primary-600 text-sm font-bold uppercase tracking-wider">
                  {project.category}
                </div>
                <h4 className="text-xl font-bold text-steel-900 group-hover:text-primary-700 transition-colors">
                  {project.title}
                </h4>
                <p className="text-steel-500 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
