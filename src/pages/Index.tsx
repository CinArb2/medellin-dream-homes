
import HeroSection from "@/components/HeroSection";
import FeaturedListings from "@/components/FeaturedListings";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedListings />
      <ServicesSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
