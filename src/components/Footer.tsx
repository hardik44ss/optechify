import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail,
  Laptop,
  Monitor,
  Gamepad2,
  Wrench,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCall = () => {
    window.location.href = "tel:+917009257610";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917009257610", "_blank");
  };

  const services = [
    { icon: Laptop, name: "Laptop Repair", href: "#services" },
    { icon: Monitor, name: "Custom PC Build", href: "#services" },
    { icon: Gamepad2, name: "Gaming Rig Setup", href: "#services" },
    { icon: Wrench, name: "Free Consultancy", href: "#services" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" }
  ];

  const serviceAreas = [
    "Panchkula",
    "Chandigarh", 
    "Mohali",
    "Zirakpur",
    "Kharar",
    "Derabassi"
  ];

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="absolute inset-0 particle-bg opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-neon gradient-animated bg-clip-text text-transparent mb-4">
                OP Techify
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Professional laptop repairs, custom gaming PC builds, and expert tech consultancy. 
                Fast, reliable, and certified solutions for all your tech needs.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex space-x-3">
              <Button 
                onClick={handleCall}
                size="sm"
                className="bg-primary hover:bg-primary/90 hover-glow-cyan flex-1"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
              <Button 
                onClick={handleWhatsApp}
                size="sm"
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 hover-glow-green flex-1"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 group"
                  >
                    <service.icon className="w-4 h-4 mr-3 text-primary group-hover:animate-glow-pulse" />
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-primary mr-2" />
                <span className="text-primary font-medium text-sm">24/7 Emergency Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h5 className="font-medium text-foreground mb-3">Contact Info</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary mr-2" />
                  <span>+91 70092 57610</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-4 h-4 text-secondary mr-2" />
                  <span>optechify@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Service Areas</h4>
            <div className="space-y-3">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 text-accent mr-3" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
              <h5 className="font-medium text-foreground mb-2">Why Choose Us?</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Certified Technicians</li>
                <li>✓ Same-Day Repairs</li>
                <li>✓ Fast & Trusted Service</li>
                <li>✓ Free Expert Consultancy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 OP Techify. All rights reserved. Professional tech solutions you can trust.
            </div>
            
            {/* Scroll to Top Button */}
            <Button 
              onClick={handleScrollToTop}
              size="sm"
              variant="ghost"
              className="text-muted-foreground hover:text-primary hover-glow-cyan group"
            >
              <ArrowUp className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-1" />
              Back to Top
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-6 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Clock className="w-4 h-4 text-primary mr-1" />
                Same-Day Service
              </span>
              <span className="flex items-center">
                <Wrench className="w-4 h-4 text-secondary mr-1" />
                All Brands Supported
              </span>
              <span className="flex items-center">
                <MapPin className="w-4 h-4 text-accent mr-1" />
                On-Site Repairs Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;