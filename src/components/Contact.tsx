import React from 'react';
import { Mail, Phone, MapPin, Upload } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="text-4xl font-bold text-steel-900 mb-6">
              Start Your Project
            </h3>
            <p className="text-lg text-steel-600 mb-12 leading-relaxed">
              Ready to bring your designs to life? Send us your requirements for a fast, competitive quote. 
              Our engineering team reviews all inquiries within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-sm flex items-center justify-center shrink-0 text-primary-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-steel-900 text-lg mb-1">Visit Our Facility</h4>
                  {/*use Environment variables*/}
                  <p className="text-steel-600">
                    {import.meta.env.VITE_FACILITY_ADDRESS}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-sm flex items-center justify-center shrink-0 text-primary-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-steel-900 text-lg mb-1">Email Us</h4>
                  {/*use Environment variables*/}
                  <p className="text-steel-600">{import.meta.env.VITE_EMAIL_QUOTES}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-sm flex items-center justify-center shrink-0 text-primary-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-steel-900 text-lg mb-1">Call Us</h4>
                  <p className="text-steel-600">+6012 255 1462</p>
                  <p className="text-sm text-steel-500 mt-1">Mon-Fri, 9am - 6pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-steel-50 p-8 rounded-sm border border-steel-200 shadow-lg">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-steel-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white border border-steel-300 rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-steel-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white border border-steel-300 rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="Company Ltd"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-steel-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white border border-steel-300 rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-steel-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-white border border-steel-300 rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="+60 12 345 6789"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-steel-700 mb-2">Project Details</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-steel-300 rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="Describe your project requirements, material, quantity, etc."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold text-steel-700 mb-2">Upload CAD/Drawings (Optional)</label>
                <div className="border-2 border-dashed border-steel-300 rounded-sm p-6 text-center hover:border-primary-500 hover:bg-primary-50/50 transition-all cursor-pointer group">
                  <Upload className="w-8 h-8 text-steel-400 mx-auto mb-2 group-hover:text-primary-500 transition-colors" />
                  <p className="text-sm text-steel-600">
                    Drag and drop files here, or <span className="text-primary-600 font-bold">browse</span>
                  </p>
                  <p className="text-xs text-steel-400 mt-1">Supported: STEP, IGES, DXF, PDF (Max 20MB)</p>
                </div>
              </div>

              <button className="w-full py-4 bg-primary-600 text-white font-bold text-lg rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-900/10">
                Submit Project Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
