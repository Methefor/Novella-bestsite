/**
 * NOVELLA - Checkout Page
 * Ödeme ve teslimat bilgileri sayfası
 */

import { Metadata } from 'next';
import CheckoutClient from './CheckoutClient';

export const metadata: Metadata = {
  title: 'Ödeme | NOVELLA',
  description: 'Alışverişinizi güvenle tamamlayın.',
  robots: 'noindex, nofollow', // Checkout sayfası index'lenmesin
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
