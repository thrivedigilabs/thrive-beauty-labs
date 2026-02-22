import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-guides-mockup.jpg";

const HeroSectionV2 = () => {
  return (
    <section className="relative pt-20 overflow-hidden cream-gradient">
      <div className="section-container section-padding">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-heading text-hero-mobile md:text-hero text-foreground mb-6">
              The Beauty Guide Indian Women{" "}
              <span className="text-gradient-gold">Never Had</span>
            </h1>

            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mb-4 leading-relaxed">
              Find your exact foundation match. Pack smarter. Finally understand your skin.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Built specifically for Indian skin tones — fair to deep, warm to cool.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <a href="#final-cta" className="btn-primary pulse-cta">
                Get Instant Access — ₹799
                <ArrowRight size={20} />
              </a>
            </div>

            <p className="font-label text-sm text-muted-foreground">
              Instant download · Works on any device · No subscription
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-cream/40 rounded-3xl blur-3xl -z-10 scale-110" />
              <img
                src={heroImage}
                alt="ThriveBeautyLabs Expert Guide System"
                className="rounded-3xl shadow-2xl floating-animation w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionV2;
