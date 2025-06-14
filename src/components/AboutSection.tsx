
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, GraduationCap, Briefcase, Brain, Code2, Database, Cpu } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    "Machine Learning", "Bayesian Networks", "Python", "R", "Health Data Analytics",
    "Fall Risk Assessment", "Imbalanced Data", "AI in Healthcare", "Statistical Analysis",
    "Data Mining", "Deep Learning", "Research Methodology"
  ];

  const education = [
    {
      degree: "Joint Ph.D. in Artificial Intelligence",
      institution: "Université Polytechnique Hauts-de-France & Université de Mons",
      year: "2019-2023",
      location: "France & Belgium",
      description: "Specialized in Bayesian networks for healthcare applications with focus on fall risk assessment in elderly populations",
      icon: <Brain className="w-6 h-6" />
    },
    {
      degree: "M.Sc. in Mathematics",
      institution: "Indian Institute of Technology Jodhpur",
      year: "2017-2019",
      location: "Jodhpur, India",
      description: "Advanced studies in applied mathematics and statistical methods with research focus",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const experience = [
    {
      position: "Post-Doctoral Researcher",
      organization: "Université Polytechnique Hauts-de-France (UPHF)",
      duration: "Oct 2024 - Present",
      location: "Valenciennes, France",
      description: "Leading research on health data analytics and developing ML methodologies for tracking patient health trajectories using advanced algorithms and Bayesian networks.",
      icon: <Database className="w-6 h-6" />
    },
    {
      position: "Doctoral Researcher",
      organization: "LAMIH, CNRS UMR 8201",
      duration: "Nov 2019 - Jul 2023",
      location: "France & Belgium",
      description: "Developed innovative Bayesian networks for fall risk assessment in elderly populations, focusing on real-world data integration and expert knowledge fusion.",
      icon: <Code2 className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-teal-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-researcher-blue/5 to-researcher-teal/5 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-researcher-indigo/5 to-researcher-blue/5 animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Neural Network Dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-researcher-blue/20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-researcher-teal/30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 rounded-full bg-researcher-indigo/25 animate-pulse" style={{animationDelay: '2s'}}></div>
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
            My work focuses on developing robust methodologies for health data analytics and transforming patient care through intelligent systems.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <Card className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 interactive-card">
            <CardHeader className="bg-gradient-to-r from-researcher-blue/10 to-researcher-teal/10 rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-researcher-blue text-2xl">
                <div className="p-2 bg-researcher-blue/10 rounded-lg">
                  <GraduationCap className="h-6 w-6" />
                </div>
                Education Journey
              </CardTitle>
              <CardDescription>Academic foundation in AI and mathematics</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-researcher-blue/20 hover:border-researcher-blue/40 transition-colors">
                  <div className="absolute -left-3 top-2 p-1 bg-white dark:bg-slate-800 rounded-full border-2 border-researcher-blue/20">
                    <div className="text-researcher-blue">
                      {edu.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">{edu.degree}</h3>
                  <p className="text-researcher-blue font-semibold mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 interactive-card">
            <CardHeader className="bg-gradient-to-r from-researcher-teal/10 to-researcher-indigo/10 rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-researcher-teal text-2xl">
                <div className="p-2 bg-researcher-teal/10 rounded-lg">
                  <Briefcase className="h-6 w-6" />
                </div>
                Research Experience
              </CardTitle>
              <CardDescription>Leading AI research in healthcare applications</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-researcher-teal/20 hover:border-researcher-teal/40 transition-colors">
                  <div className="absolute -left-3 top-2 p-1 bg-white dark:bg-slate-800 rounded-full border-2 border-researcher-teal/20">
                    <div className="text-researcher-teal">
                      {exp.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">{exp.position}</h3>
                  <p className="text-researcher-teal font-semibold mb-2">{exp.organization}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <Card className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <CardHeader className="text-center bg-gradient-to-r from-researcher-indigo/10 via-researcher-blue/10 to-researcher-teal/10 rounded-t-lg">
            <CardTitle className="text-2xl text-researcher-indigo flex items-center justify-center gap-3">
              <div className="p-2 bg-researcher-indigo/10 rounded-lg">
                <Cpu className="h-6 w-6" />
              </div>
              Technical Expertise & Skills
            </CardTitle>
            <CardDescription className="text-lg">
              Core competencies in AI, Machine Learning, and Healthcare Data Analytics
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
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

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-researcher-blue to-researcher-teal p-6 rounded-2xl shadow-lg">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Interested in Collaboration?</h3>
              <p className="text-blue-100">Let's explore how AI can transform healthcare together</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
