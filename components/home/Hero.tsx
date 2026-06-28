"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 },
    },
  };

  const itemVariants: Variants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      };

  return (
    <section className="bg-canvas py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_320px] gap-12 items-center">
        {/* Left: text */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium tracking-widest uppercase text-accent-steel mb-4"
          >
            Defense Expert
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-6xl font-normal leading-tight text-ink mb-6"
            style={{ letterSpacing: "-1.5px" }}
          >
            Georgios
            <br />
            Nanos
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base text-body leading-relaxed mb-8 max-w-md"
          >
            Dipl.-Ing. · MBA · 20+ years across Digital Solutions, Shipbuilding,
            Maritime, and Defense. Currently Principal Project Manager at{" "}
            <a
              href="https://www.thalesgroup.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-active transition-colors"
            >
              Thales
            </a>
            , Kiel.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 bg-primary text-on-primary text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-primary-active transition-colors"
            >
              View Resume <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-canvas text-ink text-sm font-medium px-5 py-2.5 rounded-lg border border-hairline hover:bg-surface-soft transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="https://de.linkedin.com/in/georgios-nanos-7048b25a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-hairline text-muted hover:text-ink hover:bg-surface-soft transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon size={16} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: portrait */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.96 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden bg-surface-card aspect-[3/4]">
            <Image
              src="/images/hero-george-nanos.jpg"
              alt="Georgios Nanos standing in front of a Tesla Cybertruck"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
