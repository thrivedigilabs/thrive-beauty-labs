import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 font-body text-sm transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">Shipping Policy</h1>
        <p className="font-body text-muted-foreground mb-10">Last updated: February 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 font-body text-foreground/90">
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Digital Products</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Delivered via email or download link</li>
              <li>Delivery time: within 60 minutes of successful payment</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Physical Products</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Shipping time: 4–7 business days</li>
              <li>Delivery timelines may vary based on location and courier service</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Shipping Charges</h2>
            <p>Shipping charges (if applicable) will be displayed at checkout.</p>
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

export default ShippingPolicy;
