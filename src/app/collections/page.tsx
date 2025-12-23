import { getAllProducts } from '@/data/products';
import { Metadata } from 'next';
import CollectionClient from './CollectionClient';

export const metadata: Metadata = {
  title: 'Koleksiyonlar | NOVELLA',
  description:
    'Butik taki koleksiyonlarimizi kesfedin. Kolye, bilezik, kupe ve yuzuk modelleri.',
};

export default function CollectionsPage() {
  const products = getAllProducts();

  return <CollectionClient products={products} category="all" />;
}
