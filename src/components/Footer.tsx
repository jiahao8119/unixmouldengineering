import React from 'react';
import { Cog } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-steel-950 text-steel-300 py-16 border-t border-steel-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <Cog className="w-8 h-8 text-primary-500" />
              <span>Unix Mould</span>
            </div>
            <p className="text-steel-500 text-sm leading-relaxed">
              Precision engineering solutions for the modern world. Specializing in CNC machining, mould fabrication, and EDM services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Capabilities</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">CNC Milling</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Wirecut EDM</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Mould Design</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Surface Grinding</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Prototyping</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-steel-500">A:</span>
                <span>{import.meta.env.VITE_FACILITY_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-steel-500">P:</span>
                <span>{import.meta.env.VITE_PHONE_MAIN}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-steel-500">E:</span>
                <span>{import.meta.env.VITE_EMAIL_QUOTES}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-steel-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-steel-600">
          <p>&copy; {new Date().getFullYear()} Unix Mould Engineering. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
