'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProductCardProps {
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
  isWishlisted?: boolean
  onWishlistToggle?: (id: string) => void
  onQuickAdd?: (id: string) => void
}

export default function ProductCard({
  id,
  name,
  slug,
  price,
  originalPrice,
  images,
  colors,
  badge,
  isWishlisted = false,
  onWishlistToggle,
  onQuickAdd,
}: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onWishlistToggle?.(id)
  }

  const handleQuickAddClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onQuickAdd?.(id)
  }

  return (
    <Link href={`/product/${slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="product-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="group relative aspect-product bg-gray-50 overflow-hidden">
          {/* Main Image */}
          <Image
            src={images[isHovered && images.length > 1 ? 1 : 0] || '/placeholder-product.svg'}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {badge === 'new' && (
              <span className="badge-new shadow-sm">YENİ</span>
            )}
            {badge === 'sale' && discountPercentage > 0 && (
              <span className="badge-sale shadow-sm">%{discountPercentage} İNDİRİM</span>
            )}
            {badge === 'sold-out' && (
              <span className="badge-sold-out shadow-sm">TÜKENDİ</span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistClick}
            className={`absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full 
              ${isWishlisted ? 'bg-gold text-white' : 'bg-white/90 text-gray-700'} 
              hover:bg-gold hover:text-white transition-all shadow-md
              ${isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0'} md:group-hover:opacity-100`}
            aria-label="Favorilere ekle"
          >
            <Heart
              className="w-5 h-5"
              fill={isWishlisted ? 'currentColor' : 'none'}
            />
          </button>

          {/* Quick Add Button - Shows on hover */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.2 }}
            onClick={handleQuickAddClick}
            className="absolute bottom-3 left-3 right-3 btn-primary shadow-lg hidden md:flex"
            disabled={badge === 'sold-out'}
          >
            <ShoppingBag className="w-5 h-5" />
            Hızlı Ekle
          </motion.button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Product Name */}
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 hover:text-gold transition-colors">
            {name}
          </h3>

          {/* Color Swatches */}
          {colors && colors.length > 0 && (
            <div className="flex items-center gap-1.5 mb-3">
              {colors.slice(0, 5).map((color, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  className="w-6 h-6 rounded-full border-2 border-gray-200 hover:border-gold transition-colors relative"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`${color.name} renk seçeneği`}
                >
                  {index === 0 && (
                    <span className="absolute inset-0 rounded-full border-2 border-gold" />
                  )}
                </button>
              ))}
              {colors.length > 5 && (
                <span className="text-xs text-gray-500 ml-1">
                  +{colors.length - 5}
                </span>
              )}
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-price font-bold text-gray-900">
              {price.toLocaleString('tr-TR')}₺
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-gray-400 line-through">
                {originalPrice.toLocaleString('tr-TR')}₺
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
