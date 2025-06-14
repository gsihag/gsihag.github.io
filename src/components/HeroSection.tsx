
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Elements - Interactive Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-researcher-blue/10 animate-pulse-glow"></div>
        <div className="absolute top-2/3 left-2/3 w-48 h-48 rounded-full bg-researcher-teal/10 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-researcher-indigo/10 animate-pulse-glow" style={{animationDelay: '2s'}}></div>
        
        {/* Interactive cursor follower */}
        <div 
          className="hidden md:block absolute w-64 h-64 rounded-full bg-gradient-to-r from-researcher-blue/5 to-researcher-teal/5 blur-3xl"
          style={{
            transform: `translate(${cursorPosition.x - 128}px, ${cursorPosition.y - 128}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <h1 className="mb-6 animate-fade-in">
            <span className="block text-lg font-semibold text-researcher-blue mb-2">Dr. Gulshan Sihag</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white">
              AI in Healthcare Research
            </span>
            <span className="block text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mt-2">
              Post-Doctoral Researcher
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Conducting comprehensive research on health data analytics, focusing on developing 
            innovative methodologies for tracking and predicting patient's health trajectories 
            using advanced machine learning algorithms and Bayesian networks.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="bg-researcher-blue hover:bg-researcher-blue-dark text-white"
              size="lg"
              onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Research
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-researcher-blue text-researcher-blue hover:bg-researcher-blue/5"
              onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Publications
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-researcher-teal text-researcher-teal hover:bg-researcher-teal/5"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <p className="text-3xl font-bold text-researcher-blue">11+</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Publications</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-researcher-teal">3</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-researcher-indigo">2</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Degrees</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-600">4</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Languages</p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-400 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="mailto:gulshansihag01@gmail.com" className="hover:text-researcher-blue transition-colors">
              gulshansihag01@gmail.com
            </a>
            <span>+33635567595</span>
            <a href="/gulshansihag/" className="hover:text-researcher-blue transition-colors">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
