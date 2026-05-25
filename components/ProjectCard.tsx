import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  number: string;
  category: string;
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  imageSrc?: string;
  reverse?: boolean; // allows alternating layouts. 교대 배치를 허용합니다.
}

export default function ProjectCardLeft({
  number,
  category,
  title,
  description,
  liveLink,
  githubLink,
  reverse = false
}: ProjectCardProps) {
  return (
    <article
      className={`group flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} gap-10 lg:gap-20 items-center`}
    >
      {/* Image Wrapper */}
      <div className="w-full lg:w-3/5 aspect-video bg-gray-200 overflow-hidden rounded-xl relative">
        <div className="absolute inset-0 bg-neutral-300 transition-transform duration-700 group-hover:scale-105" />
      </div>

      {/* Content Wrapper */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <span className="text-sm font-bold tracking-widest text-gray-500 mb-4 uppercase">
          {number} / {category}
        </span>
        <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{title}</h3>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">{description}</p>

        <div className="flex gap-4">
          <a
            href={liveLink}
            className="px-6 py-3 bg-[#0e0e0e] text-[#f4f4f4] rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-[#0e0e0e] text-[#0e0e0e] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
