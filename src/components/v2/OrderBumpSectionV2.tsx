import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { useCartStore } from "@/stores/cartStore";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const OrderBumpSectionV2 = () => {
  const [makeupBag, setMakeupBag] = useState(false);
  const [jewelleryBox, setJewelleryBox] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const clearCart = useCartStore((s) => s.clearCart);

  const { data: products } = useQuery({
    queryKey: ["shopify-products"],
    queryFn: () => fetchProducts(10),
  });

  const findProduct = (handle: string): ShopifyProduct | undefined =>
    products?.find((p) => p.node.handle === handle);

  const basePrice = 799;
  const total = basePrice + (makeupBag ? 299 : 0) + (jewelleryBox ? 199 : 0);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      clearCart();

      const guideProduct = findProduct("thrivebeautylabs-expert-guide-system");
      const makeupBagProduct = findProduct("makeup-travel-bag");
      const jewelleryBoxProduct = findProduct("jewellery-box");

      if (!guideProduct) {
        toast.error("Products not loaded yet. Please try again.");
        setIsCheckingOut(false);
        return;
      }

      const guideVariant = guideProduct.node.variants.edges[0]?.node;
      if (!guideVariant) return;

      await addItem({
        product: guideProduct,
        variantId: guideVariant.id,
        variantTitle: guideVariant.title,
        price: guideVariant.price,
        quantity: 1,
        selectedOptions: guideVariant.selectedOptions || [],
      });

      if (jewelleryBox && jewelleryBoxProduct) {
        const variant = jewelleryBoxProduct.node.variants.edges[0]?.node;
        if (variant) {
          await addItem({
            product: jewelleryBoxProduct,
            variantId: variant.id,
            variantTitle: variant.title,
            price: variant.price,
            quantity: 1,
            selectedOptions: variant.selectedOptions || [],
          });
        }
      }

      if (makeupBag && makeupBagProduct) {
        const variant = makeupBagProduct.node.variants.edges[0]?.node;
        if (variant) {
          await addItem({
            product: makeupBagProduct,
            variantId: variant.id,
            variantTitle: variant.title,
            price: variant.price,
            quantity: 1,
            selectedOptions: variant.selectedOptions || [],
          });
        }
      }

      const checkoutUrl = useCartStore.getState().getCheckoutUrl();
      if (checkoutUrl) {
        window.open(checkoutUrl, "_blank");
      } else {
        toast.error("Failed to create checkout. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <section id="final-cta" className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-4">Optional Add-Ons — Complete Your Kit</p>
          <p className="font-body text-muted-foreground">
            These are physical products. Completely optional — the guides are complete on their own.
          </p>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto space-y-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <label
            className={`flex items-start gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all ${
              jewelleryBox ? "border-gold bg-gold/5" : "border-border bg-card"
            }`}
          >
            <Checkbox
              checked={jewelleryBox}
              onCheckedChange={(v) => setJewelleryBox(!!v)}
              className="mt-1"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-body font-semibold">➕ Premium Travel Jewellery Organiser</p>
                <span className="font-label font-bold text-gold-dark">₹199</span>
              </div>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Keep every piece tangle-free and trip-ready. The perfect physical companion to your Jetsetter Guide.
              </p>
            </div>
          </label>

          <label
            className={`flex items-start gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all ${
              makeupBag ? "border-gold bg-gold/5" : "border-border bg-card"
            }`}
          >
            <Checkbox
              checked={makeupBag}
              onCheckedChange={(v) => setMakeupBag(!!v)}
              className="mt-1"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-body font-semibold">➕ Spacious Makeup Travel Bag</p>
                <span className="font-label font-bold text-gold-dark">₹299</span>
              </div>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Built to hold exactly what the Jetsetter Guide recommends packing. TSA-compliant. Leak-resistant interior.
              </p>
            </div>
          </label>

          {(jewelleryBox || makeupBag) && (
            <p className="font-label text-sm text-center text-muted-foreground">
              {jewelleryBox && makeupBag
                ? "Add both for ₹498 and complete your full travel beauty kit."
                : `Added ₹${jewelleryBox ? 199 : 299} to your order.`}
            </p>
          )}
        </motion.div>

        {/* Checkout CTA */}
        <div className="text-center">
          <button
            onClick={handleCheckout}
            disabled={isCheckingOut}
            className="btn-primary text-xl !px-12 !py-6 pulse-cta inline-flex items-center gap-2 disabled:opacity-70"
          >
            {isCheckingOut ? (
              <>
                <Loader2 size={22} className="animate-spin" />
                Processing...
              </>
            ) : (
              <>
                GET INSTANT ACCESS NOW — ₹{total}
                <ArrowRight size={22} />
              </>
            )}
          </button>

          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm font-label text-muted-foreground">
            <span>🔒 Secure Checkout</span>
            <span>📥 Instant Download</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderBumpSectionV2;
