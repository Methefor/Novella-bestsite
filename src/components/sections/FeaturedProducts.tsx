/**
 * NOVELLA - Featured Products Section
 * Ana sayfa için öne çıkan ürünler bölümü
 */

'use client';

import type { Product } from '@/types/product';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SimpleProductGrid from '../product/SimpleProductGrid';

// Mock data - Gerçek API'den gelecek
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Zarif Altın Kolye',
    slug: 'zarif-altin-kolye',
    description: 'Minimal ve şık tasarımlı altın kaplama kolye',
    category: 'kolye',
    price: 299,
    originalPrice: 399,
    discountPercentage: 25,
    variants: [
      {
        id: 'v1',
        color: 'altin',
        material: 'altin-kaplama',
        stock: 15,
        images: ['/products/kolye-1.jpg', '/products/kolye-1-alt.jpg'],
      },
    ],
    defaultVariant: 'v1',
    features: ['Su geçirmez', 'Hipoalerjenik', 'Ayarlanabilir uzunluk'],
    material: 'altin-kaplama',
    isNew: true,
    isBestSeller: false,
    isCustomizable: true,
    rating: 4.5,
    reviewCount: 28,
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-01-15'),
  },
  {
    id: '2',
    name: 'Rose Gold Bilezik Set',
    slug: 'rose-gold-bilezik-set',
    description: "3'lü stackable bilezik seti",
    category: 'bilezik',
    price: 249,
    variants: [
      {
        id: 'v2',
        color: 'rose-gold',
        material: 'rose-gold',
        stock: 8,
        images: ['/products/bilezik-1.jpg'],
      },
    ],
    defaultVariant: 'v2',
    features: ["3'lü set", 'Ayarlanabilir'],
    material: 'rose-gold',
    isNew: false,
    isBestSeller: true,
    isCustomizable: false,
    rating: 4.8,
    reviewCount: 42,
    createdAt: new Date('2024-12-20'),
    updatedAt: new Date('2025-01-10'),
  },
  {
    id: '3',
    name: 'Minimal Çelik Küpe',
    slug: 'minimal-celik-kupe',
    description: 'Her gün kullanıma uygun minimal küpe',
    category: 'kupe',
    price: 149,
    variants: [
      {
        id: 'v3',
        color: 'gumus',
        material: 'celik',
        stock: 25,
        images: ['/products/kupe-1.jpg'],
      },
      {
        id: 'v4',
        color: 'altin',
        material: 'altin-kaplama',
        stock: 20,
        images: ['/products/kupe-1-gold.jpg'],
      },
    ],
    defaultVariant: 'v3',
    features: ['Paslanmaz çelik', 'Hipoalerjenik'],
    material: 'celik',
    isNew: false,
    isBestSeller: true,
    isCustomizable: false,
    rating: 4.7,
    reviewCount: 35,
    createdAt: new Date('2024-11-15'),
    updatedAt: new Date('2025-01-05'),
  },
  {
    id: '4',
    name: 'Taşlı Yüzük',
    slug: 'tasli-yuzuk',
    description: 'Zarif taş detaylı ayarlanabilir yüzük',
    category: 'yuzuk',
    price: 179,
    originalPrice: 229,
    variants: [
      {
        id: 'v5',
        color: 'altin',
        material: 'altin-kaplama',
        stock: 12,
        images: ['/products/yuzuk-1.jpg'],
      },
    ],
    defaultVariant: 'v5',
    features: ['Ayarlanabilir beden', 'CZ taş'],
    material: 'altin-kaplama',
    isNew: true,
    isBestSeller: false,
    isCustomizable: true,
    rating: 4.6,
    reviewCount: 19,
    createdAt: new Date('2025-01-10'),
    updatedAt: new Date('2025-01-12'),
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 lg:mb-12">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl text-black mb-2">
              Öne Çıkan Ürünler
            </h2>
            <p className="text-black/60">
              En sevilen ve yeni koleksiyonumuzdan seçmeler
            </p>
          </div>

          <Link
            href="/collections"
            className="
              hidden sm:flex items-center gap-2
              text-gold hover:text-gold/80
              transition-colors duration-200
              group
            "
          >
            <span className="font-medium">Tümünü Gör</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <SimpleProductGrid products={mockProducts} columns={4} />

        {/* Mobile "Tümünü Gör" */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/collections"
            className="
              inline-flex items-center gap-2
              px-6 py-3 bg-white border-2 border-gold text-gold
              rounded-lg hover:bg-gold hover:text-white
              transition-all duration-200
            "
          >
            <span className="font-medium">Tümünü Gör</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
