"use client";

import { MessageCircle, Utensils, ChevronUp, Home } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();
  const isMenuPage = pathname === "/menu";

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
            className="w-14 h-14 flex items-center justify-center bg-navy/80 backdrop-blur-md text-white rounded-full shadow-lg border border-white/10 hover:bg-ocean hover:text-navy transition-all duration-300"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Always visible: View Menu or Back Home */}
      <Link
        href={isMenuPage ? "/" : "/menu"}
        className={`w-14 h-14 md:w-auto md:h-auto flex items-center justify-center md:px-5 md:py-3.5 gap-3 rounded-full shadow-2xl border transition-all duration-300 ${
          isMenuPage 
            ? "bg-navy/90 text-white border-white/10 hover:bg-ocean hover:text-navy" 
            : "bg-ocean text-navy border-ocean/30 hover:bg-white hover:text-navy"
        }`}
      >
        {isMenuPage ? (
          <Home size={24} className="shrink-0" />
        ) : (
          <div className="relative w-6 h-6 shrink-0">
            <Image 
              src="/restaurant.png" 
              alt="Menu" 
              width={24} 
              height={24} 
              className="object-contain"
            />
          </div>
        )}
        <span className="hidden md:inline text-[11px] font-bold tracking-[2.5px] uppercase">
          {isMenuPage ? "Back Home" : "View Menu"}
        </span>
      </Link>

      {/* Always visible: WhatsApp */}
      <a
        href="https://wa.me/971500000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 md:w-auto md:h-auto flex items-center justify-center md:px-5 md:py-3.5 gap-3 bg-[#25D366] text-white rounded-full shadow-2xl border border-[#25D366]/30 hover:bg-white hover:text-[#25D366] transition-all duration-300"
      >
        <MessageCircle size={24} className="shrink-0" />
        <span className="hidden md:inline text-[11px] font-bold tracking-[2.5px] uppercase">WhatsApp</span>
      </a>

    </div>
  );
}
