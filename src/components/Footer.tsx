
import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-researcher-blue to-researcher-teal bg-clip-text text-transparent mb-4">
              Dr. Gulshan Sihag
            </h3>
            <p className="text-slate-300 mb-4 max-w-md">
              Advancing healthcare through innovative AI research and interdisciplinary collaboration.
            </p>
            <p className="text-slate-400 text-sm">
              © {currentYear} Dr. Gulshan Sihag. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#research" className="text-slate-300 hover:text-white transition-colors">Research</a>
              </li>
              <li>
                <a href="#publications" className="text-slate-300 hover:text-white transition-colors">Publications</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.uphf.fr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  University Profile
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://scholar.google.com/citations?user=YOUR_ID" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Google Scholar
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/gulshansihag" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  GitHub
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/gulshansihag" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-sm text-slate-400">
          <p className="flex items-center justify-center gap-2">
            Made with 
            <Heart className="h-4 w-4 text-red-500 animate-pulse" fill="currentColor" />
            by Gulshan Sihag
          </p>
          <p className="mt-2">Created with React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
