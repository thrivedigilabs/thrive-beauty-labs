import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ValueStackSection from "@/components/ValueStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingComparisonSection from "@/components/PricingComparisonSection";
import WhoIsForSection from "@/components/WhoIsForSection";
import FAQSection from "@/components/FAQSection";
import OrderBumpSection from "@/components/OrderBumpSection";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ValueStackSection />
        <TestimonialsSection />
        <PricingComparisonSection />
        <WhoIsForSection />
        <OrderBumpSection />
        <FAQSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
