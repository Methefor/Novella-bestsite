/**
 * NOVELLA - Advanced Filter Sidebar
 * Gelişmiş filtreleme sidebar'ı
 */

'use client';

import PriceRangeSlider from '@/components/filters/PriceRangeSlider';
import type { ProductColor, ProductMaterial } from '@/types/product';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface AdvancedFilterSidebarProps {
  priceRange: { min: number; max: number };
  currentPriceRange: { min: number; max: number };
  onPriceChange: (range: { min: number; max: number }) => void;
  materials: ProductMaterial[];
  onToggleMaterial: (material: ProductMaterial) => void;
  colors: ProductColor[];
  onToggleColor: (color: ProductColor) => void;
  inStockOnly: boolean;
  onToggleInStock: () => void;
  isNew: boolean;
  onToggleNew: () => void;
  isBestSeller: boolean;
  onToggleBestSeller: () => void;
}

const materialLabels: Record<ProductMaterial, string> = {
  celik: 'Çelik',
  'gumus-kaplama': 'Gümüş Kaplama',
  'altin-kaplama': 'Altın Kaplama',
  'rose-gold-kaplama': 'Rose Gold Kaplama',
};

const colorOptions: { value: ProductColor; label: string; hex: string }[] = [
  { value: 'altin', label: 'Altın', hex: '#D4AF37' },
  { value: 'gumus', label: 'Gümüş', hex: '#C0C0C0' },
  { value: 'rose-gold', label: 'Rose Gold', hex: '#B76E79' },
  { value: 'siyah', label: 'Siyah', hex: '#000000' },
];

export default function AdvancedFilterSidebar({
  priceRange,
  currentPriceRange,
  onPriceChange,
  materials,
  onToggleMaterial,
  colors,
  onToggleColor,
  inStockOnly,
  onToggleInStock,
  isNew,
  onToggleNew,
  isBestSeller,
  onToggleBestSeller,
}: AdvancedFilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    material: true,
    color: true,
    features: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const FilterSection = ({
    title,
    sectionKey,
    children,
  }: {
    title: string;
    sectionKey: keyof typeof expandedSections;
    children: React.ReactNode;
  }) => (
    <div className="border-b border-white/10 pb-6">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full mb-4"
      >
        <h3 className="font-medium text-white">{title}</h3>
        {expandedSections[sectionKey] ? (
          <ChevronUp className="w-5 h-5 text-white/60" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white/60" />
        )}
      </button>
      {expandedSections[sectionKey] && children}
    </div>
  );

  return (
    <div className="space-y-6 w-64">
      <h2 className="font-serif text-xl text-white">Filtrele</h2>

      {/* Price Range */}
      <FilterSection title="Fiyat Aralığı" sectionKey="price">
        <PriceRangeSlider
          min={priceRange.min}
          max={priceRange.max}
          value={currentPriceRange}
          onChange={onPriceChange}
        />
      </FilterSection>

      {/* Materials */}
      <FilterSection title="Malzeme" sectionKey="material">
        <div className="space-y-2">
          {(Object.keys(materialLabels) as ProductMaterial[]).map(
            (material) => (
              <label
                key={material}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={materials.includes(material)}
                  onChange={() => onToggleMaterial(material)}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-gold focus:ring-2 focus:ring-gold focus:ring-offset-0 focus:ring-offset-gray-900 cursor-pointer"
                />
                <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                  {materialLabels[material]}
                </span>
              </label>
            )
          )}
        </div>
      </FilterSection>

      {/* Colors */}
      <FilterSection title="Renk" sectionKey="color">
        <div className="grid grid-cols-2 gap-3">
          {colorOptions.map((color) => (
            <button
              key={color.value}
              onClick={() => onToggleColor(color.value)}
              className={`flex items-center gap-2 p-2 rounded-lg border transition-all ${
                colors.includes(color.value)
                  ? 'bg-gold/20 border-gold'
                  : 'bg-white/5 border-white/10 hover:border-white/30'
              }`}
            >
              <div
                className="w-6 h-6 rounded-full border-2 border-white/20"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-xs text-white/80">{color.label}</span>
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Features */}
      <FilterSection title="Özellikler" sectionKey="features">
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={onToggleInStock}
              className="w-4 h-4 rounded border-white/20 bg-white/5 text-gold focus:ring-2 focus:ring-gold focus:ring-offset-0 focus:ring-offset-gray-900 cursor-pointer"
            />
            <span className="text-sm text-white/80 group-hover:text-white transition-colors">
              Sadece Stokta Olanlar
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={isNew}
              onChange={onToggleNew}
              className="w-4 h-4 rounded border-white/20 bg-white/5 text-gold focus:ring-2 focus:ring-gold focus:ring-offset-0 focus:ring-offset-gray-900 cursor-pointer"
            />
            <span className="text-sm text-white/80 group-hover:text-white transition-colors">
              Yeni Ürünler
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={isBestSeller}
              onChange={onToggleBestSeller}
              className="w-4 h-4 rounded border-white/20 bg-white/5 text-gold focus:ring-2 focus:ring-gold focus:ring-offset-0 focus:ring-offset-gray-900 cursor-pointer"
            />
            <span className="text-sm text-white/80 group-hover:text-white transition-colors">
              Çok Satanlar
            </span>
          </label>
        </div>
      </FilterSection>
    </div>
  );
}
