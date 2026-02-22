import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTASectionV2 = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-section-mobile md:text-section mb-4">
            Stop Guessing. <span className="text-gradient-gold">Start Knowing.</span>
          </h2>

          <p className="font-body text-muted-foreground text-lg mb-2">
            Your undertone. Your foundation matches. Your travel packing system.
          </p>
          <p className="font-body text-muted-foreground text-lg mb-10">
            Everything — in one ₹799 download.
          </p>

          <a href="#final-cta" className="btn-primary pulse-cta text-lg">
            Get Instant Access — ₹799
            <ArrowRight size={20} />
          </a>

          <p className="font-label text-sm text-muted-foreground mt-6">
            2,000+ Indian women already have · Instant download · One-time payment
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASectionV2;
