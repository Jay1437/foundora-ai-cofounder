import { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  target: number;
  suffix: string;
  label: string;
}

const StatItem = ({ target, suffix, label }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounter();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  const animateCounter = () => {
    const increment = target / 100;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);
  };

  return (
    <div ref={ref} className="text-center scroll-fade">
      <h3 className="text-5xl font-black foundora-gradient-text mb-2">
        {count}{suffix}
      </h3>
      <p className="text-foundora-text-secondary font-medium">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-foundora-dark-card border-t border-b border-foundora-border py-16 my-16">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <StatItem target={1000} suffix="+" label="Startups Launched" />
          <StatItem target={95} suffix="%" label="Success Rate" />
          <StatItem target={50} suffix="M+" label="Funding Raised" />
          <StatItem target={24} suffix="/7" label="AI Support" />
        </div>
      </div>
    </section>
  );
};

export default Stats;