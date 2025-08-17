import ScrollFade from './ScrollFade';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <ScrollFade>
      <div className="foundora-card rounded-3xl p-10">
        <div className="w-15 h-15 bg-gradient-to-br from-foundora-primary-start to-foundora-primary-end rounded-2xl flex items-center justify-center text-2xl mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-foundora-text-secondary leading-relaxed">{description}</p>
      </div>
    </ScrollFade>
  );
};

const Features = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Insights",
      description: "Get personalized startup advice powered by machine learning algorithms trained on thousands of successful startup journeys."
    },
    {
      icon: "📊",
      title: "Real Case Studies",
      description: "Learn from actual startup successes and failures with detailed case studies and actionable takeaways."
    },
    {
      icon: "🎯",
      title: "Personalized Roadmaps",
      description: "Receive custom startup roadmaps tailored to your industry, goals, and current stage of development."
    },
    {
      icon: "⚡",
      title: "Real-Time Support",
      description: "Get instant answers to your startup questions with our AI agents available 24/7 to guide your decisions."
    },
    {
      icon: "📈",
      title: "Growth Analytics",
      description: "Track your startup's progress with detailed analytics and get recommendations for optimization."
    },
    {
      icon: "🔥",
      title: "Community Access",
      description: "Connect with other startup builders and get peer feedback on your ideas and progress."
    }
  ];

  return (
    <section id="features" className="py-24 px-8 max-w-6xl mx-auto">
      <ScrollFade>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            AI Co-Founder for <span className="foundora-gradient-text">Gen Z Creators</span>
          </h2>
          <p className="text-xl text-foundora-text-secondary max-w-3xl mx-auto leading-relaxed">
            Everything you need to build, launch, and scale your startup with AI-powered insights and real-world case studies.
          </p>
        </div>
      </ScrollFade>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;