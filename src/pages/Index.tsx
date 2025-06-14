
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ResearchSection from '@/components/ResearchSection';
import PublicationsSection from '@/components/PublicationsSection';
import AwardsSection from '@/components/AwardsSection';
import ContactSection from '@/components/ContactSection';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <Layout className="bg-white dark:bg-slate-950">
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ResearchSection />
      <PublicationsSection />
      <AwardsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
