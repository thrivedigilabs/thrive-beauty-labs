import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ValueStackSection from "@/components/ValueStackSection";
import CredibilitySection from "@/components/CredibilitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingComparisonSection from "@/components/PricingComparisonSection";
import WhoIsForSection from "@/components/WhoIsForSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import UrgencySection from "@/components/UrgencySection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
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
        <CredibilitySection />
        <TestimonialsSection />
        <PricingComparisonSection />
        <WhoIsForSection />
        <GuaranteeSection />
        <UrgencySection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
