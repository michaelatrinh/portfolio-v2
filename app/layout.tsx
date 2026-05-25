import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Michael Alexander Trinh | Web Developer",
  description:
    "Portfolio of Michael Trinh, Web Developer and UX/UI Designer based in British Columbia, Canada. Specializing in highly interactive and accessible web experiences."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="eng">
      <body className="bg-[#0e0e0e] text-[#f4f4f4] antialiased">
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
