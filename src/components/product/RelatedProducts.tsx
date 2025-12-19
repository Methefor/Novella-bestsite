/**
 * NOVELLA - Related Products Component
 * İlgili ürünler carousel
 */

'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SimpleProductGrid from './SimpleProductGrid';
import type { Product } from '@/types/product';

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
  allProducts: Product[];
}

export default function RelatedProducts({
  currentProductId,
  category,
  allProducts,
}: RelatedProductsProps) {
  // Aynı kategoriden, mevcut ürün hariç
  const relatedProducts = allProducts
    .filter((p) => p.category === category && p.id !== currentProductId)
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 border-t border-cream-200">
      <div className="mb-8">
        <h2 className="font-serif text-2xl lg:text-3xl text-black mb-2">
          Benzer Ürünler
        </h2>
        <p className="text-black/60">
          Size önerebileceğimiz diğer ürünler
        </p>
      </div>

      <SimpleProductGrid products={relatedProducts} columns={4} />
    </section>
  );
}
