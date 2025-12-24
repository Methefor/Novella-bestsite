/**
 * NOVELLA - Product Card Component
 * Gelişmiş özellikler: Hover glow, Quick View, Animated badges
 */

'use client';

import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import type { Product } from '@/types/product';
import { AnimatePresence, motion } from 'framer-motion';
import { Eye, Heart, ShoppingBag, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

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
    <>
      <div
        className="group relative bg-gray-800 border border-white/10 rounded-xl overflow-hidden hover:border-gold/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          href={`/products/${product.slug}`}
          className="block relative aspect-[3/4] overflow-hidden bg-gray-700"
        >
          {/* Main Image */}
          <Image
            src={defaultVariant.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Hover Image */}
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

          {/* Badges - İKON + KÜÇÜK (Sadece en önemli) */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {hasDiscount ? (
              <span className="badge badge-sale">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
                %{discountPercentage}
              </span>
            ) : product.isNew ? (
              <span className="badge badge-new">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                YENİ
              </span>
            ) : product.isBestSeller ? (
              <span className="badge badge-bestseller">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                ÇOK SATAN
              </span>
            ) : null}

            {!isInStock && (
              <span className="badge badge-out-of-stock">STOKTA YOK</span>
            )}
          </div>

          {/* Action Buttons */}
          <div
            className={`
              absolute top-3 right-3 flex flex-col gap-2 z-10
              transition-all duration-300
              ${
                isHovered
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-4'
              }
            `}
          >
            {/* Wishlist Button */}
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

            {/* Quick View Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsQuickViewOpen(true);
              }}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-black/70 hover:bg-gold hover:text-white transition-all duration-200"
              aria-label="Hızlı görünüm"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>

          {/* Add to Cart Button (Hover) - DAHA GÖRÜNÜR */}
          <button
            onClick={(e) => {
              e.preventDefault();
              if (isInStock) {
                addToCart(product, product.defaultVariant, 1);
              }
            }}
            disabled={!isInStock}
            className={`
              absolute bottom-0 left-0 right-0 w-full py-3.5
              bg-black/90 backdrop-blur-sm text-white
              flex items-center justify-center gap-2
              transition-all duration-300
              font-semibold text-base
              ${
                isHovered
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-full opacity-0'
              }
              ${
                !isInStock
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gold hover:text-black'
              }
            `}
          >
            <ShoppingBag className="w-5 h-5" />
            <span>{isInStock ? 'Sepete Ekle' : 'Stokta Yok'}</span>
          </button>
        </Link>

        {/* Product Info */}
        <div className="p-4 space-y-2">
          {/* Category */}
          <p className="text-xs uppercase tracking-wider text-gold">
            {product.category}
          </p>

          {/* Name - DAHA OKUNAKLI */}
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-serif text-base leading-snug text-white group-hover:text-gold transition-colors line-clamp-2 min-h-[3rem]">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          {product.rating && product.reviewCount && (
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating!)
                        ? 'text-gold fill-current'
                        : 'text-white/20 fill-current'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-white/60">
                ({product.reviewCount})
              </span>
            </div>
          )}

          {/* Price - DAHA VURGULU */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gold">
              {product.price.toLocaleString('tr-TR')}₺
            </span>
            {hasDiscount && (
              <span className="text-sm text-white/30 line-through">
                {product.originalPrice!.toLocaleString('tr-TR')}₺
              </span>
            )}
          </div>

          {/* Color Variants */}
          {product.variants.length > 1 && (
            <div className="flex items-center gap-1.5">
              {product.variants.slice(0, 4).map((variant) => (
                <button
                  key={variant.id}
                  className="w-6 h-6 rounded-full border-2 border-white/20 hover:border-gold transition-colors"
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
                <span className="text-xs text-white/60">
                  +{product.variants.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Customizable Badge */}
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

      {/* Quick View Modal */}
      <AnimatePresence>
        {isQuickViewOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuickViewOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                  onClick={() => setIsQuickViewOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Modal Content */}
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Image */}
                  <div className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden">
                    <Image
                      src={defaultVariant.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Info */}
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-wider text-gold">
                      {product.category}
                    </p>
                    <h2 className="font-serif text-3xl text-white">
                      {product.name}
                    </h2>
                    <p className="text-white/70 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Rating */}
                    {product.rating && product.reviewCount && (
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(product.rating!)
                                  ? 'text-gold fill-current'
                                  : 'text-white/20 fill-current'
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-white/60">
                          ({product.reviewCount} değerlendirme)
                        </span>
                      </div>
                    )}

                    {/* Price */}
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-bold text-gold">
                        {product.price.toLocaleString('tr-TR')}₺
                      </span>
                      {hasDiscount && (
                        <span className="text-xl text-white/30 line-through">
                          {product.originalPrice!.toLocaleString('tr-TR')}₺
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    {product.features && product.features.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-2">
                          Özellikler:
                        </h3>
                        <ul className="space-y-1">
                          {product.features.map((feature, index) => (
                            <li
                              key={index}
                              className="text-sm text-white/70 flex items-center gap-2"
                            >
                              <svg
                                className="w-4 h-4 text-gold flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={() => {
                          if (isInStock) {
                            addToCart(product, product.defaultVariant, 1);
                            setIsQuickViewOpen(false);
                          }
                        }}
                        disabled={!isInStock}
                        className="flex-1 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isInStock ? 'Sepete Ekle' : 'Stokta Yok'}
                      </button>
                      <Link
                        href={`/products/${product.slug}`}
                        className="px-6 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-black transition-colors"
                      >
                        Detayları Gör
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
