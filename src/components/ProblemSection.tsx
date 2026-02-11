import { motion } from "framer-motion";

const problems = [
  {
    emoji: "💸",
    title: "₹15,000+ wasted on foundations that don't match",
    description:
      "You've tried 'NC42', 'Sand Beige', 'Golden Honey'—none look right. The problem? You don't know your true undertone.",
  },
  {
    emoji: "😫",
    title: "Every makeup tutorial is for Western skin tones",
    description:
      "They recommend shades you can't find in India. Their 'nude' is your concealer. Their techniques don't work in Mumbai humidity.",
  },
  {
    emoji: "⏰",
    title: "Hours wasted packing makeup before every trip",
    description:
      "You bring 20 products and still forget the essentials. Bottles leak. You look washed out in hotel lighting.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container">
        <motion.h2
          className="font-heading text-section-mobile md:text-section text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          You've Spent Thousands on the Wrong Products
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Sound familiar? Most beauty education ignores Indian skin tones entirely.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              className="card-premium text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
            >
              <span className="text-6xl block mb-6">{p.emoji}</span>
              <h3 className="font-heading text-xl font-semibold mb-3">{p.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-12 font-body text-lg text-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Western guides don't understand our warm olives, deep neutrals, and golden undertones.
          They don't account for our climate, our products, or our needs.{" "}
          <span className="font-semibold text-gradient-gold">Until now.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
