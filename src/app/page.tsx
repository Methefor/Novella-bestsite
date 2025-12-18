import HeroSection from '@/components/sections/HeroSection'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import CategoryGrid from '@/components/sections/CategoryGrid'
import TrustBadges from '@/components/sections/TrustBadges'
import GiftExperience from '@/components/sections/GiftExperience'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products - Yeni Gelenler */}
      <FeaturedProducts />

      {/* Category Grid */}
      <CategoryGrid />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Gift Experience Banner */}
      <GiftExperience />
    </div>
  )
}
