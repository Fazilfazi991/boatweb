"use client";

import { MessageCircle, Menu, X, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="flex flex-col items-end gap-3 mb-2"
          >
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/971500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-full shadow-xl border border-white/20 group hover:bg-ocean transition-all duration-300"
            >
              <span className="text-[10px] font-bold tracking-[2px] uppercase text-navy group-hover:text-white">WhatsApp</span>
              <div className="bg-[#25D366] p-2 rounded-full text-white">
                <MessageCircle size={20} />
              </div>
            </a>

            {/* Quick Menu Button */}
            <Link
              href="/menu"
              className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-full shadow-xl border border-white/20 group hover:bg-navy transition-all duration-300"
            >
              <span className="text-[10px] font-bold tracking-[2px] uppercase text-navy group-hover:text-white">Full Menu</span>
              <div className="bg-ocean p-2 rounded-full text-navy group-hover:text-white">
                <Menu size={20} />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-3">
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

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-5 rounded-full shadow-2xl transition-all duration-500 flex items-center justify-center border border-white/10 ${
            isOpen ? "bg-navy text-white rotate-90" : "bg-ocean text-navy"
          }`}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-navy"></span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
