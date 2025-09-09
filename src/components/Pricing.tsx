import React from 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const plans = [
  {
    name: 'Prototype',
    icon: Zap,
    price: 'Starting at $150',
    description: 'Perfect for product development and testing',
    features: [
      'Single prototype parts',
      '3-5 day turnaround',
      'Standard materials',
      'Basic finishing',
      'Email support',
      'CAD file review',
    ],
    popular: false,
    cta: 'Start Prototyping',
  },
  {
    name: 'Production',
    icon: Crown,
    price: 'Custom Quote',
    description: 'Ideal for medium to large production runs',
    features: [
      'Volume pricing discounts',
      'Dedicated project manager',
      'Advanced materials',
      'Premium finishing options',
      'Priority support',
      'Quality certifications',
      'Inventory management',
      'Just-in-time delivery',
    ],
    popular: true,
    cta: 'Get Production Quote',
  },
  {
    name: 'Enterprise',
    icon: Rocket,
    price: 'Let\'s Talk',
    description: 'Complete manufacturing partnership',
    features: [
      'Strategic partnership',
      'Dedicated engineering team',
      'Supply chain optimization',
      'Custom tooling development',
      '24/7 priority support',
      'On-site consultation',
      'Lean manufacturing',
      'Cost reduction programs',
    ],
    popular: false,
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto"></div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            Flexible Pricing
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              for Every Need
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From single prototypes to large-scale production runs, we have a solution that fits your budget and timeline.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative group ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-xl scale-105'
                    : 'bg-white border-2 border-slate-200 shadow-lg hover:shadow-xl'
                } rounded-xl p-8 transition-all duration-300 hover:scale-105`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm px-6 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto ${
                      plan.popular 
                        ? 'bg-gradient-to-br from-blue-600 to-cyan-500' 
                        : 'bg-gradient-to-br from-slate-100 to-slate-200'
                    } rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-slate-600'}`} />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                      <p className="text-slate-600">{plan.description}</p>
                    </div>
                    
                    <div className="text-3xl font-black text-slate-900">
                      {plan.price}
                    </div>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`w-full py-4 font-bold text-lg tracking-wide transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-xl hover:shadow-blue-500/30 focus:ring-blue-500'
                      : 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-500'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Note */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-slate-600">
            All plans include free design consultation and material recommendations.
          </p>
          <p className="text-sm text-slate-500">
            Custom quotes available for specialized materials, finishing, or unique requirements.
          </p>
        </div>
      </div>
    </section>
  );
}