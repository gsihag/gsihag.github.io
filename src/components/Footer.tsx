
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-researcher-blue to-researcher-teal bg-clip-text text-transparent mb-4">
              Dr. Jane Smith
            </h3>
            <p className="text-slate-300 mb-4 max-w-md">
              Advancing healthcare through innovative AI research and interdisciplinary collaboration.
            </p>
            <p className="text-slate-400 text-sm">
              © {currentYear} Dr. Jane Smith. All rights reserved.
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
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Research Lab</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">University Profile</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Google Scholar</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>Created with React and Tailwind CSS. Hosted on GitHub Pages.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
