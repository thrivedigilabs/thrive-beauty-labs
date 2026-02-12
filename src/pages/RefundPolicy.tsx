import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 font-body text-sm transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">Refund Policy</h1>
        <p className="font-body text-muted-foreground mb-10">Last updated: February 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 font-body text-foreground/90">
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Digital Products</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>All digital products are non-refundable</li>
              <li>Once purchased, the product is delivered instantly and cannot be returned or refunded</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Physical Products</h2>
            <p>Refunds are applicable only under the following conditions:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The product must be damaged or defective</li>
              <li>A clear unboxing video is mandatory while opening the package</li>
              <li>The video must clearly show the damage</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold mb-3">Refund Process</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Approved refunds will be processed only after we receive the returned product</li>
              <li>Refunds will be issued to the original payment method</li>
            </ul>
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

export default RefundPolicy;
