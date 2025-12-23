import { getProductBySlug, PRODUCTS } from '@/data/products';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Urun Bulunamadi | NOVELLA',
    };
  }

  return {
    title: `${product.name} | NOVELLA`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.variants[0].images[0],
          width: 1200,
          height: 1200,
          alt: product.name,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
