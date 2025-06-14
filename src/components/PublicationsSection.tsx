
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ExternalLink, Calendar, Users, Award, BookOpen } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  link: string;
  doi?: string;
  type: 'Journal';
  category: 'Bayesian' | 'Healthcare';
  metrics?: {
    citations?: number;
    impact?: string;
  };
}

const PublicationsSection: React.FC = () => {
  const selectedPublications: Publication[] = [
    {
      id: 1,
      title: "Combining real data and expert knowledge to build a bayesian network—application to assess multiple risk factors for fall among elderly people",
      authors: "G. Sihag, V. Delcroix, E. Grislin-Le Strugeon, X. Siebert, S. Piechowiak, and F. Puisieux",
      journal: "Expert Systems with Applications, p. 124106",
      year: 2024,
      link: "https://doi.org/10.1016/j.eswa.2024.124106",
      doi: "10.1016/j.eswa.2024.124106",
      type: 'Journal',
      category: 'Healthcare',
      metrics: {
        citations: 5,
        impact: "Q1 Journal"
      }
    },
    {
      id: 2,
      title: "Evaluation of risk factors for fall in elderly using bayesian networks: A case study",
      authors: "G. Sihag, V. Delcroix, E. Grislin-Le Strugeon, et al.",
      journal: "Computer Methods and Programs in Biomedicine Update, vol. 1, p. 100035",
      year: 2021,
      link: "https://doi.org/10.1016/j.cmpbup.2021.100035",
      doi: "10.1016/j.cmpbup.2021.100035",
      type: 'Journal',
      category: 'Bayesian',
      metrics: {
        citations: 12,
        impact: "High Impact"
      }
    }
  ];

  const categories = [
    { name: 'Healthcare', color: 'bg-gradient-to-r from-researcher-teal to-teal-400', icon: <Users className="h-4 w-4" /> },
    { name: 'Bayesian', color: 'bg-gradient-to-r from-researcher-indigo to-purple-400', icon: <BookOpen className="h-4 w-4" /> }
  ];

  const stats = [
    { label: "Publications", value: "11+", icon: <FileText className="h-6 w-6" /> },
    { label: "Citations", value: "50+", icon: <Award className="h-6 w-6" /> },
    { label: "Research Years", value: "5+", icon: <Calendar className="h-6 w-6" /> },
    { label: "Collaborations", value: "8+", icon: <Users className="h-6 w-6" /> }
  ];

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-researcher-blue/5 to-researcher-teal/5 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gradient-to-tr from-researcher-indigo/5 to-researcher-blue/5 animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/6 w-3 h-3 rounded-full bg-researcher-blue/20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-researcher-teal/30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-4 h-4 rounded-full bg-researcher-indigo/25 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-researcher-blue via-researcher-teal to-researcher-indigo bg-clip-text text-transparent">
              Research Publications
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Key contributions to the field of AI in healthcare, featuring peer-reviewed research 
            in leading international journals and conferences.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 interactive-card">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-researcher-blue/10 to-researcher-teal/10">
                  <div className="text-researcher-blue">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-2xl font-bold bg-gradient-to-r from-researcher-blue to-researcher-teal bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Publications */}
        <div className="space-y-8 max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-white">Featured Publications</h3>
          {selectedPublications.map((publication, index) => (
            <Card 
              key={publication.id}
              className="border-none shadow-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 interactive-card"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-researcher-blue/10 to-researcher-teal/10 flex-shrink-0">
                    <FileText className="h-8 w-8 text-researcher-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className={`${categories.find(c => c.name === publication.category)?.color} text-white flex items-center gap-1`}>
                        {categories.find(c => c.name === publication.category)?.icon}
                        {publication.category}
                      </Badge>
                      <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700">
                        {publication.type}
                      </Badge>
                      <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {publication.year}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold mb-3 leading-tight">
                      <a 
                        href={publication.doi ? `https://doi.org/${publication.doi}` : publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-researcher-blue transition-colors flex items-start gap-2 cursor-pointer group"
                      >
                        <span>{publication.title}</span>
                        <ExternalLink className="h-5 w-5 flex-shrink-0 group-hover:text-researcher-blue transition-colors" />
                      </a>
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <Users className="h-4 w-4 text-researcher-teal" />
                    {publication.authors}
                  </p>
                  <p className="font-medium text-slate-700 dark:text-slate-200">
                    {publication.journal}
                  </p>
                  {publication.doi && (
                    <p className="text-xs text-slate-400 font-mono">
                      DOI: {publication.doi}
                    </p>
                  )}
                  {publication.metrics && (
                    <div className="flex items-center gap-4 pt-2">
                      {publication.metrics.citations && (
                        <span className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          {publication.metrics.citations} citations
                        </span>
                      )}
                      {publication.metrics.impact && (
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {publication.metrics.impact}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="inline-block border-none shadow-xl bg-gradient-to-r from-researcher-blue/10 via-researcher-teal/10 to-researcher-indigo/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <BookOpen className="mx-auto h-12 w-12 text-researcher-blue mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                Explore Complete Research Portfolio
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
                Access my full publication list, citation metrics, and ongoing research collaborations.
              </p>
              <Button 
                className="bg-gradient-to-r from-researcher-blue to-researcher-teal hover:from-researcher-blue/90 hover:to-researcher-teal/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://scholar.google.com/citations?user=YOUR_ID', '_blank')}
              >
                Visit Google Scholar Profile
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
