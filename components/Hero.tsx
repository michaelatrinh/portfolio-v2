"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MagneticButton from "./MagneticButton";

// register ScrollTrigger to enable scroll-linked animations
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero({ isReady }: { isReady: boolean }) {
  const containerRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const roleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If the preloader hasn't finished, stop here and do not animate
    if (!isReady) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Name reveals
    tl.fromTo(textRefs.current, { y: "120%" }, { y: "0%", duration: 1.2, stagger: 0.1 })
      // Role text slides in from the left
      .fromTo(
        roleRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "-=0.8" // Start while name is still rising
      )
      // Image fades in
      .fromTo(imageWrapperRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.5 }, "-=1");

    // The Parallax Effect
    // As user scroll down, the image slowly pushes downward inside its wrapper. 사용자가 아래로 스크롤하면 이미지가 래퍼 안쪽에서 천천히 아래로 밀려납니다.
    gsap.to(imageRef.current, {
      y: "20%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true // Links the animation directly to the scrollbar
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isReady]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col justify-center px-6 md:px-20 pt-20 overflow-hidden"
    >
      <div
        ref={imageWrapperRef}
        className="absolute right-10 top-32 md:right-32 md:top-40 w-[50vw] md:w-[25vw] aspect-[3/4] overflow-hidden rounded-xl z-0"
        // style={{
        //   WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)",
        //   maskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)"
        // }}
      >
        <Image
          ref={imageRef}
          src="/michael-hero.png"
          alt="Michael Trinh"
          fill
          priority
          className="object-cover scale-110" // Scaled slightly up to allow room for the parallax movement
        />
      </div>

      {/* MASSIVE TYPOGRAPHY
        Z-10 ensures the text overlaps the photo cleanly 
      */}
      <div className="relative z-10 pointer-events-none mix-blend-difference">
        <div className="overflow-hidden">
          <h1
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className="text-[14vw] leading-[0.8] font-black tracking-tighter uppercase translate-y-[120%]"
          >
            Michael
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className="text-[14vw] leading-[0.8] font-black tracking-tighter uppercase ml-[12vw] translate-y-[120%]"
          >
            Trinh
          </h1>
        </div>
      </div>

      <div className="relative z-10 mt-4 overflow-hidden">
        <div ref={roleRef} className="flex items-center space-x-4 opacity-0">
          {/* A small decorative line, very common in high-end UI */}
          <div className="h-[1px] w-12 bg-black/50"></div>
          <p className="text-xl md:text-2xl font-light tracking-widest uppercase italic text-black/80">
            Web Developer & UX Designer
          </p>
        </div>
      </div>

      {/* DESCRIPTION & CALL TO ACTION */}
      <div className="relative z-10 mt-8 max-w-xl text-lg md:text-xl font-extralight leading-relaxed text-black">
        <p>Based in BC, Canada. Bridging the gap between pixel-perfect design and high-performance engineering.</p>
      </div>

      <div className="absolute bottom-10 right-10 md:right-20 z-20">
        <MagneticButton href="#work">Scroll</MagneticButton>
      </div>
    </section>
  );
}
