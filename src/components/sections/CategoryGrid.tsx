'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Kolyeler',
    slug: 'kolye',
    description: '100+ Model',
    image: '/placeholder-category-necklace.jpg',
    gradient: 'from-gold/20 to-gold/5',
  },
  {
    name: 'Bilezikler',
    slug: 'bilezik',
    description: '80+ Model',
    image: '/placeholder-category-bracelet.jpg',
    gradient: 'from-rose-gold/20 to-rose-gold/5',
  },
  {
    name: 'Küpeler',
    slug: 'kupe',
    description: '90+ Model',
    image: '/placeholder-category-earring.jpg',
    gradient: 'from-gold-light/20 to-gold-light/5',
  },
  {
    name: 'Yüzükler',
    slug: 'yuzuk',
    description: '60+ Model',
    image: '/placeholder-category-ring.jpg',
    gradient: 'from-gold/20 to-gold/5',
  },
]

export default function CategoryGrid() {
  return (
    <section className="section bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-h2 md:text-display-sm font-heading font-bold text-black mb-4">
            Koleksiyonlarımızı Keşfedin
          </h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Her kategoride özenle seçilmiş, kaliteli ve şık tasarımlar
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/collections/${category.slug}`}
                className="group block relative overflow-hidden rounded-2xl aspect-[3/4] bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  {/* 
                    GERÇEK GÖRSEL EKLENECEK:
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  */}
                  
                  {/* Temporary gradient */}
                  <div className={`w-full h-full bg-gradient-to-br ${category.gradient}`} />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <p className="text-sm text-white/80 mb-1">
                      {category.description}
                    </p>
                    <h3 className="text-h3 font-heading font-bold text-white mb-3">
                      {category.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-sm font-medium">Keşfet</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/collections/all" className="btn-primary">
            Tüm Ürünleri Gör
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
