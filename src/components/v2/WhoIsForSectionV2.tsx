import { Check } from "lucide-react";
import { motion } from "framer-motion";

const forYouItems = [
  "You've bought foundations that looked wrong after you got home",
  "You don't know your undertone — or aren't sure you have it right",
  "You want beauty advice built for Indian skin, not adapted from Western content",
  "You want to stop wasting money on products that don't suit you",
  "You travel and want a clean, simple packing system",
  "You're a beginner who wants clear, organized guidance",
];

const WhoIsForSectionV2 = () => {
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
            This Is For You If
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

export default WhoIsForSectionV2;
