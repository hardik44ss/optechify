
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Fade-in on scroll logic
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.fade-in-section').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground relative"
      style={{
        backgroundImage: 'url(/op-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated CSS Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-32 h-1 bg-gradient-to-r from-primary to-accent animate-move-x" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 right-20 w-24 h-1 bg-gradient-to-r from-accent to-primary animate-move-x-reverse" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow">
            <circle cx="30" cy="30" r="28" stroke="#00f0ff" strokeWidth="4" strokeDasharray="10 10" />
          </svg>
        </div>
      </div>
      <Navbar />
      <main>
        <div className="fade-in-section"><Hero /></div>
        <div className="fade-in-section"><Services /></div>
        <div className="fade-in-section"><Reviews /></div>
        <div className="fade-in-section"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
