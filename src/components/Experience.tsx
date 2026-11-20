"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/profile";
import { Reveal, Section, Tag } from "./ui";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 · Experience"
      title={
        <>
          Five years, <span className="text-gradient">four chains, one focus</span>
        </>
      }
    >
      <div className="relative">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute left-[7px] top-2 h-full w-px origin-top bg-gradient-to-b from-fuchsia-400 via-violet-400 to-transparent sm:left-[11px]"
        />
        <div className="space-y-12">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05} className="relative pl-8 sm:pl-12">
              <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-fuchsia-300 bg-background sm:h-6 sm:w-6">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300 sm:h-2 sm:w-2" />
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-bold sm:text-2xl">
                  {job.company}
                  {job.link && (
                    <a href={job.link} target="_blank" rel="noreferrer" className="ml-2 inline-block text-muted hover:text-foreground">
                      <ArrowUpRight className="inline h-4 w-4" />
                    </a>
                  )}
                </h3>
                <span className="font-mono text-sm text-muted">{job.period}</span>
              </div>
              <p className="mt-1 text-fuchsia-200/90">{job.role}</p>
              <ul className="mt-4 space-y-2 text-foreground/80">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
