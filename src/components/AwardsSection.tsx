
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Users } from 'lucide-react';

const AwardsSection: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: "Best Student Paper Award",
      organization: "8th International Conference on Information and Communication Technologies for Ageing Well and e-Health",
      year: 2022,
      description: "Recognized for outstanding research contribution in fall risk assessment using oversampling techniques.",
      icon: <Trophy className="h-6 w-6" />,
      type: "Award"
    },
    {
      id: 2,
      title: "All India Rank 356",
      organization: "IIT-JAM Mathematics Entrance Exam",
      year: 2017,
      description: "Achieved top rank among 10K+ students in the national level mathematics entrance examination.",
      icon: <Award className="h-6 w-6" />,
      type: "Achievement"
    },
    {
      id: 3,
      title: "M.Sc. Representative",
      organization: "Student Placement Cell, IIT Jodhpur",
      year: "2018 – 2019",
      description: "Elected representative for coordinating placement activities and student-industry interactions.",
      icon: <Users className="h-6 w-6" />,
      type: "Leadership"
    },
    {
      id: 4,
      title: "Member",
      organization: "Volleyball Team IIT Jodhpur",
      year: "2017 – 2019",
      description: "Active member of the institute volleyball team, participating in inter-college competitions.",
      icon: <Users className="h-6 w-6" />,
      type: "Sports"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Award': return 'bg-yellow-500';
      case 'Achievement': return 'bg-green-500';
      case 'Leadership': return 'bg-blue-500';
      case 'Sports': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Award': return <Trophy className="h-4 w-4" />;
      case 'Achievement': return <Award className="h-4 w-4" />;
      case 'Leadership': return <Users className="h-4 w-4" />;
      case 'Sports': return <Users className="h-4 w-4" />;
      default: return <Award className="h-4 w-4" />;
    }
  };

  return (
    <section id="awards" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Achievements</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Recognition for academic excellence, research contributions, and leadership activities 
            throughout my academic and professional journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-researcher-blue/10 flex-shrink-0">
                    <div className="text-researcher-blue">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={`${getTypeColor(achievement.type)} text-white flex items-center gap-1`}>
                        {getTypeIcon(achievement.type)}
                        {achievement.type}
                      </Badge>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{achievement.year}</span>
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-800 dark:text-white">
                      {achievement.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-researcher-blue font-medium mb-2">
                  {achievement.organization}
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
