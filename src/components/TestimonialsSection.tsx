import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I spent ₹18,000 on wrong foundation shades in the last 3 years. THIS GUIDE solved it in ONE DAY. The undertone test was so detailed—finally I understand I'm warm olive, not just 'tan'. Worth 10X the price.",
    name: "Priya Malhotra",
    detail: "Warm Olive NC37, Mumbai",
    role: "Marketing Manager • Travels monthly",
  },
  {
    quote:
      "As a deep-skinned Indian woman, I've NEVER seen a guide that actually includes my shade range. The lip guide changed my life—'nude' shades that don't look ashy on me! Plus the travel packing system saved me 2 hours before my Bali trip.",
    name: "Anjali Krishnan",
    detail: "Deep Neutral NC47, Bangalore",
    role: "Entrepreneur • Travel blogger",
  },
  {
    quote:
      "I'm fair-skinned (NC25) and every 'light' foundation was too dark. The True Tone Guide helped me find 8 perfect matches—all available on Nykaa! The blush recommendations are *chef's kiss*. Best ₹799 I've ever spent.",
    name: "Meera Reddy",
    detail: "Fair Cool NC25, Hyderabad",
    role: "Lawyer • Makeup enthusiast",
  },
  {
    quote:
      "Bought this before my honeymoon. Used BOTH guides—the shade matching for my bridal makeup, then the travel packing for the trip. My makeup artist was impressed I knew my exact undertone!",
    name: "Kavya Desai",
    detail: "Warm Neutral NC40, Pune",
    role: "Teacher • Recently married",
  },
  {
    quote:
      "The lip shade guide is GOLD. I'm olive-toned and every 'trending' lip color looked terrible on me. Now I know exactly what to look for. I get compliments on my lipstick daily now.",
    name: "Ria Sen",
    detail: "Olive NC42, Kolkata",
    role: "Content Creator • Clean beauty advocate",
  },
  {
    quote:
      "The ingredient guide alone is worth ₹799. I finally understand what I'm putting on my face. The Jetsetter Guide helped me pack for a 2-week Europe trip with JUST a carry-on makeup pouch.",
    name: "Neha Sharma",
    detail: "Medium Cool NC35, Delhi",
    role: "Consultant • 50+ travel days/year",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} className="fill-gold text-gold" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-4">Real Results</p>
          <h2 className="font-heading text-section-mobile md:text-section">
            Trusted by 2,000+ Indian Women
          </h2>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid card-premium border-l-4 border-l-gold !rounded-l-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08 }}
            >
              <StarRating />
              <p className="font-body text-foreground italic leading-relaxed mb-4">
                "{t.quote}"
              </p>
              <div>
                <p className="font-label font-semibold text-sm">— {t.name}</p>
                <p className="font-label text-xs text-muted-foreground">{t.detail}</p>
                <p className="font-label text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
