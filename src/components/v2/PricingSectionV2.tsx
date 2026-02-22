import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const valueItems = [
  { label: "True Tone Guide (40 pages)", price: "₹1,799" },
  { label: "Jetsetter Beauty Guide (17 pages)", price: "₹1,200" },
  { label: "Bundle Price", price: "₹2,999" },
];

const PricingSectionV2 = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container max-w-3xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-4">Get the Complete System</p>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            One wrong foundation costs ₹800–₹2,500.
            <br />
            This guide helps you never buy the wrong one again.
          </p>
        </motion.div>

        <motion.div
          className="card-premium !p-0 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="divide-y divide-border">
            {valueItems.map((item) => (
              <div key={item.label} className="flex justify-between items-center px-8 py-4">
                <span className="font-body text-muted-foreground">{item.label}</span>
                <span className="font-label text-muted-foreground line-through">{item.price}</span>
              </div>
            ))}
            <div className="flex justify-between items-center px-8 py-6 bg-gold/5">
              <span className="font-heading text-xl font-bold text-foreground">Your Price Today</span>
              <span className="font-heading text-3xl font-bold text-gradient-gold">₹799</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="#final-cta" className="btn-primary pulse-cta text-lg">
            Get Instant Access — ₹799
            <ArrowRight size={20} />
          </a>
          <p className="font-label text-sm text-muted-foreground mt-4">
            Instant PDF download · Phone, tablet, or laptop · One-time payment
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSectionV2;
