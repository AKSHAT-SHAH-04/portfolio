"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import type { MouseEvent } from "react";
import { flagship, work, type Project } from "@/data/profile";
import { Github, Reveal, Section, Tag } from "./ui";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="01 · Flagship builds"
      title={
        <>
          Open-source systems <span className="text-gradient">built for production</span>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {flagship.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <FlagshipCard project={p} index={i} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24">
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-cyan-300/80">Professional work</p>
        <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Shipped for clients & employers</h3>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {work.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <WorkCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FlagshipCard({ project: p, index }: { project: Project; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(167,139,250,0.18), transparent 70%)`;

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  }

  return (
    <motion.div
      onMouseMove={onMove}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent}`} />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-5xl font-black text-white/10">0{index + 1}</span>
          <StatusPill status={p.status} />
        </div>
        <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
        <p className="mt-3 text-muted">{p.summary}</p>
        <p className="mt-4 border-l-2 border-fuchsia-400/50 pl-3 text-sm italic text-foreground/70">
          {p.problem}
        </p>
        <ul className="mt-5 space-y-2">
          {p.features.map((f) => (
            <li key={f} className="flex gap-2 text-sm text-foreground/85">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        <div className="mt-6 flex gap-4 text-sm">
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-fuchsia-300">
              <Github className="h-4 w-4" /> Source
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-fuchsia-300">
              Live demo <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function WorkCard({ project: p }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6"
    >
      <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl`} />
      <div className="relative flex items-start justify-between gap-3">
        <h4 className="text-lg font-semibold">{p.title}</h4>
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`} className="text-muted hover:text-foreground">
            <ArrowUpRight className="h-5 w-5" />
          </a>
        )}
      </div>
      <p className="relative mt-2 text-sm text-muted">{p.summary}</p>
      <div className="relative mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </motion.div>
  );
}

function StatusPill({ status }: { status: Project["status"] }) {
  const color =
    status === "Building" ? "text-amber-300 border-amber-300/30 bg-amber-300/10" : "text-emerald-300 border-emerald-300/30 bg-emerald-300/10";
  return <span className={`rounded-full border px-3 py-1 font-mono text-xs ${color}`}>{status}</span>;
}
