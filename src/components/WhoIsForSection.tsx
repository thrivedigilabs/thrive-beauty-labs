import { Check } from "lucide-react";
import { motion } from "framer-motion";

const forYouItems = [
  "Have Indian skin tones (any shade from fair to deep)",
  "Are tired of Western beauty standards and advice",
  "Struggle to find foundation/concealer matches",
  "Want to understand YOUR undertone once and for all",
  "Shop online and get frustrated with shade mismatches",
  "Travel for work or pleasure (domestic or international)",
  "Value cruelty-free, conscious beauty products",
  "Want expert guidance, not trial-and-error",
  "Are building a curated, high-quality makeup collection",
  "Feel overwhelmed by contradictory beauty advice online",
];

const WhoIsForSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-section-mobile md:text-section mb-4">
            This System Is Perfect If You:
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ul className="space-y-1">
            {forYouItems.map((item, i) => (
              <li
                key={i}
                className={`flex items-center gap-4 py-3 px-4 rounded-lg font-body text-base md:text-lg ${
                  i % 2 === 0 ? "bg-muted/50" : ""
                }`}
              >
                <Check size={20} className="text-gold flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsForSection;
