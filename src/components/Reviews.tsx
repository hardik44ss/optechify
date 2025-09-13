import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Arjun Singh",
      location: "Chandigarh",
      rating: 5,
      review: "My gaming laptop was overheating badly. OP Techify fixed it in just 4 hours and now it runs like new! Excellent service and very affordable pricing.",
      service: "Laptop Repair"
    },
    {
      name: "Priya Sharma",
      location: "Panchkula", 
      rating: 5,
      review: "Got a custom gaming PC built for my son. The RGB lighting looks amazing and performance is incredible. Professional work and great communication throughout.",
      service: "Gaming PC Build"
    },
    {
      name: "Rohit Kumar",
      location: "Mohali",
      rating: 5,
      review: "Screen replacement on my Dell laptop was done perfectly. Same day service and very reasonable cost. Highly recommend OP Techify for any laptop issues.",
      service: "Screen Replacement"
    },
    {
      name: "Neha Gupta", 
      location: "Chandigarh",
      rating: 5,
      review: "Free consultancy helped me choose the right components for my workstation. They saved me from making expensive mistakes. Honest and knowledgeable team.",
      service: "Free Consultancy"
    },
    {
      name: "Vikash Yadav",
      location: "Panchkula",
      rating: 5,
      review: "My HP laptop motherboard was repaired at half the cost of other shops. Quick diagnosis and transparent pricing. Will definitely come back for future needs.",
      service: "Motherboard Repair"
    },
    {
      name: "Simran Kaur",
      location: "Mohali", 
      rating: 5,
      review: "Built an amazing gaming rig for streaming. The performance and aesthetics are beyond my expectations. Professional assembly and great after-sales support.",
      service: "Gaming Rig Setup"
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 relative">
      <div className="absolute inset-0 particle-bg opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-6 hover-scale">
            <span className="text-primary text-sm font-medium">Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">What Our</span>
            <br />
            <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from satisfied customers across Chandigarh, Panchkula, and Mohali.
          </p>
        </div>

        {/* Featured Review */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <Card className="gaming-card p-8 text-center relative overflow-hidden hover-scale">
            <div className="absolute top-4 left-4 animate-glow-pulse">
              <Quote className="w-8 h-8 text-primary/30" />
            </div>
            <div className="absolute bottom-4 right-4 rotate-180 animate-glow-pulse" style={{ animationDelay: '1s' }}>
              <Quote className="w-8 h-8 text-primary/30" />
            </div>
            
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                {renderStars(reviews[currentReview].rating)}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed">
                "{reviews[currentReview].review}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <div className="font-semibold text-foreground text-lg">
                    {reviews[currentReview].name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {reviews[currentReview].location} • {reviews[currentReview].service}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Review Indicators */}
        <div className="flex justify-center space-x-2 mb-16">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview
                  ? "bg-primary glow-cyan"
                  : "bg-muted hover:bg-primary/50"
              }`}
            />
          ))}
        </div>

        {/* Review Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 6).map((review, index) => (
            <Card key={index} className="gaming-card hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-foreground">{review.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {review.location} • {review.service}
                    </CardDescription>
                  </div>
                  <div className="flex hover:animate-glow-pulse">{renderStars(review.rating)}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{review.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

  {/* ...existing code... */}
      </div>
    </section>
  );
};

export default Reviews;