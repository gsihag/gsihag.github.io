
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Brain, Database, Languages } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Technical Skills",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 85 },
        { name: "MATLAB", level: 80 },
        { name: "LaTeX", level: 75 },
        { name: "Microsoft Office", level: 85 },
        { name: "GitHub", level: 80 }
      ]
    },
    {
      id: 2,
      title: "Research & AI",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Machine Learning", level: 95 },
        { name: "Bayesian Networks", level: 90 },
        { name: "Data Analysis", level: 90 },
        { name: "Academic Research", level: 95 },
        { name: "Healthcare AI", level: 85 },
        { name: "Statistical Modeling", level: 85 }
      ]
    },
    {
      id: 3,
      title: "Data & Analytics",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Data Preprocessing", level: 90 },
        { name: "Missing Value Imputation", level: 85 },
        { name: "Statistical Analysis", level: 90 },
        { name: "Risk Assessment Models", level: 85 },
        { name: "Healthcare Data", level: 80 },
        { name: "Temporal Data Analysis", level: 80 }
      ]
    },
    {
      id: 4,
      title: "Languages",
      icon: <Languages className="h-6 w-6" />,
      skills: [
        { name: "English", level: 95 },
        { name: "Hindi (Native)", level: 100 },
        { name: "Punjabi", level: 90 },
        { name: "French (Beginner)", level: 40 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 75) return "bg-blue-500";
    if (level >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive technical and research skills developed through academic training 
            and hands-on research experience in AI and healthcare analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.id} className="border-none shadow-lg bg-white dark:bg-slate-800">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-slate-800 dark:text-white">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-researcher-blue/10">
                    <div className="text-researcher-blue">
                      {category.icon}
                    </div>
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <Badge 
                          variant="outline" 
                          className={`text-white border-none ${getSkillColor(skill.level)}`}
                        >
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-center mb-6">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Risk Factor Analysis", "Fall Prevention", "Medical Data Mining", 
              "Probabilistic Models", "Healthcare Informatics", "Interdisciplinary Research",
              "Data Visualization", "Scientific Writing", "Peer Review", "Conference Presentations"
            ].map((skill) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="bg-slate-100 dark:bg-slate-700 hover:bg-researcher-blue hover:text-white transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
