import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // To store the interval ID

  const slides = [
    {
      id: 1,
      alt: "Bento powder",
      imageUrl: "https://cdn.shopify.com/s/files/1/0127/2592/files/image3_69c557eb-f323-47bc-985c-0d444f9dad06_1024x1024.jpg?v=1592350335",
      title: "Beautiful Nature",
      description: "Explore the wonders of nature"
    },
    {
      id: 2,
      alt: "City Architecture",
      imageUrl: "https://www.jaredsdetours.com/wp-content/uploads/2022/09/visit-bentonite-hills-8.jpg",
      title: "Urban Life",
      description: "Discover city landscapes"
    },
    {
      id: 3,
      alt: "Ocean View",
      imageUrl: "https://pbs.twimg.com/media/F0oTLonWwAAV5gr.jpg",
      title: "Coastal Beauty",
      description: "Experience the ocean's majesty"
    }
  ];

  const handleNextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, slides.length]);

  const handlePrevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [handleNextSlide]);

  return (
    <div className="relative w-full max-w-7xl mx-auto bg-gray-900 rounded-2xl overflow-hidden">
      {/* Main carousel container */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[530px] overflow-hidden rounded-2xl">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transform transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-full scale-95'
            }`}
          >
            {/* Image container with gradient overlay */}
            <div className="relative w-full h-full">
              <img
                src={slide.imageUrl}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content overlay with animation */}
            <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 transform ${
              index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } transition-all duration-700 delay-200`}>
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {slide.title}
              </h3>
              <p className="text-white/90 text-lg md:text-xl">
                {slide.description}
              </p>
            </div>
          </div>
        ))}

        {/* Navigation buttons with improved visibility */}
        <button
          onClick={handlePrevSlide}
          disabled={isAnimating}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 md:p-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={handleNextSlide}
          disabled={isAnimating}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 md:p-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Enhanced pagination dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 h-2 bg-white'
                  : 'w-2 h-2 bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
