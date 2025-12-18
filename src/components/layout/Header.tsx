'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Koleksiyonlar', href: '/collections', hasDropdown: true },
  { name: 'Yeni Gelenler', href: '/collections/yeni' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'İletişim', href: '/iletisim' },
]

const collections = [
  { name: 'Tüm Ürünler', href: '/collections/all' },
  { name: 'Kolyeler', href: '/collections/kolye' },
  { name: 'Bilezikler', href: '/collections/bilezik' },
  { name: 'Küpeler', href: '/collections/kupe' },
  { name: 'Yüzükler', href: '/collections/yuzuk' },
  { name: 'Setler', href: '/collections/setler' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [cartItemCount, setCartItemCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Body scroll lock when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-white'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Menüyü aç"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-heading font-bold text-gradient-gold">
                  NOVELLA
                </h1>
                <p className="text-xs text-gray-600 tracking-wider hidden sm:block">
                  Her Parça Bir Hikaye
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-gold transition-colors py-2"
                  >
                    {item.name}
                  </Link>

                  {/* Dropdown for Collections */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white shadow-xl rounded-lg py-4 min-w-[200px]">
                        {collections.map((collection) => (
                          <Link
                            key={collection.name}
                            href={collection.href}
                            className="block px-6 py-2 text-sm text-gray-700 hover:bg-gold/10 hover:text-gold transition-colors"
                          >
                            {collection.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Ara"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </button>

              {/* User Account */}
              <Link
                href="/hesap"
                className="hidden md:block p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Hesabım"
              >
                <User className="w-5 h-5 text-gray-700" />
              </Link>

              {/* Shopping Cart */}
              <Link
                href="/sepet"
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Sepet"
              >
                <ShoppingBag className="w-5 h-5 text-gray-700" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 overflow-y-auto md:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-heading font-semibold text-gradient-gold">
                  NOVELLA
                </h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="p-4">
                {navigation.map((item) => (
                  <div key={item.name} className="mb-2">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 px-4 text-gray-700 hover:bg-gold/10 hover:text-gold rounded-lg transition-colors font-medium"
                    >
                      {item.name}
                    </Link>

                    {/* Collections Submenu */}
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {collections.map((collection) => (
                          <Link
                            key={collection.name}
                            href={collection.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 px-4 text-sm text-gray-600 hover:text-gold transition-colors"
                          >
                            {collection.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* User Account - Mobile */}
                <Link
                  href="/hesap"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:bg-gold/10 hover:text-gold rounded-lg transition-colors font-medium mt-4 border-t pt-4"
                >
                  <User className="w-5 h-5 inline mr-2" />
                  Hesabım
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4"
            >
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <Search className="w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Ürün ara..."
                    autoFocus
                    className="flex-1 text-lg outline-none"
                  />
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
