# NOVELLA - Butik Takı E-Ticaret Web Sitesi
**"Her Parça Bir Hikaye"**

Modern, responsive ve performanslı e-ticaret web sitesi. Next.js 15, TypeScript ve Tailwind CSS ile geliştirilmiştir.

---

## 🎯 Proje Özeti

NOVELLA, Tekirdağ'dan başlayarak Türkiye çapında butik takı satışı yapan bir e-ticaret platformudur. Kolye, bilezik, küpe ve yüzük kategorilerinde uygun fiyatlı, kaliteli çelik takılar sunulmaktadır.

---

## 🚀 Teknoloji Stack

- **Framework:** Next.js 15 (App Router)
- **Dil:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animasyon:** Framer Motion
- **State Management:** Zustand
- **Icons:** Lucide React
- **Fonts:** Cormorant Garamond (Heading), Inter (Body)

---

## 📋 Geliştirme Fazları

### ✅ Faz 1: Altyapı & Temel Bileşenler (TAMAMLANDI)
- ✅ Proje kurulumu
- ✅ Design tokens (renk paleti, tipografi, spacing)
- ✅ Tailwind konfigürasyonu
- ✅ Font entegrasyonu
- ✅ Layout yapısı (Header, Footer)
- ✅ Announcement Bar
- ✅ Responsive tasarım temelleri

### ✅ Faz 2: Ana Sayfa Bölümleri (TAMAMLANDI)
- ✅ Hero section (static banner)
- ✅ Yeni Ürünler showcase
- ✅ Kategori grid
- ✅ Trust badges section
- ✅ Hediye deneyimi banner
- ✅ ProductCard component
- ✅ ProductGrid component

### ✅ Faz 3: Koleksiyon Sayfası & Filtreleme (TAMAMLANDI)
- ✅ Zustand filter store
- ✅ Product type definitions
- ✅ FilterSidebar component
  - Kategori filtresi
  - Fiyat aralığı slider
  - Malzeme filtresi
  - Renk seçimi (color swatches)
  - Özel özellikler (Yeni, Çok Satan, İsim Baskısı, Stokta Var)
- ✅ SortDropdown component
  - 6 sıralama seçeneği
  - Dropdown menu
- ✅ ProductGrid component (filtreleme logic)
- ✅ ProductCard component (hover efektleri, badges, varyantlar)
- ✅ Collections ana sayfası (`/collections`)
- ✅ Kategori sayfaları (`/collections/[category]`)
- ✅ Mobile filter sidebar
- ✅ Empty state & loading state

### 📅 Faz 4: Ürün Detay Sayfası (SIRADA)
- [ ] Görsel galerisi (zoom, thumbnail nav)
- [ ] Ürün bilgileri (description, features)
- [ ] Varyasyon seçimi (renk, malzeme)
- [ ] Sepete ekle fonksiyonu
- [ ] İsim baskısı modal
- [ ] İlgili ürünler carousel
- [ ] Breadcrumb navigation
- [ ] Share buttons (social media)

### 📅 Faz 5: Sepet & Checkout
- [ ] Sepet drawer/modal
- [ ] Ürün miktarı yönetimi
- [ ] Kargo hesaplama
- [ ] Shopier entegrasyonu
- [ ] Kupon kodu sistemi

### 📅 Faz 6: Statik Sayfalar & Optimizasyon
- [ ] FAQ accordion
- [ ] Hakkımızda sayfası
- [ ] İletişim formu
- [ ] Gizlilik politikası
- [ ] İade & İptal koşulları
- [ ] SEO optimizasyonu
- [ ] Performance optimizasyonu
- [ ] Analytics entegrasyonu

---

## 🎨 Tasarım Sistemi

### Renk Paleti
| Renk | Kod | Kullanım |
|------|-----|----------|
| **Gold** | `#D4AF37` | Ana marka rengi, CTA, accent |
| **Rose Gold** | `#B76E79` | İkincil renk |
| **Cream** | `#FDFBF7` | Arka plan |
| **Black** | `#0F0F0F` | Text, borders |
| **Soft Gold** | `#E5C158` | Hover states |

### Tipografi
- **Heading:** Cormorant Garamond (Serif)
- **Body:** Inter (Sans-serif)

### Spacing
- Section padding: `3rem` (sm), `5rem` (md), `7rem` (lg)
- Grid gap: `1rem` (sm), `1.5rem` (md), `2rem` (lg)

---

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

---

## 📁 Proje Yapısı

```
novella-website/
├── src/
│   ├── app/
│   │   ├── collections/
│   │   │   ├── page.tsx                    # Ana koleksiyon sayfası
│   │   │   ├── CollectionsClient.tsx       # Client component
│   │   │   └── [category]/
│   │   │       ├── page.tsx                # Kategori sayfası
│   │   │       └── CategoryClient.tsx      # Category client component
│   │   ├── layout.tsx                      # Root layout
│   │   ├── page.tsx                        # Ana sayfa
│   │   └── globals.css                     # Global styles
│   ├── components/
│   │   ├── collections/
│   │   │   ├── FilterSidebar.tsx          # Filtreleme sidebar
│   │   │   ├── ProductGrid.tsx            # Ürün grid (filtreleme logic)
│   │   │   └── SortDropdown.tsx           # Sıralama dropdown
│   │   ├── product/
│   │   │   └── ProductCard.tsx            # Ürün kartı
│   │   ├── layout/
│   │   │   ├── Header.tsx                 # Header component
│   │   │   ├── Footer.tsx                 # Footer component
│   │   │   └── AnnouncementBar.tsx
│   │   └── ui/                            # Ortak UI bileşenleri
│   ├── store/
│   │   └── filterStore.ts                 # Zustand filter store
│   ├── types/
│   │   └── product.ts                     # Product type definitions
│   ├── lib/                               # Utility fonksiyonlar
│   └── styles/
│       └── utilities.css                  # Badge ve utility classes
├── public/                                 # Static assets
├── design-tokens.ts                        # Tasarım token'ları
├── tailwind.config.ts                      # Tailwind konfigürasyonu
└── package.json
```

