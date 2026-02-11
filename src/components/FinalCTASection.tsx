import { ArrowRight, Star, Lock, Download, Check } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-guides-mockup.jpg";

const finalFeatures = [
  "True Tone Guide (70+ pages of shade mastery)",
  "Jetsetter Beauty Guide (50+ pages of travel expertise)",
  "Exclusive Bonus Resources",
  "Lifetime Access + Free Updates Forever",
  "30-Day Money-Back Guarantee",
];

const FinalCTASection = () => {
  return (
    <section id="final-cta" className="section-padding cream-gradient">
      <div className="section-container text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={heroImage}
            alt="The complete ThriveBeautyLabs guide system"
            className="rounded-3xl shadow-2xl mb-12 w-full max-w-2xl mx-auto"
          />

          <h2 className="font-heading text-section-mobile md:text-section mb-2">
            The ThriveBeautyLabs Expert Guide System
          </h2>
          <p className="eyebrow mb-8">Made for Indian Skin Tones</p>

          <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
            {finalFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3 font-body">
                <Check size={18} className="text-success flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mb-6">
            <p className="font-heading text-2xl text-muted-foreground line-through mb-1">₹2,999</p>
            <p className="font-heading text-5xl md:text-7xl font-bold text-gradient-gold mb-2">₹799</p>
            <div className="inline-block bg-destructive/10 text-destructive font-label font-semibold text-sm px-4 py-1.5 rounded-full -rotate-2">
              YOU SAVE: ₹2,200 (73% OFF)
            </div>
          </div>

          <a href="#" className="btn-primary text-xl !px-12 !py-6 pulse-cta inline-flex">
            GET INSTANT ACCESS NOW — ₹799
            <ArrowRight size={22} />
          </a>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm font-label text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Star size={14} className="text-gold" /> 4.9/5 Rating (2,000+ Reviews)
            </span>
            <span className="flex items-center gap-1.5">
              <Lock size={14} /> Secure Checkout
            </span>
            <span className="flex items-center gap-1.5">
              <Download size={14} /> Instant Download
            </span>
          </div>

          {/* Closing copy */}
          <div className="mt-16 max-w-xl mx-auto">
            <p className="font-body text-muted-foreground italic mb-4">Still thinking about it?</p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Every day without these guides is another day of buying the wrong foundation shade,
              wasting hours packing, and missing out on looking your absolute best. For less than the
              cost of ONE wrong foundation purchase, you get a complete system that lasts forever.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
