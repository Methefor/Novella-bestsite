# NOVELLA - Butik Takı E-Ticaret Web Sitesi

**"Her Parça Bir Hikaye"**

Modern, responsive ve performanslı e-ticaret web sitesi. Next.js 15, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## 🎯 Proje Özeti

NOVELLA, Tekirdağ'dan başlayarak Türkiye çapında butik takı satışı yapan bir e-ticaret platformudur. Kolye, bilezik, küpe ve yüzük kategorilerinde uygun fiyatlı, kaliteli çelik takılar sunulmaktadır.

## 🚀 Teknoloji Stack

- **Framework:** Next.js 15 (App Router)
- **Dil:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animasyon:** Framer Motion
- **State Management:** Zustand
- **Icons:** Lucide React
- **Fonts:** Cormorant Garamond (Heading), Inter (Body)

## 📋 Geliştirme Fazları

### ✅ Faz 1: Altyapı & Temel Bileşenler (TAMAMLANDI)
- [x] Proje kurulumu
- [x] Design tokens (renk paleti, tipografi, spacing)
- [x] Tailwind konfigürasyonu
- [x] Font entegrasyonu
- [x] Layout yapısı (Header, Footer)
- [x] Announcement Bar
- [x] Responsive tasarım temelleri

### ✅ Faz 2: Ana Sayfa Bölümleri (TAMAMLANDI)
- [x] Hero section (static banner)
- [x] Yeni Ürünler showcase
- [x] Kategori grid
- [x] Trust badges section
- [x] Hediye deneyimi banner
- [x] ProductCard component
- [x] ProductGrid component

### 🚧 Faz 3: Ürün Componentleri & Listeleme (SIRADA)
- [ ] Ürün filtreleme sistemi
- [ ] Renk varyasyon seçimi
- [ ] Quick view modal
- [ ] Filter & sorting UI
- [ ] Koleksiyon sayfası layout

### 📅 Faz 4: Ürün Detay Sayfası
- [ ] Görsel galerisi
- [ ] Ürün bilgileri
- [ ] Varyasyon seçimi
- [ ] Sepete ekle fonksiyonu
- [ ] İlgili ürünler

### 📅 Faz 5: Sepet & Checkout
- [ ] Sepet drawer
- [ ] Ürün yönetimi
- [ ] Shopier entegrasyonu
- [ ] Kargo hesaplama

### 📅 Faz 6: Statik Sayfalar & Optimizasyon
- [ ] FAQ accordion
- [ ] Hakkımızda sayfası
- [ ] İletişim formu
- [ ] SEO optimizasyonu
- [ ] Performance optimizasyonu

## 🎨 Tasarım Sistemi

### Renk Paleti
```
Gold: #D4AF37 (Ana marka rengi)
Rose Gold: #B76E79 (İkincil renk)
Cream: #FDFBF7 (Arka plan)
Black: #0F0F0F (Text)
Soft Gold: #E5C158 (Accent)
```

### Tipografi
- **Heading:** Cormorant Garamond (Serif)
- **Body:** Inter (Sans-serif)

### Spacing
- Section padding: 3rem (sm), 5rem (md), 7rem (lg)
- Grid gap: 1rem (sm), 1.5rem (md), 2rem (lg)

## 📦 Kurulum

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükle:**
```bash
npm install
```

2. **Geliştirme sunucusunu başlat:**
```bash
npm run dev
```

3. **Tarayıcıda aç:**
```
http://localhost:3000
```

### Diğer Komutlar

```bash
# Production build
npm run build

# Production sunucusu
npm run start

# Linting
npm run lint

# Type check
npm run type-check
```

## 📁 Proje Yapısı

```
novella-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Ana sayfa
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Header component
│   │   │   ├── Footer.tsx      # Footer component
│   │   │   └── AnnouncementBar.tsx
│   │   ├── product/            # (Faz 3)
│   │   ├── ui/                 # (Ortak UI bileşenleri)
│   │   └── sections/           # (Faz 2)
│   ├── lib/                    # Utility fonksiyonlar
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets
├── design-tokens.ts            # Tasarım token'ları
├── tailwind.config.ts          # Tailwind konfigürasyonu
└── package.json
```

## 🎯 Özellikler

### Mevcut Özellikler (Faz 1-2)
- ✅ Responsive header (sticky, mobile menu)
- ✅ Comprehensive footer (4 sütun)
- ✅ Announcement bar (kampanya bildirimi)
- ✅ Search modal
- ✅ Shopping cart icon
- ✅ Mobile navigation
- ✅ NOVELLA marka kimliği entegrasyonu
- ✅ Hero section (static banner + CTA)
- ✅ Product card component (hover efektleri, badge sistemi)
- ✅ Featured products grid
- ✅ Category showcase (4 kategori)
- ✅ Trust badges (5 ikon)
- ✅ Gift experience banner

### Gelecek Özellikler
- 🚧 Ürün filtreleme & sıralama
- 🚧 Sepet yönetimi
- 🚧 Shopier checkout entegrasyonu
- 🚧 İsim baskısı (kişiselleştirme)
- 🚧 Ürün yorumları
- 🚧 Wishlist (favoriler)
- 🚧 Newsletter kayıt

## 🔧 Konfigürasyon

### Environment Variables
Henüz kullanılmıyor, Faz 5'te eklenecek:
```env
NEXT_PUBLIC_SHOPIER_API_KEY=
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
```

## 📱 Responsive Breakpoints

```
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: 1024px - 1280px
Wide: > 1280px
```

## 🎨 Component Kullanım Örnekleri

### Button
```tsx
<button className="btn-primary">Sepete Ekle</button>
<button className="btn-outline">Favorilere Ekle</button>
```

### Badge
```tsx
<span className="badge-new">YENİ</span>
<span className="badge-sale">%20 İNDİRİM</span>
```

## 🚀 Deployment

### Vercel (Önerilen)
```bash
# Vercel CLI ile deploy
vercel

# Production deploy
vercel --prod
```

### GitHub Integration
Vercel'de GitHub repo'yu bağladığınızda otomatik deploy aktif olur.

## 📈 Performance Hedefleri

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

## 🤝 Katkıda Bulunma

Bu proje şu an aktif geliştirme aşamasında. Önerileriniz için lütfen issue açın.

## 📄 Lisans

Bu proje NOVELLA'nın mülkiyetindedir.

## 📞 İletişim

- **Instagram:** @jewelry.novella
- **TikTok:** @novella.tr
- **E-posta:** info@novella.com.tr
- **WhatsApp:** +90 5XX XXX XX XX

---

**Geliştirme Durumu:** Faz 2/6 Tamamlandı ✅  
**Son Güncelleme:** Aralık 2025
