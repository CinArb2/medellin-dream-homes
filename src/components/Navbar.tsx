
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border lg:px-[100px] h-[100px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="./lovable-uploads/2605c8cf-4037-4663-9291-56db4edb3369.png"
              alt="Medellín Living"
              className="h-16 w-auto rounded-full"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary font-medium font-inter transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary font-medium font-inter transition-colors">
              About
            </a>
            <a href="#" className="text-foreground hover:text-primary font-medium font-inter transition-colors">
              Properties
            </a>
            <a href="#" className="text-foreground hover:text-primary font-medium font-inter transition-colors">
              Agents
            </a>
          </div>

          {/* Login Button */}
          <div className="flex-shrink-0">
            <Button className="bg-brand-gold hover:bg-brand-gold/90 text-black px-6 py-2 rounded-xl font-semibold font-inter">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
