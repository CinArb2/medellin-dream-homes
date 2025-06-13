
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-20">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/lovable-uploads/acad8f17-4105-4bf3-9a5f-7db8ca55ca73.png')"
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground leading-tight">
            Find Your Dream
            <br />
            <span className="text-primary">Apartment in Medellín</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Exclusive listings from top local agents
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-6 shadow-xl max-w-4xl mx-auto border border-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground font-inter">Neighborhood</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg">
                    <SelectItem value="el-poblado">El Poblado</SelectItem>
                    <SelectItem value="laureles">Laureles</SelectItem>
                    <SelectItem value="envigado">Envigado</SelectItem>
                    <SelectItem value="sabaneta">Sabaneta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground font-inter">Price Range</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg">
                    <SelectItem value="0-300">$0 - $300M COP</SelectItem>
                    <SelectItem value="300-500">$300M - $500M COP</SelectItem>
                    <SelectItem value="500-800">$500M - $800M COP</SelectItem>
                    <SelectItem value="800+">$800M+ COP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground font-inter">Bedrooms</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Beds" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg">
                    <SelectItem value="1">1 Bedroom</SelectItem>
                    <SelectItem value="2">2 Bedrooms</SelectItem>
                    <SelectItem value="3">3 Bedrooms</SelectItem>
                    <SelectItem value="4+">4+ Bedrooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="h-12 bg-brand-gold hover:bg-brand-gold/90 text-black px-8 rounded-xl text-lg font-semibold font-inter">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
