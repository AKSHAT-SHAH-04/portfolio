"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { profile } from "@/data/profile";

const links = [
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl">
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400"
      />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-mono text-sm font-semibold">
          <span className="text-gradient">akshat</span>
          <span className="text-muted">.eth</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-6">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="hidden text-sm text-muted transition hover:text-foreground sm:block"
            >
              {label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition hover:bg-fuchsia-200"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
