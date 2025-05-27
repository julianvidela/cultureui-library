"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


interface SlideItem {
  image?: string;
  title?: string;
  description?: string;
}

interface SlideData {
  data: SlideItem[];
  titleColor?: string;
  titleWeight?: string;
  descColor?: string;
  descWeight?: string;
  titleSize?: string;
  descSize?: string;
  chevronColor?: string;
  buttonBgColor?: string;
  width?: string;
  height?: string;
}

export const Carousel: React.FC<SlideData> = ({
  data,
  titleColor = "#fff",
  titleWeight = "semibold",
  descColor = "#808080",
  descWeight = "semibold",
  titleSize = "24px",
  buttonBgColor = "#fff",
  chevronColor = "#000",
  descSize = "14px",
  width = "700px",
  height = "400px",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">There are no items in the carousel.</p>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const currentSlide = data[currentIndex];

  return (
    <div className="flex justify-center items-center gap-5 h-auto">
      <div className="flex flex-col items-center gap-4">
        <div
          className="relative overflow-hidden flex justify-center items-center p-2 rounded-xl group"
          style={{ width, height }}
        >
          <motion.div
            className="relative w-full h-full flex justify-center items-center overflow-hidden rounded-xl"
            key={currentIndex}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            {currentSlide.image && (
              <img
                src={currentSlide.image}
                alt={`Slide ${currentIndex}`}
                className="w-full h-full object-cover rounded-lg filter blur-sm transition-all duration-300 group-hover:blur-0"
              />
            )}

   
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-0 z-0" />

            
            <div
              className="absolute bottom-[10%] left-[6%] z-10 flex flex-col transition-opacity duration-300 group-hover:opacity-0"
              style={{
                color: titleColor,
              }}
            >
              <h3
                className="text-[1.5rem]"
                style={{
                  fontWeight: titleWeight,
                  fontSize: titleSize,
                }}
              >
                {currentSlide.title}
              </h3>
              <p
                className="text-[1rem]"
                style={{
                  fontWeight: descWeight,
                  fontSize: descSize,
                  color: descColor,
                }}
              >
                {currentSlide.description}
              </p>
            </div>
          </motion.div>
        </div>

        
        <div className="flex justify-center gap-10 w-auto items-center">
          <button
            className="p-2 rounded-full border-none cursor-pointer z-10"
            style={{ backgroundColor: buttonBgColor }}
            onClick={prevSlide}
          >
            <ChevronLeft size={24} color={chevronColor} />
          </button>
          <button
            className="p-2 rounded-full border-none cursor-pointer z-10"
            style={{ backgroundColor: buttonBgColor }}
            onClick={nextSlide}
          >
            <ChevronRight size={24} color={chevronColor} />
          </button>
        </div>
      </div>
    </div>
  );
};




