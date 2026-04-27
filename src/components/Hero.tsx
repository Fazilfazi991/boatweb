"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-cream">
      {/* Background Video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Fallback Image & Gradient */}
      <img src="/images/custom/hero_waterfront_dubai_1777327086914.png" alt="Hero Background Fallback" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-cream/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cream/60 to-transparent"></div>

      <div className="relative px-8 md:px-20 pb-20 md:pb-24 max-w-[850px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3.5 mb-6"
        >
          <div className="w-[38px] h-[1px] bg-navy/40"></div>
          <span className="text-[9px] tracking-[4.5px] uppercase text-navy/80 font-bold">
            Est. 2021 · Waterfront Market · Dubai, UAE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair text-[clamp(48px,7.2vw,96px)] font-bold leading-[0.98] text-navy mb-8 drop-shadow-sm"
        >
          Where the<br />Ocean Meets<br />
          <em className="italic text-ocean block font-semibold">the City.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14px] font-medium leading-[2.1] text-navy/70 max-w-[440px] mb-12 tracking-[0.2px]"
        >
          Seafood is not just food — it is an experience, a story, and a connection to the sea. Crafted daily at Dubai's finest waterfront.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-9"
        >
          <a
            href="#loc"
            className="group relative bg-navy text-cream py-[18px] px-[54px] font-jost text-[10px] font-bold tracking-[3px] uppercase no-underline inline-block transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-ocean -translate-x-[101%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0"></div>
            <span className="relative z-10 group-hover:text-navy transition-colors duration-500">Find Us</span>
          </a>
          <a
            href="#menu"
            className="group flex items-center gap-3.5 text-navy/70 text-[10px] tracking-[3.5px] uppercase no-underline transition-colors font-bold hover:text-navy"
          >
            Explore Menu
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="absolute right-12 bottom-18 flex flex-col items-center gap-3 hidden md:flex"
      >
        <div className="w-[1px] h-[64px] bg-navy/10 relative overflow-hidden">
          <motion.div
            animate={{ top: ["-30px", "110%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 right-0 h-[32px] bg-navy"
          ></motion.div>
        </div>
        <span className="[writing-mode:vertical-rl] text-[8.5px] tracking-[5px] uppercase text-navy/40 font-bold">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
