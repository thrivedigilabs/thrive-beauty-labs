import { ArrowRight } from "lucide-react";

const MobileStickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <p className="font-heading text-lg font-bold text-gradient-gold">₹799</p>
          <p className="font-label text-xs text-muted-foreground line-through">₹2,999</p>
        </div>
        <a href="#final-cta" className="btn-primary !text-sm !px-6 !py-3">
          Download Now
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;
