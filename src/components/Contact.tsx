"use client";

import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { Github, Linkedin, Reveal } from "./ui";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="contact" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-border p-8 text-center sm:p-16">
        <motion.div
          className="absolute inset-0 -z-10 bg-[conic-gradient(from_0deg,#d946ef33,#8b5cf633,#06b6d433,#10b98133,#d946ef33)] blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-fuchsia-300/80">04 · Contact</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
          Let&apos;s build something <span className="text-gradient">trustless</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted">
          Open to full-stack Web3 and blockchain engineering roles — remote or relocation.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.03]"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied!" : profile.email}
          </button>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 hover:bg-white/10">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 hover:bg-white/10">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </Reveal>
      <footer className="mt-16 flex flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <span>© 2026 {profile.name}</span>
        <span className="font-mono">Built with Next.js · Tailwind · Framer Motion</span>
      </footer>
    </section>
  );
}
