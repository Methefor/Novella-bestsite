/**
 * NOVELLA - Product Detail Client Component
 * Ürün detay sayfası client component (tüm UI'yı birleştirir)
 */

'use client';

import AddToCartButton from '@/components/product/AddToCartButton';
import Breadcrumb from '@/components/product/Breadcrumb';
import CustomizationModal from '@/components/product/CustomizationModal';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';
import ShareButtons from '@/components/product/ShareButtons';
import VariantSelector from '@/components/product/VariantSelector';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import type { Product } from '@/types/product';
import { Heart } from 'lucide-react';
import { useState } from 'react';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Zarif Altın Kolye',
    slug: 'zarif-altin-kolye',
    description: 'Minimal ve şık tasarımlı altın kaplama kolye.',
    category: 'kolye',
    price: 299,
    originalPrice: 399,
    variants: [
      {
        id: 'v1',
        color: 'altin',
        material: 'altin-kaplama',
        stock: 15,
        images: ['/products/kolye-1.jpg'],
      },
    ],
    defaultVariant: 'v1',
    features: ['Su geçirmez', 'Hipoalerjenik'],
    material: 'altin-kaplama',
    isNew: true,
    isBestSeller: false,
    isCustomizable: true,
    rating: 4.5,
    reviewCount: 28,
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-01-15'),
  },
];

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const [selectedVariantId, setSelectedVariantId] = useState(
    product.defaultVariant
  );
  const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);
  const [customText, setCustomText] = useState('');

  const addToCart = useCartStore((state) => state.addItem);

  const addToWishlist = useWishlistStore((state) => state.addItem);
  const removeFromWishlist = useWishlistStore((state) => state.removeItem);
  const isInWishlist = useWishlistStore((state) =>
    state.isInWishlist(product.id)
  );

  const selectedVariant = product.variants.find(
    (v) => v.id === selectedVariantId
  );
  const isInStock = selectedVariant ? selectedVariant.stock > 0 : false;

  const categoryLabels: Record<string, string> = {
    kolye: 'Kolye',
    bilezik: 'Bilezik',
    kupe: 'Küpe',
    yuzuk: 'Yüzük',
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: 'Koleksiyonlar', href: '/collections' },
            {
              label: categoryLabels[product.category] || product.category,
              href: `/collections/${product.category}`,
            },
            { label: product.name },
          ]}
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-6">
          <div>
            <ProductGallery
              images={selectedVariant?.images || product.variants[0].images}
              productName={product.name}
            />
          </div>

          <div className="space-y-6">
            <ProductInfo product={product} />

            <VariantSelector
              variants={product.variants}
              selectedVariantId={selectedVariantId}
              onSelectVariant={setSelectedVariantId}
            />

            {product.isCustomizable && (
              <button
                onClick={() => setIsCustomizationOpen(true)}
                className="
                  w-full py-3 px-4 
                  border-2 border-gold text-gold
                  rounded-lg font-medium
                  hover:bg-gold hover:text-white
                  transition-all duration-200
                  flex items-center justify-center gap-2
                "
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                İsim Baskısı Yaptır
              </button>
            )}

            <AddToCartButton
              productName={product.name}
              variantId={selectedVariantId}
              isInStock={isInStock}
              onAddToCart={(variantId, quantity) => {
                addToCart(
                  product,
                  variantId,
                  quantity,
                  customText || undefined
                );
              }}
            />

            <button
              onClick={() => {
                if (isInWishlist) {
                  removeFromWishlist(product.id);
                } else {
                  addToWishlist(product);
                }
              }}
              className={`
                w-full py-3 px-4 rounded-lg font-medium
                flex items-center justify-center gap-2
                border-2 transition-all duration-200
                ${
                  isInWishlist
                    ? 'border-red-500 text-red-500 bg-red-50'
                    : 'border-cream-300 text-black/60 hover:border-gold hover:text-gold'
                }
              `}
            >
              <Heart
                className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`}
              />
              {isInWishlist ? 'Favorilerde' : 'Favorilere Ekle'}
            </button>

            <div className="pt-6 border-t border-cream-200">
              <ShareButtons
                productName={product.name}
                productUrl={`/products/${product.slug}`}
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <RelatedProducts
            currentProductId={product.id}
            category={product.category}
            allProducts={MOCK_PRODUCTS}
          />
        </div>
      </div>

      <CustomizationModal
        isOpen={isCustomizationOpen}
        onClose={() => setIsCustomizationOpen(false)}
        productName={product.name}
        onSave={(text) => {
          setCustomText(text);
          setIsCustomizationOpen(false);
        }}
      />
    </div>
  );
}
