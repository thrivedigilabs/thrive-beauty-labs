import { ArrowRight, Sparkles, Download, Infinity } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-guides-mockup.jpg";

const trustBadges = [
  { icon: Sparkles, label: "Expert-Created System" },
  { icon: Download, label: "Instant Digital Download" },
  { icon: Infinity, label: "Lifetime Access" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-20 overflow-hidden cream-gradient">
      <div className="section-container section-padding">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left column - 3/5 */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow mb-4">The Complete Beauty System for Indian Skin Tones</p>

            <h1 className="font-heading text-hero-mobile md:text-hero text-foreground mb-6">
              Master Your Undertone, Find Your Perfect Shades, and{" "}
              <span className="text-gradient-gold">Travel Like a Beauty Pro</span>
            </h1>

            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Two comprehensive expert guides (120+ pages) with verified product recommendations
              for every Indian skin tone—from fair to deep.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <a href="#final-cta" className="btn-primary pulse-cta">
                Get Instant Access — ₹799
                <ArrowRight size={20} />
              </a>
              <span className="font-label text-sm text-muted-foreground">
                ⭐ 4.9★ Rating • 2,000+ Women Transformed
              </span>
            </div>

            <div className="flex flex-wrap gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <badge.icon size={18} className="text-gold" />
                  <span className="font-label text-sm text-muted-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column - 2/5 */}
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
                alt="ThriveBeautyLabs Expert Guide System - Premium beauty guides displayed on marble surface"
                className="rounded-3xl shadow-2xl floating-animation w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative gold dots */}
      <div className="absolute top-32 right-10 w-3 h-3 rounded-full bg-gold/30 hidden lg:block" />
      <div className="absolute bottom-40 left-16 w-2 h-2 rounded-full bg-gold/20 hidden lg:block" />
    </section>
  );
};

export default HeroSection;
