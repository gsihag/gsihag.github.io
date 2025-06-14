
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Post-Doctoral Researcher",
      company: "Univ. Polytechnique Hauts-de-France, LAMIH, CNRS",
      location: "UMR 8201, France and ULR 2694 METRICS, University of Lille and Lille's Hospital, France",
      period: "Oct/24 – Present",
      achievements: [
        "Conducting comprehensive research on health data analytics, focusing on developing innovative methodologies for tracking and predicting patient's health trajectories",
        "Designing and implementing advanced machine learning algorithms to address challenges of temporal, missing, and heterogeneous medical datasets in patient care",
        "Collaborating with medical researchers to validate probabilistic graphical models that enhance early diagnosis and risk assessment for diabetic patient populations"
      ],
      tags: ["Health Data Analytics", "Machine Learning", "Medical AI", "Bayesian Networks"]
    },
    {
      id: 2,
      title: "Doctoral Researcher",
      company: "Univ. Polytechnique Hauts-de-France, LAMIH, CNRS",
      location: "UMR 8201, France and Université de Mons, Belgium",
      period: "Nov/19 – Jul/23",
      achievements: [
        "Developed Bayesian networks to evaluate fall risk factors in the elderly using real-world data and expert knowledge",
        "Conducted comprehensive data preprocessing, including missing value imputation and variable selection, to enhance model accuracy",
        "Employed advanced techniques to address imbalanced data challenges, improving predictive performance",
        "Emphasized the Bayesian network's interpretability and suitability for handling partial patient observations, contributing to fall prevention strategies"
      ],
      tags: ["Bayesian Networks", "Fall Risk Assessment", "Data Preprocessing", "Elderly Care"]
    },
    {
      id: 3,
      title: "Data Analysis Intern",
      company: "Univ. Polytechnique Hauts-de-France, LAMIH, CNRS",
      location: "UMR 8201, France",
      period: "May/19 – Jul/19",
      achievements: [
        "Worked on Data Analysis part of the project RASTAF-ARI. Used Statistical Techniques for data analysis such as Correlation, Average, Skewness, Kurtosis and Hypothesis Testing",
        "Generalised the setting of the prosthetic of amputee people for researcher as well as for clinicians using Python and also build an interface for the same"
      ],
      tags: ["Statistical Analysis", "Python", "Medical Devices", "Data Visualization"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Over 5 years of research experience in AI applications for healthcare, 
            focusing on data analytics and machine learning for medical applications.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-researcher-blue mb-1">
                      {exp.company}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-4">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-researcher-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-slate-100 dark:bg-slate-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
