/**
 * NOVELLA - Collections Page
 * Ana ürün koleksiyonu sayfası
 */

import { Metadata } from 'next';
import CollectionsClient from './CollectionsClient';

export const metadata: Metadata = {
  title: 'Tüm Ürünler | NOVELLA',
  description: 'NOVELLA butik takı koleksiyonu. Kolye, bilezik, küpe ve yüzük kategorilerinde kaliteli çelik takılar.',
  openGraph: {
    title: 'Tüm Ürünler | NOVELLA',
    description: 'Her parça bir hikaye. Butik takı koleksiyonumuzu keşfedin.',
  },
};

export default function CollectionsPage() {
  return <CollectionsClient />;
}
