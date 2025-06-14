
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Quote, Award, BookOpen, ArrowRight, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const PublicationsSectionPreview: React.FC = () => {
  const featuredPublications = [
    {
      title: "Advanced Bayesian Networks for Fall Risk Assessment in Elderly Care",
      authors: ["Gulshan Sihag", "Marie Collart Dutilleul", "Christophe Kolski"],
      journal: "IEEE Transactions on Biomedical Engineering",
      year: 2024,
      type: "Journal",
      impact: "Q1, IF: 4.538",
      citations: 15
    },
    {
      title: "Uncertainty Quantification in Healthcare AI: Bayesian Deep Learning",
      authors: ["Gulshan Sihag", "Marie Collart Dutilleul", "Christophe Kolski"],
      journal: "Medical Image Analysis",
      year: 2023,
      type: "Journal", 
      impact: "Q1, IF: 13.828",
      citations: 67
    }
  ];

  const metrics = {
    totalPublications: 15,
    totalCitations: 187,
    hIndex: 4,
    i10Index: 3
  };

  return (
    <section id="publications" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Recent Publications
            </h2>
            <div className="w-12 h-px bg-researcher-blue mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Peer-reviewed research contributions advancing AI in healthcare
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="border-none shadow-lg bg-white dark:bg-slate-800 text-center">
              <CardContent className="p-6">
                <FileText className="w-6 h-6 text-slate-700 dark:text-slate-300 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{metrics.totalPublications}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Publications</div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white dark:bg-slate-800 text-center">
              <CardContent className="p-6">
                <Quote className="w-6 h-6 text-slate-700 dark:text-slate-300 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{metrics.totalCitations}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Citations</div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white dark:bg-slate-800 text-center">
              <CardContent className="p-6">
                <Award className="w-6 h-6 text-slate-700 dark:text-slate-300 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{metrics.hIndex}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">h-index</div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white dark:bg-slate-800 text-center">
              <CardContent className="p-6">
                <BookOpen className="w-6 h-6 text-slate-700 dark:text-slate-300 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{metrics.i10Index}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">i10-index</div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Publications */}
          <div className="space-y-6 mb-12">
            {featuredPublications.map((pub, index) => (
              <Card key={index} className="border-none shadow-lg bg-white dark:bg-slate-800">
                <CardHeader className="border-b border-slate-100 dark:border-slate-700">
                  <CardTitle className="text-lg text-slate-900 dark:text-white leading-tight">
                    {pub.title}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {pub.authors.slice(0, 2).join(', ')}{pub.authors.length > 2 ? ' et al.' : ''}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {pub.year}
                    </span>
                    <Badge variant="outline">{pub.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white mb-1">{pub.journal}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{pub.impact}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-slate-900 dark:text-white">{pub.citations}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Citations</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/publications">
              <Button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100">
                View All Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSectionPreview;
