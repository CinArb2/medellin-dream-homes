
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, MapPin, Star } from "lucide-react";

const FeaturedListings = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=3011&auto=format&fit=crop",
      price: "$420M COP",
      neighborhood: "El Poblado",
      bedrooms: 3,
      bathrooms: 2,
      title: "Luxury Apartment"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=6000&auto=format&fit=crop",
      price: "$680M COP",
      neighborhood: "Laureles",
      bedrooms: 2,
      bathrooms: 2,
      title: "Modern Studio"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=3994&auto=format&fit=crop",
      price: "$350M COP",
      neighborhood: "Envigado",
      bedrooms: 2,
      bathrooms: 1,
      title: "Urban Living"
    }
  ];

  return (
    <section className="py-20 2xl:pt-0 bg-white lg:px-[100px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Homes That Fit Your Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Discover exceptional properties in Medellín's most desirable neighborhoods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px]">
          {properties.map((property) => (
            <Card key={property.id} className="cursor-pointer group hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl">
              <div className="relative overflow-hidden h-[300px] 2xl:h-[380px]">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl"
                />
              </div>

              <CardContent className="p-4">
                <div>
                  <div>
                    <div className="flex justify-items-start items-center gap-px">
                      <MapPin className="h-4 w-4"/>
                      <p className="text-muted-foreground font-inter">{property.neighborhood}</p>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground font-playfair">{property.title}</h3>
                  </div>

                  <div className="flex items-center space-x-4 text-muted-foreground mt-2">
                    <div className="flex items-center space-x-1">
                      <Bed className="h-4 w-4" />
                      <span className="font-inter">{property.bedrooms} bed</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                      </div>
                      <span className="font-inter">{property.bathrooms} bath</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="text-2xl font-bold text-primary font-playfair">{property.price}</div>
                    <Button variant="outline" className="rounded-xl border-border hover:bg-primary hover:border-primary font-inter">
                      View More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button className="bg-brand-gold hover:bg-brand-gold/90 text-black text-lg px-8 py-2 rounded-xl font-semibold font-inter m-auto">
            View all properties
          </Button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedListings;
