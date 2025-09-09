import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'Lead Engineer',
    company: 'AeroTech Solutions',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'Exceptional precision and reliability. Their CNC work on our aerospace components exceeded all specifications. The attention to detail is unmatched.',
  },
  {
    name: 'Michael Rodriguez',
    title: 'Manufacturing Director',
    company: 'Precision Automotive',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'Outstanding quality and on-time delivery every single project. Their team understands the critical nature of automotive manufacturing deadlines.',
  },
  {
    name: 'Dr. Emily Watson',
    title: 'R&D Manager',
    company: 'MedDevice Innovations',
    image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'For medical device prototyping, precision is life-critical. This team delivers components that meet the most stringent FDA requirements.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto"></div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            Trusted by Industry
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients say about our precision engineering and reliability.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-200 hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>
              
              <div className="space-y-6 pt-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-slate-700 leading-relaxed text-lg italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.title}</p>
                    <p className="text-sm font-semibold text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-semibold">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-semibold">AS9100D Aerospace</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="font-semibold">FDA Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="font-semibold">ITAR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}