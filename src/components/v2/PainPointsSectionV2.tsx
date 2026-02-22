import { motion } from "framer-motion";

const painPoints = [
  {
    emoji: "❌",
    title: "You keep buying the wrong foundation",
    description:
      "NC42. Sand Beige. Golden Honey. Wrong every time. You're not bad at makeup — you just never knew your undertone.",
  },
  {
    emoji: "❌",
    title: "Every tutorial was made for someone else",
    description:
      "Their \"nude\" is your concealer. Their techniques oxidize on Indian skin. Their shade ranges weren't made for warm olives and deep neutrals.",
  },
  {
    emoji: "❌",
    title: "Packing makeup before a trip is always stressful",
    description:
      "Too much, too little, wrong products for the climate. You arrive somewhere and nothing works quite right.",
  },
];

const PainPointsSectionV2 = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container">
        <motion.p
          className="eyebrow text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Sound familiar?
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((p, i) => (
            <motion.div
              key={i}
              className="card-premium text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
            >
              <span className="text-4xl block mb-4">{p.emoji}</span>
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
          Western beauty was never built for us.{" "}
          <span className="font-semibold text-gradient-gold">This was.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default PainPointsSectionV2;
