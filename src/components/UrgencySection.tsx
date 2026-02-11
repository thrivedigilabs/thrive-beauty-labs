import { Clock } from "lucide-react";
import { motion } from "framer-motion";

const UrgencySection = () => {
  const sold = 387;
  const total = 500;
  const remaining = total - sold;
  const percentage = (sold / total) * 100;

  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          className="max-w-2xl mx-auto card-premium border-2 border-gold/30 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock size={22} className="text-gold-dark" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold">
              Launch Pricing Won't Last
            </h2>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="font-heading text-2xl text-muted-foreground line-through">₹2,999</span>
            <span className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold">₹799</span>
          </div>

          <p className="font-body text-muted-foreground mb-6">
            We're keeping this price for the first <strong>500 customers</strong> only.
            After that, it increases to ₹1,499.
          </p>

          {/* Progress bar */}
          <div className="mb-4">
            <div className="flex justify-between font-label text-sm mb-2">
              <span className="text-muted-foreground">{sold}/{total} bundles sold</span>
              <span className="text-gold-dark font-semibold">{remaining} spots left</span>
            </div>
            <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full gold-gradient rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>

          <p className="font-body text-sm text-muted-foreground">
            Once they're gone, the price doubles. Don't miss this one-time opportunity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
