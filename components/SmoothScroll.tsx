"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05, // lower = smoother & slower feeling. 낮은 = 부드럽고 느린 느낌.
        duration: 1.5,
        smoothWheel: true
      }}
    >
      {children}
    </ReactLenis>
  );
}
