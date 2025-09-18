import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-gaming-setup.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      {/* Enhanced Animated Gaming Background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      {/* Mouse-following subtle glow effect */}
      <div 
        className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          opacity: isVisible ? 0.3 : 0
        }}
      ></div>
      
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
            role="img"
            aria-label="Loading animation"
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
        
        {/* Enhanced floating particles with varied animations */}
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce opacity-70" style={{ animationDelay: "0s", animationDuration: "3s" }}></div>
        <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full animate-bounce opacity-60" style={{ animationDelay: "1s", animationDuration: "4s" }}></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-secondary/40 rounded-full animate-bounce opacity-50" style={{ animationDelay: "2s", animationDuration: "2.5s" }}></div>
        <div className="absolute bottom-1/2 left-1/5 w-2.5 h-2.5 bg-primary/20 rounded-full animate-bounce opacity-40" style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh] py-10">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-3 hover:bg-primary/15 transition-colors duration-300">
              <span className="text-primary text-sm font-medium">
                Professional Tech Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight group">
              <span className="text-primary group-hover:text-primary/90 transition-colors duration-300">OP Techify</span>
              <br />
              <span className="text-foreground">Gaming & Tech</span>
              <br />
              <span className="text-primary group-hover:text-primary/90 transition-colors duration-300">Experts</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-6 max-w-lg mx-auto lg:mx-0 hover:text-foreground/80 transition-colors duration-300">
              Professional laptop repairs, custom gaming PC builds, and expert
              tech consultancy. Fast, reliable, and certified solutions for all
              your tech needs.
            </p>

            {/* Enhanced Feature Pills */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-card border border-border gaming-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-pointer transform hover:scale-105"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow-cyan group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Get started with our services"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
              </Button>
              <Button
                onClick={handleContact}
                size="lg"
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-glow-green transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Get a free consultation"
              >
                Free Consultation
              </Button>
            </div>

            {/* Enhanced Service Areas */}
            <div className="mt-6 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-sm text-muted-foreground mb-2 font-medium">Serving:</p>
                <div className="flex gap-2 justify-center lg:justify-start">
                  {["Panchkula", "Chandigarh", "Mohali"].map((area, index) => (
                    <span
                      key={index}
                      className="text-sm text-primary font-medium hover:text-primary/80 transition-colors duration-200 cursor-default"
                    >
                      {area}
                      {index < 2 && " • "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Content - Hero Image */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden gaming-card max-h-[550px] transform group-hover:scale-105 transition-transform duration-500 shadow-xl group-hover:shadow-2xl">
              <img
                src={heroImage}
                alt="Professional Gaming PC Setup - OP Techify"
                className="w-full h-auto object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent group-hover:from-background/40 transition-all duration-300"></div>
              
              {/* Enhanced floating particles with improved animations */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-particle-float shadow-lg opacity-80"></div>
              <div
                className="absolute top-20 right-16 w-1 h-1 bg-secondary rounded-full animate-particle-float shadow-md opacity-70"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-particle-float shadow-lg opacity-75"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/2 right-8 w-1 h-1 bg-primary/70 rounded-full animate-particle-float opacity-60"
                style={{ animationDelay: "3s" }}
              ></div>
              
              {/* Performance indicator overlay */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20 shadow-lg">
                  <div className="text-center">
                    <div className="text-primary font-bold text-sm">High Performance Systems</div>
                    <div className="text-foreground/80 text-xs">Built for Tricity Professionals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
