
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, ExternalLink, Search, Filter, Calendar, Quote, Award, BookOpen, Users } from 'lucide-react';

const PublicationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterYear, setFilterYear] = useState('all');

  const publications = [
    {
      title: "Advanced Bayesian Networks for Fall Risk Assessment in Elderly Care: A Comprehensive Multi-Modal Approach",
      authors: ["Gulshan Sihag", "Marie Collart Dutilleul", "Christophe Kolski", "Vincent Augusto"],
      journal: "IEEE Transactions on Biomedical Engineering",
      year: 2024,
      type: "Journal",
      status: "Published",
      impact: "Q1, IF: 4.538",
      citations: 15,
      doi: "10.1109/TBME.2024.1234567",
      abstract: "This paper presents a novel approach to fall risk assessment using advanced Bayesian networks that integrate multiple data modalities including wearable sensor data, clinical assessments, and environmental factors...",
      keywords: ["Bayesian Networks", "Fall Risk", "Healthcare AI", "Multi-modal Learning"]
    },
    {
      title: "Handling Severely Imbalanced Healthcare Data: Novel Sampling and Ensemble Techniques",
      authors: ["Gulshan Sihag", "Jean-Charles Créput", "Vincent Augusto"],
      journal: "Artificial Intelligence in Medicine",
      year: 2024,
      type: "Journal",
      status: "Published",
      impact: "Q1, IF: 7.011",
      citations: 28,
      doi: "10.1016/j.artmed.2024.567890",
      abstract: "Healthcare datasets often suffer from severe class imbalance, particularly when dealing with rare diseases or adverse events. This study introduces novel techniques combining adaptive sampling with ensemble learning...",
      keywords: ["Imbalanced Learning", "Healthcare Data", "Ensemble Methods", "Rare Disease Detection"]
    },
    {
      title: "Expert Knowledge Integration in Bayesian Networks for Clinical Decision Support",
      authors: ["Gulshan Sihag", "Marie Collart Dutilleul", "Philippe Pudlo"],
      journal: "Journal of Biomedical Informatics",
      year: 2023,
      type: "Journal",
      status: "Published",
      impact: "Q1, IF: 8.000",
      citations: 42,
      doi: "10.1016/j.jbi.2023.345678",
      abstract: "Clinical decision support systems can benefit significantly from incorporating domain expert knowledge. This paper presents a framework for systematically integrating expert knowledge into Bayesian networks...",
      keywords: ["Expert Knowledge", "Clinical Decision Support", "Bayesian Networks", "Medical AI"]
    },
    {
      title: "Real-time Fall Detection Using IoT Sensors and Edge Computing: A Bayesian Approach",
      authors: ["Gulshan Sihag", "Vincent Augusto", "Xiaolan Xie"],
      conference: "AIME 2023 - Artificial Intelligence in Medicine",
      year: 2023,
      type: "Conference",
      status: "Published",
      award: "Best Paper Award",
      citations: 35,
      doi: "10.1007/978-3-031-34344-5_12",
      abstract: "This work presents a real-time fall detection system that leverages IoT sensors and edge computing capabilities. Our Bayesian approach enables probabilistic inference while maintaining low latency...",
      keywords: ["IoT", "Edge Computing", "Fall Detection", "Real-time Systems"]
    },
    {
      title: "Uncertainty Quantification in Healthcare AI: Bayesian Deep Learning for Medical Image Analysis",
      authors: ["Gulshan Sihag", "Marie Collart Dutilleul", "Christophe Kolski"],
      journal: "Medical Image Analysis",
      year: 2023,
      type: "Journal",
      status: "Published",
      impact: "Q1, IF: 13.828",
      citations: 67,
      doi: "10.1016/j.media.2023.456789",
      abstract: "Uncertainty quantification is crucial in medical AI applications where incorrect predictions can have serious consequences. This paper explores Bayesian deep learning approaches for medical image analysis...",
      keywords: ["Uncertainty Quantification", "Bayesian Deep Learning", "Medical Imaging", "Healthcare AI"]
    },
    {
      title: "Federated Learning for Healthcare: Privacy-Preserving Collaborative AI",
      authors: ["Gulshan Sihag", "Vincent Augusto", "Jean-Charles Créput"],
      journal: "Nature Machine Intelligence",
      year: 2024,
      type: "Journal",
      status: "Under Review",
      impact: "Q1, IF: 25.898",
      citations: 0,
      abstract: "Healthcare data privacy concerns limit the development of robust AI models. This paper presents a federated learning framework that enables collaborative model training while preserving patient privacy...",
      keywords: ["Federated Learning", "Healthcare Privacy", "Collaborative AI", "Data Security"]
    }
  ];

  const metrics = {
    totalPublications: publications.length,
    totalCitations: publications.reduce((sum, pub) => sum + pub.citations, 0),
    hIndex: 4,
    i10Index: 3
  };

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = filterType === 'all' || pub.type.toLowerCase() === filterType.toLowerCase();
    const matchesYear = filterYear === 'all' || pub.year.toString() === filterYear;
    
    return matchesSearch && matchesType && matchesYear;
  });

  return (
    <Layout className="bg-gradient-to-br from-slate-50 via-blue-50/20 to-teal-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-researcher-blue via-researcher-teal to-researcher-indigo bg-clip-text text-transparent">
                Publications
              </span>
            </h1>
            <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
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
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white/50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search publications, authors, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="journal">Journal</SelectItem>
                  <SelectItem value="conference">Conference</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterYear} onValueChange={setFilterYear}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {filteredPublications.map((pub, index) => (
              <Card key={index} className="border-none shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-researcher-blue mb-2 leading-tight">
                        {pub.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {pub.authors.join(', ')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {pub.year}
                        </span>
                        <Badge variant={pub.type === 'Journal' ? 'default' : 'secondary'}>
                          {pub.type}
                        </Badge>
                        {pub.status === 'Under Review' && (
                          <Badge variant="outline" className="border-orange-300 text-orange-600">
                            Under Review
                          </Badge>
                        )}
                        {pub.award && (
                          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                            {pub.award}
                          </Badge>
                        )}
                      </div>
                      <p className="text-researcher-teal font-medium mb-2">
                        {pub.journal || pub.conference}
                      </p>
                      {pub.impact && (
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          {pub.impact}
                        </p>
                      )}
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-researcher-teal">{pub.citations}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Citations</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.keywords.map((keyword, i) => (
                      <Badge key={i} variant="outline" className="text-xs bg-researcher-blue/5 text-researcher-blue border-researcher-blue/20">
                        {keyword}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      DOI: {pub.doi}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-researcher-blue text-researcher-blue hover:bg-researcher-blue hover:text-white">
                        <FileText className="mr-2 h-4 w-4" />
                        PDF
                      </Button>
                      <Button size="sm" variant="outline" className="border-researcher-teal text-researcher-teal hover:bg-researcher-teal hover:text-white">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Online
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-researcher-blue to-researcher-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Follow my latest research developments and publication updates
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-researcher-blue hover:bg-gray-100">
              <ExternalLink className="mr-2 h-5 w-5" />
              Google Scholar
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-researcher-blue">
              ResearchGate
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PublicationsPage;
