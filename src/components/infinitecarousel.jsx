import React, { useRef, useEffect } from "react";

const InfiniteCarousel = ({ items }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      if (scrollLeft > scrollWidth - clientWidth - 10) {
        // 10 is a threshold value
        carouselRef.current.scrollLeft = 0;
      }
    };

    const carousel = carouselRef.current;
    carousel.addEventListener("scroll", handleScroll);

    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ overflowX: "auto", whiteSpace: "nowrap" }} ref={carouselRef}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{ display: "inline-block", marginRight: "50px" }}
        >
          {/* Your item here, e.g., an image */}
          <img
            src={item.src}
            alt={item.alt}
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      ))}
      {/* Duplicate items for infinite effect */}
      {items.map((item, index) => (
        <div
          key={`duplicate-${index}`}
          style={{ display: "inline-block", marginRight: "50px" }}
        >
          <img
            src={item.src}
            alt={item.alt}
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default InfiniteCarousel;
