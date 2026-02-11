const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="section-container text-center">
        <p className="font-heading text-xl font-bold mb-4">ThriveBeautyLabs</p>
        <p className="font-body text-sm opacity-70 mb-6 max-w-lg mx-auto">
          Expert beauty guides created specifically for Indian skin tones. Empowering 2,000+ women
          to find their perfect shades and travel with confidence.
        </p>
        <div className="flex justify-center gap-6 text-sm font-label opacity-60 mb-6">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a>
        </div>
        <p className="font-body text-xs opacity-40">
          © {new Date().getFullYear()} ThriveBeautyLabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
