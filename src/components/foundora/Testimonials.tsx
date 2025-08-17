import ScrollFade from './ScrollFade';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
}

const TestimonialCard = ({ content, author, role, avatar }: TestimonialProps) => {
  return (
    <ScrollFade>
      <div className="foundora-card rounded-3xl p-8">
        <div className="italic mb-6 text-foundora-text-secondary leading-relaxed">
          "{content}"
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-foundora-primary-start to-foundora-primary-end rounded-full flex items-center justify-center font-bold text-sm">
            {avatar}
          </div>
          <div>
            <h4 className="font-semibold mb-1">{author}</h4>
            <p className="text-foundora-text-secondary text-sm">{role}</p>
          </div>
        </div>
      </div>
    </ScrollFade>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "Foundora does an excellent job curating the most timely startup-related content. What you get is all you need to know as a startup entrepreneur.",
      author: "Vijay Anand",
      role: "Founder, In50hrs.com",
      avatar: "VA"
    },
    {
      content: "Foundora provides solid content that motivates, educates & empowers entrepreneurs. Useful for anyone with a startup or contemplating one.",
      author: "Aliza Sherman",
      role: "Digital Marketing Strategist",
      avatar: "AS"
    },
    {
      content: "The AI insights helped me pivot my startup at exactly the right time. It's like having a co-founder who never sleeps and has analyzed every successful startup.",
      author: "Marcus Johnson",
      role: "Tech Startup Founder",
      avatar: "MJ"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-8 max-w-6xl mx-auto">
      <ScrollFade>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            Loved by <span className="foundora-gradient-text">Startup Builders</span>
          </h2>
          <p className="text-xl text-foundora-text-secondary max-w-3xl mx-auto leading-relaxed">
            See what entrepreneurs are saying about their AI co-founder experience
          </p>
        </div>
      </ScrollFade>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            content={testimonial.content}
            author={testimonial.author}
            role={testimonial.role}
            avatar={testimonial.avatar}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;