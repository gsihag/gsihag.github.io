
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Cpu, Network, Database } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* AI-themed Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Neural Network Nodes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-researcher-blue/20 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-3 h-3 rounded-full bg-researcher-teal/30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/5 w-5 h-5 rounded-full bg-researcher-indigo/25 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-2/5 w-3 h-3 rounded-full bg-researcher-blue/30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        <div className="absolute top-1/5 right-1/4 w-3 h-3 rounded-full bg-researcher-teal/25 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/5 right-1/3 w-4 h-4 rounded-full bg-researcher-indigo/20 animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-3/5 right-1/5 w-5 h-5 rounded-full bg-researcher-blue/25 animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>
          </defs>
          <line x1="25%" y1="25%" x2="33%" y2="33%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
          <line x1="33%" y1="33%" x2="20%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '0.5s'}} />
          <line x1="20%" y1="50%" x2="40%" y2="66%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1s'}} />
          <line x1="75%" y1="20%" x2="66%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1.5s'}} />
          <line x1="66%" y1="40%" x2="80%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '2s'}} />
        </svg>
        
        {/* Large Background Shapes */}
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-researcher-blue/5 to-researcher-teal/5 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gradient-to-tr from-researcher-indigo/5 to-researcher-blue/5 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-researcher-blue" />
                <span className="text-sm font-semibold text-researcher-blue bg-researcher-blue/10 px-3 py-1 rounded-full">
                  AI Researcher
                </span>
              </div>
            </div>
            
            <h1 className="mb-6 animate-fade-in">
              <span className="block text-xl font-semibold text-researcher-blue mb-3">Dr. Gulshan Sihag</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white leading-tight">
                Advancing
                <span className="block bg-gradient-to-r from-researcher-blue via-researcher-teal to-researcher-indigo bg-clip-text text-transparent">
                  Healthcare AI
                </span>
              </span>
              <span className="block text-xl md:text-2xl text-slate-600 dark:text-slate-300 mt-3 font-medium">
                Through Intelligent Data Analytics
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Pioneering the intersection of artificial intelligence and healthcare through 
              <span className="font-semibold text-researcher-blue"> Bayesian networks</span>, 
              <span className="font-semibold text-researcher-teal"> machine learning algorithms</span>, and 
              <span className="font-semibold text-researcher-indigo"> predictive analytics</span> to transform patient care outcomes.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                className="bg-gradient-to-r from-researcher-blue to-researcher-teal hover:from-researcher-blue/90 hover:to-researcher-teal/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
                onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Research
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-researcher-blue text-researcher-blue hover:bg-researcher-blue hover:text-white transition-all duration-300"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                About Me
              </Button>
            </div>
            
            {/* Research Areas Tags */}
            <div className="flex flex-wrap gap-3 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                <Network className="w-4 h-4 text-researcher-blue" />
                <span className="text-sm font-medium">Bayesian Networks</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                <Database className="w-4 h-4 text-researcher-teal" />
                <span className="text-sm font-medium">Health Analytics</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                <Cpu className="w-4 h-4 text-researcher-indigo" />
                <span className="text-sm font-medium">Machine Learning</span>
              </div>
            </div>
          </div>
          
          {/* Visual Side */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
            {/* AI Circuit Board Visualization */}
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-2xl">
              {/* Neural Network Visualization */}
              <div className="absolute inset-4">
                <svg className="w-full h-full" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                  {/* Network Nodes */}
                  <circle cx="60" cy="80" r="8" fill="#0EA5E9" className="animate-pulse" />
                  <circle cx="60" cy="150" r="8" fill="#14B8A6" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                  <circle cx="60" cy="220" r="8" fill="#6366F1" className="animate-pulse" style={{animationDelay: '1s'}} />
                  
                  <circle cx="150" cy="60" r="10" fill="#0EA5E9" className="animate-pulse" style={{animationDelay: '1.5s'}} />
                  <circle cx="150" cy="120" r="10" fill="#14B8A6" className="animate-pulse" style={{animationDelay: '2s'}} />
                  <circle cx="150" cy="180" r="10" fill="#6366F1" className="animate-pulse" style={{animationDelay: '2.5s'}} />
                  <circle cx="150" cy="240" r="10" fill="#0EA5E9" className="animate-pulse" style={{animationDelay: '3s'}} />
                  
                  <circle cx="240" cy="100" r="12" fill="#14B8A6" className="animate-pulse" style={{animationDelay: '0.2s'}} />
                  <circle cx="240" cy="180" r="12" fill="#6366F1" className="animate-pulse" style={{animationDelay: '0.7s'}} />
                  
                  {/* Connections */}
                  <line x1="68" y1="80" x2="142" y2="60" stroke="#0EA5E9" strokeWidth="2" opacity="0.6" className="animate-pulse" />
                  <line x1="68" y1="150" x2="142" y2="120" stroke="#14B8A6" strokeWidth="2" opacity="0.6" className="animate-pulse" style={{animationDelay: '0.3s'}} />
                  <line x1="68" y1="220" x2="142" y2="240" stroke="#6366F1" strokeWidth="2" opacity="0.6" className="animate-pulse" style={{animationDelay: '0.6s'}} />
                  
                  <line x1="158" y1="60" x2="232" y2="100" stroke="#0EA5E9" strokeWidth="3" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.9s'}} />
                  <line x1="158" y1="180" x2="232" y2="180" stroke="#6366F1" strokeWidth="3" opacity="0.8" className="animate-pulse" style={{animationDelay: '1.2s'}} />
                  <line x1="158" y1="120" x2="232" y2="100" stroke="#14B8A6" strokeWidth="2" opacity="0.6" className="animate-pulse" style={{animationDelay: '1.5s'}} />
                </svg>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute top-4 right-4 animate-float">
                <Brain className="w-8 h-8 text-researcher-blue" />
              </div>
              <div className="absolute bottom-4 left-4 animate-float" style={{animationDelay: '1s'}}>
                <Database className="w-6 h-6 text-researcher-teal" />
              </div>
              <div className="absolute top-1/2 right-8 animate-float" style={{animationDelay: '2s'}}>
                <Cpu className="w-7 h-7 text-researcher-indigo" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="text-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
            <p className="text-3xl font-bold bg-gradient-to-r from-researcher-blue to-researcher-teal bg-clip-text text-transparent">11+</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Publications</p>
          </div>
          <div className="text-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
            <p className="text-3xl font-bold bg-gradient-to-r from-researcher-teal to-researcher-indigo bg-clip-text text-transparent">3+</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Years Research</p>
          </div>
          <div className="text-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
            <p className="text-3xl font-bold bg-gradient-to-r from-researcher-indigo to-researcher-blue bg-clip-text text-transparent">PhD</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Computer Science</p>
          </div>
          <div className="text-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
            <p className="text-3xl font-bold text-slate-600 dark:text-slate-300">AI & ML</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Expertise</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
          <div className="w-1 h-3 bg-researcher-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
