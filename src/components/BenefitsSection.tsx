
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
    <section className="py-20 bg-white lg:px-[100px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Explore our advantages and
            <br />
            top characteristics
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* First card - spans two columns */}
          <Card className="col-span-1 sm:col-span-2 group hover:shadow-xl transition-all duration-300 border-0 shadow-md rounded-2xl overflow-hidden bg-white flex h-[280px]">
            <CardContent className="p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-2 font-playfair mt-4">{benefits[0].title}</h3>
              <p className="text-muted-foreground font-inter text-sm mb-4 mt-4">{benefits[0].description}</p>
              <Button variant="outline" className="bg-foreground text-white hover:bg-foreground/90 rounded-xl font-inter text-sm w-[50%] mt-4">
                Learn more
              </Button>
            </CardContent>
            <div className="relative h-[90%] overflow-hidden rounded-2xl mr-6">
              <img
                // src={benefits[0].image}
                src="./lovable-uploads/living.png"
                alt={benefits[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Card>

          {/* Next 4 cards */}
          {benefits.slice(1, 5).map((benefit, index) => (
            <Card key={index + 1} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md rounded-2xl overflow-hidden bg-white h-[280px] flex flex-col justify-center gap-[15px]">
              <div className="h-28 w-44 flex items-center justify-around">
                <benefit.icon className="h-[70%] w-[70%] text-foreground" />
              </div>
              <CardContent className="p-6 pt-0">
                <h3 className="text-xl font-semibold text-foreground mb-2 font-playfair">{benefit.title}</h3>
                <p className="text-muted-foreground font-inter text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}

          {/* Last card - spans two columns */}
          <Card className="col-span-1 sm:col-span-2 group hover:shadow-xl transition-all duration-300 border-0 shadow-md rounded-2xl overflow-hidden bg-white h-[280px] flex">
            <div className="relative h-[90%] overflow-hidden rounded-2xl ml-6">
              <img
                // src={benefits[5].image}
                src="./lovable-uploads/modern.png"
                alt={benefits[5].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-2 font-playfair mt-4">{benefits[5].title}</h3>
              <p className="text-muted-foreground font-inter text-sm mb-4 mt-4">{benefits[5].description}</p>
              <Button variant="outline" className="bg-foreground text-white hover:bg-foreground/90 rounded-xl font-inter text-sm w-[50%] mt-4">
                Browse apartment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
