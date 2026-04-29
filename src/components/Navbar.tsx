"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? "-translate-y-[38px]" : "translate-y-0"
      }`}
    >
      {/* Top Contact Bar */}
      <div className="hidden md:flex items-center justify-between px-16 py-2.5 border-b border-white/5 bg-ink/40 backdrop-blur-sm">
        <div className="flex items-center gap-8">
          <a href="tel:+971500000000" className="text-[9px] tracking-[2px] uppercase text-white/50 hover:text-ocean transition-colors flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-ocean animate-pulse"></span>
            +971 50 000 0000
          </a>
          <span className="text-white/10">|</span>
          <span className="text-[9px] tracking-[2px] uppercase text-white/50 flex items-center gap-2">
            Waterfront Market, Deira, Dubai
          </span>
        </div>
        <div className="text-[9px] tracking-[2px] uppercase text-white/50">
          Open Daily: 12:00 PM - 12:00 AM
        </div>
      </div>

      <div
        className={`flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "px-8 md:px-16 py-3.5 bg-ink/95 backdrop-blur-md shadow-2xl"
            : "px-8 md:px-16 py-8"
        }`}
      >
        <Link
          href="/"
          className="relative h-10 w-28 md:w-36 no-underline flex items-center"
        >
          <img src="/gjgf.png" alt="Boat Seafood Logo" className="max-h-full w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-11 list-none m-0 p-0">
          <li>
            <Link
              href="/menu"
              className="text-white/65 hover:text-white text-[10.5px] font-light tracking-[2.5px] uppercase transition-colors relative group"
            >
              Menu
              <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-ocean scale-x-0 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <a
              href="/#exp"
              className="text-white/65 hover:text-white text-[10.5px] font-light tracking-[2.5px] uppercase transition-colors relative group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-ocean scale-x-0 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"></span>
            </a>
          </li>
          <li>
            <a
              href="/#loc"
              className="text-white/65 hover:text-white text-[10.5px] font-light tracking-[2.5px] uppercase transition-colors relative group"
            >
              Location
            </a>
          </li>
        </ul>
        
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/menu"
            className="bg-ocean text-navy py-2.5 px-7 text-[10px] font-bold tracking-[3px] uppercase transition-all hover:bg-white"
          >
            Order Online
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-ink/95 backdrop-blur-md flex flex-col items-center py-8 gap-6 md:hidden border-t border-white/5">
          <Link
            href="/menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-xs font-light tracking-[3px] uppercase"
          >
            Menu
          </Link>
          <a
            href="/#exp"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-xs font-light tracking-[3px] uppercase"
          >
            Experience
          </a>
          <a
            href="/#loc"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-xs font-light tracking-[3px] uppercase"
          >
            Location
          </a>
        </div>
      )}
    </nav>
  );
}

