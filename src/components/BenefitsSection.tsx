
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Star, Users, Key, Briefcase, Contact } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Building,
      title: "Elegant Homes",
      description: "Indulge in luxury down to each element with forefront embellishments.",
      hasImage: true,
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=5760&auto=format&fit=crop",
      hasButton: true
    },
    {
      icon: Contact,
      title: "Custom Support",
      description: "We prioritize building lasting relationships based on trust."
    },
    {
      icon: Star,
      title: "Expert Guidance",
      description: "We prioritize building lasting relationships based on trust."
    },
    {
      icon: Key,
      title: "Seamless Buying",
      description: "We prioritize building lasting relationships based on trust."
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "We prioritize building lasting relationships based on trust."
    },
    {
      icon: Briefcase,
      title: "Modern Apartments",
      description: "Modern areas for the optimal lifestyle experience.",
      hasImage: true,
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=3994&auto=format&fit=crop",
      hasButton: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Explore our advantages and
            <br />
            top characteristics
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md rounded-2xl overflow-hidden bg-white">
              {benefit.hasImage ? (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gray-50 flex items-center justify-center">
                  <benefit.icon className="h-16 w-16 text-foreground" />
                </div>
              )}
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 font-playfair">{benefit.title}</h3>
                <p className="text-muted-foreground font-inter text-sm mb-4">{benefit.description}</p>
                {benefit.hasButton && (
                  <Button variant="outline" className="bg-foreground text-white hover:bg-foreground/90 rounded-xl font-inter text-sm">
                    {benefit.title === "Elegant Homes" ? "Learn more" : "Browse apartment"}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
