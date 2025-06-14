
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Cpu, Network } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-white dark:bg-slate-950">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Single subtle accent */}
        <div className="absolute top-1/4 right-1/4 w-1 h-32 bg-researcher-blue/20 rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-24 bg-researcher-teal/20 -rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Minimal Header */}
          <div className="mb-8 animate-fade-in">
            <p className="text-sm font-medium text-researcher-blue uppercase tracking-wide mb-4">
              AI Researcher
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Dr. Gulshan Sihag
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              Advancing healthcare through intelligent data analytics and Bayesian machine learning
            </p>
          </div>
          
          {/* Minimal CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 px-8 py-3 text-base font-medium"
              onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Research
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 px-8 py-3 text-base font-medium"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About Me
            </Button>
          </div>
          
          {/* Minimal Research Focus */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center group">
              <Network className="w-8 h-8 text-researcher-blue mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Bayesian Networks</p>
            </div>
            <div className="text-center group">
              <Brain className="w-8 h-8 text-researcher-teal mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Healthcare AI</p>
            </div>
            <div className="text-center group">
              <Cpu className="w-8 h-8 text-researcher-indigo mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Machine Learning</p>
            </div>
          </div>
        </div>
        
        {/* Minimal Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">15+</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Publications</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">3+</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Years Research</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">PhD</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Computer Science</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">187</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Citations</p>
          </div>
        </div>
      </div>
      
      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-px h-8 bg-slate-400 dark:bg-slate-500"></div>
      </div>
    </section>
  );
};

export default HeroSection;
