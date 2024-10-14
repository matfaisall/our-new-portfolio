import React, { useEffect, useState } from "react";

const ScrollDownIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="scroll-down-indicator flex justify-center items-center absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <span className="block w-6 h-6 border-b-2 border-r-2 border-gray-800 transform rotate-45 bounce-slow">
            <p className="text-white">HELLO FAISAL</p>
          </span>
        </div>
      )}
    </>
  );
};

export default ScrollDownIndicator;
