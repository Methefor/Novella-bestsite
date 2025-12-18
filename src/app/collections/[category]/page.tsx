/**
 * NOVELLA - Category Collections Page
 * Kategori bazlı koleksiyon sayfası
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CategoryClient from './CategoryClient';
import type { ProductCategory } from '@/types/product';

const VALID_CATEGORIES: ProductCategory[] = ['kolye', 'bilezik', 'küpe', 'yüzük'];

const categoryMeta: Record<ProductCategory, { title: string; description: string }> = {
  kolye: {
    title: 'Kolye Koleksiyonu',
    description: 'Zarif ve şık kolye modelleri. Her stile uygun tasarımlar.',
  },
  bilezik: {
    title: 'Bilezik Koleksiyonu',
    description: 'Şık bilezik modelleri. Solo veya set olarak kullanıma uygun.',
  },
  küpe: {
    title: 'Küpe Koleksiyonu',
    description: 'Minimal ve gösterişli küpe modelleri. Her tarza uygun.',
  },
  yüzük: {
    title: 'Yüzük Koleksiyonu',
    description: 'Zarif yüzük tasarımları. Her günü özel kılan detaylar.',
  },
};

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = params.category as ProductCategory;

  if (!VALID_CATEGORIES.includes(category)) {
    return {
      title: 'Kategori Bulunamadı | NOVELLA',
    };
  }

  const meta = categoryMeta[category];

  return {
    title: `${meta.title} | NOVELLA`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | NOVELLA`,
      description: meta.description,
    },
  };
}

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({
    category,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category as ProductCategory;

  // Validate category
  if (!VALID_CATEGORIES.includes(category)) {
    notFound();
  }

  return <CategoryClient category={category} />;
}
