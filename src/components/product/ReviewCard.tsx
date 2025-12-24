/**
 * NOVELLA - Review Card
 * Tek bir yorumu gösteren kart
 */

'use client';

import type { Review } from '@/types/review';
import { BadgeCheck, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useState } from 'react';
import RatingStars from './RatingStars';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);
  const [notHelpfulCount, setNotHelpfulCount] = useState(review.notHelpful);
  const [userVote, setUserVote] = useState<'helpful' | 'not-helpful' | null>(
    null
  );

  const handleVote = (vote: 'helpful' | 'not-helpful') => {
    if (userVote === vote) {
      // Remove vote
      if (vote === 'helpful') {
        setHelpfulCount(helpfulCount - 1);
      } else {
        setNotHelpfulCount(notHelpfulCount - 1);
      }
      setUserVote(null);
    } else {
      // Change or add vote
      if (userVote === 'helpful') {
        setHelpfulCount(helpfulCount - 1);
        setNotHelpfulCount(notHelpfulCount + 1);
      } else if (userVote === 'not-helpful') {
        setHelpfulCount(helpfulCount + 1);
        setNotHelpfulCount(notHelpfulCount - 1);
      } else {
        if (vote === 'helpful') {
          setHelpfulCount(helpfulCount + 1);
        } else {
          setNotHelpfulCount(notHelpfulCount + 1);
        }
      }
      setUserVote(vote);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="p-6 bg-gray-800 border border-white/10 rounded-lg">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-medium text-white">{review.author.name}</h4>
            {review.author.isVerified && (
              <div className="flex items-center gap-1 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                <BadgeCheck className="w-3 h-3" />
                <span>Doğrulanmış Alıcı</span>
              </div>
            )}
          </div>
          <RatingStars rating={review.rating} size="sm" />
        </div>
        <time className="text-sm text-white/40">
          {formatDate(review.createdAt)}
        </time>
      </div>

      {/* Title */}
      {review.title && (
        <h5 className="font-medium text-white mb-2">{review.title}</h5>
      )}

      {/* Comment */}
      <p className="text-white/70 leading-relaxed mb-4">{review.comment}</p>

      {/* Images */}
      {review.images && review.images.length > 0 && (
        <div className="flex gap-2 mb-4">
          {review.images.map((image, index) => (
            <div
              key={index}
              className="w-20 h-20 bg-gray-700 rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={`Review ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        <span className="text-sm text-white/60">
          Bu yorum yardımcı oldu mu?
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleVote('helpful')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm transition-colors ${
              userVote === 'helpful'
                ? 'bg-green-500/20 text-green-400'
                : 'bg-white/5 text-white/60 hover:bg-white/10'
            }`}
          >
            <ThumbsUp className="w-4 h-4" />
            <span>{helpfulCount}</span>
          </button>
          <button
            onClick={() => handleVote('not-helpful')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm transition-colors ${
              userVote === 'not-helpful'
                ? 'bg-red-500/20 text-red-400'
                : 'bg-white/5 text-white/60 hover:bg-white/10'
            }`}
          >
            <ThumbsDown className="w-4 h-4" />
            <span>{notHelpfulCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
