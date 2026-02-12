import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="section-container text-center">
        <p className="font-heading text-xl font-bold mb-4">ThriveBeautyLabs</p>
        <p className="font-body text-sm opacity-70 mb-6 max-w-lg mx-auto">
          Expert beauty guides created specifically for Indian skin tones. Empowering 2,000+ women
          to find their perfect shades and travel with confidence.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-label opacity-60 mb-6">
          <Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:opacity-100 transition-opacity">Terms & Conditions</Link>
          <Link to="/refund-policy" className="hover:opacity-100 transition-opacity">Refund Policy</Link>
          <Link to="/shipping-policy" className="hover:opacity-100 transition-opacity">Shipping Policy</Link>
        </div>
        <p className="font-body text-sm opacity-60 mb-4">
          📧 thrivedigilabs@gmail.com
        </p>
        <p className="font-body text-xs opacity-40">
          © {new Date().getFullYear()} ThriveDigiLabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
