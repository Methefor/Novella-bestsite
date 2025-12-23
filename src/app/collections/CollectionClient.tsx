'use client';

import SimpleProductGrid from '@/components/product/SimpleProductGrid';
import type { Product } from '@/types/product';
import { useState } from 'react';

interface CollectionClientProps {
  products: Product[];
  category: string;
}

export default function CollectionClient({
  products,
  category,
}: CollectionClientProps) {
  const [filteredProducts] = useState<Product[]>(products);

  const categoryLabels: Record<string, string> = {
    all: 'Tum Urunler',
    kolye: 'Kolyeler',
    bilezik: 'Bilezikler',
    kupe: 'Kupeler',
    yuzuk: 'Yuzukler',
  };

  const label = categoryLabels[category] || category;

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-serif text-3xl lg:text-4xl text-white mb-2">
            {label}
          </h1>
          <p className="text-white/60">{filteredProducts.length} urun</p>
        </div>

        <div className="w-full">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/60 text-lg">
                Bu kategoride henuz urun bulunmuyor
              </p>
            </div>
          ) : (
            <SimpleProductGrid products={filteredProducts} columns={4} />
          )}
        </div>
      </div>
    </div>
  );
}
