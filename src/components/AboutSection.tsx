
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    "Machine Learning", "Bayesian Networks", "Python", "R", "Health Data Analytics",
    "Fall Risk Assessment", "Imbalanced Data", "AI in Healthcare", "Statistical Analysis",
    "Data Mining", "Deep Learning", "Research Methodology"
  ];

  const education = [
    {
      degree: "PhD in Computer Science",
      institution: "Thapar Institute of Engineering and Technology",
      year: "2020-2024",
      location: "Patiala, Punjab, India",
      description: "Specialized in Machine Learning and Data Analytics with focus on healthcare applications"
    },
    {
      degree: "M.Tech in Computer Science & Engineering",
      institution: "Thapar Institute of Engineering and Technology",
      year: "2018-2020",
      location: "Patiala, Punjab, India",
      description: "Advanced studies in computer science with research in data science"
    }
  ];

  const experience = [
    {
      position: "Post-Doctoral Researcher",
      organization: "Université Polytechnique Hauts-de-France (UPHF)",
      duration: "2024 - Present",
      location: "Valenciennes, France",
      description: "Conducting research on health data analytics and developing methodologies for tracking patient health trajectories using advanced ML algorithms and Bayesian networks."
    },
    {
      position: "Research Scholar",
      organization: "Thapar Institute of Engineering and Technology",
      duration: "2020 - 2024",
      location: "Patiala, Punjab, India",
      description: "Conducted extensive research in machine learning applications for healthcare, published multiple papers in reputed journals."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I am a passionate researcher dedicated to advancing healthcare through innovative AI and machine learning solutions. 
            My work focuses on developing robust methodologies for health data analytics and patient care optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-researcher-blue">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-researcher-blue/20 pl-4">
                  <h3 className="font-semibold text-lg text-slate-800 dark:text-white">{edu.degree}</h3>
                  <p className="text-researcher-blue font-medium">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">{edu.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-researcher-teal">
                <Briefcase className="h-5 w-5" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-researcher-teal/20 pl-4">
                  <h3 className="font-semibold text-lg text-slate-800 dark:text-white">{exp.position}</h3>
                  <p className="text-researcher-teal font-medium">{exp.organization}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">{exp.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-researcher-indigo">Technical Skills & Expertise</CardTitle>
            <CardDescription className="text-center">
              Core competencies in AI, Machine Learning, and Healthcare Data Analytics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
