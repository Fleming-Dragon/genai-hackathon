"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import FAQ from "@/components/faq";

interface Sponsor {
  id: number;
  name: string;
  logo: string;
}

export function SponsorSlider() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "NerdTech",
      logo: "/spon_nerdtech.jpg",
    },
    {
      id: 2,
      name: "Sanskar English School",
      logo: "/spon_sansSchool.jpg",
    },
    {
      id: 3,
      name: "AI Solutions",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      id: 4,
      name: "DataVision",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      id: 5,
      name: "CloudNine",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      id: 6,
      name: "CodeCraft",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      id: 7,
      name: "QuantumTech",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      id: 8,
      name: "NexGen",
      logo: "/placeholder.svg?height=80&width=200",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  };

  const [visibleItems, setVisibleItems] = useState(itemsPerPage.md);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(itemsPerPage.sm);
      } else if (window.innerWidth < 768) {
        setVisibleItems(itemsPerPage.md);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(itemsPerPage.lg);
      } else {
        setVisibleItems(itemsPerPage.xl);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % (sponsors.length - visibleItems + 1)
        );
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isPaused, sponsors.length, visibleItems]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sponsors.length - visibleItems : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sponsors.length - visibleItems ? 0 : prevIndex + 1
    );
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div ref={ref} className="w-full py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={sliderRef}
          className="overflow-hidden px-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className={cn(
                  "flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4",
                  currentIndex > sponsor.id - 1 && "transition-opacity"
                )}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "h-48 w-64 flex items-center justify-center p-8 rounded-lg  backdrop-blur-sm border border-muted hover:border-primary/20 transition-all duration-300 relative overflow-hidden group"
                  )}
                >
                  <div className="relative z-10">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      width={250} // Adjust width
                      height={100} // Adjust height
                      className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Always visible text */}
                  <div className="absolute inset-0 flex items-end justify-center p-4 mt-1">
                    <span className="text-black font-medium">
                      {sponsor.name}
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-muted rounded-full p-2 shadow-md hover:bg-primary/10 transition-colors z-10"
          aria-label="Previous sponsors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-muted rounded-full p-2 shadow-md hover:bg-primary/10 transition-colors z-10"
          aria-label="Next sponsors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: sponsors.length - visibleItems + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentIndex === index
                    ? "bg-primary w-4"
                    : "bg-muted hover:bg-primary/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>
      </motion.div>
      <FAQ />
    </div>
  );
}
