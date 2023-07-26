"use client"

import { useState } from "react";

const StarRating: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <div className="flex items-center justify-center space-x-1">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`cursor-pointer text-gray-400 text-5xl ${
            index < (rating ?? 0) ? "text-yellow-400" : ""
          }`}
          onClick={() => handleStarClick(index + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
