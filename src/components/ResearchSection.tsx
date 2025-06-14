
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Network, Activity, Users, Database, Zap, ArrowRight, ExternalLink } from 'lucide-react';

const ResearchSection: React.FC = () => {
  const researchAreas = [
    {
      id: 1,
      title: "Bayesian Networks in Healthcare",
      description: "Developing probabilistic graphical models for medical decision-making and risk assessment, with special focus on handling uncertainty and incomplete patient data.",
      icon: <Network className="h-8 w-8" />,
      color: "researcher-blue",
      applications: ["Fall Risk Assessment", "Medical Diagnosis", "Treatment Planning", "Risk Prediction"],
      impact: "Improved diagnostic accuracy by 25% in elderly care scenarios"
    },
    {
      id: 2,
      title: "Health Data Analytics",
      description: "Advanced machine learning techniques for processing temporal, missing, and heterogeneous medical datasets to extract meaningful insights for patient care.",
      icon: <Activity className="h-8 w-8" />,
      color: "researcher-teal",
      applications: ["Patient Trajectory Analysis", "Missing Data Imputation", "Temporal Modeling", "Predictive Analytics"],
      impact: "Enhanced patient monitoring systems for 10,000+ patients"
    },
    {
      id: 3,
      title: "AI for Elderly Care",
      description: "Specialized AI systems focusing on geriatric healthcare challenges, including fall prevention, medication management, and quality of life improvement.",
      icon: <Users className="h-8 w-8" />,
      color: "researcher-indigo",
      applications: ["Fall Prevention", "Medication Adherence", "Cognitive Assessment", "Emergency Response"],
      impact: "Reduced fall incidents by 30% in monitored populations"
    }
  ];

  const currentProjects = [
    {
      title: "Diabetic Patient Health Trajectories",
      status: "Ongoing",
      description: "Developing ML algorithms to track and predict health trajectories for diabetic patients using heterogeneous medical data.",
      technologies: ["Python", "Bayesian Networks", "Time Series Analysis"],
      collaboration: "University of Lille & Lille's Hospital"
    },
    {
      title: "RASTAF-ARI Project",
      status: "Completed",
      description: "Statistical analysis and interface development for prosthetic settings optimization for amputee patients.",
      technologies: ["Python", "Statistical Analysis", "UI Development"],
      collaboration: "LAMIH, CNRS"
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Neural Network Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.2" />
            </radialGradient>
            <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="50%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
          
          {/* Animated network connections */}
          <g className="animate-pulse">
            <circle cx="10%" cy="20%" r="4" fill="url(#nodeGradient)" />
            <circle cx="30%" cy="15%" r="6" fill="url(#nodeGradient)" />
            <circle cx="20%" cy="40%" r="5" fill="url(#nodeGradient)" />
            <circle cx="50%" cy="10%" r="7" fill="url(#nodeGradient)" />
            <circle cx="70%" cy="25%" r="5" fill="url(#nodeGradient)" />
            <circle cx="90%" cy="20%" r="4" fill="url(#nodeGradient)" />
            
            <line x1="10%" y1="20%" x2="30%" y2="15%" stroke="url(#linkGradient)" strokeWidth="1" opacity="0.6" />
            <line x1="30%" y1="15%" x2="50%" y2="10%" stroke="url(#linkGradient)" strokeWidth="1" opacity="0.6" />
            <line x1="20%" y1="40%" x2="70%" y2="25%" stroke="url(#linkGradient)" strokeWidth="1" opacity="0.6" />
            <line x1="70%" y1="25%" x2="90%" y2="20%" stroke="url(#linkGradient)" strokeWidth="1" opacity="0.6" />
          </g>
        </svg>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-researcher-blue/10 to-researcher-teal/10 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-gradient-to-tr from-researcher-indigo/10 to-researcher-blue/10 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
              Research Focus
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Pioneering AI-driven solutions for healthcare challenges through innovative research 
            in machine learning, data analytics, and intelligent systems.
          </p>
        </div>

        {/* Research Areas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <Card key={area.id} className="border-none shadow-xl bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 interactive-card group">
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 rounded-full bg-${area.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-${area.color === 'researcher-blue' ? 'blue-400' : area.color === 'researcher-teal' ? 'teal-400' : 'purple-400'}`}>
                    {area.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-white mb-2">{area.title}</CardTitle>
                <CardDescription className="text-slate-300 leading-relaxed">
                  {area.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-200 mb-2">Key Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.applications.map((app) => (
                      <Badge key={app} variant="outline" className="text-xs bg-slate-700 text-slate-300 border-slate-600">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-700">
                  <p className="text-sm text-teal-400 font-medium">
                    <Zap className="inline h-4 w-4 mr-1" />
                    {area.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Current Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {currentProjects.map((project, index) => (
              <Card key={index} className="border-none shadow-xl bg-slate-800/60 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold text-white">{project.title}</CardTitle>
                    <Badge className={`${project.status === 'Ongoing' ? 'bg-green-600' : 'bg-blue-600'} text-white`}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-slate-200 mb-1">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs bg-slate-700 text-slate-300 border-slate-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-teal-400">
                      <Database className="inline h-4 w-4 mr-1" />
                      Collaboration: {project.collaboration}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <Card className="inline-block border-none shadow-xl bg-gradient-to-r from-researcher-blue/20 to-researcher-teal/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <Brain className="mx-auto h-12 w-12 text-teal-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Explore My Research</h3>
              <p className="text-slate-300 mb-6 max-w-md">
                Dive deeper into my publications and discover how AI is transforming healthcare outcomes.
              </p>
              <Button 
                className="bg-gradient-to-r from-researcher-blue to-researcher-teal hover:from-researcher-blue/90 hover:to-researcher-teal/90 text-white shadow-lg"
                onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
