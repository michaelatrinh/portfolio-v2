"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // using GSAP ticker to smoothly update cursor position. GSAP 티커를 사용하여 커서 위치를 원활하게 업데이트하기.
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15, // creating slight "drag" delay of mouse movement. 마우스 움직임에 약간의 "drag" 지연을 일으킵니다.
        ease: "power3.out"
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{ transform: "translate(-50%, -50%" }} // centers the dot on the actual mouse coordinate
    />
  );
}