---

## 🎯 Özellikler

### Mevcut Özellikler (Faz 1-3)

#### Layout & Navigation
- ✅ Responsive header (sticky, mobile menu)
- ✅ Comprehensive footer (4 sütun)
- ✅ Announcement bar (kampanya bildirimi)
- ✅ Search modal
- ✅ Shopping cart icon
- ✅ Mobile navigation

#### Ana Sayfa
- ✅ Hero section (static banner + CTA)
- ✅ Featured products grid
- ✅ Category showcase (4 kategori)
- ✅ Trust badges (5 ikon)
- ✅ Gift experience banner

#### Koleksiyon Sayfası
- ✅ **Filtreleme Sistemi:**
  - Kategori (kolye, bilezik, küpe, yüzük)
  - Fiyat aralığı (slider + input)
  - Malzeme (çelik, gümüş, altın kaplama, rose gold)
  - Renk (6 renk seçeneği, color swatches)
  - Özel özellikler (yeni, çok satan, isim baskısı, stokta var)
  
- ✅ **Sıralama:**
  - En yeni
  - En popüler
  - Fiyat: düşükten yükseğe
  - Fiyat: yüksekten düşüğe
  - İsim: A-Z
  - İsim: Z-A
  
- ✅ **Ürün Kartı:**
  - Hover efektleri (2. görsel gösterimi)
  - Badge sistemi (YENİ, İNDİRİM, ÇOK SATAN, STOKTA YOK)
  - Quick actions (favorilere ekle, hızlı görünüm)
  - Renk varyantları gösterimi
  - Rating & review count
  - "Sepete Ekle" hover butonu
  - İsim baskısı badge
  
- ✅ **Responsive:**
  - Desktop filter sidebar
  - Mobile filter modal
  - Grid layout (1-4 columns)
  
- ✅ **State Management:**
  - Zustand store (persist filtreleri)
  - Performance optimization (selectors)
  - Reset filters fonksiyonu

#### Product Card Component
- ✅ Hover efektleri
- ✅ Badge sistemi (NEW, SALE, BEST SELLER, OUT OF STOCK)
- ✅ Quick actions (wishlist, quick view)
- ✅ Varyant gösterimi
- ✅ Rating display

### Gelecek Özellikler (Faz 4-6)
- 🚧 Ürün detay sayfası
- 🚧 Sepet yönetimi
- 🚧 Shopier checkout entegrasyonu
- 🚧 İsim baskısı (kişiselleştirme)
- 🚧 Ürün yorumları
- 🚧 Wishlist (favoriler)
- 🚧 Newsletter kayıt
- 🚧 FAQ accordion
- 🚧 SEO optimizasyonu

---

## 🔧 Konfigürasyon

### Environment Variables
Henüz kullanılmıyor, Faz 5'te eklenecek:

```env
NEXT_PUBLIC_SHOPIER_API_KEY=
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Ekran Boyutu |
|------------|--------------|
| **Mobile** | < 768px |
| **Tablet** | 768px - 1024px |
| **Desktop** | 1024px - 1280px |
| **Wide** | > 1280px |

---

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
<span className="badge-bestseller">ÇOK SATAN</span>
<span className="badge-out-of-stock">STOKTA YOK</span>
```

### Filter Store Usage
```tsx
import { useFilterStore } from '@/store/filterStore';

function MyComponent() {
  const filterStore = useFilterStore();
  
  // Toggle kategori
  filterStore.toggleCategory('kolye');
  
  // Set fiyat aralığı
  filterStore.setPriceRange(100, 500);
  
  // Reset tüm filtreler
  filterStore.resetFilters();
}
```

---

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

---

## 📈 Performance Hedefleri

- **Lighthouse Score:** 90+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Cumulative Layout Shift:** < 0.1

---

## 🔄 Next Steps

### FAZ 4 - Ürün Detay Sayfası
1. Product page layout
2. Image gallery component
3. Variant selector
4. Add to cart functionality
5. Customization modal (isim baskısı)
6. Related products section

### FAZ 5 - Sepet & Checkout
1. Shopping cart store (Zustand)
2. Cart drawer/modal
3. Quantity management
4. Shopier integration
5. Shipping calculation

---

## 📝 Notlar

- Mock data kullanılıyor (MOCK_PRODUCTS). API entegrasyonu FAZ 5'te yapılacak.
- ProductCard component'te görsel URL'leri placeholder. Gerçek görseller yüklenecek.
- Zustand store localStorage'da filtreleri persist ediyor.
- Filter accordion'ları varsayılan olarak açık (UX optimizasyonu).

---

## 🤝 Katkıda Bulunma

Bu proje aktif geliştirme aşamasındadır. Öneriler için issue açabilirsiniz.

---

**HAZIRLANMIÅž:** 2025  
**STATÃœ:** Faz 3 Tamamlandı  
**SONRAKİ:** Faz 4 - Ürün Detay Sayfası
