import React from 'react';
import { Code2, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold">langcraft</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Empowering domain experts with tailored DSLs and language engineering solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/langcraft/" className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-900 transition-colors" target="_blank">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-neutral-400 hover:text-white transition-colors">
                  DSL Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-white transition-colors">
                  Code Generation
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-white transition-colors">
                  Language Servers
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-white transition-colors">
                  IDE Plugins
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Engagement</h3>
            <ul className="space-y-3">
              <li>
                <a href="#engagement" className="text-neutral-400 hover:text-white transition-colors">
                  Development
                </a>
              </li>
              <li>
                <a href="#engagement" className="text-neutral-400 hover:text-white transition-colors">
                  Training
                </a>
              </li>
              <li>
                <a href="#engagement" className="text-neutral-400 hover:text-white transition-colors">
                  Consulting
                </a>
              </li>
              <li>
                <a href="#engagement" className="text-neutral-400 hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-neutral-400">
                <span className="block">Email:</span>
                <a href="mailto:contact@langcraft.tech" className="hover:text-white transition-colors">
                  contact@langcraft.tech
                </a>
              </li>
              <li className="text-neutral-400">
                <span className="block">Phone:</span>
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +91 8971000752
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-800 text-neutral-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Langcraft. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;