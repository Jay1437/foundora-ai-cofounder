import BackgroundAnimation from '@/components/foundora/BackgroundAnimation';
import Navigation from '@/components/foundora/Navigation';
import Hero from '@/components/foundora/Hero';
import Stats from '@/components/foundora/Stats';
import Features from '@/components/foundora/Features';
import Testimonials from '@/components/foundora/Testimonials';
import CTA from '@/components/foundora/CTA';
import Footer from '@/components/foundora/Footer';
import { useParallax } from '@/hooks/useParallax';

const Index = () => {
  useParallax();

  return (
    <div className="min-h-screen bg-foundora-dark-bg text-foundora-text-primary overflow-x-hidden">
      <BackgroundAnimation />
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
