
import { Card, CardContent } from "@/components/ui/card";
import { Building, Star, Users, Key, Briefcase, Contact } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Building,
      title: "Elegant Homes",
      description: "Curated selection of premium properties",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=5760&auto=format&fit=crop"
    },
    {
      icon: Contact,
      title: "Custom Support",
      description: "Personalized service for every client"
    },
    {
      icon: Star,
      title: "Expert Guidance",
      description: "Professional advice from local experts"
    },
    {
      icon: Key,
      title: "Seamless Buying",
      description: "Smooth transaction process"
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Your satisfaction is our priority"
    },
    {
      icon: Briefcase,
      title: "Modern Apartments",
      description: "Contemporary living spaces",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=3994&auto=format&fit=crop"
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
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md rounded-2xl overflow-hidden">
              {benefit.image ? (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-40 flex items-center justify-center">
                    <benefit.icon className="h-12 w-12 text-white" />
                  </div>
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-brand-light-green to-secondary flex items-center justify-center">
                  <benefit.icon className="h-16 w-16 text-primary" />
                </div>
              )}
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 font-playfair">{benefit.title}</h3>
                <p className="text-muted-foreground font-inter">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
