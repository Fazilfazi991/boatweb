"use client";

import { MessageCircle, Menu, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-3">

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="bg-navy/80 backdrop-blur-md text-white p-4 rounded-full shadow-lg border border-white/10 hover:bg-ocean hover:text-navy transition-all duration-300"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Always visible: View Menu */}
      <Link
        href="/menu"
        className="flex items-center gap-3 bg-ocean text-navy px-5 py-3.5 rounded-full shadow-2xl border border-ocean/30 hover:bg-white hover:text-navy transition-all duration-300"
      >
        <Menu size={20} className="shrink-0" />
        <span className="text-[11px] font-bold tracking-[2.5px] uppercase">View Menu</span>
      </Link>

      {/* Always visible: WhatsApp */}
      <a
        href="https://wa.me/971500000000"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-2xl border border-[#25D366]/30 hover:bg-white hover:text-[#25D366] transition-all duration-300"
      >
        <MessageCircle size={20} className="shrink-0" />
        <span className="text-[11px] font-bold tracking-[2.5px] uppercase">WhatsApp</span>
      </a>

    </div>
  );
}
