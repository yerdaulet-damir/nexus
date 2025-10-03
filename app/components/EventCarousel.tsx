"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { events } from "../data/events";

export default function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % events.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const currentEvent = events[currentIndex];
  
  // Предзагрузка соседних изображений для мгновенного переключения
  const nextIndex = (currentIndex + 1) % events.length;
  const prevIndex = (currentIndex - 1 + events.length) % events.length;

  // Клавиатурная навигация (стрелки влево/вправо)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentIndex, isTransitioning]);

  return (
    <div className="relative">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="relative h-[500px] lg:h-[600px]">
          {/* Текущее изображение */}
          <div
            className={`transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={currentEvent.image}
              alt={currentEvent.title}
              fill
              className="object-cover"
              quality={85}
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
          
          {/* Предзагрузка следующих изображений (невидимые) */}
          <div className="hidden">
            <Image
              src={events[nextIndex].image}
              alt="preload"
              width={1200}
              height={800}
              quality={85}
            />
            <Image
              src={events[prevIndex].image}
              alt="preload"
              width={1200}
              height={800}
              quality={85}
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              {currentEvent.title}
            </h3>
            <p className="text-base lg:text-lg mb-6 max-w-3xl opacity-90">
              {currentEvent.description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-[250px] lg:top-[300px] -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-20 disabled:opacity-50"
        aria-label="Previous event"
        disabled={isTransitioning}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-[250px] lg:top-[300px] -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-20 disabled:opacity-50"
        aria-label="Next event"
        disabled={isTransitioning}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-nexus-blue"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

