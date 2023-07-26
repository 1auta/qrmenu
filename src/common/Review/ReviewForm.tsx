"use client";
import { useState } from "react";

const ReviewForm: React.FC = () => {
  const [isReviewSubmitted, setReviewSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReviewSubmitted(true);

    setTimeout(() => {
      setReviewSubmitted(false); // Сховати повідомлення про успішну відправку
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 mt-4"
        >
          Залишити відгук
        </button>
      </form>
      {isReviewSubmitted && (
        <div className="mt-4">Ваш відгук успішно надісланий!</div>
      )}
    </div>
  );
};

export default ReviewForm;
