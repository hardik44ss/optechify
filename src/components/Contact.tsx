import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail,
  Send,
  Zap
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hi! I'm ${formData.name}
    
Phone: ${formData.phone}
Service Needed: ${formData.service}
Message: ${formData.message}

Please get back to me soon. Thanks!`;

    window.open(`https://wa.me/917009257610?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 30 minutes.",
    });

    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  const handleDirectCall = () => {
    window.location.href = "tel:+917009257610";
  };

  const handleDirectWhatsApp = () => {
    window.open("https://wa.me/917009257610", "_blank");
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Directly",
      description: "Speak with our experts",
      action: "+91 70092 57610",
      color: "primary",
      onClick: handleDirectCall
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Quick response guaranteed", 
      action: "Chat Now",
      color: "secondary",
      onClick: handleDirectWhatsApp
    },
    {
      icon: MapPin,
      title: "Service Areas",
      description: "We come to you",
      action: "Panchkula • Chandigarh • Mohali",
      color: "accent",
      onClick: () => {}
    }
  ];

  const serviceOptions = [
    "Laptop Repair",
    "Custom PC Build", 
    "Gaming Rig Setup",
    "Free Consultancy",
    "Screen Replacement",
    "Motherboard Repair",
    "Performance Upgrade",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 particle-bg opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-6">
            <span className="text-primary text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Ready to Fix Your</span>
            <br />
            <span className="text-primary">Tech Issues?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our expert technicians. Fast response, transparent pricing, and professional service guaranteed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="gaming-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 30 minutes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 bg-input border-border text-foreground"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 bg-input border-border text-foreground"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="text-foreground">Service Needed</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 bg-input border-border text-foreground"
                    placeholder="Describe your tech issue or requirements..."
                    rows={4}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 hover-glow-cyan group"
                  size="lg"
                >
                  Send Message via WhatsApp
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Methods & Info */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Contact</h3>
              {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className={`gaming-card cursor-pointer transition-all duration-300 ${method.onClick ? 'hover:scale-105' : ''}`}
              onClick={method.onClick}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    method.color === 'primary' ? 'bg-primary/10' :
                    method.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10'
                  }`}>
                    <method.icon className={`w-6 h-6 ${
                      method.color === 'primary' ? 'text-primary' :
                      method.color === 'secondary' ? 'text-secondary' : 'text-accent'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{method.title}</h4>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    <p className={`text-sm font-medium mt-1 ${
                      method.color === 'primary' ? 'text-primary' :
                      method.color === 'secondary' ? 'text-secondary' : 'text-accent'
                    }`}>
                          {method.action}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours & Features */}
            <Card className="gaming-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground">Business Hours</h4>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span className="text-foreground font-medium">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-foreground font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center mt-4 p-3 bg-primary/10 rounded-lg">
                    <Zap className="w-5 h-5 text-primary mr-2" />
                    <span className="text-primary font-medium text-sm">24/7 Emergency Support Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="gaming-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-secondary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email Us</h4>
                    <p className="text-secondary">optechify@gmail.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 2 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;