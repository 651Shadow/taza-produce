'use client';

import Image from 'next/image';

const PHOTOS: { file: string; alt: string }[] = [
  { file: '4997232541420948805.jpg', alt: 'Fresh produce aisle with stacked fruits and vegetables' },
  { file: '4997232541420948841.jpg', alt: 'Grocery shelves stocked with dry goods and spices' },
  { file: '4997232541420948845.jpg', alt: 'Refrigerated dairy and beverage cooler' },
  { file: '4997232541420948846.jpg', alt: 'Glass-door freezer with frozen foods and pies' },
  { file: '4997232541420948851.jpg', alt: 'Display of fresh herbs and leafy greens' },
  { file: '4997232541420948854.jpg', alt: 'Bakery and bread section' },
  { file: '4997232541420948869.jpg', alt: 'Halal meat counter with prepared cuts' },
  { file: '4997232541420948870.jpg', alt: 'Seasonal fruit display with price signs' },
  { file: '4997232541420948871.jpg', alt: 'Refrigerated case with drinks, yogurt, and snacks' },
  { file: '4997232541420948874.jpg', alt: 'Wire shelving with canned and packaged goods' },
  { file: '4997232541420948918.jpg', alt: 'Storefront interior with shoppers' },
  { file: '4997232541420948919.jpg', alt: 'Checkout and deli area' },
  { file: '4997232541420948927.jpg', alt: 'Garlic, mushrooms, and pantry containers' },
  { file: '4997232541420948928.jpg', alt: 'Produce crates near the entrance' },
];

export function PhotoGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {PHOTOS.map((p) => (
        <Image
          key={p.file}
          src={`/${p.file}`}
          alt={p.alt}
          width={600}
          height={600}
          loading="lazy"
          className="rounded border-line object-cover aspect-square"
        />
      ))}
    </div>
  );
}
