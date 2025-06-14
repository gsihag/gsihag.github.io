
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Activity, TrendingUp, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResearchSectionPreview: React.FC = () => {
  const featuredProject = {
    title: "Advanced Bayesian Networks for Personalized Healthcare",
    description: "Developing next-generation Bayesian network models that incorporate temporal dynamics and multi-modal health data for personalized patient care trajectories.",
    status: "Active",
    duration: "Oct 2024 - Present",
    funding: "€150,000 - EU Horizon Europe",
    technologies: ["Python", "PyMC3", "TensorFlow Probability", "FHIR"]
  };

  const researchAreas = [
    {
      area: "Bayesian Machine Learning",
      description: "Advanced probabilistic models for uncertainty quantification in healthcare AI",
      icon: <Brain className="w-5 h-5" />
    },
    {
      area: "Healthcare Data Analytics", 
      description: "Mining insights from complex, multi-modal healthcare datasets",
      icon: <Activity className="w-5 h-5" />
    },
    {
      area: "Imbalanced Learning",
      description: "Techniques for learning from datasets with severe class imbalance",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  return (
    <section id="research" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Current Research
            </h2>
            <div className="w-12 h-px bg-researcher-blue mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Advancing the frontiers of AI in healthcare through innovative research
            </p>
          </div>

          {/* Featured Project */}
          <Card className="border-none shadow-lg bg-white dark:bg-slate-800 mb-12">
            <CardHeader className="border-b border-slate-100 dark:border-slate-700">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl text-slate-900 dark:text-white mb-2">
                    {featuredProject.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredProject.duration}
                    </span>
                    <Badge variant="outline" className="border-green-200 text-green-800 bg-green-50">
                      {featuredProject.status}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {featuredProject.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">Funding</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{featuredProject.funding}</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Areas */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {researchAreas.map((area, index) => (
              <Card key={index} className="border-none shadow-lg bg-white dark:bg-slate-800 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-300">
                      {area.icon}
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{area.area}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/research">
              <Button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100">
                Explore All Research
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSectionPreview;
