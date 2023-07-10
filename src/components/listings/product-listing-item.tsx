"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface ProductListingItemProps {
  imageUrl: string;
  title: string;
  itemId: number;
}

const ProductListingItem: React.FC<ProductListingItemProps> = ({
  imageUrl,
  title,
  itemId,
}) => {
  const [isLoved, setIsLoved] = useState(false);
  const router = useRouter()
  const handleLoveClick = () => {
    setIsLoved(!isLoved);
  };

  const goToDetails = () => {
    
      router.push(`/products/${itemId}`);
    
  };

  return (
    <div
      className="flex w-full max-w-3xl items-center p-3 bg-white rounded-3xl shadow cursor-pointer"
      onClick={goToDetails}
    >
      <img className="w-8 h-8 rounded mr-4" src={imageUrl} alt={title} />
      <div className="flex justify-between w-full">
        <div className="text-lg font-semibold">{title}</div>
        <div onClick={handleLoveClick}>
          {isLoved ? (
            <svg
              className="w-7 h-7"
              viewBox="0 0 77 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 23.3572C0 39.8312 13.8414 56.0343 35.6696 69.9559C36.5225 70.4586 37.6858 71 38.5 71C39.3142 71 40.4773 70.4586 41.2915 69.9559C63.1585 56.0343 77 39.8312 77 23.3572C77 9.66781 67.5784 0 55.0164 0C47.8051 0 41.9895 3.40306 38.5 8.62355C35.0105 3.44166 29.156 0 21.9834 0C9.42157 0 0 9.66781 0 23.3572ZM6.24228 23.3572C6.24228 13.0709 12.9109 6.22598 21.9058 6.22598C29.1949 6.22598 33.3434 10.7505 35.8635 14.6177C36.9103 16.1645 37.5695 16.5899 38.5 16.5899C39.4305 16.5899 40.0121 16.1258 41.1364 14.6177C43.7729 10.8279 47.8438 6.22598 55.094 6.22598C64.089 6.22598 70.7577 13.0709 70.7577 23.3572C70.7577 37.743 55.5205 53.25 39.2753 64.0005C38.8876 64.2713 38.655 64.4647 38.5 64.4647C38.3448 64.4647 38.0735 64.2713 37.6858 64.0005C21.4793 53.25 6.24228 37.743 6.24228 23.3572Z"
                fill="#D84213"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              viewBox="0 0 109 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 42.3572C16 58.8312 29.8414 75.0343 51.6696 88.9559C52.5225 89.4587 53.6858 90 54.5 90C55.3142 90 56.4773 89.4587 57.2915 88.9559C79.1585 75.0343 93 58.8312 93 42.3572C93 28.6678 83.5784 19 71.0164 19C63.8051 19 57.9895 22.4031 54.5 27.6235C51.0105 22.4417 45.156 19 37.9834 19C25.4216 19 16 28.6678 16 42.3572ZM22.2423 42.3572C22.2423 32.0709 28.9109 25.226 37.9058 25.226C45.1949 25.226 49.3434 29.7505 51.8635 33.6177C52.9103 35.1645 53.5695 35.5899 54.5 35.5899C55.4305 35.5899 56.0121 35.1258 57.1364 33.6177C59.7729 29.8279 63.8438 25.226 71.094 25.226C80.089 25.226 86.7577 32.0709 86.7577 42.3572C86.7577 56.743 71.5205 72.25 55.2753 83.0005C54.8876 83.2713 54.655 83.4647 54.5 83.4647C54.3448 83.4647 54.0735 83.2713 53.6858 83.0005C37.4793 72.25 22.2423 56.743 22.2423 42.3572Z"
                fill="#6A6A6A"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListingItem;
