/**
 * NOVELLA - Product Detail Page
 * Ürün detay sayfası (Server Component)
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';
import type { Product } from '@/types/product';

// Mock products - API'den gelecek
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Zarif Altın Kolye',
    slug: 'zarif-altin-kolye',
    description: 'Minimal ve şık tasarımlı altın kaplama kolye. Her stile uyum sağlayan zarif detaylar ve kaliteli işçilik ile öne çıkar.',
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
        images: [
          '/products/kolye-1.jpg',
          '/products/kolye-1-alt.jpg',
          '/products/kolye-1-detail.jpg',
        ],
      },
    ],
    defaultVariant: 'v1',
    features: [
      'Su geçirmez kaplama',
      'Hipoalerjenik malzeme',
      'Ayarlanabilir zincir uzunluğu (40-45cm)',
      'Nikelsiz üretim',
      '24K altın kaplama',
    ],
    material: 'altin-kaplama',
    isNew: true,
    isBestSeller: false,
    isCustomizable: true,
    rating: 4.5,
    reviewCount: 28,
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-01-15'),
    metaTitle: 'Zarif Altın Kolye - NOVELLA',
    metaDescription: 'Minimal ve şık tasarımlı altın kaplama kolye. İsim baskısı yapılabilir.',
  },
  {
    id: '2',
    name: 'Rose Gold Bilezik Set',
    slug: 'rose-gold-bilezik-set',
    description: '3\'lü stackable bilezik seti. İnce ve zarif tasarımı ile hem solo hem de birlikte kullanıma uygun.',
    category: 'bilezik',
    price: 249,
    variants: [
      {
        id: 'v2',
        color: 'rose-gold',
        material: 'rose-gold',
        stock: 8,
        images: [
          '/products/bilezik-1.jpg',
          '/products/bilezik-1-alt.jpg',
        ],
      },
    ],
    defaultVariant: 'v2',
    features: [
      '3\'lü set (ince, orta, kalın)',
      'Ayarlanabilir beden',
      'Paslanmaz çelik',
      'Su ve ter geçirmez',
    ],
    material: 'rose-gold',
    isNew: false,
    isBestSeller: true,
    isCustomizable: false,
    rating: 4.8,
    reviewCount: 42,
    createdAt: new Date('2024-12-20'),
    updatedAt: new Date('2025-01-10'),
    metaTitle: 'Rose Gold Bilezik Set - NOVELLA',
    metaDescription: '3\'lü stackable bilezik seti. Her tarza uygun zarif tasarım.',
  },
  {
    id: '3',
    name: 'Minimal Çelik Küpe',
    slug: 'minimal-celik-kupe',
    description: 'Her gün kullanıma uygun minimal küpe. Sade ve zarif tasarımı ile her kombine uyum sağlar.',
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
    features: [
      'Paslanmaz çelik 316L',
      'Hipoalerjenik',
      'Hafif yapı (3g)',
      'Her gün kullanıma uygun',
    ],
    material: 'celik',
    isNew: false,
    isBestSeller: true,
    isCustomizable: false,
    rating: 4.7,
    reviewCount: 35,
    createdAt: new Date('2024-11-15'),
    updatedAt: new Date('2025-01-05'),
    metaTitle: 'Minimal Çelik Küpe - NOVELLA',
    metaDescription: 'Her gün kullanıma uygun minimal küpe. 2 renk seçeneği.',
  },
  {
    id: '4',
    name: 'Taşlı Yüzük',
    slug: 'tasli-yuzuk',
    description: 'Zarif taş detaylı ayarlanabilir yüzük. CZ taşı ile göz alıcı bir tasarım.',
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
      {
        id: 'v6',
        color: 'gumus',
        material: 'gumus',
        stock: 0,
        images: ['/products/yuzuk-1-silver.jpg'],
      },
    ],
    defaultVariant: 'v5',
    features: [
      'Ayarlanabilir beden (Universal)',
      'Cubic Zirconia (CZ) taş',
      'Su geçirmez',
      'Hipoalerjenik',
    ],
    material: 'altin-kaplama',
    isNew: true,
    isBestSeller: false,
    isCustomizable: true,
    rating: 4.6,
    reviewCount: 19,
    createdAt: new Date('2025-01-10'),
    updatedAt: new Date('2025-01-12'),
    metaTitle: 'Taşlı Yüzük - NOVELLA',
    metaDescription: 'Zarif CZ taşlı ayarlanabilir yüzük. İsim baskısı yapılabilir.',
  },
];

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Metadata generation
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Ürün Bulunamadı | NOVELLA',
    };
  }

  return {
    title: product.metaTitle || `${product.name} | NOVELLA`,
    description: product.metaDescription || product.description,
    openGraph: {
      title: product.metaTitle || product.name,
      description: product.metaDescription || product.description,
      images: [
        {
          url: product.variants[0].images[0],
          width: 600,
          height: 800,
          alt: product.name,
        },
      ],
    },
  };
}

// Static params generation
export async function generateStaticParams() {
  return MOCK_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
