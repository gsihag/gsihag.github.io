
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, GraduationCap, Briefcase, Brain, Code2, Database, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSectionPreview: React.FC = () => {
  const skills = [
    "Machine Learning", "Bayesian Networks", "Python", "R", "Health Data Analytics",
    "Fall Risk Assessment", "Imbalanced Data", "AI in Healthcare"
  ];

  const education = [
    {
      degree: "Joint Ph.D. in Artificial Intelligence",
      institution: "Université Polytechnique Hauts-de-France & Université de Mons",
      year: "2019-2023",
      location: "France & Belgium",
      description: "Specialized in Bayesian networks for healthcare applications with focus on fall risk assessment in elderly populations",
      icon: <Brain className="w-6 h-6" />
    }
  ];

  const experience = [
    {
      position: "Post-Doctoral Researcher",
      organization: "Université Polytechnique Hauts-de-France (UPHF)",
      duration: "Oct 2024 - Present",
      location: "Valenciennes, France",
      description: "Leading research on health data analytics and developing ML methodologies for tracking patient health trajectories.",
      icon: <Database className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-teal-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-researcher-blue/5 to-researcher-teal/5 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-researcher-indigo/5 to-researcher-blue/5 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-researcher-blue via-researcher-teal to-researcher-indigo bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            I am a passionate AI researcher dedicated to advancing healthcare through innovative machine learning solutions.
          </p>
        </div>

        {/* Preview Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Education Preview */}
          <Card className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 interactive-card">
            <CardHeader className="bg-gradient-to-r from-researcher-blue/10 to-researcher-teal/10 rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-researcher-blue text-2xl">
                <div className="p-2 bg-researcher-blue/10 rounded-lg">
                  <GraduationCap className="h-6 w-6" />
                </div>
                Education
              </CardTitle>
              <CardDescription>Academic foundation in AI and mathematics</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {education.slice(0, 1).map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-researcher-blue/20">
                  <div className="absolute -left-3 top-2 p-1 bg-white dark:bg-slate-800 rounded-full border-2 border-researcher-blue/20">
                    <div className="text-researcher-blue">
                      {edu.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">{edu.degree}</h3>
                  <p className="text-researcher-blue font-semibold mb-2">{edu.institution}</p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Experience Preview */}
          <Card className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 interactive-card">
            <CardHeader className="bg-gradient-to-r from-researcher-teal/10 to-researcher-indigo/10 rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-researcher-teal text-2xl">
                <div className="p-2 bg-researcher-teal/10 rounded-lg">
                  <Briefcase className="h-6 w-6" />
                </div>
                Current Role
              </CardTitle>
              <CardDescription>Leading AI research in healthcare</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {experience.slice(0, 1).map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-researcher-teal/20">
                  <div className="absolute -left-3 top-2 p-1 bg-white dark:bg-slate-800 rounded-full border-2 border-researcher-teal/20">
                    <div className="text-researcher-teal">
                      {exp.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">{exp.position}</h3>
                  <p className="text-researcher-teal font-semibold mb-2">{exp.organization}</p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Skills Preview */}
        <Card className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm mb-8">
          <CardHeader className="text-center bg-gradient-to-r from-researcher-indigo/10 via-researcher-blue/10 to-researcher-teal/10 rounded-t-lg">
            <CardTitle className="text-2xl text-researcher-indigo flex items-center justify-center gap-3">
              <div className="p-2 bg-researcher-indigo/10 rounded-lg">
                <Cpu className="h-6 w-6" />
              </div>
              Key Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-sm py-2 px-4 justify-center bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 hover:from-researcher-blue hover:to-researcher-teal hover:text-white transition-all duration-300 cursor-default research-tag"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Explore More Button */}
        <div className="text-center">
          <Link to="/about">
            <Button size="lg" className="bg-gradient-to-r from-researcher-blue to-researcher-teal hover:from-researcher-blue-dark hover:to-researcher-teal text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Explore Full Background
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionPreview;
