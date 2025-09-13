import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-gaming-setup.jpg";

const Hero = () => {
  const handleGetStarted = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: Zap, text: "Same-Day Repairs" },
    { icon: Shield, text: "Certified Technicians" }, 
    { icon: Clock, text: "24/7 Support" },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden particle-bg">
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-6">
              <span className="text-primary text-sm font-medium">Professional Tech Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-primary">
                OP Techify
              </span>
              <br />
              <span className="text-foreground">
                Gaming & Tech
              </span>
              <br />
              <span className="text-primary">
                Experts
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Professional laptop repairs, custom gaming PC builds, and expert tech consultancy. 
              Fast, reliable, and certified solutions for all your tech needs.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 px-4 py-2 rounded-full bg-card border border-border gaming-card">
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleGetStarted}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow-cyan group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                onClick={handleContact}
                size="lg" 
                variant="secondary" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-glow-green"
              >
                Free Consultation
              </Button>
            </div>

            {/* Service Areas */}
            <div className="mt-8 text-center lg:text-left">
              <p className="text-sm text-muted-foreground mb-2">Serving:</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {["Panchkula", "Chandigarh", "Mohali"].map((area, index) => (
                  <span key={index} className="text-sm text-primary font-medium">
                    {area}{index < 2 && " • "}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden gaming-card">
              <img 
                src={heroImage} 
                alt="Professional Gaming PC Setup - OP Techify" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
              
              {/* Floating particles */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-particle-float"></div>
              <div className="absolute top-20 right-16 w-1 h-1 bg-secondary rounded-full animate-particle-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-particle-float" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg p-4 gaming-card animate-glow-pulse">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Repairs Done</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 gaming-card animate-glow-pulse" style={{ animationDelay: '1s' }}>
              <div className="text-2xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;