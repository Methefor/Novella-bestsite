'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProductGrid from '../product/ProductGrid'

// Mock data - Gerçek API'den gelecek
const mockProducts = [
  {
    id: '1',
    name: 'Altın Kaplama İnce Zincir Kolye',
    slug: 'altin-kaplama-ince-zincir-kolye',
    price: 189,
    originalPrice: 249,
    images: ['/placeholder-product.svg', '/placeholder-product-2.svg'],
    colors: [
      { name: 'Gold', hex: '#D4AF37' },
      { name: 'Rose Gold', hex: '#B76E79' },
      { name: 'Silver', hex: '#C0C0C0' },
    ],
    badge: 'new' as const,
  },
  {
    id: '2',
    name: 'Minimal Halka Bilezik Set (3\'lü)',
    slug: 'minimal-halka-bilezik-set',
    price: 159,
    originalPrice: 199,
    images: ['/placeholder-product.svg'],
    colors: [
      { name: 'Gold', hex: '#D4AF37' },
      { name: 'Silver', hex: '#C0C0C0' },
    ],
    badge: 'sale' as const,
  },
  {
    id: '3',
    name: 'Kristal Taşlı Sallantılı Küpe',
    slug: 'kristal-tasli-sallantili-kupe',
    price: 129,
    images: ['/placeholder-product.svg', '/placeholder-product-2.svg'],
    colors: [
      { name: 'Gold', hex: '#D4AF37' },
      { name: 'Rose Gold', hex: '#B76E79' },
    ],
    badge: 'new' as const,
  },
  {
    id: '4',
    name: 'İnci Detaylı Zincir Bilezik',
    slug: 'inci-detayli-zincir-bilezik',
    price: 169,
    images: ['/placeholder-product.svg'],
    colors: [
      { name: 'Gold', hex: '#D4AF37' },
    ],
  },
  {
    id: '5',
    name: 'Geometrik Açık Yüzük',
    slug: 'geometrik-acik-yuzuk',
    price: 99,
    originalPrice: 139,
    images: ['/placeholder-product.svg', '/placeholder-product-2.svg'],
    colors: [
      { name: 'Gold', hex: '#D4AF37' },
      { name: 'Silver', hex: '#C0C0C0' },
      { name: 'Rose Gold', hex: '#B76E79' },
    ],
    badge: 'sale' as const,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-h2 md:text-display-sm font-heading font-bold text-black mb-2">
              Yeni Gelenler
            </h2>
            <p className="text-body-lg text-gray-600">
              En yeni ve trend takı modellerimizi keşfedin
            </p>
          </div>

          <Link
            href="/collections/yeni"
            className="hidden md:flex items-center gap-2 text-gold hover:text-gold-dark font-medium transition-colors group"
          >
            Tümünü Gör
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <ProductGrid products={mockProducts} columns={5} />

        {/* Mobile "View All" Button */}
        <div className="mt-8 md:hidden flex justify-center">
          <Link href="/collections/yeni" className="btn-outline w-full sm:w-auto">
            Tümünü Gör
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
