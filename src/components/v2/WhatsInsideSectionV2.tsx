import { Check } from "lucide-react";
import { motion } from "framer-motion";
import guideTrueTone from "@/assets/guide-truetone.png";
import guideJetsetter from "@/assets/guide-jetsetter.png";

const guide1Features = [
  "The Ultimate Foundation Directory — 50+ foundations mapped for Indian skin tones",
  "The 5-Minute Undertone Test — Find your true undertone at home",
  "The Ultimate Lip Shade Guide — Organized by undertone + occasion",
  "Blush + Highlighter Mastery — Match your glow to your skin tone",
  "Skin Prep + Makeup Longevity — Humidity-proof application techniques",
];

const guide2Features = [
  "The complete travel packing checklist — TSA-ready, organized by category",
  "Know what every ingredient does — Clear table with key ingredients explained",
  "Step-by-step routines for every product — Beginner-level instructions",
  "Product replacement timeline — Know when to replace every item",
  "Keep your pouch clean and travel-ready — 10-minute cleanup ritual",
];

const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center">
      <Check size={14} className="text-gold-dark" />
    </span>
    <span className="font-body text-base leading-relaxed">{text}</span>
  </li>
);

const WhatsInsideSectionV2 = () => {
  return (
    <section className="section-padding">
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
          className="grid lg:grid-cols-2 gap-12 items-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div>
            <span className="inline-block font-label text-xs font-semibold uppercase tracking-wider bg-gold/10 text-gold-dark px-4 py-1.5 rounded-full mb-4">
              Guide #1
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              The True Tone Guide
            </h3>
            <p className="font-body text-muted-foreground mb-2">
              Your Personal Shade Roadmap (40 pages)
            </p>
            <p className="font-label text-sm text-gold-dark font-semibold mb-6">
              Individual Value: ₹1,799
            </p>
            <ul className="space-y-4">
              {guide1Features.map((f) => (
                <FeatureItem key={f} text={f} />
              ))}
            </ul>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gold/10 rounded-3xl blur-2xl -z-10" />
            <img
              src={guideTrueTone}
              alt="The True Tone Guide"
              className="rounded-2xl shadow-xl max-w-xs floating-animation"
            />
          </div>
        </motion.div>

        {/* Guide 2 */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="order-2 lg:order-1 relative flex justify-center">
            <div className="absolute inset-0 bg-gold/10 rounded-3xl blur-2xl -z-10" />
            <img
              src={guideJetsetter}
              alt="The Jetsetter Beauty Guide"
              className="rounded-2xl shadow-xl max-w-xs floating-animation"
              style={{ animationDelay: "1s" }}
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block font-label text-xs font-semibold uppercase tracking-wider bg-gold/10 text-gold-dark px-4 py-1.5 rounded-full mb-4">
              Guide #2
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              The Jetsetter Beauty Guide
            </h3>
            <p className="font-body text-muted-foreground mb-2">
              Your Travel Beauty System (17 pages)
            </p>
            <p className="font-label text-sm text-gold-dark font-semibold mb-6">
              Individual Value: ₹1,200
            </p>
            <ul className="space-y-4">
              {guide2Features.map((f) => (
                <FeatureItem key={f} text={f} />
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsInsideSectionV2;
