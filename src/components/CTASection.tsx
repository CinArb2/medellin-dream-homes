
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-light-green to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Take the first step toward your
            <br />
            <span className="text-primary">dream home with Medellín Living</span>
          </h2>
          
          <div className="flex items-center justify-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <span className="text-lg font-medium text-muted-foreground font-inter">4.9 (1,200+ reviews)</span>
          </div>
          
          <Button className="bg-primary hover:bg-accent text-primary-foreground px-12 py-4 rounded-2xl text-lg font-semibold font-inter">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
