
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSectionPreview: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              About
            </h2>
            <div className="w-12 h-px bg-researcher-blue mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                I am a passionate researcher specializing in the intersection of artificial intelligence 
                and healthcare. My work focuses on developing innovative Bayesian network models and 
                machine learning algorithms to improve patient care outcomes.
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                Currently pursuing my PhD in Computer Science, I have contributed to advancing 
                uncertainty quantification in healthcare AI through peer-reviewed research and 
                collaborative partnerships.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-researcher-blue" />
                  <span>University of Valenciennes, France</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-researcher-blue" />
                  <span>gulshan.sihag@univ-valenciennes.fr</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Linkedin className="w-4 h-4 text-researcher-blue" />
                  <span>linkedin.com/in/gulshan-sihag</span>
                </div>
              </div>

              <Link to="/about">
                <Button variant="outline" className="border-slate-300 dark:border-slate-700">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <Card className="border-none shadow-lg bg-white dark:bg-slate-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Current Focus</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-researcher-blue pl-4">
                    <h4 className="font-medium text-slate-900 dark:text-white">Advanced Bayesian Networks</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Personalized healthcare trajectories</p>
                  </div>
                  <div className="border-l-2 border-researcher-teal pl-4">
                    <h4 className="font-medium text-slate-900 dark:text-white">Healthcare Data Analytics</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Multi-modal health insights</p>
                  </div>
                  <div className="border-l-2 border-researcher-indigo pl-4">
                    <h4 className="font-medium text-slate-900 dark:text-white">Uncertainty Quantification</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Reliable AI predictions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionPreview;
