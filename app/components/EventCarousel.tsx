"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { events } from "../data/events";

export default function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      console.log('Next clicked, current:', currentIndex);
      setIsTransitioning(true);
      setCurrentIndex((prev) => {
        const newIndex = (prev + 1) % events.length;
        console.log('Moving to:', newIndex);
        return newIndex;
      });
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      console.log('Prev clicked, current:', currentIndex);
      setIsTransitioning(true);
      setCurrentIndex((prev) => {
        const newIndex = (prev - 1 + events.length) % events.length;
        console.log('Moving to:', newIndex);
        return newIndex;
      });
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
      if (e.key === "ArrowLeft") {
        if (!isTransitioning) {
          setIsTransitioning(true);
          setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
          setTimeout(() => setIsTransitioning(false), 300);
        }
      }
      if (e.key === "ArrowRight") {
        if (!isTransitioning) {
          setIsTransitioning(true);
          setCurrentIndex((prev) => (prev + 1) % events.length);
          setTimeout(() => setIsTransitioning(false), 300);
        }
      }
    };
    
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isTransitioning]);

  return (
    <div className="relative">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="relative h-[500px] lg:h-[600px]">
          {/* Текущее изображение */}
          <div
            key={currentIndex}
            className={`transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              key={currentEvent.id}
              src={currentEvent.image}
              alt={currentEvent.title}
              fill
              className="object-cover"
              quality={75}
              sizes="(max-width: 640px) 640px, (max-width: 1024px) 960px, 1280px"
              priority
              loading="eager"
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
            {currentEvent.instagram_url && (
              <a
                href={currentEvent.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full transition-all hover:scale-105 text-sm font-medium"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Посмотреть в Instagram
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              prevSlide();
            }}
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
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              nextSlide();
            }}
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

