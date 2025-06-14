
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, FileText, BookOpen, Activity, Users, Brain, Database } from 'lucide-react';

const ResearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('areas');

  const researchAreas = [
    {
      id: 1,
      title: "Bayesian Networks in Healthcare",
      description: "Developing probabilistic graphical models to assess health risks and support clinical decision-making. Specializing in building Bayesian networks that combine real clinical data with expert medical knowledge for comprehensive risk assessment.",
      icon: <Brain className="h-10 w-10 text-researcher-blue" />,
      tags: ["Bayesian Networks", "Risk Assessment", "Clinical Data", "Expert Knowledge Integration"]
    },
    {
      id: 2,
      title: "Fall Risk Prediction in Elderly",
      description: "Creating predictive models to assess multiple risk factors for falls among elderly populations. Utilizing machine learning techniques with partial health information to improve fall prevention strategies and patient care.",
      icon: <Activity className="h-10 w-10 text-researcher-teal" />,
      tags: ["Fall Prevention", "Elderly Care", "Risk Factors", "Predictive Modeling"]
    },
    {
      id: 3,
      title: "Imbalanced Data Handling",
      description: "Researching advanced oversampling techniques for imbalanced healthcare datasets. Developing novel approaches combining GANs, SMOTE, and other methods to improve machine learning performance on rare medical conditions.",
      icon: <Database className="h-10 w-10 text-researcher-indigo" />,
      tags: ["Imbalanced Data", "Oversampling", "SMOTE", "GANs", "Healthcare Data"]
    },
    {
      id: 4,
      title: "AI in Healthcare Applications",
      description: "Applying artificial intelligence and machine learning techniques to solve real-world healthcare challenges. Focus on developing practical solutions that can be implemented in clinical settings to improve patient outcomes.",
      icon: <Users className="h-10 w-10 text-researcher-slate" />,
      tags: ["AI Healthcare", "Machine Learning", "Clinical Applications", "Patient Outcomes"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Bayesian Network for Fall Risk Assessment",
      description: "Developed a comprehensive Bayesian network that combines real clinical data with expert medical knowledge to assess multiple risk factors for falls among elderly people. The model can predict fall risks even with partial health information.",
      year: "2020-2024",
      link: "https://doi.org/10.1016/j.eswa.2024.124106",
      tags: ["Bayesian Networks", "Fall Prevention", "Expert Systems", "Healthcare"]
    },
    {
      id: 2,
      title: "Oversampling Techniques for Imbalanced Healthcare Data",
      description: "Systematic research on using oversampling methods with Bayesian networks when dealing with imbalanced medical datasets. Evaluated various techniques including SMOTE and novel approaches for improving prediction accuracy.",
      year: "2021-2025",
      link: "#",
      tags: ["Oversampling", "SMOTE", "Imbalanced Data", "Healthcare Analytics"]
    },
    {
      id: 3,
      title: "Temporal Data Simulation for Fall Prevention",
      description: "Created temporal data simulation models based on real healthcare datasets to improve fall prevention strategies. The work focuses on generating synthetic temporal health data for training predictive models.",
      year: "2021",
      link: "#",
      tags: ["Temporal Data", "Simulation", "Fall Prevention", "Data Generation"]
    },
    {
      id: 4,
      title: "GAN-based Approaches for Healthcare Data",
      description: "Research on using Generative Adversarial Networks (GANs) for rebalancing imbalanced healthcare datasets. Systematic mapping study of GAN applications in medical data augmentation and synthetic data generation.",
      year: "2022-2025",
      link: "#",
      tags: ["GANs", "Data Augmentation", "Healthcare", "Synthetic Data"]
    }
  ];

  return (
    <section id="research" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Focus</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            My research lies at the intersection of artificial intelligence and healthcare, focusing on 
            Bayesian networks, fall risk assessment in elderly populations, and advanced techniques for 
            handling imbalanced healthcare data to improve clinical decision-making.
          </p>
        </div>

        <Tabs defaultValue="areas" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-slate-100 dark:bg-slate-800">
              <TabsTrigger value="areas" className="text-sm md:text-base">Research Areas</TabsTrigger>
              <TabsTrigger value="projects" className="text-sm md:text-base">Key Projects</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="areas" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {researchAreas.map((area) => (
                <Card key={area.id} className="group hover:shadow-lg transition-shadow duration-300 border-none bg-white dark:bg-slate-800">
                  <CardHeader>
                    <div className="mb-4">{area.icon}</div>
                    <CardTitle className="text-xl font-bold group-hover:text-researcher-blue transition-colors">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      {area.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2">
                    {area.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200">
                        {tag}
                      </Badge>
                    ))}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden group border-none bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="relative">
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-researcher-blue text-white">
                        {project.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-researcher-blue transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-researcher-blue hover:text-researcher-blue-dark transition-colors"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResearchSection;
