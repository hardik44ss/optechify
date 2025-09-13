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
    <section id="home" className="relative overflow-hidden particle-bg">
      {/* Animated Gaming Background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/4 left-10 w-32 h-1 bg-gradient-to-r from-primary to-accent animate-move-x"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-20 w-24 h-1 bg-gradient-to-r from-accent to-primary animate-move-x-reverse"
          style={{ animationDuration: "5s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin-slow"
          >
            <circle
              cx="30"
              cy="30"
              r="28"
              stroke="#00f0ff"
              strokeWidth="4"
              strokeDasharray="10 10"
            />
          </svg>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh] py-10">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-3">
              <span className="text-primary text-sm font-medium">
                Professional Tech Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-primary">OP Techify</span>
              <br />
              <span className="text-foreground">Gaming & Tech</span>
              <br />
              <span className="text-primary">Experts</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-6 max-w-lg mx-auto lg:mx-0">
              Professional laptop repairs, custom gaming PC builds, and expert
              tech consultancy. Fast, reliable, and certified solutions for all
              your tech needs.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-card border border-border gaming-card"
                >
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
            <div className="mt-6 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-sm text-muted-foreground mb-2">Serving:</p>
                <div className="flex gap-2 justify-center lg:justify-start">
                  {["Panchkula", "Chandigarh", "Mohali"].map((area, index) => (
                    <span
                      key={index}
                      className="text-sm text-primary font-medium"
                    >
                      {area}
                      {index < 2 && " • "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden gaming-card max-h-[550px]">
              <img
                src={heroImage}
                alt="Professional Gaming PC Setup - OP Techify"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
              {/* Floating particles */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-particle-float"></div>
              <div
                className="absolute top-20 right-16 w-1 h-1 bg-secondary rounded-full animate-particle-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-particle-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
