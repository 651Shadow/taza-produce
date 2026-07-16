// Product catalog for the Tazza Produce shop.
// Names and descriptions are localized via t('prod.<id>.name' | '.desc').
// Price and image are data-only (image filename resolves to /<filename>.jpg in /public).

export interface Product {
  id: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  { id: 'produce1', price: 6.99, image: '4997232541420948804.jpg' },
  { id: 'produce2', price: 4.99, image: '4997232541420948928.jpg' },
  { id: 'produce3', price: 5.49, image: '4997232541420948928.jpg' },
  { id: 'meats1', price: 18.99, image: '4997232541420948841.jpg' },
  { id: 'meats2', price: 12.99, image: '4997232541420948847.jpg' },
  { id: 'meats3', price: 14.49, image: '4997232541420948845.jpg' },
  { id: 'pantry1', price: 3.99, image: '4997232541420948874.jpg' },
  { id: 'pantry2', price: 4.49, image: '4997232541420948869.jpg' },
  { id: 'pantry3', price: 6.99, image: '4997232541420948846.jpg' },
  { id: 'dairy1', price: 5.99, image: '4997232541420948854.jpg' },
  { id: 'dairy2', price: 3.49, image: '4997232541420948854.jpg' },
  { id: 'dairy3', price: 4.29, image: '4997232541420948851.jpg' },
  { id: 'frozen1', price: 3.99, image: '4997232541420948870.jpg' },
  { id: 'frozen2', price: 8.99, image: '4997232541420948845.jpg' },
  { id: 'frozen3', price: 5.49, image: '4997232541420948927.jpg' },
  { id: 'bev1', price: 2.99, image: '4997232541420948851.jpg' },
  { id: 'bev2', price: 4.99, image: '4997232541420948851.jpg' },
  { id: 'bev3', price: 1.99, image: '4997232541420948851.jpg' },
];

export function priceOf(id: string): number {
  return products.find((p) => p.id === id)?.price ?? 0;
}
