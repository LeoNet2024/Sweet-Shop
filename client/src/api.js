/** Small wrapper around the Express API. */

async function request(url, options) {
  const res = await fetch(url, options);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'הבקשה נכשלה');
  return data;
}

export const getShop = () => request('/api/shop');

export const getProducts = () => request('/api/products');

export const sendOrder = (order) =>
  request('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });

/**
 * price = null            ->  "מחיר בתיאום"
 * price = 180, 'unit'     ->  "180 ₪"
 * price = 90,  'תריסר'    ->  "90 ₪ לתריסר"
 *
 * To switch the currency, change the ₪ below.
 */
export function formatPrice(product) {
  if (product.price == null || product.price === '') return 'מחיר בתיאום';
  const price = `${product.price} ₪`;
  if (product.priceUnit && product.priceUnit !== 'unit') {
    return `${price} ל${product.priceUnit}`;
  }
  return price;
}
