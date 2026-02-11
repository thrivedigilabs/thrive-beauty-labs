import { motion } from "framer-motion";
import founderPhoto from "@/assets/founder-photo.jpg";

const credentials = [
  "Backstage at Lakmé Fashion Week",
  "500+ brides across India",
  "Editorial shoots for Indian magazines",
  "Clients ranging from NC25 to NC50",
];

const CredibilitySection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl -z-10 scale-110" />
              <img
                src={founderPhoto}
                alt="Professional makeup artist and founder of ThriveBeautyLabs"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gold/40 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-4">About the Creator</p>
            <h2 className="font-heading text-section-mobile md:text-section mb-6">
              Created by a Beauty Professional Who Gets It
            </h2>

            <blockquote className="font-body text-lg text-muted-foreground italic border-l-4 border-gold pl-6 mb-6 leading-relaxed">
              "I created these guides because I was exhausted by the lack of quality resources for OUR skin tones.
              Every recommendation has been tested personally or on clients. Every shade suggestion verified on real Indian skin."
            </blockquote>

            <p className="font-body text-muted-foreground mb-6">
              A professional makeup artist with <strong>8+ years</strong> specializing in Indian skin tones.
              This is 8 years of professional experience condensed into a system you can use TODAY.
            </p>

            <ul className="space-y-2 mb-6">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3 font-body">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>

            <p className="font-label text-sm text-muted-foreground">
              Certified Professional Makeup Artist • Specialized in Indian Skin Tones
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
