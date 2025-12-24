'use client';

import AdvancedFilterSidebar from '@/components/filters/AdvancedFilterSidebar';
import FilterTag from '@/components/filters/FilterTag';
import SimpleProductGrid from '@/components/product/SimpleProductGrid';
import { useProductFilters } from '@/hooks/useProductFilters';
import type { Product } from '@/types/product';
import { AnimatePresence, motion } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';

interface CollectionClientProps {
  products: Product[];
  category: string;
}

const materialLabels: Record<string, string> = {
  celik: 'Çelik',
  'gumus-kaplama': 'Gümüş Kaplama',
  'altin-kaplama': 'Altın Kaplama',
  'rose-gold-kaplama': 'Rose Gold Kaplama',
};

const colorLabels: Record<string, string> = {
  altin: 'Altın',
  gumus: 'Gümüş',
  'rose-gold': 'Rose Gold',
  siyah: 'Siyah',
  beyaz: 'Beyaz',
  'cok-renkli': 'Çok Renkli',
};

const categoryLabels: Record<string, string> = {
  all: 'Tüm Ürünler',
  kolye: 'Kolyeler',
  bilezik: 'Bilezikler',
  kupe: 'Küpeler',
  yuzuk: 'Yüzükler',
};

export default function CollectionClient({
  products,
  category,
}: CollectionClientProps) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const {
    filters,
    filteredProducts,
    updateFilter,
    toggleMaterial,
    toggleColor,
    resetFilters,
    hasActiveFilters,
    priceRange,
  } = useProductFilters(products);

  const label = categoryLabels[category] || category;

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl lg:text-4xl text-white mb-2">
            {label}
          </h1>
          <p className="text-white/60">
            {filteredProducts.length} ürün bulundu
          </p>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="mb-6 flex items-center gap-3 flex-wrap">
            <span className="text-sm text-white/60">Aktif Filtreler:</span>

            {/* Price Range Tag */}
            {(filters.priceRange.min !== priceRange.min ||
              filters.priceRange.max !== priceRange.max) && (
              <FilterTag
                label={`${filters.priceRange.min}₺ - ${filters.priceRange.max}₺`}
                onRemove={() => updateFilter('priceRange', priceRange)}
              />
            )}

            {/* Material Tags */}
            {filters.materials.map((material) => (
              <FilterTag
                key={material}
                label={materialLabels[material]}
                onRemove={() => toggleMaterial(material)}
              />
            ))}

            {/* Color Tags */}
            {filters.colors.map((color) => (
              <FilterTag
                key={color}
                label={colorLabels[color]}
                onRemove={() => toggleColor(color)}
              />
            ))}

            {/* Stock Tag */}
            {filters.inStockOnly && (
              <FilterTag
                label="Stokta Var"
                onRemove={() => updateFilter('inStockOnly', false)}
              />
            )}

            {/* New Tag */}
            {filters.isNew && (
              <FilterTag
                label="Yeni Ürünler"
                onRemove={() => updateFilter('isNew', false)}
              />
            )}

            {/* Best Seller Tag */}
            {filters.isBestSeller && (
              <FilterTag
                label="Çok Satanlar"
                onRemove={() => updateFilter('isBestSeller', false)}
              />
            )}

            {/* Clear All */}
            <button
              onClick={resetFilters}
              className="text-sm text-gold hover:text-gold-light transition-colors underline"
            >
              Tümünü Temizle
            </button>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block flex-shrink-0">
            <div className="sticky top-24">
              <AdvancedFilterSidebar
                priceRange={priceRange}
                currentPriceRange={filters.priceRange}
                onPriceChange={(range) => updateFilter('priceRange', range)}
                materials={filters.materials}
                onToggleMaterial={toggleMaterial}
                colors={filters.colors}
                onToggleColor={toggleColor}
                inStockOnly={filters.inStockOnly}
                onToggleInStock={() =>
                  updateFilter('inStockOnly', !filters.inStockOnly)
                }
                isNew={filters.isNew}
                onToggleNew={() => updateFilter('isNew', !filters.isNew)}
                isBestSeller={filters.isBestSeller}
                onToggleBestSeller={() =>
                  updateFilter('isBestSeller', !filters.isBestSeller)
                }
              />
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden fixed bottom-6 right-6 z-40">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gold text-black rounded-full shadow-2xl hover:bg-gold-light transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="font-medium">Filtrele</span>
              {hasActiveFilters && (
                <span className="ml-1 w-2 h-2 bg-black rounded-full" />
              )}
            </button>
          </div>

          {/* Mobile Filter Drawer */}
          <AnimatePresence>
            {isMobileFilterOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
                />

                {/* Drawer */}
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-gray-900 z-50 overflow-y-auto lg:hidden"
                >
                  <div className="sticky top-0 bg-gray-900 border-b border-white/10 px-6 py-4 flex items-center justify-between">
                    <h2 className="font-serif text-xl text-white">Filtrele</h2>
                    <button
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  <div className="p-6">
                    <AdvancedFilterSidebar
                      priceRange={priceRange}
                      currentPriceRange={filters.priceRange}
                      onPriceChange={(range) =>
                        updateFilter('priceRange', range)
                      }
                      materials={filters.materials}
                      onToggleMaterial={toggleMaterial}
                      colors={filters.colors}
                      onToggleColor={toggleColor}
                      inStockOnly={filters.inStockOnly}
                      onToggleInStock={() =>
                        updateFilter('inStockOnly', !filters.inStockOnly)
                      }
                      isNew={filters.isNew}
                      onToggleNew={() => updateFilter('isNew', !filters.isNew)}
                      isBestSeller={filters.isBestSeller}
                      onToggleBestSeller={() =>
                        updateFilter('isBestSeller', !filters.isBestSeller)
                      }
                    />

                    {/* Apply Button */}
                    <div className="mt-6 sticky bottom-0 bg-gray-900 pt-4 border-t border-white/10">
                      <button
                        onClick={() => setIsMobileFilterOpen(false)}
                        className="w-full py-3 bg-gold text-black rounded-lg font-medium hover:bg-gold-light transition-colors"
                      >
                        Filtreleri Uygula ({filteredProducts.length} Ürün)
                      </button>

                      {hasActiveFilters && (
                        <button
                          onClick={() => {
                            resetFilters();
                            setIsMobileFilterOpen(false);
                          }}
                          className="w-full mt-3 py-3 bg-white/5 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                        >
                          Filtreleri Temizle
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Products Grid */}
          <main className="flex-1 min-w-0">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                  <SlidersHorizontal className="w-8 h-8 text-white/40" />
                </div>
                <p className="text-white/60 text-lg mb-2">
                  Filtrelere uygun ürün bulunamadı
                </p>
                <p className="text-white/40 text-sm mb-4">
                  Filtre seçeneklerinizi değiştirmeyi deneyin
                </p>
                <button
                  onClick={resetFilters}
                  className="text-gold hover:text-gold-light transition-colors underline"
                >
                  Tüm Filtreleri Temizle
                </button>
              </div>
            ) : (
              <SimpleProductGrid products={filteredProducts} columns={3} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
