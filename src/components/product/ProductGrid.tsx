'use client'

import ProductCard from './ProductCard'

interface Product {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  images: string[]
  colors?: {
    name: string
    hex: string
  }[]
  badge?: 'new' | 'sale' | 'sold-out'
}

interface ProductGridProps {
  products: Product[]
  columns?: 2 | 3 | 4 | 5
  className?: string
}

export default function ProductGrid({
  products,
  columns = 4,
  className = '',
}: ProductGridProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  }

  return (
    <div
      className={`grid ${gridCols[columns]} gap-4 md:gap-6 ${className}`}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          slug={product.slug}
          price={product.price}
          originalPrice={product.originalPrice}
          images={product.images}
          colors={product.colors}
          badge={product.badge}
        />
      ))}
    </div>
  )
}
