/**
 * NOVELLA - Simple Product Grid Component
 * Ana sayfa için basit ürün grid'i (filtreleme yok)
 */

'use client';

import ProductCard from './ProductCard';
import type { Product } from '@/types/product';

interface SimpleProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
}

export default function SimpleProductGrid({ 
  products, 
  columns = 4 
}: SimpleProductGridProps) {
  const gridCols = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  };

  return (
    <div className={`
      grid grid-cols-1 sm:grid-cols-2 ${gridCols[columns]} 
      gap-6
    `}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
