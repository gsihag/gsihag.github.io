
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Activity, Database, TrendingUp, Users, FileText, ExternalLink, Calendar, Target } from 'lucide-react';

const ResearchPage: React.FC = () => {
  const currentProjects = [
    {
      title: "Advanced Bayesian Networks for Personalized Healthcare",
      description: "Developing next-generation Bayesian network models that incorporate temporal dynamics and multi-modal health data for personalized patient care trajectories.",
      status: "Active",
      duration: "Oct 2024 - Present",
      funding: "€150,000 - EU Horizon Europe",
      collaborators: ["UPHF", "CHU Lille", "Philips Healthcare"],
      technologies: ["Python", "PyMC3", "TensorFlow Probability", "FHIR"],
      outcomes: ["3 papers submitted", "1 patent pending"],
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "AI-Driven Fall Prevention in Smart Homes",
      description: "Integrating IoT sensors with machine learning algorithms to create predictive models for fall prevention in elderly care facilities and smart homes.",
      status: "Active",
      duration: "Jan 2024 - Present",
      funding: "€200,000 - ANR (French National Research Agency)",
      collaborators: ["LAMIH CNRS", "Orange Labs", "Aging Care Foundation"],
      technologies: ["IoT", "Edge Computing", "Real-time ML", "Computer Vision"],
      outcomes: ["2 publications", "1 demo system deployed"],
      icon: <Activity className="w-8 h-8" />
    }
  ];

  const completedProjects = [
    {
      title: "Imbalanced Data Handling in Healthcare AI",
      description: "Developed novel techniques for handling severely imbalanced datasets in healthcare applications, focusing on rare disease detection and adverse event prediction.",
      duration: "2021-2023",
      outcomes: ["5 peer-reviewed papers", "Best Paper Award at AIME 2023"],
      impact: "Adopted by 3 European hospitals",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Multi-Expert Knowledge Integration Framework",
      description: "Created a framework for integrating knowledge from multiple medical experts into Bayesian networks for clinical decision support systems.",
      duration: "2020-2022",
      outcomes: ["4 publications", "1 software framework"],
      impact: "Used in 2 clinical trials",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const researchAreas = [
    {
      area: "Bayesian Machine Learning",
      description: "Advanced probabilistic models for uncertainty quantification in healthcare AI",
      applications: ["Clinical Decision Support", "Risk Assessment", "Personalized Medicine"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      area: "Healthcare Data Analytics",
      description: "Mining insights from complex, multi-modal healthcare datasets",
      applications: ["Electronic Health Records", "Wearable Devices", "Medical Imaging"],
      icon: <Activity className="w-6 h-6" />
    },
    {
      area: "Imbalanced Learning",
      description: "Techniques for learning from datasets with severe class imbalance",
      applications: ["Rare Disease Detection", "Adverse Event Prediction", "Fraud Detection"],
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      area: "Expert Knowledge Integration",
      description: "Methods for incorporating domain expertise into machine learning models",
      applications: ["Clinical Guidelines", "Medical Ontologies", "Expert Systems"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <Layout className="bg-gradient-to-br from-slate-50 via-blue-50/20 to-teal-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-researcher-blue/5 to-researcher-teal/5 animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-researcher-indigo/5 to-researcher-blue/5 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-researcher-blue via-researcher-teal to-researcher-indigo bg-clip-text text-transparent">
                Research Portfolio
              </span>
            </h1>
            <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Advancing the frontiers of AI in healthcare through innovative research and collaborative partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-researcher-blue to-researcher-teal bg-clip-text text-transparent">
              Active Research Projects
            </span>
          </h2>
          
          <div className="space-y-8">
            {currentProjects.map((project, index) => (
              <Card key={index} className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-researcher-blue/10 to-researcher-teal/10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-researcher-blue/10 rounded-lg text-researcher-blue">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-researcher-blue mb-2">{project.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {project.duration}
                          </span>
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Funding & Collaborators</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{project.funding}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.collaborators.map((collab, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {collab}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-researcher-blue/10 text-researcher-blue">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Current Outcomes</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.outcomes.map((outcome, i) => (
                        <Badge key={i} className="bg-researcher-teal/10 text-researcher-teal border-researcher-teal/20">
                          {outcome}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white/50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-researcher-indigo to-researcher-teal bg-clip-text text-transparent">
              Research Focus Areas
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-researcher-indigo/10 to-researcher-blue/10">
                  <CardTitle className="flex items-center gap-3 text-researcher-indigo">
                    <div className="p-2 bg-researcher-indigo/10 rounded-lg">
                      {area.icon}
                    </div>
                    {area.area}
                  </CardTitle>
                  <CardDescription className="text-base">{area.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Key Applications:</h4>
                  <div className="space-y-2">
                    {area.applications.map((app, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-researcher-indigo" />
                        <span className="text-slate-600 dark:text-slate-300">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-researcher-teal to-researcher-blue bg-clip-text text-transparent">
              Completed Research
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <Card key={index} className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-researcher-teal/10 to-researcher-blue/10">
                  <CardTitle className="flex items-center gap-3 text-researcher-teal">
                    <div className="p-2 bg-researcher-teal/10 rounded-lg">
                      {project.icon}
                    </div>
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Duration: {project.duration}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Outcomes:</h4>
                      <div className="space-y-1">
                        {project.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-researcher-teal" />
                            <span className="text-slate-600 dark:text-slate-300">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Impact:</h4>
                      <p className="text-slate-600 dark:text-slate-300">{project.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-researcher-blue to-researcher-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Interested in Collaboration?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            I'm always open to discussing new research opportunities, partnerships, and innovative projects in AI and healthcare.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-researcher-blue hover:bg-gray-100">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Publications
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-researcher-blue">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResearchPage;
