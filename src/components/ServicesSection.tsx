
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white p-[100px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-8">
              Your Trusted Partner in Real Estate Solutions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="buying" className="border border-border rounded-2xl px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline font-playfair">
                  Property Buying
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 font-inter">
                  Expert guidance through every step of your property purchase journey, from initial search to final closing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="selling" className="border border-border rounded-2xl px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline font-playfair">
                  Property Selling
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 font-inter">
                  Maximize your property value with our comprehensive marketing strategies and negotiation expertise.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="rental" className="border border-border rounded-2xl px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline font-playfair">
                  Rental Management
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 font-inter">
                  Complete rental property management including tenant screening, maintenance, and rent collection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="management" className="border border-border rounded-2xl px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline font-playfair">
                  Property Management
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 font-inter">
                  Professional property maintenance and management services to protect your investment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="consulting" className="border border-border rounded-2xl px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline font-playfair">
                  Real Estate Consulting
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 font-inter">
                  Strategic advice for property investments and market analysis to make informed decisions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="lg:order-first">
            <img
              // src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=3857&auto=format&fit=crop"
              src="/lovable-uploads/services.png"
              alt="Modern building in Medellín"
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
