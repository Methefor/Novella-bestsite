import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnnouncementBar from '@/components/layout/AnnouncementBar'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'NOVELLA - Her Parça Bir Hikaye',
    template: '%s | NOVELLA',
  },
  description: 'Butik takı koleksiyonları ile her parça bir hikaye. Kaliteli çelik takılar, uygun fiyatlar. Tekirdağ\'dan sizin için özenle seçilmiş kolye, bilezik, küpe ve yüzük modelleri.',
  keywords: ['takı', 'kolye', 'bilezik', 'küpe', 'yüzük', 'çelik takı', 'butik takı', 'NOVELLA', 'Tekirdağ'],
  authors: [{ name: 'NOVELLA' }],
  creator: 'NOVELLA',
  publisher: 'NOVELLA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://novella.com.tr'), // URL'i güncelleyeceksin
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://novella.com.tr',
    title: 'NOVELLA - Her Parça Bir Hikaye',
    description: 'Butik takı koleksiyonları ile her parça bir hikaye. Kaliteli çelik takılar, uygun fiyatlar.',
    siteName: 'NOVELLA',
    images: [
      {
        url: '/og-image.jpg', // Bu görseli hazırlayacaksın
        width: 1200,
        height: 630,
        alt: 'NOVELLA Takı Koleksiyonu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOVELLA - Her Parça Bir Hikaye',
    description: 'Butik takı koleksiyonları ile her parça bir hikaye.',
    images: ['/og-image.jpg'],
    creator: '@novella.tr', // TikTok handle'ın
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        {/* Announcement Bar */}
        <AnnouncementBar />
        
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
