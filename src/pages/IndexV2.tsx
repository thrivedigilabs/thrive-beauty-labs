import Navbar from "@/components/Navbar";
import HeroSectionV2 from "@/components/v2/HeroSectionV2";
import PainPointsSectionV2 from "@/components/v2/PainPointsSectionV2";
import ProductIntroSectionV2 from "@/components/v2/ProductIntroSectionV2";
import WhatsInsideSectionV2 from "@/components/v2/WhatsInsideSectionV2";
import TestimonialsSectionV2 from "@/components/v2/TestimonialsSectionV2";
import WhoIsForSectionV2 from "@/components/v2/WhoIsForSectionV2";
import PricingSectionV2 from "@/components/v2/PricingSectionV2";
import OrderBumpSectionV2 from "@/components/v2/OrderBumpSectionV2";
import FAQSectionV2 from "@/components/v2/FAQSectionV2";
import FinalCTASectionV2 from "@/components/v2/FinalCTASectionV2";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const IndexV2 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSectionV2 />
        <PainPointsSectionV2 />
        <ProductIntroSectionV2 />
        <WhatsInsideSectionV2 />
        <TestimonialsSectionV2 />
        <WhoIsForSectionV2 />
        <PricingSectionV2 />
        <OrderBumpSectionV2 />
        <FAQSectionV2 />
        <FinalCTASectionV2 />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default IndexV2;
