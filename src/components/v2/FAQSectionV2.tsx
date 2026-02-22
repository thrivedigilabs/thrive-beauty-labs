import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is this worth ₹799?",
    a: "One wrong foundation costs more. This costs less than your last makeup mistake — and it's designed to prevent the next 20.",
  },
  {
    q: "What format are the guides?",
    a: "PDF. Instant download after purchase. Works on any device — phone, tablet, or laptop.",
  },
  {
    q: "Are all the products available in India?",
    a: "Yes. Every product in the foundation directory, lip guide, blush, and highlighter tables is available on Nykaa, Amazon India, or brand websites — across affordable, mid-range, and premium budgets.",
  },
  {
    q: "Will this work for my skin tone?",
    a: "Yes. The guides cover every Indian skin tone — fair to deep, warm to cool to neutral. If you're Indian, this was made for you.",
  },
  {
    q: "I'm a complete beginner. Is this too advanced?",
    a: "No. The Jetsetter Guide includes step-by-step instructions for using every product. The True Tone Guide walks you through undertone identification from scratch. Zero experience needed.",
  },
  {
    q: "What if I already know my undertone?",
    a: "Go straight to the Foundation Directory and find your product matches. The Jetsetter Guide works independently of the shade content.",
  },
  {
    q: "Is this a subscription?",
    a: "No. One payment. Both guides. Yours to keep.",
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

const FAQSectionV2 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding">
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

export default FAQSectionV2;
