// Shopify Storefront API Integration
// Replace these with your actual Shopify credentials and product IDs

const SHOPIFY_DOMAIN = 'your-store.myshopify.com';
const STOREFRONT_ACCESS_TOKEN = 'your-storefront-token';

export const PRODUCT_IDS = {
  digitalBundle: 'gid://shopify/ProductVariant/XXXXX',
  makeupBag: 'gid://shopify/ProductVariant/XXXXX',
  jewelleryBox: 'gid://shopify/ProductVariant/XXXXX',
};

interface CartItem {
  variantId: string;
  quantity: number;
}

export async function createCheckout(items: CartItem[]): Promise<string> {
  const query = `
    mutation checkoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
        }
        checkoutUserErrors {
          message
          field
        }
      }
    }
  `;

  const variables = {
    input: {
      lineItems: items.map(item => ({
        variantId: item.variantId,
        quantity: item.quantity,
      })),
    },
  };

  const response = await fetch(
    `https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  const data = await response.json();

  if (data.data?.checkoutCreate?.checkoutUserErrors?.length > 0) {
    throw new Error(data.data.checkoutCreate.checkoutUserErrors[0].message);
  }

  return data.data.checkoutCreate.checkout.webUrl;
}

export function handleCheckout(
  includeGuides: boolean = true,
  includeMakeupBag: boolean = false,
  includeJewelleryBox: boolean = false
) {
  const items: CartItem[] = [];

  if (includeGuides) {
    items.push({ variantId: PRODUCT_IDS.digitalBundle, quantity: 1 });
  }
  if (includeMakeupBag) {
    items.push({ variantId: PRODUCT_IDS.makeupBag, quantity: 1 });
  }
  if (includeJewelleryBox) {
    items.push({ variantId: PRODUCT_IDS.jewelleryBox, quantity: 1 });
  }

  return createCheckout(items);
}
