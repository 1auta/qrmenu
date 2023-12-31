"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

const images = [
  "https://lasunka.com/s154-1.jpg",
  "https://images.prom.ua/2190641778_2190641778.jpg?PIMAGE_ID=2190641778",
  "https://bhub.com.ua/wp-content/wpmowebp/wp-content/uploads/2021/05/z_00.webp",
  "https://posteat.ua/wp-content/uploads/2019/06/photo-1484344597163-9347ad5cb26d-1024x713.jpg",
  "https://life.liga.net/images/general/2022/12/29/20221229093409-2416.jpg",
  "https://www.5.ua/media/pictures/original/186087.jpg?t=1591690375",
];

export const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLastSlideVisible, setIsLastSlideVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        const isLastVisible =
          container.scrollLeft + container.offsetWidth >= container.scrollWidth;
        setIsLastSlideVisible(isLastVisible);
      };
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    setTotalSlides(images.length);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  const handleSwipe = (direction: string) => {
    if (direction === "left" && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === "right" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const imageStyle = {
    transition: "transform 0.2s ease-in-out",
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <div {...handlers} className="overflow-hidden">
      <div
        className="flex transition-width relative z-10 "
        style={{ scrollBehavior: "smooth" }}
        ref={containerRef}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 md:w-[700px]"
            style={imageStyle}
          />
        ))}
      </div>
    </div>
  );
};
