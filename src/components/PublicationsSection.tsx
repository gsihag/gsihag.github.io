
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { FileText, Search } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  link: string;
  citations: number;
  category: 'AI' | 'Healthcare' | 'Ethics' | 'Methods';
}

const PublicationsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const publications: Publication[] = [
    {
      id: 1,
      title: "Deep Learning for Early Detection of Alzheimer's Disease Using MRI Scans",
      authors: "Smith J., Johnson A., Williams R.",
      journal: "Journal of Medical Imaging",
      year: 2023,
      link: "#",
      citations: 42,
      category: 'AI'
    },
    {
      id: 2,
      title: "Machine Learning Models for Predicting Patient Readmission Risk in Hospitals",
      authors: "Smith J., Brown T., Garcia M.",
      journal: "Healthcare Informatics Research",
      year: 2022,
      link: "#",
      citations: 36,
      category: 'Healthcare'
    },
    {
      id: 3,
      title: "Ethical Considerations in AI-Driven Clinical Decision Support Systems",
      authors: "Smith J., Wilson L.",
      journal: "Journal of Medical Ethics",
      year: 2022,
      link: "#",
      citations: 28,
      category: 'Ethics'
    },
    {
      id: 4,
      title: "Novel Approaches to Feature Extraction from Electronic Health Records",
      authors: "Smith J., Miller R., Thompson P.",
      journal: "BMC Medical Informatics",
      year: 2021,
      link: "#",
      citations: 53,
      category: 'Methods'
    },
    {
      id: 5,
      title: "Comparing CNN and Transformer Models for Medical Image Classification",
      authors: "Smith J., Lee K., Patel S.",
      journal: "Nature Machine Intelligence",
      year: 2023,
      link: "#",
      citations: 19,
      category: 'AI'
    },
    {
      id: 6,
      title: "Privacy-Preserving Methods for Health Data Analysis using Federated Learning",
      authors: "Smith J., Anderson H.",
      journal: "Journal of the American Medical Informatics Association",
      year: 2021,
      link: "#",
      citations: 31,
      category: 'Methods'
    }
  ];

  const categories = [
    { name: 'AI', color: 'bg-researcher-blue' },
    { name: 'Healthcare', color: 'bg-researcher-teal' },
    { name: 'Ethics', color: 'bg-researcher-indigo' },
    { name: 'Methods', color: 'bg-researcher-slate' }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pub.authors.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? pub.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Selected peer-reviewed articles published in leading journals and conference proceedings.
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
              All
            </Button>
            {categories.map(category => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                size="sm"
                className={selectedCategory === category.name ? category.color : ""}
              >
                {category.name}
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
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className={`${categories.find(c => c.name === publication.category)?.color} text-white`}>
                        {publication.category}
                      </Badge>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{publication.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      <a 
                        href={publication.link}
                        className="hover:text-researcher-blue transition-colors"
                      >
                        {publication.title}
                      </a>
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-2">{publication.authors}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {publication.journal}
                      </span>
                      <span className="text-sm font-medium">
                        Citations: {publication.citations}
                      </span>
                    </div>
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
            <Button variant="outline" className="hover:bg-slate-100">
              View All Publications
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;
