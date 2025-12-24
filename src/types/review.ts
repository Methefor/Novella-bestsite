/**
 * NOVELLA - Review Type Definitions
 * Yorum ve değerlendirme tipleri
 */

export interface Review {
  id: string;
  productId: string;
  author: {
    name: string;
    email: string;
    isVerified: boolean; // Doğrulanmış alıcı mı?
  };
  rating: number; // 1-5
  title: string;
  comment: string;
  images?: string[]; // Kullanıcı fotoğrafları
  helpful: number; // Kaç kişi yararlı buldu
  notHelpful: number; // Kaç kişi yararlı bulmadı
  createdAt: Date;
  updatedAt: Date;
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}
