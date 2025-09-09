import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What materials can you machine?',
    answer: 'We work with a wide range of materials including aluminum, steel, stainless steel, titanium, brass, copper, plastics (ABS, PEEK, Delrin), and exotic alloys. Our material selection depends on your specific application requirements.',
  },
  {
    question: 'What are your typical lead times?',
    answer: 'Lead times vary based on complexity and quantity. Prototypes typically take 3-5 business days, small production runs 1-2 weeks, and larger orders 2-4 weeks. Rush orders can often be accommodated with expedited scheduling.',
  },
  {
    question: 'What tolerances can you achieve?',
    answer: 'We routinely achieve tolerances of ±0.0005" (±0.013mm) and can go tighter when required. Our 5-axis CNC machines and CMM inspection equipment ensure consistent precision across all dimensions.',
  },
  {
    question: 'Do you provide design assistance?',
    answer: 'Yes! Our engineering team offers Design for Manufacturing (DFM) reviews, material recommendations, and cost optimization suggestions. We can help improve your designs for better manufacturability and cost-effectiveness.',
  },
  {
    question: 'What quality certifications do you have?',
    answer: 'We are ISO 9001:2015 certified, AS9100D registered for aerospace applications, and FDA registered for medical device manufacturing. We also maintain ITAR compliance for defense-related projects.',
  },
  {
    question: 'Can you handle both prototypes and production?',
    answer: 'Absolutely. We specialize in both rapid prototyping and full-scale production manufacturing. Our flexible capacity allows us to scale from single prototypes to thousands of production parts.',
  },
  {
    question: 'What file formats do you accept?',
    answer: 'We accept all major CAD formats including STEP, IGES, SolidWorks, AutoCAD, Inventor, and PDF drawings. Our engineering team can work with your existing files or help create new designs.',
  },
  {
    question: 'Do you offer finishing services?',
    answer: 'Yes, we provide various finishing options including anodizing, powder coating, plating, heat treating, and surface texturing. We can coordinate all finishing through our trusted partner network.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto"></div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            Frequently Asked
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get answers to common questions about our CNC machining services, capabilities, and processes.
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">
              Still have questions?
            </h3>
            <p className="text-slate-600">
              Our engineering team is here to help with your specific requirements.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg">
              Contact Our Engineers
            </button>
            <button className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 font-bold text-lg tracking-wide transition-all duration-300 hover:border-blue-300 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-lg">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}