"use client";

import { Award, GraduationCap } from "lucide-react";
import { certifications, education, skills } from "@/data/profile";
import { Reveal, Section } from "./ui";

export function Skills() {
  const all = Object.values(skills).flat();

  return (
    <>
      <div className="relative overflow-hidden border-y border-border py-6" aria-hidden>
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...all, ...all].map((s, i) => (
            <span key={i} className="text-2xl font-bold text-white/15 sm:text-4xl">
              {s} <span className="text-fuchsia-400/40">◆</span>
            </span>
          ))}
        </div>
      </div>

      <Section
        id="skills"
        eyebrow="03 · Toolkit"
        title={
          <>
            Protocol to pixel — <span className="text-gradient">the full stack</span>
          </>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items], i) => (
            <Reveal
              key={group}
              delay={i * 0.06}
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-violet-400/40"
            >
              <h3 className="font-mono text-sm uppercase tracking-widest text-violet-300">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-lg bg-white/5 px-3 py-1.5 text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-card p-6">
            <h3 className="flex items-center gap-2 font-semibold">
              <GraduationCap className="h-5 w-5 text-cyan-300" /> Education
            </h3>
            <ul className="mt-4 space-y-3">
              {education.map((e) => (
                <li key={e.degree}>
                  <div className="font-medium">{e.degree}</div>
                  <div className="text-sm text-muted">
                    {e.school}, {e.location}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="flex items-center gap-2 font-semibold">
              <Award className="h-5 w-5 text-amber-300" /> Certifications
            </h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c} className="font-medium">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
