/**
 * NOVELLA - Product Card Component
 * Tek bir ürünü temsil eden card component
 */

'use client';

import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import type { Product } from '@/types/product';
import { Eye, Heart, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const addToCart = useCartStore((state) => state.addItem);

  const addToWishlist = useWishlistStore((state) => state.addItem);
  const removeFromWishlist = useWishlistStore((state) => state.removeItem);
  const isInWishlist = useWishlistStore((state) =>
    state.isInWishlist(product.id)
  );

  const defaultVariant =
    product.variants.find((v) => v.id === product.defaultVariant) ||
    product.variants[0];

  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.originalPrice! - product.price) / product.originalPrice!) *
          100
      )
    : 0;

  const isInStock = defaultVariant.stock > 0;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/products/${product.slug}`}
        className="block relative aspect-[3/4] mb-3 overflow-hidden rounded-lg bg-cream-50"
      >
        <Image
          src={defaultVariant.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {defaultVariant.images[1] && (
          <Image
            src={defaultVariant.images[1]}
            alt={`${product.name} - 2`}
            fill
            className={`
              object-cover transition-opacity duration-500
              ${isHovered ? 'opacity-100' : 'opacity-0'}
            `}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && <span className="badge-new">YENİ</span>}
          {hasDiscount && (
            <span className="badge-sale">%{discountPercentage} İNDİRİM</span>
          )}
          {product.isBestSeller && (
            <span className="badge-bestseller">ÇOK SATAN</span>
          )}
          {!isInStock && <span className="badge-out-of-stock">STOKTA YOK</span>}
        </div>

        <div
          className={`
            absolute top-3 right-3 flex flex-col gap-2
            transition-all duration-300
            ${
              isHovered
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-4'
            }
          `}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              if (isInWishlist) {
                removeFromWishlist(product.id);
              } else {
                addToWishlist(product);
              }
            }}
            className={`
              p-2 rounded-full backdrop-blur-sm transition-all duration-200
              ${
                isInWishlist
                  ? 'bg-red-500 text-white'
                  : 'bg-white/90 text-black/70 hover:bg-red-500 hover:text-white'
              }
            `}
            aria-label="Favorilere ekle"
          >
            <Heart
              className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`}
            />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-black/70 hover:bg-gold hover:text-white transition-all duration-200"
            aria-label="Hızlı görünüm"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            if (isInStock) {
              addToCart(product, product.defaultVariant, 1);
            }
          }}
          disabled={!isInStock}
          className={`
            absolute bottom-0 left-0 right-0 w-full py-3
            bg-black/90 backdrop-blur-sm text-white
            flex items-center justify-center gap-2
            transition-all duration-300
            ${
              isHovered
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
            }
            ${!isInStock ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gold'}
          `}
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="font-medium">
            {isInStock ? 'Sepete Ekle' : 'Stokta Yok'}
          </span>
        </button>
      </Link>

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wider text-gold">
          {product.category}
        </p>

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-serif text-lg text-black group-hover:text-gold transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {product.rating && product.reviewCount && (
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating!)
                      ? 'text-gold fill-current'
                      : 'text-cream-300 fill-current'
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-black/60">
              ({product.reviewCount})
            </span>
          </div>
        )}

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-black">
            {product.price.toLocaleString('tr-TR')}₺
          </span>
          {hasDiscount && (
            <span className="text-sm text-black/40 line-through">
              {product.originalPrice!.toLocaleString('tr-TR')}₺
            </span>
          )}
        </div>

        {product.variants.length > 1 && (
          <div className="flex items-center gap-1.5">
            {product.variants.slice(0, 4).map((variant) => (
              <button
                key={variant.id}
                className="w-6 h-6 rounded-full border-2 border-cream-300 hover:border-gold transition-colors"
                style={{
                  backgroundColor:
                    variant.color === 'altin'
                      ? '#D4AF37'
                      : variant.color === 'gumus'
                      ? '#C0C0C0'
                      : variant.color === 'rose-gold'
                      ? '#B76E79'
                      : variant.color === 'siyah'
                      ? '#0F0F0F'
                      : variant.color === 'beyaz'
                      ? '#FFFFFF'
                      : '#D4AF37',
                }}
                title={variant.color}
              />
            ))}
            {product.variants.length > 4 && (
              <span className="text-xs text-black/60">
                +{product.variants.length - 4}
              </span>
            )}
          </div>
        )}

        {product.isCustomizable && (
          <span className="inline-flex items-center gap-1 text-xs text-gold">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            İsim Baskısı Yapılabilir
          </span>
        )}
      </div>
    </div>
  );
}
