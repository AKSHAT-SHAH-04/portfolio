"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "./ui";
import { highlights, profile } from "@/data/profile";

const chain = ["Solidity", "Rust", "Substrate", "Fabric", "Quorum", "ERC-4337", "CCIP", "Lightning"];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <Blob className="left-[-10%] top-[-10%] bg-fuchsia-600/40" duration={18} />
      <Blob className="right-[-15%] top-[20%] bg-cyan-500/30" duration={22} />
      <Blob className="bottom-[-20%] left-[30%] bg-violet-600/30" duration={26} />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 font-mono text-xs text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to Web3 engineering roles · <MapPin className="h-3 w-3" /> {profile.location}
        </motion.div>

        <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          {["Akshat", "Shah"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60, rotateX: -60 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mr-4 inline-block"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gradient block"
          >
            {profile.headline}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 max-w-2xl text-lg text-muted sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 px-6 py-3 font-medium shadow-[0_0_40px_-8px] shadow-fuchsia-500/70 transition hover:scale-[1.03]"
          >
            View projects <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
          </a>
          <IconLink href={profile.github} label="GitHub" icon={<Github className="h-4 w-4" />} />
          <IconLink href={profile.linkedin} label="LinkedIn" icon={<Linkedin className="h-4 w-4" />} />
          <IconLink href={`mailto:${profile.email}`} label="Email" icon={<Mail className="h-4 w-4" />} />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 1 } } }}
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="rounded-2xl border border-border bg-card p-5 backdrop-blur"
            >
              <div className="text-3xl font-bold">{h.value}</div>
              <div className="mt-1 text-sm text-muted">{h.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <BlockChain />
      </div>
    </section>
  );
}

function BlockChain() {
  // Animated row of "blocks" linked together — a nod to what I build.
  return (
    <div className="mt-12 flex items-center gap-0 overflow-hidden" aria-hidden>
      {chain.map((label, i) => (
        <div key={label} className="flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 + i * 0.12, type: "spring", stiffness: 200 }}
            className="whitespace-nowrap rounded-lg border border-violet-400/30 bg-violet-500/10 px-3 py-2 font-mono text-[11px] text-violet-200"
          >
            <span className="text-muted">#{String(i).padStart(2, "0")} </span>
            {label}
          </motion.div>
          {i < chain.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.4 + i * 0.12, duration: 0.3 }}
              className="h-px w-6 origin-left bg-gradient-to-r from-violet-400 to-cyan-400"
            />
          )}
        </div>
      ))}
    </div>
  );
}

function Blob({ className, duration }: { className: string; duration: number }) {
  return (
    <motion.div
      className={`pointer-events-none absolute h-[32rem] w-[32rem] rounded-full blur-[120px] ${className}`}
      animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0], scale: [1, 1.15, 0.9, 1] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function IconLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-5 py-3 text-sm transition hover:border-white/30 hover:bg-white/10"
    >
      {icon}
      {label}
    </a>
  );
}
