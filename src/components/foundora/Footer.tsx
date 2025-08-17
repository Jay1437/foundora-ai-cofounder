const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Roadmap", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "API", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-foundora-dark-bg border-t border-foundora-border py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 foundora-gradient-text">Foundora</h3>
            <p className="text-foundora-text-secondary leading-relaxed">
              Your AI co-founder for startup success. Building the future of entrepreneurship with artificial intelligence.
            </p>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-foundora-text-secondary hover:text-foundora-text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-foundora-border mt-8 pt-8 text-center">
          <p className="text-foundora-text-secondary">
            &copy; 2025 Foundora - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;