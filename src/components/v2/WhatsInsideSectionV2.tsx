import { Check } from "lucide-react";
import { motion } from "framer-motion";
import guideTrueTone from "@/assets/guide-truetone.jpg";
import guideJetsetter from "@/assets/guide-jetsetter.jpg";

const guide1Features = [
  {
    title: "Find your undertone in 5 minutes",
    desc: "Three simple at-home tests — veins, jewelry, sun reaction. No tools, no guesswork.",
  },
  {
    title: "Identify your shade range",
    desc: "Fair-Light, Medium-Tan, or Dark-Deep. Takes one minute in natural daylight.",
  },
  {
    title: "Find your foundation match",
    desc: "50+ foundations mapped by undertone and budget. Real brands — Kiro, Kay Beauty, SUGAR, Plum, Ruby's Organics, Faces Canada. Premium to affordable. All available on Nykaa.",
  },
  {
    title: "Lip shades that actually suit you",
    desc: "Nude, office wear, and party looks — organized by your undertone. Stop guessing what \"nude\" means for Indian skin.",
  },
  {
    title: "Blush and highlighter matched to your tone",
    desc: "Warm, cool, neutral — specific product picks across every budget tier.",
  },
  {
    title: "Skin prep that makes makeup last",
    desc: "The right cleanser, moisturizer, SPF, and primer for your skin type — before any makeup goes on.",
  },
];

const guide2Features = [
  {
    title: "The complete travel packing checklist",
    desc: "Base, eyes, lips, tools, extras — organized and TSA-ready. Tick it off before every trip.",
  },
  {
    title: "Know what every ingredient does",
    desc: "A clear table — product by product — showing key ingredients, what they do, and what to avoid for your skin type.",
  },
  {
    title: "Step-by-step routines for every product",
    desc: "How to use your moisturizer, SPF, concealer, mascara, brow gel, lipstick — beginner-level instructions that work anywhere.",
  },
  {
    title: "Product replacement timeline",
    desc: "When to replace mascara, foundation, lipstick, eyeliner, sponges. Nothing in your kit should be quietly harming your skin.",
  },
  {
    title: "Keep your pouch clean and travel-ready",
    desc: "A 10-minute cleanup ritual and smart storage tips so your kit stays fresh on every trip.",
  },
];

const FeatureItem = ({ title, desc }: { title: string; desc: string }) => (
  <li className="flex items-start gap-3">
    <Check size={18} className="text-success flex-shrink-0 mt-1" />
    <div>
      <p className="font-body font-semibold text-foreground">{title}</p>
      <p className="font-body text-sm text-muted-foreground">{desc}</p>
    </div>
  </li>
);

const WhatsInsideSectionV2 = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-4">What's Inside</p>
        </motion.div>

        {/* Guide 1 */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <img
              src={guideTrueTone}
              alt="The True Tone Guide"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              Guide 1: The True Tone Guide
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Your personal shade roadmap — 40 pages
            </p>
            <ul className="space-y-4">
              {guide1Features.map((f) => (
                <FeatureItem key={f.title} title={f.title} desc={f.desc} />
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Guide 2 */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="lg:order-2">
            <img
              src={guideJetsetter}
              alt="The Jetsetter Beauty Guide"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="lg:order-1">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              Guide 2: The Jetsetter Beauty Guide
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Your travel beauty system — 17 pages
            </p>
            <ul className="space-y-4">
              {guide2Features.map((f) => (
                <FeatureItem key={f.title} title={f.title} desc={f.desc} />
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsInsideSectionV2;
