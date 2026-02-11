import { motion } from "framer-motion";
import heroImage from "@/assets/hero-guides-mockup.jpg";

const SolutionSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container text-center">
        <motion.p
          className="eyebrow mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Introducing
        </motion.p>

        <motion.h2
          className="font-heading text-section-mobile md:text-section mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The ThriveBeautyLabs Expert Guide System
        </motion.h2>

        <motion.p
          className="font-body text-muted-foreground text-lg max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          120+ pages of expert beauty knowledge—created specifically for Indian women by a
          professional makeup artist with 8+ years specializing in Indian skin tones.
          This isn't a blog post compilation. This is a <strong>COMPLETE SYSTEM</strong>.
        </motion.p>

        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold-light/30 rounded-3xl blur-3xl -z-10 scale-105" />
          <img
            src={heroImage}
            alt="ThriveBeautyLabs complete guide system"
            className="rounded-3xl shadow-2xl w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
