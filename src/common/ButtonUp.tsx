import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";


interface ButtonPropsType {
  additionalClasses?: string;
  onClick?: () => void;
  className?: string;
}

export function ButtonUp() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
      scroll.scrollToTop({
        smooth: true,
        duration: 500,
      });
  
      const handleScroll = () => {
        setShowScrollButton(window.scrollY > 300);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const handleScrollToTop = () => {
      scroll.scrollToTop({
        smooth: true,
        duration: 500,
      });
    };
  return (
    <>
    {showScrollButton && (
        <div className="flex justify-between">
          <svg
            onClick={handleScrollToTop}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 -rotate-90 fixed bottom-6 right-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      )}</>
  );
}
