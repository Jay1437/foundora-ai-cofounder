import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 p-4 lg:px-8 backdrop-blur-xl border-b border-foundora-border transition-all duration-300 ${
        isScrolled ? 'bg-foundora-dark-bg/95' : 'bg-foundora-dark-bg/90'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-bold foundora-gradient-text"
        >
          Foundora
        </a>
        
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <button 
              onClick={() => scrollToSection('features')}
              className="foundora-nav-link font-medium"
            >
              Features
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="foundora-nav-link font-medium"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="foundora-nav-link font-medium"
            >
              Reviews
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="foundora-nav-link font-medium"
            >
              Pricing
            </button>
          </li>
        </ul>
        
        <Button 
          onClick={() => scrollToSection('waitlist')}
          className="foundora-btn-primary px-6 py-3 rounded-full font-semibold"
        >
          Join Beta
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;