/**
 * NOVELLA - Product Card Component
 * Luxury Cream Theme - Minimal & Elegant
 */

'use client';

import ProductCard from '@/components/product/ProductCard';
import { getAllProducts } from '@/data/products';
import { ArrowRight, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const products = getAllProducts();
  const featuredProducts = products.filter((p) => p.isBestSeller).slice(0, 8);
  const newProducts = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#FDFCFA] to-[#F8F6F3] overflow-hidden">
        <div className="container-custom py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#E8E5E0] shadow-sm">
                <Sparkles className="w-4 h-4 text-[#C9A86A]" />
                <span className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wider">
                  Yeni Koleksiyon
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-tight">
                Her Parça
                <br />
                <span className="text-gradient">Bir Hikaye</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-[#6B6B6B] leading-relaxed max-w-xl">
                Zarafet ve kalitede sınır tanımayan butik takı koleksiyonumuzu
                keşfedin. Her tasarım, kendine özgü hikayesiyle sizinle
                buluşuyor.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/collections"
                  className="btn btn-primary btn-lg group"
                >
                  <span>Koleksiyonu Keşfet</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/collections/yeni-gelenler"
                  className="btn btn-outline btn-lg"
                >
                  Yeni Gelenler
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E8E5E0]">
                <div>
                  <p className="text-3xl font-bold text-[#1A1A1A]">200+</p>
                  <p className="text-sm text-[#9B9B9B] mt-1">Ürün Çeşidi</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1A1A1A]">5.000+</p>
                  <p className="text-sm text-[#9B9B9B] mt-1">Mutlu Müşteri</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1A1A1A]">4.8</p>
                  <p className="text-sm text-[#9B9B9B] mt-1">Ortalama Puan</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-xl">
                <Image
                  src="/products/kupe/kupe-8.jpg"
                  alt="NOVELLA Collection"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg border border-[#E8E5E0]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C9A86A]/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#C9A86A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">
                      Kalite Garantisi
                    </p>
                    <p className="text-sm text-[#9B9B9B]">Premium Malzeme</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#C9A86A]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#D4B77F]/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white border-y border-[#E8E5E0]">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#C9A86A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-[#C9A86A]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A] mb-2">
                  Ücretsiz Kargo
                </h3>
                <p className="text-sm text-[#6B6B6B]">
                  500₺ ve üzeri alışverişlerinizde ücretsiz kargo fırsatı
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#C9A86A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#C9A86A]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A] mb-2">
                  Güvenli Alışveriş
                </h3>
                <p className="text-sm text-[#6B6B6B]">
                  256-bit SSL sertifikası ile korunan güvenli ödeme
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#C9A86A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-[#C9A86A]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A] mb-2">
                  Premium Kalite
                </h3>
                <p className="text-sm text-[#6B6B6B]">
                  Her ürün özenle seçilmiş, yüksek kaliteli malzemelerden
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      {newProducts.length > 0 && (
        <section className="py-20 bg-[#F8F6F3]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-[#C9A86A] font-medium mb-3">
                Yeni Gelenler
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">
                En Yeni Koleksiyon
              </h2>
              <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
                Trend takip eden, zarif tasarımlarımızla tanışın
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/collections/yeni-gelenler"
                className="btn btn-outline"
              >
                Tümünü Gör
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Best Sellers */}
      {featuredProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-[#C9A86A] font-medium mb-3">
                Çok Satanlar
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">
                En Beğenilenler
              </h2>
              <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
                Müşterilerimizin favorileri, en çok tercih edilen ürünler
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/collections" className="btn btn-primary">
                Tüm Ürünleri Gör
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#C9A86A] to-[#D4B77F] text-white">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Özel Koleksiyonumuzu Keşfedin
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Size özel tasarlanmış, sınırlı sayıda üretilen butik takılarımıza
            göz atın
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#C9A86A] font-semibold rounded-lg hover:bg-[#FDFCFA] transition-all shadow-lg"
          >
            <span>Koleksiyonu İncele</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
