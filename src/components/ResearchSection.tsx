
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, FileText, BookOpen, Activity } from 'lucide-react';

const ResearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('areas');

  const researchAreas = [
    {
      id: 1,
      title: "Clinical Decision Support Systems",
      description: "Developing AI-based systems that assist healthcare providers in making evidence-based clinical decisions, improving diagnostic accuracy and treatment planning.",
      icon: <Activity className="h-10 w-10 text-researcher-blue" />,
      tags: ["Machine Learning", "Clinical Data", "Decision Trees"]
    },
    {
      id: 2,
      title: "Medical Imaging Analysis",
      description: "Applying deep learning techniques to analyze medical images, enabling early detection of diseases and reducing the time required for diagnostic interpretation.",
      icon: <BookOpen className="h-10 w-10 text-researcher-teal" />,
      tags: ["Deep Learning", "CNN", "X-ray Analysis"]
    },
    {
      id: 3,
      title: "Personalized Treatment Planning",
      description: "Utilizing machine learning algorithms to develop personalized treatment plans based on individual patient data, genetic information, and treatment history.",
      icon: <FileText className="h-10 w-10 text-researcher-indigo" />,
      tags: ["NLP", "Genetic Algorithms", "Predictive Models"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "AI-Based Pneumonia Detection",
      description: "Developed a deep learning model that can detect pneumonia from chest X-rays with 95% accuracy, reducing diagnostic time by 60%.",
      year: "2023",
      link: "#",
      tags: ["Deep Learning", "Radiology", "Diagnostics"]
    },
    {
      id: 2,
      title: "Predictive Model for Treatment Response",
      description: "Created a machine learning model that predicts patient response to specific treatments based on clinical data and genetic markers.",
      year: "2022",
      link: "#",
      tags: ["Predictive Analytics", "Genetics", "Treatment Planning"]
    },
    {
      id: 3,
      title: "NLP for Clinical Notes Analysis",
      description: "Built a natural language processing system that extracts key insights from unstructured clinical notes, improving patient care coordination.",
      year: "2021",
      link: "#",
      tags: ["NLP", "Text Mining", "Healthcare Data"]
    }
  ];

  return (
    <section id="research" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Focus</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My research lies at the intersection of artificial intelligence and healthcare, 
            focusing on developing innovative solutions for real-world clinical challenges.
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
            <div className="grid md:grid-cols-3 gap-8">
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
