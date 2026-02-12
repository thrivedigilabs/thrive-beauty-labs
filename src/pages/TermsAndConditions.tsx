import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 font-body text-sm transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">Terms & Conditions</h1>
        <p className="font-body text-muted-foreground mb-10">Last updated: February 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 font-body text-foreground/90">
          <p>By accessing or purchasing from ThriveDigiLabs, you agree to the following terms:</p>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Products & Services</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>We sell digital products and physical products</li>
              <li>Digital products are delivered electronically</li>
              <li>Physical products are shipped to the provided address</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Usage Restrictions</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Digital products are for personal use only</li>
              <li>Redistribution, resale, or sharing is strictly prohibited</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Payments</h2>
            <p>All payments must be completed before delivery or access is provided.</p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Limitation of Liability</h2>
            <p>We are not liable for any indirect or consequential damages arising from the use of our products.</p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Changes to Terms</h2>
            <p>We reserve the right to update these terms at any time.</p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Contact</h2>
            <p className="font-semibold">📧 thrivedigilabs@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
