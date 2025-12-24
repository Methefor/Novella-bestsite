/**
 * NOVELLA - Rating Stars
 * 5 yıldız rating gösterimi
 */

'use client';

import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
  interactive?: boolean;
  onRate?: (rating: number) => void;
}

export default function RatingStars({
  rating,
  maxRating = 5,
  size = 'md',
  showNumber = false,
  interactive = false,
  onRate,
}: RatingStarsProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const handleClick = (value: number) => {
    if (interactive && onRate) {
      onRate(value);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxRating }, (_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= Math.round(rating);
          const isPartial = starValue === Math.ceil(rating) && rating % 1 !== 0;

          return (
            <button
              key={index}
              onClick={() => handleClick(starValue)}
              disabled={!interactive}
              className={`relative ${
                interactive
                  ? 'cursor-pointer hover:scale-110'
                  : 'cursor-default'
              } transition-transform`}
              aria-label={`Rate ${starValue} stars`}
            >
              {isPartial ? (
                <div className="relative">
                  <Star className={`${sizeClasses[size]} text-white/20`} />
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${(rating % 1) * 100}%` }}
                  >
                    <Star
                      className={`${sizeClasses[size]} text-gold fill-gold`}
                    />
                  </div>
                </div>
              ) : (
                <Star
                  className={`${sizeClasses[size]} ${
                    isFilled ? 'text-gold fill-gold' : 'text-white/20'
                  } transition-colors`}
                />
              )}
            </button>
          );
        })}
      </div>

      {showNumber && (
        <span className="text-sm text-white/80 font-medium">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
