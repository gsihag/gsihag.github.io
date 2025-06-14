
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      id: 1,
      degree: "Joint Ph.D. in Artificial Intelligence",
      institutions: [
        "Dept. of Computer Science, Université Polytechnique Hauts-de-France, France",
        "Dept. of Mathematics and Operation Research, Université de Mons, Belgium"
      ],
      period: "Nov/19 – Jul/23",
      thesis: "Evaluation of risk factors for falls in the elderly based on a real data set using Bayesian networks",
      description: "Joint doctoral program focusing on AI applications in healthcare, specifically Bayesian networks for fall risk assessment in elderly populations.",
      tags: ["Artificial Intelligence", "Bayesian Networks", "Healthcare", "Risk Assessment"]
    },
    {
      id: 2,
      degree: "M.Sc. in Mathematics",
      institutions: [
        "Dept. of Mathematics, Indian Institute of Technology Jodhpur, India"
      ],
      period: "Jul/17 – May/19",
      grade: "Grades: 7.35/10",
      description: "Master's degree in Mathematics with focus on applied mathematics and statistical methods.",
      tags: ["Mathematics", "Statistics", "Applied Mathematics", "Research Methods"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Advanced academic background in mathematics and artificial intelligence 
            with international research experience.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu) => (
            <Card key={edu.id} className="border-none shadow-lg bg-white dark:bg-slate-800">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-researcher-blue/10 flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-researcher-blue" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-1 mb-3">
                      {edu.institutions.map((institution, index) => (
                        <p key={index} className="text-researcher-blue font-medium">
                          {institution}
                        </p>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                      {edu.grade && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {edu.grade}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {edu.thesis && (
                  <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Thesis Title:</h4>
                    <p className="text-slate-700 dark:text-slate-300 italic">{edu.thesis}</p>
                  </div>
                )}
                <p className="text-slate-700 dark:text-slate-300 mb-4">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.tags.map((tag) => (
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

export default EducationSection;
