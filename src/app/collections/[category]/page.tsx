/**
 * NOVELLA - Category Collections Page
 * Kategori bazlı koleksiyon sayfası
 */

import type { ProductCategory } from '@/types/product';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CategoryClient from './CategoryClient';

const VALID_CATEGORIES: ProductCategory[] = [
  'kolye',
  'bilezik',
  'kupe',
  'yuzuk',
];

const categoryMeta: Record<
  ProductCategory,
  { title: string; description: string }
> = {
  kolye: {
    title: 'Kolye Koleksiyonu',
    description: 'Zarif ve şık kolye modelleri. Her stile uygun tasarımlar.',
  },
  bilezik: {
    title: 'Bilezik Koleksiyonu',
    description: 'Şık bilezik modelleri. Solo veya set olarak kullanıma uygun.',
  },
  kupe: {
    title: 'Küpe Koleksiyonu',
    description: 'Minimal ve gösterişli küpe modelleri. Her tarza uygun.',
  },
  yuzuk: {
    title: 'Yüzük Koleksiyonu',
    description: 'Zarif yüzük tasarımları. Her günü özel kılan detaylar.',
  },
};

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;

  if (!VALID_CATEGORIES.includes(category as ProductCategory)) {
    return {
      title: 'Kategori Bulunamadı | NOVELLA',
    };
  }

  const meta = categoryMeta[category as ProductCategory];

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

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  if (!VALID_CATEGORIES.includes(category as ProductCategory)) {
    notFound();
  }

  return <CategoryClient category={category as ProductCategory} />;
}
