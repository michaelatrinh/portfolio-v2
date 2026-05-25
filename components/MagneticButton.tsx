"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: ReactNode;
  href: string;
}

export default function MagneticButton({ children, href }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    if (!button || !text) return;

    // calculate distance and apply gravitational pull to cursor. 거리를 계산하고 커서에 중력을 가합니다.
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) * 0.3; // 0.3 is the pull strength. 0.3은 당김 강도입니다.
      const y = (e.clientY - top - height / 2) * 0.3;

      gsap.to(button, { x, y, duration: 1, ease: "power3.out" }); // makes the text moves slightly more than the button, creating parallax. 텍스트가 버튼보다 약간 더 움직여 시차를 발생시킵니다.
      gsap.to(text, { x: x * 0.4, y: y * 0.4, duration: 1, ease: "power3.out" });
    };

    // snap back into place on leave. 휴가 중에 다시 제자리로 돌아갑니다.
    const handleMouseLeave = () => {
      gsap.to(button, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
      gsap.to(text, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      href={href}
      className="group relative flex items-center justify-center w-32 h-32 rounded-full border border-[#666] hover:bg-[#f4f4f4] hover:text-[#0e0e0e] transition-colors duration-300"
    >
      <span ref={textRef} className="text-sm uppercase tracking-widest font-medium pointer-events-none">
        {children}
      </span>
    </a>
  );
}
