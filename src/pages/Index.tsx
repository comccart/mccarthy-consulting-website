import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Star } from "lucide-react";

const Index = () => {
  const logos = [
    "Kajabi", "Zapier", "ADHD in Midlife", "AIRT", "Dockroach", 
    "Storysphere Central", "Teach Elevate", "Partner Co"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-primary">⚡ Zoi Labs</div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#work" className="text-foreground hover:text-primary transition-colors">Our Work</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>

            <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">Book a Free Strategy Call</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Badges */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <img src="https://logo.clearbit.com/clutch.co" alt="Clutch" className="h-8" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <Badge variant="default" className="text-sm">IWAI Certified</Badge>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 leading-tight">
            Scale Your{" "}
            <span className="text-primary animate-fade-in">Expertise.</span>
            <br />
            Amplify Your Impact.
          </h1>

          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            We are a London-based AI consultancy that builds intelligent automation and learning systems, 
            helping professional training companies achieve scalable growth without increasing headcount.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <Button size="lg" variant="default" className="gap-2">
              <Download className="w-4 h-4" />
              Download the AI Blueprint
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              See Our Results
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-center text-muted-foreground mb-8">
            Trusted by Industry Leaders and Certified for Excellence
          </p>

          {/* Logo Carousel */}
          <div className="relative overflow-hidden py-8">
            <div className="flex gap-12 animate-scroll">
              {[...logos, ...logos].map((logo, i) => (
                <div 
                  key={i}
                  className="flex-shrink-0 px-6 py-4 bg-card rounded-lg shadow-sm border border-border min-w-[180px] flex items-center justify-center"
                >
                  <span className="text-foreground font-medium">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="services" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4">The Challenge</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Problem Isn't Your Expertise.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              It's scaling it without burning out your team. We help training companies leverage AI 
              to multiply their impact while maintaining quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Intelligent Automation",
                description: "Automate repetitive tasks and free your team to focus on high-value work."
              },
              {
                title: "Learning Systems",
                description: "Build adaptive learning platforms that scale with your business."
              },
              {
                title: "Growth Strategy",
                description: "Data-driven insights to accelerate your growth without increasing headcount."
              }
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-xl bg-background shadow-sm border border-border hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Impact?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a free strategy call to discover how AI can transform your training business.
          </p>
          <Button size="lg" variant="default" className="text-lg px-8">
            Book Your Free Call Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-primary mb-4">⚡ Zoi Labs</div>
              <p className="text-muted-foreground text-sm">
                AI consultancy for professional training companies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">AI Automation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Learning Systems</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Strategy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 Zoi Labs. All rights reserved.
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
