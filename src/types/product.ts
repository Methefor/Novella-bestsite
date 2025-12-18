/**
 * NOVELLA - Product Type Definitions
 * Ürün ve filtreleme için type tanımlamaları
 */

export type ProductCategory = 'kolye' | 'bilezik' | 'küpe' | 'yüzük';

export type ProductMaterial = 'çelik' | 'gümüş' | 'altın-kaplama' | 'rose-gold';

export type ProductColor = 
  | 'altın' 
  | 'gümüş' 
  | 'rose-gold' 
  | 'siyah' 
  | 'beyaz'
  | 'çok-renkli';

export interface ProductVariant {
  id: string;
  color: ProductColor;
  material: ProductMaterial;
  stock: number;
  images: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: ProductCategory;
  
  // Fiyat bilgileri
  price: number;
  originalPrice?: number; // İndirim varsa
  discountPercentage?: number;
  
  // Varyasyonlar
  variants: ProductVariant[];
  defaultVariant: string; // variant id
  
  // Özellikler
  features: string[];
  material: ProductMaterial;
  isNew?: boolean;
  isBestSeller?: boolean;
  isCustomizable?: boolean; // İsim baskısı
  
  // Rating & Reviews
  rating?: number;
  reviewCount?: number;
  
  // Meta
  createdAt: Date;
  updatedAt: Date;
  
  // SEO
  metaTitle?: string;
  metaDescription?: string;
}

export interface FilterState {
  // Kategori filtresi
  categories: ProductCategory[];
  
  // Fiyat aralığı
  priceRange: {
    min: number;
    max: number;
  };
  
  // Malzeme filtresi
  materials: ProductMaterial[];
  
  // Renk filtresi
  colors: ProductColor[];
  
  // Özel özellikler
  isNew: boolean;
  isBestSeller: boolean;
  isCustomizable: boolean;
  inStock: boolean;
  
  // Sıralama
  sortBy: SortOption;
  
  // Arama
  searchQuery: string;
}

export type SortOption = 
  | 'newest'        // En yeni
  | 'popular'       // En popüler
  | 'price-asc'     // Fiyat: Düşükten yükseğe
  | 'price-desc'    // Fiyat: Yüksekten düşüğe
  | 'name-asc'      // İsim: A-Z
  | 'name-desc';    // İsim: Z-A

export interface CollectionMeta {
  title: string;
  description: string;
  totalProducts: number;
  currentPage: number;
  totalPages: number;
  productsPerPage: number;
}
