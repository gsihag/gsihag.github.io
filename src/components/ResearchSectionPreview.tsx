
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Activity, Database, TrendingUp, Users, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResearchSectionPreview: React.FC = () => {
  const featuredProject = {
    title: "Advanced Bayesian Networks for Personalized Healthcare",
    description: "Developing next-generation Bayesian network models that incorporate temporal dynamics and multi-modal health data for personalized patient care trajectories.",
    status: "Active",
    duration: "Oct 2024 - Present",
    funding: "€150,000 - EU Horizon Europe",
    technologies: ["Python", "PyMC3", "TensorFlow Probability", "FHIR"],
    icon: <Brain className="w-8 h-8" />
  };

  const researchAreas = [
    {
      area: "Bayesian Machine Learning",
      description: "Advanced probabilistic models for uncertainty quantification in healthcare AI",
      icon: <Brain className="w-6 h-6" />
    },
    {
      area: "Healthcare Data Analytics",
      description: "Mining insights from complex, multi-modal healthcare datasets",
      icon: <Activity className="w-6 h-6" />
    },
    {
      area: "Imbalanced Learning",
      description: "Techniques for learning from datasets with severe class imbalance",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section id="research" className="py-20 bg-white/50 dark:bg-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-researcher-blue/10 to-researcher-teal/10 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-gradient-to-tr from-researcher-indigo/10 to-researcher-blue/10 animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-researcher-blue via-researcher-teal to-researcher-indigo bg-clip-text text-transparent">
              Current Research
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Advancing the frontiers of AI in healthcare through innovative research and collaborative partnerships
          </p>
        </div>

        {/* Featured Project */}
        <Card className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 mb-12">
          <CardHeader className="bg-gradient-to-r from-researcher-blue/10 to-researcher-teal/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-researcher-blue/10 rounded-lg text-researcher-blue">
                {featuredProject.icon}
              </div>
              <div>
                <CardTitle className="text-2xl text-researcher-blue mb-2">{featuredProject.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredProject.duration}
                  </span>
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    {featuredProject.status}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              {featuredProject.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Funding</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{featuredProject.funding}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Key Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs bg-researcher-blue/10 text-researcher-blue">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Research Areas Preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {researchAreas.map((area, index) => (
            <Card key={index} className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-researcher-indigo/10 to-researcher-blue/10">
                <CardTitle className="flex items-center gap-3 text-researcher-indigo">
                  <div className="p-2 bg-researcher-indigo/10 rounded-lg">
                    {area.icon}
                  </div>
                  {area.area}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-600 dark:text-slate-300">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <Link to="/research">
            <Button size="lg" className="bg-gradient-to-r from-researcher-blue to-researcher-teal hover:from-researcher-blue-dark hover:to-researcher-teal text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Explore All Research Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchSectionPreview;
