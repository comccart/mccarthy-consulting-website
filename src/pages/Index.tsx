import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Download, ExternalLink, Star, CheckCircle2, TrendingUp, Users, 
  Zap, Target, BarChart3, Shield, Award, Clock, ArrowRight,
  Sparkles, Bot, GraduationCap, Workflow, LineChart
} from "lucide-react";

const Index = () => {
  const logos = [
    "Kajabi", "Zapier", "ADHD in Midlife", "AIRT", "Dockroach", 
    "Storysphere Central", "Teach Elevate", "Partner Co"
  ];

  const services = [
    {
      icon: Bot,
      title: "AI-Powered Call Center",
      description: "Intelligent automation that handles customer inquiries 24/7, reducing response times by 80% while maintaining personalized service.",
      benefits: ["24/7 Availability", "80% Cost Reduction", "Natural Conversations"]
    },
    {
      icon: GraduationCap,
      title: "AI Training & Upskilling",
      description: "Transform your team with customized AI training programs that boost productivity and future-proof your workforce.",
      benefits: ["Custom Curricula", "Hands-on Learning", "Ongoing Support"]
    },
    {
      icon: Workflow,
      title: "AI-Powered Automation",
      description: "Streamline operations with intelligent workflows that eliminate repetitive tasks and amplify team efficiency.",
      benefits: ["Process Optimization", "Workflow Integration", "Scalable Solutions"]
    },
    {
      icon: Sparkles,
      title: "Custom AI Solutions",
      description: "Bespoke AI systems designed specifically for your business challenges, from data analysis to predictive modeling.",
      benefits: ["Tailored Development", "Enterprise-Grade", "Full Integration"]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business challenges and identify high-impact AI opportunities."
    },
    {
      number: "02",
      title: "Custom Development",
      description: "Our team builds tailored AI solutions that integrate seamlessly with your systems."
    },
    {
      number: "03",
      title: "Training & Implementation",
      description: "We upskill your team and ensure smooth adoption across your organization."
    },
    {
      number: "04",
      title: "Scale & Optimize",
      description: "Continuous monitoring and optimization to maximize ROI and drive growth."
    }
  ];

  const results = [
    {
      client: "Professional Training Co.",
      metric: "300%",
      description: "Increase in course completion rates",
      industry: "EdTech"
    },
    {
      client: "Learning Solutions Ltd.",
      metric: "80%",
      description: "Reduction in administrative overhead",
      industry: "Corporate Training"
    },
    {
      client: "Skill Development Group",
      metric: "5x",
      description: "Faster content creation workflow",
      industry: "Professional Services"
    }
  ];

  const testimonials = [
    {
      quote: "McCarthy Solutions transformed how we deliver training. Their AI solutions allowed us to scale from 100 to 1,000 students without adding staff.",
      author: "Sarah Mitchell",
      role: "CEO, Learning Innovations",
      rating: 5
    },
    {
      quote: "The automation they built saves us 20 hours per week. We can finally focus on creating exceptional content instead of admin work.",
      author: "James Chen",
      role: "Director, Professional Development Institute",
      rating: 5
    },
    {
      quote: "Working with McCarthy Solutions was seamless. They understood our challenges and delivered solutions that exceeded our expectations.",
      author: "Emma Thompson",
      role: "Founder, Skills Academy",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How long does implementation typically take?",
      answer: "Most projects are completed within 4-12 weeks, depending on complexity. We start showing results within the first month through our agile development approach."
    },
    {
      question: "Do we need technical expertise to use your solutions?",
      answer: "Not at all. We design our solutions to be user-friendly and provide comprehensive training. Our team handles all technical aspects, so you can focus on your business."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement enterprise-grade security protocols, including encryption, secure APIs, and compliance with GDPR and industry standards. Your data security is our top priority."
    },
    {
      question: "What kind of ROI can we expect?",
      answer: "Our clients typically see 3-5x ROI within the first year through increased efficiency, reduced costs, and improved scalability. We provide detailed ROI projections during our strategy phase."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              <div className="text-2xl font-bold text-foreground">Zoi Labs</div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
              <a href="#process" className="text-foreground hover:text-accent transition-colors">Process</a>
              <a href="#results" className="text-foreground hover:text-accent transition-colors">Results</a>
              <a href="#testimonials" className="text-foreground hover:text-accent transition-colors">Testimonials</a>
            </div>

            <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              Book Free Strategy Call
            </Button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <img src="https://logo.clearbit.com/clutch.co" alt="Clutch" className="h-8" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-secondary font-medium">5.0</span>
            </div>
            <Badge variant="default" className="bg-secondary text-secondary-foreground">IWAI Certified</Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-secondary" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="w-4 h-4 text-secondary" />
              <span>ISO Compliant</span>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 leading-tight text-foreground">
            Scale Your{" "}
            <span className="text-primary animate-fade-in">Expertise.</span>
            <br />
            Amplify Your Impact.
          </h1>

          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            Dublin-based AI consultancy building intelligent automation and learning systems for professionals. 
            Achieve scalable growth without increasing headcount.
          </p>

          {/* Key Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">300%</div>
              <div className="text-sm text-muted-foreground">Avg. Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <Button size="lg" variant="default" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="w-4 h-4" />
              Download AI Blueprint
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
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

      {/* Problem/Solution Section */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problem Side */}
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-secondary/10 text-secondary">The Challenge</Badge>
              <h2 className="text-4xl font-bold text-foreground">
                The Problem Isn't Your Expertise
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Your team is maxed out, but demand keeps growing</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Manual processes eat up valuable time and resources</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Scaling requires hiring more people, increasing costs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Maintaining quality while growing feels impossible</p>
                </div>
              </div>
            </div>

            {/* Solution Side */}
            <div className="space-y-6 p-8 rounded-2xl bg-primary/5 border-2 border-primary/20">
              <Badge variant="default" className="bg-primary text-primary-foreground">The Solution</Badge>
              <h2 className="text-4xl font-bold text-foreground">
                AI-Powered Scale Without the Headcount
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground">Automate repetitive tasks and free your team for high-value work</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground">Build adaptive learning systems that scale with demand</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground">Leverage data-driven insights to accelerate growth</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground">Maintain quality while serving 10x more clients</p>
                </div>
              </div>
              <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                See How It Works
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 bg-primary text-primary-foreground">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Comprehensive AI Solutions for Training Companies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From automation to upskilling, we deliver end-to-end AI solutions that transform how you operate and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.benefits.map((benefit, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#contact" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process/Methodology Section */}
      <section id="process" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              A Clear Path from Strategy to Scalable Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful implementation and measurable results.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />
            
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 relative z-10 shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Results & Case Studies */}
      <section id="results" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 bg-primary text-primary-foreground">Proven Results</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              From Vision to Verifiable Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real outcomes from real clients. See how we've helped training companies transform their operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {results.map((result, i) => (
              <Card key={i} className="text-center border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="text-5xl font-bold text-primary mb-2">{result.metric}</div>
                  <CardTitle className="text-lg text-foreground">{result.description}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{result.client}</p>
                  <Badge variant="secondary" className="text-xs bg-secondary/10 text-secondary">{result.industry}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" className="gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <BarChart3 className="w-4 h-4" />
              View All Case Studies
            </Button>
            <Button size="lg" variant="default" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              Get Your Custom ROI Report
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">Client Success</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What Our Partners Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the leaders who've transformed their businesses with our solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-foreground italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-secondary">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Certification */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Certified for Strategy, Built on Trust
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We maintain the highest standards of security, compliance, and professional excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, label: "Enterprise Security" },
              { icon: Award, label: "IWAI Certified" },
              { icon: CheckCircle2, label: "ISO Compliant" },
              { icon: Target, label: "GDPR Ready" }
            ].map((cert, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-lg border-2 border-primary/20 hover:border-primary/50 transition-all">
                <cert.icon className="w-12 h-12 text-primary mb-4" />
                <p className="font-semibold text-foreground">{cert.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 bg-primary text-primary-foreground">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Common Questions Answered
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about working with Zoi Labs
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Limited Spots Available This Quarter</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Ready to Future-Proof Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free strategy call to discover how AI can transform your training business. No commitment, just actionable insights.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button size="lg" variant="default" className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              Book Your Free Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              Download AI Blueprint
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>30-minute consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Custom ROI analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Zero obligation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <div className="text-xl font-bold text-foreground">Zoi Labs</div>
              </div>
              <p className="text-muted-foreground text-sm">
                AI consultancy for professional training companies. London-based, globally trusted.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-accent transition-colors">AI Call Center</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">AI Training</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Automation</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Custom Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#results" className="hover:text-accent transition-colors">Case Studies</a></li>
                <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 Zoi Labs. All rights reserved. Built with ⚡ in London.
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
