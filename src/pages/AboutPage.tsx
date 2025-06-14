
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, GraduationCap, Briefcase, Brain, Code2, Database, Cpu, Download, Award, Users, BookOpen } from 'lucide-react';

const AboutPage: React.FC = () => {
  const skills = [
    "Machine Learning", "Bayesian Networks", "Python", "R", "Health Data Analytics",
    "Fall Risk Assessment", "Imbalanced Data", "AI in Healthcare", "Statistical Analysis",
    "Data Mining", "Deep Learning", "Research Methodology", "TensorFlow", "PyTorch",
    "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter", "Git", "Docker"
  ];

  const education = [
    {
      degree: "Joint Ph.D. in Artificial Intelligence",
      institution: "Université Polytechnique Hauts-de-France & Université de Mons",
      year: "2019-2023",
      location: "France & Belgium",
      description: "Specialized in Bayesian networks for healthcare applications with focus on fall risk assessment in elderly populations. Developed novel methodologies for integrating expert knowledge with real-world health data.",
      thesis: "Bayesian Networks for Fall Risk Assessment in Elderly Populations: A Multi-modal Approach",
      supervisor: "Prof. Marie Collart Dutilleul & Prof. Christophe Kolski",
      grade: "Magna Cum Laude",
      icon: <Brain className="w-6 h-6" />
    },
    {
      degree: "M.Sc. in Mathematics",
      institution: "Indian Institute of Technology Jodhpur",
      year: "2017-2019",
      location: "Jodhpur, India",
      description: "Advanced studies in applied mathematics and statistical methods with research focus on optimization algorithms and numerical analysis.",
      thesis: "Optimization Algorithms for Machine Learning Applications",
      supervisor: "Prof. Rajesh Kumar",
      grade: "First Class with Distinction",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const certifications = [
    "AWS Certified Machine Learning - Specialty",
    "Google Cloud Professional ML Engineer",
    "Deep Learning Specialization - Coursera",
    "Advanced Statistics for Data Science"
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "French", level: "Professional" },
    { name: "Hindi", level: "Native" },
    { name: "Punjabi", level: "Native" }
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
                About Dr. Gulshan Sihag
              </span>
            </h1>
            <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Passionate AI researcher dedicated to advancing healthcare through innovative machine learning solutions
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Button size="lg" className="bg-researcher-blue hover:bg-researcher-blue-dark">
                <Download className="mr-2 h-5 w-5" />
                Download Full CV
              </Button>
              <Button size="lg" variant="outline" className="border-researcher-blue text-researcher-blue hover:bg-researcher-blue hover:text-white">
                <Users className="mr-2 h-5 w-5" />
                Collaboration Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-researcher-blue to-researcher-teal bg-clip-text text-transparent">
              Academic Journey
            </span>
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-researcher-blue/10 to-researcher-teal/10">
                  <CardTitle className="flex items-center gap-3 text-researcher-blue text-2xl">
                    <div className="p-3 bg-researcher-blue/10 rounded-lg">
                      {edu.icon}
                    </div>
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="text-lg">{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </span>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {edu.grade}
                        </Badge>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{edu.description}</p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-1">Thesis</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{edu.thesis}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-1">Supervisor</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{edu.supervisor}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-white/50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-researcher-indigo to-researcher-teal bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          
          <Card className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader className="text-center bg-gradient-to-r from-researcher-indigo/10 via-researcher-blue/10 to-researcher-teal/10">
              <CardTitle className="text-2xl text-researcher-indigo flex items-center justify-center gap-3">
                <div className="p-2 bg-researcher-indigo/10 rounded-lg">
                  <Cpu className="h-6 w-6" />
                </div>
                Core Technologies & Methodologies
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm py-3 px-4 justify-center bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 hover:from-researcher-blue hover:to-researcher-teal hover:text-white transition-all duration-300 cursor-default research-tag"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications & Languages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-researcher-blue/10 to-researcher-indigo/10">
                <CardTitle className="flex items-center gap-3 text-researcher-blue">
                  <Award className="h-6 w-6" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                      <Award className="h-5 w-5 text-researcher-blue" />
                      <span className="text-slate-700 dark:text-slate-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-researcher-teal/10 to-researcher-blue/10">
                <CardTitle className="flex items-center gap-3 text-researcher-teal">
                  <BookOpen className="h-6 w-6" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{lang.name}</span>
                      <Badge variant="secondary" className="bg-researcher-teal/10 text-researcher-teal">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
