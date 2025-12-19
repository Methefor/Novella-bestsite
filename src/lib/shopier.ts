/**
 * NOVELLA - Shopier API Client
 * Shopier entegrasyonu için API client
 */

import type { CartItem } from '@/store/cartStore';

interface ShopierProduct {
  product_name: string;
  product_code: string;
  quantity: number;
  price: number;
}

interface ShopierOrderData {
  order_id: string;
  email: string;
  phone: string;
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  district: string;
  zip_code?: string;
  products: ShopierProduct[];
  total_amount: number;
  shipping_amount: number;
  discount_amount: number;
  order_note?: string;
}

export class ShopierClient {
  private apiKey: string;
  private apiSecret: string;
  private baseUrl = 'https://www.shopier.com/api/v1';

  constructor() {
    // Environment variables (production'da .env'den gelecek)
    this.apiKey = process.env.NEXT_PUBLIC_SHOPIER_API_KEY || '';
    this.apiSecret = process.env.NEXT_PUBLIC_SHOPIER_API_SECRET || '';
  }

  /**
   * Create Shopier order
   */
  async createOrder(orderData: ShopierOrderData): Promise<{ success: boolean; orderId?: string; error?: string }> {
    try {
      // DUMMY - Production'da gerçek API çağrısı yapılacak
      console.log('Shopier Order Created:', orderData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock response
      return {
        success: true,
        orderId: `NOVELLA-${Date.now()}`,
      };

      // REAL IMPLEMENTATION (production):
      /*
      const response = await fetch(`${this.baseUrl}/orders/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': this.apiKey,
          'X-API-Secret': this.apiSecret,
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Order creation failed');
      }

      return {
        success: true,
        orderId: data.order_id,
      };
      */
    } catch (error) {
      console.error('Shopier order error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Convert cart items to Shopier products
   */
  cartItemsToShopierProducts(items: CartItem[]): ShopierProduct[] {
    return items.map((item) => ({
      product_name: item.product.name,
      product_code: item.product.slug,
      quantity: item.quantity,
      price: item.product.price,
    }));
  }

  /**
   * Get payment URL (for redirect)
   */
  async getPaymentUrl(orderId: string): Promise<string> {
    // DUMMY - Production'da Shopier'dan gelen URL
    return `https://www.shopier.com/ShowProduct/checkout.php?order_id=${orderId}`;

    // REAL IMPLEMENTATION:
    /*
    const response = await fetch(`${this.baseUrl}/payments/url`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey,
      },
      body: JSON.stringify({ order_id: orderId }),
    });

    const data = await response.json();
    return data.payment_url;
    */
  }
}

// Singleton instance
export const shopierClient = new ShopierClient();
