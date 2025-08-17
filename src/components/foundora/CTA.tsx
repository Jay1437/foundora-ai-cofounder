import { Button } from '@/components/ui/button';
import ScrollFade from './ScrollFade';

const CTA = () => {
  return (
    <section id="waitlist" className="bg-foundora-dark-card border-t border-foundora-border py-24 mt-16">
      <div className="text-center px-8">
        <ScrollFade>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-black mb-6">
              Ready to Build Your <span className="foundora-gradient-text">Startup?</span>
            </h2>
            <p className="text-xl text-foundora-text-secondary mb-10 leading-relaxed">
              Join thousands of entrepreneurs who are building the future with AI-powered insights and personalized guidance.
            </p>
            <Button className="foundora-btn-primary px-8 py-4 rounded-full font-semibold text-lg">
              Join the Waitlist
            </Button>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
};

export default CTA;