
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Take the first step toward your
            <br />
            dream home with HomeHaven
          </h2>
          
          <div className="flex items-center justify-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-medium text-gray-700">4.9 (1,200+ reviews)</span>
          </div>
          
          <Button className="bg-sky-600 hover:bg-sky-700 text-white px-12 py-4 rounded-2xl text-lg font-semibold">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
