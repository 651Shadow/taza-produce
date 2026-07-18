'use client';

// Hardcoded list of the 17 store photos that live in /public as /<numeric>.jpg
const PHOTOS = [
  '4997232541420948805.jpg',
  '4997232541420948841.jpg',
  '4997232541420948845.jpg',
  '4997232541420948846.jpg',
  '4997232541420948847.jpg',
  '4997232541420948851.jpg',
  '4997232541420948854.jpg',
  '4997232541420948869.jpg',
  '4997232541420948870.jpg',
  '4997232541420948871.jpg',
  '4997232541420948872.jpg',
  '4997232541420948874.jpg',
  '4997232541420948918.jpg',
  '4997232541420948919.jpg',
  '4997232541420948927.jpg',
  '4997232541420948928.jpg',
];

export function PhotoGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {PHOTOS.map((filename) => (
        <img
          key={filename}
          src={`/${filename}`}
          alt="Tazza Produce store photo"
          loading="lazy"
          className="rounded border-line object-cover aspect-square"
        />
      ))}
    </div>
  );
}
