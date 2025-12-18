/**
 * NOVELLA - Category Client Component
 * Kategori bazlı client-side component
 */

'use client';

import { useState, useEffect } from 'react';
import { useFilterStore } from '@/store/filterStore';
import FilterSidebar from '@/components/collections/FilterSidebar';
import ProductGrid from '@/components/collections/ProductGrid';
import SortDropdown from '@/components/collections/SortDropdown';
import { SlidersHorizontal, X } from 'lucide-react';
import type { Product, ProductCategory } from '@/types/product';

// MOCK DATA - Bu sonra API'den gelecek
const MOCK_PRODUCTS: Product[] = [
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
        color: 'altın',
        material: 'altın-kaplama',
        stock: 15,
        images: ['/products/kolye-1.jpg', '/products/kolye-1-alt.jpg'],
      },
    ],
    defaultVariant: 'v1',
    features: ['Su geçirmez', 'Hipoalerjenik', 'Ayarlanabilir uzunluk'],
    material: 'altın-kaplama',
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
    description: '3\'lü stackable bilezik seti',
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
    features: ['3\'lü set', 'Ayarlanabilir'],
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
    category: 'küpe',
    price: 149,
    variants: [
      {
        id: 'v3',
        color: 'gümüş',
        material: 'çelik',
        stock: 25,
        images: ['/products/kupe-1.jpg'],
      },
      {
        id: 'v4',
        color: 'altın',
        material: 'altın-kaplama',
        stock: 20,
        images: ['/products/kupe-1-gold.jpg'],
      },
    ],
    defaultVariant: 'v3',
    features: ['Paslanmaz çelik', 'Hipoalerjenik'],
    material: 'çelik',
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
    category: 'yüzük',
    price: 179,
    originalPrice: 229,
    variants: [
      {
        id: 'v5',
        color: 'altın',
        material: 'altın-kaplama',
        stock: 12,
        images: ['/products/yuzuk-1.jpg'],
      },
      {
        id: 'v6',
        color: 'gümüş',
        material: 'gümüş',
        stock: 0,
        images: ['/products/yuzuk-1-silver.jpg'],
      },
    ],
    defaultVariant: 'v5',
    features: ['Ayarlanabilir beden', 'CZ taş'],
    material: 'altın-kaplama',
    isNew: true,
    isBestSeller: false,
    isCustomizable: true,
    rating: 4.6,
    reviewCount: 19,
    createdAt: new Date('2025-01-10'),
    updatedAt: new Date('2025-01-12'),
  },
];

const categoryTitles: Record<ProductCategory, string> = {
  kolye: 'Kolye Koleksiyonu',
  bilezik: 'Bilezik Koleksiyonu',
  küpe: 'Küpe Koleksiyonu',
  yüzük: 'Yüzük Koleksiyonu',
};

const categoryDescriptions: Record<ProductCategory, string> = {
  kolye: 'Zarif ve şık kolye modelleri. Her stile uygun tasarımlar.',
  bilezik: 'Şık bilezik modelleri. Solo veya set olarak kullanıma uygun.',
  küpe: 'Minimal ve gösterişli küpe modelleri. Her tarza uygun.',
  yüzük: 'Zarif yüzük tasarımları. Her günü özel kılan detaylar.',
};

interface CategoryClientProps {
  category: ProductCategory;
}

export default function CategoryClient({ category }: CategoryClientProps) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  const filterStore = useFilterStore();

  // Set category filter on mount
  useEffect(() => {
    filterStore.resetFilters();
    filterStore.setCategories([category]);
  }, [category, filterStore]);

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => {
      // Filter products by category
      const filtered = MOCK_PRODUCTS.filter((p) => p.category === category);
      setProducts(filtered);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [category]);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-white border-b border-cream-200">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <h1 className="font-serif text-3xl lg:text-4xl text-black mb-2">
            {categoryTitles[category]}
          </h1>
          <p className="text-black/60">
            {categoryDescriptions[category]}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar />
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-cream-300 rounded-lg text-sm text-black/80 hover:border-gold/40 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5 text-gold" />
              <span className="font-medium">Filtrele</span>
            </button>
          </div>

          {/* Mobile Filter Modal */}
          {isMobileFilterOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsMobileFilterOpen(false)}
              />

              {/* Sidebar */}
              <div className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 overflow-y-auto lg:hidden">
                <div className="sticky top-0 bg-white border-b border-cream-200 px-4 py-4 flex items-center justify-between">
                  <h2 className="font-serif text-xl text-black">Filtrele</h2>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-2 hover:bg-cream-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4">
                  <FilterSidebar />
                </div>
              </div>
            </>
          )}

          {/* Products */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-black/60">
                {!isLoading && (
                  <>
                    <span className="font-medium text-black">
                      {products.length}
                    </span>{' '}
                    ürün bulundu
                  </>
                )}
              </div>

              <SortDropdown />
            </div>

            {/* Grid */}
            <ProductGrid products={products} isLoading={isLoading} />

            {/* Load More (Pagination gelecek) */}
            {!isLoading && products.length > 0 && (
              <div className="mt-12 text-center">
                <button className="px-8 py-3 bg-white border-2 border-gold text-gold rounded-lg hover:bg-gold hover:text-white transition-all duration-200">
                  Daha Fazla Yükle
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
