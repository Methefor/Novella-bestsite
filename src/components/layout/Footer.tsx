'use client';

import { Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  catalog: {
    title: 'Katalog',
    links: [
      { name: 'Tüm Ürünler', href: '/collections/all' },
      { name: 'Kolyeler', href: '/collections/kolye' },
      { name: 'Bilezikler', href: '/collections/bilezik' },
      { name: 'Küpeler', href: '/collections/kupe' },
      { name: 'Yüzükler', href: '/collections/yuzuk' },
      { name: 'Setler', href: '/collections/setler' },
      { name: 'Yeni Gelenler', href: '/collections/yeni' },
    ],
  },
  about: {
    title: "NOVELLA'yı Tanı",
    links: [
      { name: "NOVELLA'nın Hikayesi", href: '/hakkimizda' },
      { name: 'Nasıl Üretilir?', href: '/uretim' },
      { name: 'Müşteri Yorumları', href: '/yorumlar' },
      { name: 'Sürdürülebilirlik', href: '/surdurulebilirlik' },
    ],
  },
  info: {
    title: 'Bilgi',
    links: [
      { name: 'Sıkça Sorulan Sorular', href: '/sss' },
      { name: 'Kargo & Teslimat', href: '/kargo' },
      { name: 'İade & Değişim', href: '/iade' },
      { name: 'Gizlilik Politikası', href: '/gizlilik' },
      { name: 'Kullanım Koşulları', href: '/kosullar' },
      { name: 'İletişim', href: '/iletisim' },
    ],
  },
};

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/jewelry.novella',
    icon: Instagram,
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@novella.tr',
    icon: Send, // TikTok icon olarak Send kullanıyoruz
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gradient-gold">
                NOVELLA
              </h2>
              <p className="text-sm text-gray-400 mt-1">Her Parça Bir Hikaye</p>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed">
              Sizin için özenle seçilmiş butik takı koleksiyonları. Kalite ve
              estetiği uygun fiyatlarla buluşturuyoruz.
            </p>

            {/* Social Media */}
            <div className="flex items-center space-x-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Catalog Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              {footerLinks.catalog.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.catalog.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              {footerLinks.about.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.about.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              {footerLinks.info.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.info.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-medium">Adres</p>
                <p className="text-sm text-gray-400 mt-1">, Türkiye</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-medium">E-posta</p>
                <a
                  href="mailto:info@novella.com.tr"
                  className="text-sm text-gray-400 hover:text-gold transition-colors mt-1 block"
                >
                  info@novella.com.tr
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-medium">WhatsApp</p>
                <a
                  href="https://wa.me/905XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-gold transition-colors mt-1 block"
                >
                  +90 5XX XXX XX XX
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-md">
            <h3 className="font-heading font-semibold text-lg mb-2">
              Kampanyalardan Haberdar Ol
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Yeni koleksiyonlar ve özel fırsatlardan ilk sen haberdar ol.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-gold transition-colors text-sm"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Abone Ol
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {currentYear} NOVELLA. Tüm hakları saklıdır.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Güvenli Ödeme:</span>
              <div className="flex items-center gap-2">
                {/* İyzico Logo */}
                <div className="h-8 px-3 bg-white/10 rounded flex items-center">
                  <span className="text-xs text-gray-400">İyzico</span>
                </div>
                {/* Shopier Logo */}
                <div className="h-8 px-3 bg-white/10 rounded flex items-center">
                  <span className="text-xs text-gray-400">Shopier</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
