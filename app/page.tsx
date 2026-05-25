"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  const nameLine1Ref = useRef<HTMLHeadingElement>(null);
  const nameLine2Ref = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Master Entry Timeline. 마스터 진입 타임라인.
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // 1. Reveal Navigation (fades in and drops down slightly). 내비게이션을 밝힙니다(안으로 희미해지고 약간 아래로 떨어집니다).
    tl.fromTo(navRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.2 })

      // 2. Hero Text Reveal (rises from below the overflow mask). 영웅 텍스트 공개(넘침 마스크 아래에서 상승).
      .fromTo(
        [nameLine1Ref.current, nameLine2Ref.current],
        { y: "120%" },
        { y: "0%", duration: 1.2, stagger: 0.15 },
        "-=0.6" // start this slightly before the navigation finishes. 내비게이션이 끝나기 전에 이것을 약간 시작하세요.
      )

      // 3. Fade in the Description. 설명에서 사라집니다.
      .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, "-=0.8");
  }, []);

  return (
    <main className="bg-[#0e0e0e] text-[#f4f4f4] min-h-screen font-sans selection:bg-[#f4f4f4] selection:text-[#0e0e0e]">
      {/* NAVIGATION/내비게이션 */}
      <header
        ref={navRef}
        className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference opacity-0"
      >
        <div className="text-xl font-bold tracking-tighter">
          <Link href="/">MAT</Link>
        </div>
        <nav className="flex gap-8 text-sm font-medium tracking-wide">
          <Link href="#work" className="hover:opacity-70 transition-opacity">
            Work
          </Link>
          <Link href="#about" className="hover:opacity-70 transition-opacity">
            About
          </Link>
          <Link href="#contact" className="hover:opacity-70 transition-opacity">
            Contact
          </Link>
        </nav>
      </header>

      {/* HERO SECTION/영웅 섹션 */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-20 pt-20">
        <div className="overflow-hidden">
          <h1
            ref={nameLine1Ref}
            className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase translate-y-[120%]"
          >
            Michael Alexander
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            ref={nameLine2Ref}
            className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase ml-[10vw] translate-y-[120%]"
          >
            Trinh
          </h1>
        </div>

        <div
          ref={descRef}
          className="mt-12 md:mt-24 max-w-2xl ml-auto text-lg md:text-2xl font-light leading-relaxed opacity-0"
        >
          <p>
            Web Developer & UX/UI Designer based in British Columbia, Canada. Bridging the gap between pixel-perfect
            design and high-performance engineering to build interactive web experiences.
          </p>
        </div>

        <div className="absolute bottom-10 right-10 md:right-20">
          <MagneticButton href="#work">Scroll</MagneticButton>
        </div>
      </section>

      {/* SELECTED WORK SECTION/선택된 작업 섹션 */}
      <section id="work" className="py-32 px-6 md:px-20 bg-[#f4f4f4] text-[#0e0e0e] rounded-t-[3rem]">
        <div className="mb-20 overflow-hidden">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">Selected Work</h2>
        </div>

        <div className="flex flex-col gap-32">
          {/* CASE STUDY 1: Cinemagic */}
          <article className="group flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
            <div className="w-full lg:w-3/5 aspect-video bg-gray-200 overflow-hidden rounded-xl relative">
              {/* Replace with my cinematic app render */}
              <div className="absolute inset-0 bg-neutral-300 transition-transform duration-700 group-hover:scale-105" />
            </div>

            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <span className="text-sm font-bold tracking-widest text-gray-500 mb-4 uppercase">
                01 / Entertainment Utility
              </span>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Cinemagic</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A high-performance web application designed to optimize the media discovery experience. Architected with
                modern state management to handle complex data querying while maintaining a flawless, intuitive user
                interface.
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="px-6 py-3 bg-[#0e0e0e] text-[#f4f4f4] rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/michaelatrinh"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border border-[#0e0e0e] text-[#0e0e0e] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>

          {/* CASE STUDY 2: Clean Table */}
          <article className="group flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center">
            <div className="w-full lg:w-3/5 aspect-video bg-gray-200 overflow-hidden rounded-xl relative">
              <div className="absolute inset-0 bg-neutral-300 transition-transform duration-700 group-hover:scale-105" />
            </div>

            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <span className="text-sm font-bold tracking-widest text-gray-500 mb-4 uppercase">
                02 / Workflow Solution
              </span>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Clean Table</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Streamlining administrative friction through intuitive UI and robust back-end logic. Built to solve
                real-world organizational problems, demonstrating scalable architecture and accessible design
                principles.
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="px-6 py-3 bg-[#0e0e0e] text-[#f4f4f4] rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/michaelatrinh"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border border-[#0e0e0e] text-[#0e0e0e] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="py-32 px-6 md:px-20 bg-[#0e0e0e] text-[#f4f4f4] flex flex-col items-center justify-center text-center"
      >
        <div className="overflow-hidden mb-8">
          <h2 className="text-[10vw] leading-none font-black tracking-tighter uppercase">Let&apos;s Talk</h2>
        </div>

        <p className="text-xl md:text-2xl font-light mb-12 max-w-xl text-gray-400">
          Currently open for Web Development, Front-End Engineering, and UX/UI roles. Let&apos;s build something
          technically brilliant and visually stunning!
        </p>

        <a
          href="mailto:trinh.michael98@gmail.com"
          className="text-2xl md:text-4xl font-bold border-b-2 border-[#f4f4f4] pb-2 hover:text-gray-400 hover:border-gray-400 transition-colors"
        >
          trinh.michael98@gmail.com
        </a>

        <div className="mt-32 w-full flex justify-between text-sm text-gray-500 uppercase tracking-widest font-bold">
          <span>© {new Date().getFullYear()} Michael Trinh</span>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/michaelatrinh" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a
              href="https://github.com/michaelatrinh"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
