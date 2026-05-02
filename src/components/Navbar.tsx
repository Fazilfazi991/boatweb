"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Menu as MenuIcon, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const { cartCount } = useCart();
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
      <div className="hidden md:flex items-center justify-between px-16 py-1 border-b border-white/5 bg-ink/40 backdrop-blur-sm">
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
            ? "px-8 md:px-16 py-1.5 bg-ink/95 backdrop-blur-md shadow-2xl"
            : "px-8 md:px-16 py-3 bg-ink/80 backdrop-blur-sm"
        }`}
      >
        <Link
          href="/"
          className="relative h-16 md:h-20 w-52 md:w-80 no-underline flex items-center"
        >
          <img 
            src="/logo.png" 
            alt="Boat Seafood Logo" 
            className={`max-h-full w-auto object-contain transition-all duration-500 ${isScrolled ? "brightness-0 invert opacity-90" : "brightness-0 invert"}`} 
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-11 list-none m-0 p-0">
          <li>
            <Link
              href="/menu"
              className="text-white/65 hover:text-white text-[15px] font-medium tracking-[2px] uppercase transition-colors relative group"
            >
              Menu
              <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-ocean scale-x-0 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <a
              href="/#exp"
              className="text-white/65 hover:text-white text-[15px] font-medium tracking-[2px] uppercase transition-colors relative group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-ocean scale-x-0 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"></span>
            </a>
          </li>
          <li>
            <a
              href="/#loc"
              className="text-white/65 hover:text-white text-[15px] font-medium tracking-[2px] uppercase transition-colors relative group"
            >
              Location
              <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-ocean scale-x-0 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"></span>
            </a>
          </li>
          <li>
            <Link
              href="/events"
              className="text-white/65 hover:text-white text-[15px] font-medium tracking-[2px] uppercase transition-colors relative group"
            >
              Events
              <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-ocean scale-x-0 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>
        
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/menu"
            className="relative group"
          >
            <div className="bg-ocean text-navy py-3 px-8 text-[14px] font-bold tracking-[2px] uppercase transition-all hover:bg-white flex items-center gap-3">
              Order Online
              {cartCount > 0 && (
                <span className="flex items-center justify-center w-5 h-5 bg-navy text-white text-[10px] rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* Mobile Cart & Menu Button */}
        <div className="flex items-center gap-5 md:hidden">
          {cartCount > 0 && (
            <Link href="/menu" className="relative text-white">
              <ShoppingBag size={22} />
              <span className="absolute -top-2 -right-2 bg-ocean text-navy w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </Link>
          )}
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-ink/95 backdrop-blur-md flex flex-col items-center py-8 gap-6 md:hidden border-t border-white/5">
          <Link
            href="/menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-[15px] font-light tracking-[3px] uppercase"
          >
            Menu
          </Link>
          <a
            href="/#exp"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-[15px] font-light tracking-[3px] uppercase"
          >
            Experience
          </a>
          <a
            href="/#loc"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-[15px] font-light tracking-[3px] uppercase"
          >
            Location
          </a>
          <Link
            href="/events"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-[15px] font-light tracking-[3px] uppercase"
          >
            Events
          </Link>
        </div>
      )}
    </nav>
  );
}

