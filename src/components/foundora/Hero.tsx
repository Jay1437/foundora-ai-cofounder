import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-8 relative overflow-hidden">
      <div className="max-w-4xl z-10 foundora-animate-fade-in-up">
        <div className="inline-block bg-foundora-primary-start/10 border border-foundora-primary-start/30 text-foundora-primary-start px-4 py-2 rounded-full text-sm font-medium mb-8 foundora-animate-glow">
          🚀 Building the future of startups
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          Your <span className="foundora-gradient-text">AI Co-Founder</span>
          <br />
          for Startup Success
        </h1>
        
        <p className="text-xl md:text-2xl text-foundora-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
          Not a course. Not a thread. A startup co-pilot. Transform your startup journey with AI-powered insights, real case studies, and personalized guidance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('waitlist')}
            className="foundora-btn-primary px-8 py-4 rounded-full font-semibold text-lg"
          >
            Join Waitlist
          </Button>
          <Button 
            onClick={() => scrollToSection('demo')}
            className="foundora-btn-secondary px-8 py-4 rounded-full font-semibold text-lg"
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;