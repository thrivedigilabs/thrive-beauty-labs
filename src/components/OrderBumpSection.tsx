import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import heroImage from "@/assets/hero-guides-mockup.jpg";

const OrderBumpSection = () => {
  const [makeupBag, setMakeupBag] = useState(false);
  const [jewelleryBox, setJewelleryBox] = useState(false);

  const basePrice = 799;
  const total = basePrice + (makeupBag ? 299 : 0) + (jewelleryBox ? 199 : 0);

  return (
    <section id="final-cta" className="section-padding cream-gradient">
      <div className="section-container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={heroImage}
            alt="The complete ThriveBeautyLabs guide system"
            className="rounded-3xl shadow-2xl mb-12 w-full max-w-2xl mx-auto"
          />

          <h2 className="font-heading text-section-mobile md:text-section mb-2">
            The ThriveBeautyLabs Expert Guide System
          </h2>
          <p className="eyebrow mb-8">Made for Indian Skin Tones</p>

          <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
            {[
              "True Tone Guide (70+ pages of shade mastery)",
              "Jetsetter Beauty Guide (50+ pages of travel expertise)",
              "Exclusive Bonus Resources",
              "Lifetime Access + Free Updates Forever",
              "30-Day Money-Back Guarantee",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 font-body">
                <Check size={18} className="text-success flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          {/* Price */}
          <div className="mb-8">
            <p className="font-heading text-2xl text-muted-foreground line-through mb-1">₹2,999</p>
            <p className="font-heading text-5xl md:text-7xl font-bold text-gradient-gold mb-2">₹{total}</p>
            <div className="inline-block bg-destructive/10 text-destructive font-label font-semibold text-sm px-4 py-1.5 rounded-full -rotate-2">
              YOU SAVE: ₹{2999 - total + (makeupBag ? 299 : 0) + (jewelleryBox ? 199 : 0) - (makeupBag ? 299 : 0) - (jewelleryBox ? 199 : 0)} (73% OFF)
            </div>
          </div>

          {/* Order Bumps */}
          <div className="max-w-md mx-auto mb-8 space-y-3">
            <p className="font-label text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Add to your order
            </p>

            <label
              className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                jewelleryBox ? "border-gold bg-gold/5" : "border-border bg-card"
              }`}
            >
              <Checkbox
                checked={jewelleryBox}
                onCheckedChange={(v) => setJewelleryBox(!!v)}
              />
              <div className="text-left flex-1">
                <p className="font-body font-semibold">Jewellery Box</p>
                <p className="font-body text-sm text-muted-foreground">Premium travel jewellery organizer</p>
              </div>
              <span className="font-label font-bold text-gold-dark">+ ₹199</span>
            </label>

            <label
              className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                makeupBag ? "border-gold bg-gold/5" : "border-border bg-card"
              }`}
            >
              <Checkbox
                checked={makeupBag}
                onCheckedChange={(v) => setMakeupBag(!!v)}
              />
              <div className="text-left flex-1">
                <p className="font-body font-semibold">Makeup Travel Bag</p>
                <p className="font-body text-sm text-muted-foreground">Spacious beauty essentials pouch</p>
              </div>
              <span className="font-label font-bold text-gold-dark">+ ₹299</span>
            </label>
          </div>

          {/* CTA */}
          <a href="#" className="btn-primary text-xl !px-12 !py-6 pulse-cta inline-flex">
            GET INSTANT ACCESS NOW — ₹{total}
            <ArrowRight size={22} />
          </a>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm font-label text-muted-foreground">
            <span className="flex items-center gap-1.5">⭐ 4.9/5 Rating</span>
            <span className="flex items-center gap-1.5">🔒 Secure Checkout</span>
            <span className="flex items-center gap-1.5">📥 Instant Download</span>
          </div>

          <div className="mt-16 max-w-xl mx-auto">
            <p className="font-body text-muted-foreground italic mb-4">Still thinking about it?</p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Every day without these guides is another day of buying the wrong foundation shade,
              wasting hours packing, and missing out on looking your absolute best.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderBumpSection;
