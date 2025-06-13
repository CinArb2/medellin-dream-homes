
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/2605c8cf-4037-4663-9291-56db4edb3369.png"
                alt="Medellín Living"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 font-inter">
              Your trusted partner in finding the perfect home in Medellín.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-playfair">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors font-inter">About</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors font-inter">Properties</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors font-inter">Services</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors font-inter">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-playfair">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors font-inter">Buy Property</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors font-inter">Sell Property</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors font-inter">Rental Management</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors font-inter">Consulting</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-playfair">Stay Updated</h4>
            <p className="text-primary-foreground/80 text-sm font-inter">
              Get the latest property listings delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="w-full bg-brand-gold hover:bg-brand-gold/90 text-primary font-inter">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p className="font-inter">&copy; 2024 Medellín Living. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
