import { getProductsByCategory } from '@/data/products';
import { Metadata } from 'next';
import CollectionClient from '../CollectionClient';

const categoryLabels: Record<string, string> = {
  kolye: 'Kolyeler',
  bilezik: 'Bilezikler',
  kupe: 'Kupeler',
  yuzuk: 'Yuzukler',
};

const categoryDescriptions: Record<string, string> = {
  kolye:
    'Zarif ve sik kolye modelleri. Her tarza uygun minimal ve modern tasarimlar.',
  bilezik:
    'Gunluk kullanimdan ozel gunlere kadar her aniniza eslik edecek bilezikler.',
  kupe: 'Minimal studlardan gosterisli drop kupelere kadar genis koleksiyon.',
  yuzuk: 'Ince ve zarif yuzuklerden tasli modellere kadar ozel tasarimlar.',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const label = categoryLabels[category] || category;
  const description =
    categoryDescriptions[category] || 'Butik taki koleksiyonu';

  return {
    title: `${label} | NOVELLA`,
    description: description,
  };
}

export async function generateStaticParams() {
  return [
    { category: 'kolye' },
    { category: 'bilezik' },
    { category: 'kupe' },
    { category: 'yuzuk' },
  ];
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const products = getProductsByCategory(category);
  const label = categoryLabels[category] || category;

  return <CollectionClient products={products} category={category} />;
}
