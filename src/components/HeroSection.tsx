
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select"
import { MapPin, CircleDollarSign, Bed } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="container relative min-h-screen lg:px-[100px] 2xl:px-[0]">
      <div className="flex flex-row justify-between pt-[40px] 2xl:pt-[80px] pb-[50px] gap-[100px]">
        <h1 className="mx-auto text-4xl md:text-5xl font-playfair font-bold text-foreground  flex-grow lg:leading-snug">
          Find Your Dream Apartment <br/> in Medellín
        </h1>

        <p className="text-[16px] text-muted-foreground max-w-2xl mx-auto font-inter self-end">
          Discover the boundless horizons of real <br/> estate, where dreams and reality converge
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl min-h-[400px] h-[50vh]">
        <img
          className="w-full h-full object-cover opacity-[0.8] object-[center_25%]"
          // src="./lovable-uploads/acad8f17-4105-4bf3-9a5f-7db8ca55ca73.png"
          src="./lovable-uploads/landscape-2.png"
          alt=""
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 relative top-[-50px] rounded-2xl">
          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-6 shadow-xl max-w-4xl mx-auto border border-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <Select>
                  <SelectTrigger className="h-12">
                    <div className="flex flex-row gap-2 items-center">
                      <SelectPrimitive.Icon asChild>
                        <MapPin  className="h-4 w-4 opacity-50" />
                      </SelectPrimitive.Icon>
                      <SelectValue placeholder="Select area" />
                    </div>
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
                <Select>
                  <SelectTrigger className="h-12">
                    <div className="flex flex-row gap-2 items-center">
                      <SelectPrimitive.Icon asChild>
                        <CircleDollarSign  className="h-4 w-4 opacity-50" />
                      </SelectPrimitive.Icon>
                      <SelectValue placeholder="Budget" />
                    </div>
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
                <Select>
                  <SelectTrigger className="h-12">
                    <div className="flex flex-row gap-2 items-center">
                      <SelectPrimitive.Icon asChild>
                        <Bed  className="h-4 w-4 opacity-50" />
                      </SelectPrimitive.Icon>
                      <SelectValue placeholder="Beds" />
                    </div>
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
