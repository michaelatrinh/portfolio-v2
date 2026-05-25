"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const words = ["Hello", "Bonjour", "你好", "नमस्ते।", "やあ", "Hola", "Olá", "안녕하세요"];

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // 1. Cycle through the greeting words
  useEffect(() => {
    if (index === words.length - 1) return;

    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    ); // The first word stays on screen longer

    return () => clearTimeout(timeout);
  }, [index]);

  // 2. GSAP Sweep-Up Animation
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
      delay: 2.2, // Waits for the word cycle to finish
      onStart: () => {
        // Trigger the 'onComplete' slightly after the sweep starts so the Hero text is rising exactly as the preloader lifts
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F4E7D4] text-[#0e0e0e]"
    >
      <div ref={textRef} className="flex items-center text-4xl md:text-5xl font-medium tracking-wide">
        <span className="w-2.5 h-2.5 bg-black rounded-full mr-6"></span>
        <h2>{words[index]}</h2>
      </div>
    </div>
  );
}
