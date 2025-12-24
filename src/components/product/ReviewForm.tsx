/**
 * NOVELLA - Review Form
 * Yorum yazma formu
 */

'use client';

import { Send } from 'lucide-react';
import { useState } from 'react';
import RatingStars from './RatingStars';

interface ReviewFormProps {
  productId: string;
  onSubmit: (review: {
    rating: number;
    title: string;
    comment: string;
    name: string;
    email: string;
  }) => void;
}

export default function ReviewForm({ productId, onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      alert('Lütfen bir puan verin');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    onSubmit({ rating, title, comment, name, email });

    // Reset form
    setRating(0);
    setTitle('');
    setComment('');
    setName('');
    setEmail('');
    setIsSubmitting(false);

    alert(
      'Yorumunuz başarıyla gönderildi! Onaylandıktan sonra yayınlanacaktır.'
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-gray-800 border border-white/10 rounded-lg"
    >
      <h3 className="font-serif text-xl text-white mb-6">Yorum Yaz</h3>

      {/* Rating */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-white mb-2">
          Puanınız <span className="text-red-500">*</span>
        </label>
        <RatingStars rating={rating} size="lg" interactive onRate={setRating} />
      </div>

      {/* Title */}
      <div className="mb-6">
        <label
          htmlFor="review-title"
          className="block text-sm font-medium text-white mb-2"
        >
          Başlık
        </label>
        <input
          id="review-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Örn: Harika bir ürün!"
          className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all"
        />
      </div>

      {/* Comment */}
      <div className="mb-6">
        <label
          htmlFor="review-comment"
          className="block text-sm font-medium text-white mb-2"
        >
          Yorumunuz <span className="text-red-500">*</span>
        </label>
        <textarea
          id="review-comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          rows={4}
          placeholder="Ürün hakkındaki düşüncelerinizi paylaşın..."
          className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all resize-none"
        />
      </div>

      {/* Name & Email */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label
            htmlFor="review-name"
            className="block text-sm font-medium text-white mb-2"
          >
            Adınız <span className="text-red-500">*</span>
          </label>
          <input
            id="review-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Ad Soyad"
            className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="review-email"
            className="block text-sm font-medium text-white mb-2"
          >
            E-posta <span className="text-red-500">*</span>
          </label>
          <input
            id="review-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="ornek@email.com"
            className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold text-black rounded-lg font-medium hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Yorumu Gönder</span>
          </>
        )}
      </button>
    </form>
  );
}
