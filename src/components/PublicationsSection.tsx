
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { FileText, Search, ExternalLink } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  link: string;
  doi?: string;
  type: 'Journal' | 'Conference' | 'Book Chapter';
  category: 'AI' | 'Healthcare' | 'Bayesian' | 'Data Analysis';
}

const PublicationsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const publications: Publication[] = [
    // Journal Articles
    {
      id: 1,
      title: "Using oversampling with a bayesian network when data is imbalanced: A systematic review",
      authors: "G. Sihag, V. Delcroix, and E. Grislin-Le Strugeon",
      journal: "Information and Software Technology (under review)",
      year: 2025,
      link: "#",
      type: 'Journal',
      category: 'Bayesian'
    },
    {
      id: 2,
      title: "Proxima-orion q-gaussian algorithm for synthetic oversampling of imbalanced dataset",
      authors: "P. Yadav, G. Sihag, and V. Vijay",
      journal: "IEEE Transactions on Knowledge and Data Engineering (under review)",
      year: 2025,
      link: "#",
      type: 'Journal',
      category: 'Data Analysis'
    },
    {
      id: 3,
      title: "Rebalancing the scales with generative adversarial networks (gans): A systematic mapping",
      authors: "P. Yadav, G. Sihag, and V. Vijay",
      journal: "IEEE Transactions on Neural Networks and Learning Systems (under review)",
      year: 2025,
      link: "#",
      type: 'Journal',
      category: 'AI'
    },
    {
      id: 4,
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
      id: 5,
      title: "Evaluation of risk factors for fall in elderly using bayesian networks: A case study",
      authors: "G. Sihag, V. Delcroix, E. Grislin-Le Strugeon, et al.",
      journal: "Computer Methods and Programs in Biomedicine Update, vol. 1, p. 100035",
      year: 2021,
      link: "https://doi.org/10.1016/j.cmpbup.2021.100035",
      doi: "10.1016/j.cmpbup.2021.100035",
      type: 'Journal',
      category: 'Healthcare'
    },
    // Conference Proceedings
    {
      id: 6,
      title: "Solar pv power generation forecasting using synergy of artificial intelligence and metaheuristics based approaches",
      authors: "P. Yadav, G. Sihag, V. P. Singh, and V. Vijay",
      journal: "International Advanced Computing Conference, Springer, pp. 210–225",
      year: 2025,
      link: "#",
      type: 'Conference',
      category: 'AI'
    },
    {
      id: 7,
      title: "Evaluation of risk factors for fall in elderly people from imbalanced data using the oversampling technique smote",
      authors: "G. Sihag, P. Yadav, V. Delcroix, et al.",
      journal: "ICT4AWE, pp. 50–58",
      year: 2022,
      link: "#",
      type: 'Conference',
      category: 'Healthcare'
    },
    {
      id: 8,
      title: "Prédiction des facteurs de risque de chute chez les personnes âgées à partir d'observations partielles à l'aide d'un réseau bayésien",
      authors: "V. Delcroix, G. Sihag, E. Grislin-Le Strugeon, X. Siebert, and S. Piechowiak",
      journal: "Colloque francophone sur la chute de la personne âgée",
      year: 2021,
      link: "#",
      type: 'Conference',
      category: 'Healthcare'
    },
    {
      id: 9,
      title: "Temporal data simulation based on a real data set for fall prevention",
      authors: "G. Sihag, V. Delcroix, E. Grislin-Le Strugeon, X. Siebert, and S. Piechowiak",
      journal: "10emes Journées Francophones sur les Réseaux Bayésiens et les Modèles Graphiques Probabilis",
      year: 2021,
      link: "#",
      type: 'Conference',
      category: 'Bayesian'
    },
    {
      id: 10,
      title: "Prediction of risk factors for fall using bayesian networks with partial health information",
      authors: "G. Sihag, V. Delcroix, E. Grislin, X. Siebert, S. Piechowiak, and F. Puisieux",
      journal: "2020 IEEE Globecom Workshops, IEEE, pp. 1–6",
      year: 2020,
      link: "https://doi.org/10.1109/GCWkshps50303.2020.9367420",
      doi: "10.1109/GCWkshps50303.2020.9367420",
      type: 'Conference',
      category: 'Healthcare'
    },
    // Book Chapter
    {
      id: 11,
      title: "Advantages of oversampling techniques: a case study in risk factors for fall prediction",
      authors: "G. Sihag, P. Yadav, V. Vijay, et al.",
      journal: "Book Chapter, pp. 56–78",
      year: 2021,
      link: "#",
      type: 'Book Chapter',
      category: 'Data Analysis'
    }
  ];

  const categories = [
    { name: 'AI', color: 'bg-researcher-blue' },
    { name: 'Healthcare', color: 'bg-researcher-teal' },
    { name: 'Bayesian', color: 'bg-researcher-indigo' },
    { name: 'Data Analysis', color: 'bg-researcher-slate' }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pub.authors.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? pub.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="publications" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Publications</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Peer-reviewed publications in leading journals and conferences focusing on 
            AI applications in healthcare, Bayesian networks, and data analytics.
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input 
              placeholder="Search publications..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={selectedCategory === null ? "default" : "outline"} 
              onClick={() => setSelectedCategory(null)}
              size="sm"
            >
              All ({publications.length})
            </Button>
            {categories.map(category => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                size="sm"
                className={selectedCategory === category.name ? category.color : ""}
              >
                {category.name} ({publications.filter(p => p.category === category.name).length})
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredPublications.length > 0 ? (
            filteredPublications.map(publication => (
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
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-300 mb-4">No publications found matching your search criteria.</p>
              <Button variant="outline" onClick={() => {setSearchTerm(''); setSelectedCategory(null);}}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>

        {filteredPublications.length > 0 && (
          <div className="mt-10 text-center">
            <Button 
              variant="outline" 
              className="hover:bg-slate-100"
              onClick={() => window.open('https://scholar.google.com/citations?user=YOUR_ID', '_blank')}
            >
              View Google Scholar Profile
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;
