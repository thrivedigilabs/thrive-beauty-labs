import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 font-body text-sm transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">Privacy Policy</h1>
        <p className="font-body text-muted-foreground mb-10">Last updated: February 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 font-body text-foreground/90">
          <p>At ThriveDigiLabs, we respect your privacy and are committed to protecting your personal information.</p>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number (if provided)</li>
              <li>Billing and payment details (processed securely via third-party payment gateways)</li>
              <li>Website usage data (cookies, analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To deliver digital products and physical products</li>
              <li>To process payments and transactions</li>
              <li>To provide customer support</li>
              <li>To send important service-related communication</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Data Protection</h2>
            <p>We do not sell, rent, or trade your personal data. All information is protected using industry-standard security measures.</p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Third-Party Services</h2>
            <p>Payments and analytics may be handled by trusted third-party platforms. We are not responsible for their privacy practices.</p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Contact</h2>
            <p>For any privacy-related concerns, email us at:</p>
            <p className="font-semibold">📧 thrivedigilabs@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
