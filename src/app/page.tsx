// src/app/page.tsx

import AboutSection from '@/components/sections/AboutSection';
import CategoryGrid from '@/components/sections/CategoryGrid';
import ContactSection from '@/components/sections/ContactSection';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import GiftExperience from '@/components/sections/GiftExperience';
import HeroSection from '@/components/sections/HeroSection';
import TrustBadges from '@/components/sections/TrustBadges';

export default function HomePage() {
  return (
    <div className="bg-black">
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <TrustBadges />
      <GiftExperience />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
