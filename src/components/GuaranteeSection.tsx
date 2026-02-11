import { Shield, Check } from "lucide-react";
import { motion } from "framer-motion";

const guaranteeItems = [
  "Find at least 3 perfect product matches",
  "Save hours on your next packing session",
  "Feel 10X more confident in your shade choices",
  "Think this is worth at least ₹5,000 in value",
];

const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex flex-col items-center justify-center w-36 h-36 rounded-full border-4 border-gold bg-card shadow-2xl mb-8">
            <Shield size={28} className="text-gold mb-1" />
            <span className="font-heading text-xl font-bold text-foreground">30-DAY</span>
            <span className="font-label text-[10px] uppercase tracking-wider text-muted-foreground">
              Money-Back Guarantee
            </span>
          </div>

          <h2 className="font-heading text-section-mobile md:text-section mb-6">
            Transform or Refund
          </h2>

          <p className="font-body text-lg text-muted-foreground mb-8">
            Download the guides. Use them for 30 days. If you don't:
          </p>

          <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
            {guaranteeItems.map((item) => (
              <li key={item} className="flex items-center gap-3 font-body">
                <Check size={18} className="text-success flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="font-body text-lg text-foreground font-medium mb-2">
            Just email us. We'll refund every rupee.
          </p>
          <p className="font-body text-muted-foreground">
            You keep the guides. No questions asked. Because we KNOW this works.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
