import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is this really worth ₹799?",
    a: "Let's do the math: If this helps you avoid buying just 3 wrong foundations (₹800 each), you've saved ₹2,400. If it saves you 2 hours of packing stress before each trip, that's priceless. Plus you get lifetime access + updates. Worth 10X the price.",
  },
  {
    q: "What format are the guides?",
    a: "High-quality PDF (works on iPhone, Android, iPad, laptop, desktop). Mobile-optimized, fully searchable, printable.",
  },
  {
    q: "How do I get them after purchase?",
    a: "Instant download link arrives in your email within 2 minutes. Also saved to your account dashboard forever (you'll never lose them).",
  },
  {
    q: "Are ALL products available in India?",
    a: "YES. Every single product recommended can be bought on Nykaa, Amazon India, or brand websites with India delivery. No international shopping needed.",
  },
  {
    q: "Will this work for my specific skin tone?",
    a: "These guides cover the FULL spectrum of Indian skin tones—from fair (NC20) to deep (NC50+). We map warm, cool, olive, and neutral undertones. If you have Indian heritage (any shade), this was made for you.",
  },
  {
    q: "I'm a complete beginner. Is this too advanced?",
    a: "Perfect for beginners! We explain everything in simple language. The undertone test is designed for people with ZERO beauty knowledge. Plus the guides grow with you.",
  },
  {
    q: "How is this different from free YouTube content?",
    a: "YouTube: Scattered, unorganized, generic, contradictory, time-consuming. This: Complete system, organized by skin tone, specific to Indian women, searchable, always accessible (no ads!), expert-verified.",
  },
  {
    q: "Can I get a refund if I don't like it?",
    a: "Absolutely. 30-day money-back guarantee. Email us, no questions asked. You keep the guides, we refund you. Zero risk.",
  },
  {
    q: "Is ₹799 a one-time payment?",
    a: "Yes. One-time payment, lifetime access. No subscriptions, no hidden fees. ₹799 once, use forever.",
  },
  {
    q: "Do you really update these for free?",
    a: "100%. When we add new products, map new shades, or improve sections—you get the updated guide emailed to you FREE. Forever.",
  },
];

const FAQItem = ({ faq, isOpen, toggle }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }) => (
  <div
    className={`border rounded-xl overflow-hidden transition-all duration-300 ${
      isOpen ? "border-l-4 border-l-gold border-gold/30" : "border-border"
    }`}
  >
    <button
      onClick={toggle}
      className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-muted/30 transition-colors"
    >
      <span className="font-heading text-base md:text-lg font-semibold pr-4">{faq.q}</span>
      {isOpen ? (
        <Minus size={20} className="text-gold flex-shrink-0" />
      ) : (
        <Plus size={20} className="text-muted-foreground flex-shrink-0" />
      )}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 pb-6 font-body text-muted-foreground leading-relaxed">
            {faq.a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding">
      <div className="section-container max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-section-mobile md:text-section">
            Your Questions, Answered
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
