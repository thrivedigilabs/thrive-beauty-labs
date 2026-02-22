import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I spent ₹18,000 on wrong foundations in 3 years. The undertone test took me 5 minutes. I finally understand I'm warm olive — not just 'tan.' Found my exact matches in the directory, all on Nykaa.",
    name: "Priya Malhotra",
    role: "Marketing Manager, Mumbai",
  },
  {
    quote:
      "The lip shade guide is gold. Every trending colour looked wrong on me. Now I know exactly what to look for — and I get compliments on my lipstick every day.",
    name: "Ria Sen",
    role: "Content Creator, Kolkata",
  },
  {
    quote:
      "The ingredient guide alone is worth ₹799. I finally understand what I'm putting on my face. Packed for a 2-week Europe trip with just a carry-on makeup pouch.",
    name: "Neha Sharma",
    role: "Consultant, Delhi",
  },
  {
    quote:
      "As a deep-skinned Indian woman I have never seen a guide that actually includes my shade range. The lip section showed me nude shades that don't look ashy on me.",
    name: "Anjali Krishnan",
    role: "Entrepreneur, Bangalore",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} className="fill-gold text-gold" />
    ))}
  </div>
);

const TestimonialsSectionV2 = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-section-mobile md:text-section">
            2,000+ Indian Women Have Found Their Match
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="card-premium border-l-4 border-l-gold !rounded-l-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.1 }}
            >
              <StarRating />
              <p className="font-body text-foreground italic leading-relaxed mb-4">
                "{t.quote}"
              </p>
              <div>
                <p className="font-label font-semibold text-sm">— {t.name}</p>
                <p className="font-label text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSectionV2;
