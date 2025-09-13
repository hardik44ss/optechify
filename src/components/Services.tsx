import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Laptop, 
  Monitor, 
  Gamepad2, 
  MessageCircle, 
  Wrench, 
  Zap, 
  Shield, 
  Clock,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const handleWhatsApp = (service: string) => {
    const message = `Hi! I'm interested in ${service}. Can you provide more details?`;
    window.open(`https://wa.me/917009257610?text=${encodeURIComponent(message)}`, "_blank");
  };

  const services = [
    {
      icon: Laptop,
      title: "Laptop Repair",
      description: "Expert diagnosis and repair for all laptop brands. Screen replacement, motherboard repair, and performance optimization.",
      features: ["Screen Replacement", "Motherboard Repair", "SSD/HDD Upgrade", "Overheating Fix"],
      price: "Starting ₹500",
      color: "primary"
    },
    {
      icon: Monitor,
      title: "Custom PC Build",
      description: "Professional custom PC assembly tailored to your needs. Gaming, productivity, or workstation builds with warranty.",
      features: ["Component Selection", "Professional Assembly", "Performance Testing", "1 Year Warranty"],
      price: "Starting ₹25,000",
      color: "secondary"
    },
    {
      icon: Gamepad2,
      title: "Gaming Rig Setup",
      description: "High-performance gaming PC builds optimized for ultimate gaming experience with RGB lighting and cooling.",
      features: ["RGB Lighting Setup", "Liquid Cooling", "Overclocking", "Game Optimization"],
      price: "Starting ₹50,000",
      color: "accent"
    },
    {
      icon: MessageCircle,
      title: "Free Consultancy", 
      description: "Expert advice on hardware selection, upgrades, and troubleshooting. Get professional recommendations for free.",
      features: ["Hardware Selection", "Upgrade Advice", "Troubleshooting", "Performance Tips"],
      price: "Completely Free",
      color: "primary"
    }
  ];

  const whyChoose = [
    {
      icon: Shield,
      title: "Certified Technicians",
      description: "Our team consists of certified professionals with years of experience in tech repair and custom builds."
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Most repairs completed within 24 hours. We understand your tech needs can't wait."
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      description: "Quick diagnosis, transparent pricing, and reliable solutions you can trust."
    },
    {
      icon: Wrench,
      title: "All Brands Supported",
      description: "We work with all major laptop and PC brands - Dell, HP, Lenovo, Asus, Acer, and more."
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 particle-bg opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-6">
            <span className="text-primary text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Professional Tech</span>
            <br />
            <span className="gradient-animated bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From laptop repairs to custom gaming PC builds, we provide comprehensive tech solutions 
            with professional quality and fast turnaround times.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="gaming-card group cursor-pointer">
              <CardHeader className="text-center">
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:animate-glow-pulse ${
                  service.color === 'primary' ? 'bg-primary/10' :
                  service.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10'
                }`}>
                  <service.icon className={`w-8 h-8 ${
                    service.color === 'primary' ? 'text-primary' :
                    service.color === 'secondary' ? 'text-secondary' : 'text-accent'
                  }`} />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                        service.color === 'primary' ? 'bg-primary' :
                        service.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                      }`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                <div className={`text-lg font-bold mb-4 ${
                  service.color === 'primary' ? 'text-primary' :
                  service.color === 'secondary' ? 'text-secondary' : 'text-accent'
                }`}>
                    {service.price}
                  </div>
                  <Button 
                    onClick={() => handleWhatsApp(service.title)}
                    className={`w-full group ${
                      service.color === 'primary' 
                        ? 'bg-primary hover:bg-primary/90 hover-glow-cyan' 
                        : service.color === 'secondary'
                        ? 'bg-secondary hover:bg-secondary/90 hover-glow-green text-secondary-foreground'
                        : 'bg-accent hover:bg-accent/90 hover-glow-purple text-accent-foreground'
                    }`}
                    size="sm"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why Choose <span className="text-primary">OP Techify?</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, speed, and reliability to deliver the best tech solutions for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChoose.map((item, index) => (
            <div key={index} className="text-center gaming-card p-6 rounded-xl">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;