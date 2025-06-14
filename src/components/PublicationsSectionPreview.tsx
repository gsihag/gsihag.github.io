
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink, Calendar, Quote, Award, BookOpen, ArrowRight, Users } from 'lucide-react';
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
      citations: 15,
      keywords: ["Bayesian Networks", "Fall Risk", "Healthcare AI"]
    },
    {
      title: "Uncertainty Quantification in Healthcare AI: Bayesian Deep Learning",
      authors: ["Gulshan Sihag", "Marie Collart Dutilleul", "Christophe Kolski"],
      journal: "Medical Image Analysis",
      year: 2023,
      type: "Journal",
      impact: "Q1, IF: 13.828",
      citations: 67,
      keywords: ["Uncertainty Quantification", "Bayesian Deep Learning", "Medical Imaging"]
    }
  ];

  const metrics = {
    totalPublications: 15,
    totalCitations: 187,
    hIndex: 4,
    i10Index: 3
  };

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-teal-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-researcher-blue/5 to-researcher-teal/5 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-researcher-indigo/5 to-researcher-blue/5 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-researcher-blue via-researcher-teal to-researcher-indigo bg-clip-text text-transparent">
              Recent Publications
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Peer-reviewed research contributions advancing AI in healthcare and beyond
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="border-none shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <FileText className="w-8 h-8 text-researcher-blue mx-auto mb-2" />
              <div className="text-3xl font-bold text-researcher-blue">{metrics.totalPublications}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Publications</div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-researcher-teal mx-auto mb-2" />
              <div className="text-3xl font-bold text-researcher-teal">{metrics.totalCitations}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Citations</div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Award className="w-8 h-8 text-researcher-indigo mx-auto mb-2" />
              <div className="text-3xl font-bold text-researcher-indigo">{metrics.hIndex}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">h-index</div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <BookOpen className="w-8 h-8 text-researcher-blue mx-auto mb-2" />
              <div className="text-3xl font-bold text-researcher-blue">{metrics.i10Index}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">i10-index</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Publications */}
        <div className="space-y-8 mb-12">
          {featuredPublications.map((pub, index) => (
            <Card key={index} className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-researcher-blue mb-2 leading-tight">
                  {pub.title}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {pub.authors.slice(0, 2).join(', ')}{pub.authors.length > 2 ? ' et al.' : ''}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {pub.year}
                  </span>
                  <Badge variant="default">{pub.type}</Badge>
                </div>
                <p className="text-researcher-teal font-medium mb-2">{pub.journal}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{pub.impact}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword, i) => (
                      <Badge key={i} variant="outline" className="text-xs bg-researcher-blue/5 text-researcher-blue border-researcher-blue/20">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-researcher-teal">{pub.citations}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Citations</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <Link to="/publications">
            <Button size="lg" className="bg-gradient-to-r from-researcher-blue to-researcher-teal hover:from-researcher-blue-dark hover:to-researcher-teal text-white shadow-lg hover:shadow-xl transition-all duration-300">
              View All Publications
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSectionPreview;
