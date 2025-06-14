
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, ExternalLink } from 'lucide-react';

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
      category: 'Healthcare'
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
      category: 'Bayesian'
    }
  ];

  const categories = [
    { name: 'Healthcare', color: 'bg-researcher-teal' },
    { name: 'Bayesian', color: 'bg-researcher-indigo' }
  ];

  return (
    <section id="publications" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Publications</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Key journal publications in leading peer-reviewed venues focusing on 
            Bayesian networks and healthcare AI applications.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {selectedPublications.map(publication => (
            <div 
              key={publication.id}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex-shrink-0">
                  <FileText className="text-slate-500 dark:text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={`${categories.find(c => c.name === publication.category)?.color} text-white`}>
                      {publication.category}
                    </Badge>
                    <Badge variant="outline">
                      {publication.type}
                    </Badge>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{publication.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    <a 
                      href={publication.doi ? `https://doi.org/${publication.doi}` : publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-researcher-blue transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      {publication.title}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-2">{publication.authors}</p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {publication.journal}
                  </p>
                  {publication.doi && (
                    <p className="text-xs text-slate-400 mt-1">
                      DOI: {publication.doi}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="default" 
            className="bg-researcher-blue hover:bg-researcher-blue/90 text-white"
            onClick={() => window.open('https://scholar.google.com/citations?user=YOUR_ID', '_blank')}
          >
            For Updated List of Publications See My Google Scholar
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
