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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500 ${
        isScrolled
          ? "px-8 md:px-16 py-4 bg-ink/95 backdrop-blur-md"
          : "px-8 md:px-16 py-8"
      }`}
    >
      <a
        href="#"
        className="font-playfair text-[21px] font-normal text-white no-underline tracking-[0.5px]"
      >
        Boat
        <span className="text-[9px] font-jost font-light tracking-[3px] text-ocean-light align-super ml-1">
          Seafood
        </span>
      </a>

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
            href="#exp"
            className="text-white/65 hover:text-white text-[10.5px] font-light tracking-[2.5px] uppercase transition-colors relative group"
          >
            Experience
            <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-ocean scale-x-0 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"></span>
          </a>
        </li>
        <li>
          <a
            href="#loc"
            className="text-white/65 hover:text-white text-[10.5px] font-light tracking-[2.5px] uppercase transition-colors relative group"
          >
            Location
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-ink/95 backdrop-blur-md flex flex-col items-center py-8 gap-6 md:hidden border-t border-ocean-light/10">
          <Link
            href="/menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-xs font-light tracking-[3px] uppercase"
          >
            Menu
          </Link>
          <a
            href="#exp"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-xs font-light tracking-[3px] uppercase"
          >
            Experience
          </a>
          <a
            href="#loc"
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
