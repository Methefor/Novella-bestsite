/**
 * NOVELLA - Filter Hook
 * Gelişmiş filtreleme mantığı
 */

'use client';

import type { Product, ProductColor, ProductMaterial } from '@/types/product';
import { useEffect, useMemo, useState } from 'react';

export interface FilterOptions {
  priceRange: {
    min: number;
    max: number;
  };
  materials: ProductMaterial[];
  colors: ProductColor[];
  inStockOnly: boolean;
  isNew: boolean;
  isBestSeller: boolean;
}

const DEFAULT_FILTERS: FilterOptions = {
  priceRange: { min: 0, max: 1000 },
  materials: [],
  colors: [],
  inStockOnly: false,
  isNew: false,
  isBestSeller: false,
};

export function useProductFilters(products: Product[]) {
  const [filters, setFilters] = useState<FilterOptions>(DEFAULT_FILTERS);

  // Calculate price range from products
  const priceRange = useMemo(() => {
    if (products.length === 0) return { min: 0, max: 1000 };

    const prices = products.map((p) => p.price);
    return {
      min: Math.floor(Math.min(...prices) / 100) * 100,
      max: Math.ceil(Math.max(...prices) / 100) * 100,
    };
  }, [products]);

  // Set initial price range
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      priceRange: priceRange,
    }));
  }, [priceRange]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Price filter
      if (
        product.price < filters.priceRange.min ||
        product.price > filters.priceRange.max
      ) {
        return false;
      }

      // Material filter
      if (
        filters.materials.length > 0 &&
        !filters.materials.includes(product.material)
      ) {
        return false;
      }

      // Color filter
      if (filters.colors.length > 0) {
        const productColors = product.variants.map((v) => v.color);
        if (!productColors.some((c) => filters.colors.includes(c))) {
          return false;
        }
      }

      // Stock filter
      if (filters.inStockOnly) {
        const hasStock = product.variants.some((v) => v.stock > 0);
        if (!hasStock) return false;
      }

      // New products filter
      if (filters.isNew && !product.isNew) {
        return false;
      }

      // Best seller filter
      if (filters.isBestSeller && !product.isBestSeller) {
        return false;
      }

      return true;
    });
  }, [products, filters]);

  // Update filters
  const updateFilter = <K extends keyof FilterOptions>(
    key: K,
    value: FilterOptions[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Toggle material
  const toggleMaterial = (material: ProductMaterial) => {
    setFilters((prev) => ({
      ...prev,
      materials: prev.materials.includes(material)
        ? prev.materials.filter((m) => m !== material)
        : [...prev.materials, material],
    }));
  };

  // Toggle color
  const toggleColor = (color: ProductColor) => {
    setFilters((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      ...DEFAULT_FILTERS,
      priceRange: priceRange,
    });
  };

  // Check if any filter is active
  const hasActiveFilters = useMemo(() => {
    return (
      filters.materials.length > 0 ||
      filters.colors.length > 0 ||
      filters.inStockOnly ||
      filters.isNew ||
      filters.isBestSeller ||
      filters.priceRange.min !== priceRange.min ||
      filters.priceRange.max !== priceRange.max
    );
  }, [filters, priceRange]);

  return {
    filters,
    filteredProducts,
    updateFilter,
    toggleMaterial,
    toggleColor,
    resetFilters,
    hasActiveFilters,
    priceRange,
  };
}
