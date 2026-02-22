import { motion } from "framer-motion";
import heroImage from "@/assets/hero-guides-mockup.jpg";

const ProductIntroSectionV2 = () => {
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

        <motion.div
          className="font-body text-muted-foreground text-lg max-w-3xl mx-auto mb-4 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p>
            Two focused guides. Created by a professional makeup artist with 8+ years working
            exclusively with Indian skin tones.
          </p>
          <p>
            Not a YouTube playlist. Not a generic blog post.
          </p>
          <p>
            A complete, organized system — for your undertone, your shade range, your travel needs.
          </p>
        </motion.div>

        <motion.p
          className="font-label text-sm text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          ⭐ 4.9 Stars · Trusted by 2,000+ Indian Women
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

export default ProductIntroSectionV2;
