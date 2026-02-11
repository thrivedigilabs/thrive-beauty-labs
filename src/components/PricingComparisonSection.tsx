import { X, Check } from "lucide-react";
import { motion } from "framer-motion";

const alternatives = [
  { text: "Beauty course (3 hours)", price: "₹3,000–₹8,000", sub: "Generic, not specific to Indian skin tones" },
  { text: "1-on-1 makeup consultation", price: "₹2,500–₹5,000", sub: "One session, then you're on your own" },
  { text: "Trial and error with products", price: "₹15,000–₹30,000", sub: "Most people waste this much on wrong shades" },
  { text: "YouTube University", price: "Free (costs HOURS)", sub: "Scattered, unorganized, contradictory" },
];

const whatYouGet = [
  "8 years of professional expertise",
  "120+ pages of organized, searchable knowledge",
  "150+ verified product recommendations (India-available)",
  "Lifetime access + free updates forever",
  "Instant download (start in 5 minutes)",
  "Access anywhere (phone, tablet, laptop)",
];

const PricingComparisonSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-section-mobile md:text-section mb-4">
            Why ₹799? (And Why It's Worth Way More)
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Alternatives */}
          <motion.div
            className="card-premium border-destructive/20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl font-bold mb-6 text-destructive/80">The Alternative</h3>
            <ul className="space-y-4">
              {alternatives.map((a) => (
                <li key={a.text} className="flex items-start gap-3">
                  <X size={18} className="text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-body font-medium line-through">{a.text}: {a.price}</span>
                    <p className="font-body text-sm text-muted-foreground">{a.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What you get */}
          <motion.div
            className="card-premium border-2 border-gold/30"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl font-bold mb-6 text-gradient-gold">What You Get Here</h3>
            <ul className="space-y-4">
              {whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={18} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="font-body">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-heading text-3xl font-bold text-gradient-gold text-center">₹799</p>
              <p className="text-center font-label text-sm text-muted-foreground">One-time payment, lifetime access</p>
            </div>
          </motion.div>
        </div>

        {/* Savings callout */}
        <motion.div
          className="mt-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-lg text-muted-foreground">
            If this helps you find even <strong>ONE</strong> perfect foundation match and saves you from
            buying 5 more wrong ones—it's paid for itself.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingComparisonSection;
