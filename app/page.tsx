//F4E7D4

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Preloader from "@/components/Preloader"; // <-- Import the Preloader

export default function Home() {
  // Create the state to track the Preloader
  const [isPreloaderFinished, setIsPreloaderFinished] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Only animate the Nav bar once the preloader is done
    if (!isPreloaderFinished) return;

    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power4.out" }
    );
  }, [isPreloaderFinished]);

  return (
    <main className="bg-[#F4E7D4] text-[#f4f4f4] min-h-screen font-sans selection:bg-[#f4f4f4] selection:text-[#0e0e0e]">
      {/* Render the Preloader. 
          When its timeline finishes, it updates the state to true */}
      {!isPreloaderFinished && <Preloader onComplete={() => setIsPreloaderFinished(true)} />}

      {/* NAVIGATION */}
      <header
        ref={navRef}
        className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference opacity-0"
      >
        <div className="text-xl font-bold tracking-tighter">
          <Link href="/">© MT.</Link>
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

      {/* Pass the green-light to the Hero */}
      <Hero isReady={isPreloaderFinished} />

      {/* SELECTED WORK SECTION/선택된 작업 섹션 */}
      <section id="work" className="py-32 px-6 md:px-20 bg-[#f4f4f4] text-[#0e0e0e] rounded-t-[3rem]">
        <div className="mb-20 overflow-hidden">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">Selected Work</h2>
        </div>

        <div className="flex flex-col gap-32">
          {/* CASE STUDY 1: Cinemagic */}
          <ProjectCard
            number="01"
            category="Entertainment Utility"
            title="Cinemagic"
            description="A high-performance web application designed to optimize the media discovery experience. Architected with modern state management to handle complex data querying while maintaining a flawless, intuitive user interface."
            liveLink="#"
            githubLink="https://github.com/michaelatrinh/cinemagic"
          />

          {/* CASE STUDY 2: Reshare */}
          <ProjectCard
            number="02"
            category="Workflow Solution"
            title="Reshare"
            description="Streamlining administrative friction through intuitive UI and robust back-end logic. Built to solve real-world organizational problems, demonstrating scalable architecture and accessible design principles."
            liveLink="#"
            githubLink="https://github.com/michaelatrinh/reshareApp"
            reverse
          />
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
