'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gradient-to-br from-cream via-white to-gold/10">
      {/* Background Image - Placeholder için gradient, gerçek görsel eklenecek */}
      <div className="absolute inset-0">
        {/* 
          BURAYA GERÇEK GÖRSEL EKLENECEK:
          <Image
            src="/images/hero-jewelry.jpg"
            alt="NOVELLA Takı Koleksiyonu"
            fill
            className="object-cover"
            priority
          />
        */}
        
        {/* Temporary: Gradient overlay simulating image */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-rose-gold/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative h-full container-custom">
        <div className="h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gray-700">
                Açılış Kampanyası - İlk 50 Siparişte %20 İndirim
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-display-sm md:text-display-md lg:text-display-lg font-heading font-bold text-black mb-6 leading-tight"
            >
              Her Parça{' '}
              <span className="text-gradient-gold">Bir Hikaye</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-body-lg md:text-h5 text-gray-600 mb-8 leading-relaxed max-w-xl"
            >
              Tekirdağ'dan sizin için özenle seçilmiş butik takı koleksiyonları. 
              Kaliteli çelik takılar, premium tasarımlar, uygun fiyatlar.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link href="/collections/all" className="btn-primary group">
                Koleksiyonu Keşfet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link href="/collections/yeni" className="btn-outline">
                Yeni Gelenler
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-sm text-gray-600">Ücretsiz Kargo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-sm text-gray-600">İsim Baskısı Hediye</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-sm text-gray-600">7 Gün İade Garantisi</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs uppercase tracking-wider">Keşfet</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
