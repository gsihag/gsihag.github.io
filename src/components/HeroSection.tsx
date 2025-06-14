
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-researcher-blue/10 animate-pulse"></div>
        <div className="absolute top-2/3 left-2/3 w-48 h-48 rounded-full bg-researcher-teal/10 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-researcher-indigo/10 animate-pulse" style={{animationDelay: '2s'}}></div>
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
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 animate-fade-in max-w-3xl" style={{ animationDelay: '0.2s' }}>
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
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More About Me
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <p className="text-3xl font-bold text-researcher-blue">11+</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Publications</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-researcher-teal">3+</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Years Research</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-researcher-indigo">PhD</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Computer Science</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-600">AI & ML</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Expertise</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
