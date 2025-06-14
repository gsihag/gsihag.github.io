
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Research", href: "#research" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" }
  ];

  const handleCVDownload = () => {
    // Create a downloadable CV link - replace with actual CV file path
    const link = document.createElement('a');
    link.href = '/gulshan-sihag-cv.pdf'; // You'll need to add your CV file to the public folder
    link.download = 'Gulshan_Sihag_CV.pdf';
    link.click();
  };

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm py-3"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-3"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" alt="Dr. Gulshan Sihag" />
            <AvatarFallback className="bg-researcher-blue text-white font-semibold">GS</AvatarFallback>
          </Avatar>
          <span className="text-xl font-bold bg-gradient-to-r from-researcher-blue to-researcher-teal bg-clip-text text-transparent">
            Dr. Gulshan Sihag
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm rounded-md font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button 
            size="sm" 
            className="ml-4 bg-researcher-blue hover:bg-researcher-blue-dark text-white"
            onClick={handleCVDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white dark:bg-slate-900 shadow-lg border-t">
          <div className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              size="sm" 
              className="w-full bg-researcher-blue hover:bg-researcher-blue-dark text-white mt-2"
              onClick={() => {
                handleCVDownload();
                setIsMobileMenuOpen(false);
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
