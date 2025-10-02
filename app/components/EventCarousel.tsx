"use client";

import { useState } from "react";
import Image from "next/image";
import { events } from "../data/events";

export default function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const currentEvent = events[currentIndex];

  return (
    <div className="relative">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
        <a
          href={currentEvent.photo_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative h-[500px] lg:h-[600px]"
        >
          <Image
            src={currentEvent.image}
            alt={currentEvent.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              {currentEvent.title}
            </h3>
            <p className="text-base lg:text-lg mb-6 max-w-3xl opacity-90">
              {currentEvent.description}
            </p>
            <span className="inline-block bg-nexus-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition">
              Click To See Details
            </span>
          </div>
        </a>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition z-10"
          aria-label="Previous event"
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
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition z-10"
          aria-label="Next event"
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
      </div>

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

