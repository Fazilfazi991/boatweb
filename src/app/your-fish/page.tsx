"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Choose The Fresh, Straight From The Market!",
    image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    alt: "Fresh fish market"
  },
  {
    number: "02",
    title: "We Prepare It To Perfection.",
    image: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    alt: "Chef grilling fish"
  },
  {
    number: "03",
    title: "Dine With The Taste Of The Sea Breeze.",
    image: "https://images.pexels.com/photos/3184188/pexels-photo-3184188.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    alt: "Dining experience"
  }
];

const cookingStyles = [
  {
    label: "Fried",
    image: "https://images.pexels.com/photos/60616/fried-fish-fish-food-60616.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 3.31 3 7 7 11 4-4 7-7.69 7-11 0-3.87-3.13-7-7-7z"/>
        <path d="M9 9c0-1.66 1.34-3 3-3"/>
      </svg>
    )
  },
  {
    label: "Grilled",
    image: "https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="2" y="10" width="20" height="3" rx="1"/>
        <path d="M6 10V7M10 10V5M14 10V7M18 10V5"/>
        <path d="M5 13v4M19 13v4M8 17h8"/>
      </svg>
    )
  },
  {
    label: "Tawa",
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <ellipse cx="12" cy="14" rx="9" ry="4"/>
        <path d="M12 10V6M8 10l-1-4M16 10l1-4"/>
      </svg>
    )
  },
  {
    label: "Oven Baked",
    image: "https://images.pexels.com/photos/3338496/pexels-photo-3338496.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="6" width="18" height="14" rx="2"/>
        <path d="M3 10h18M7 6V4M17 6V4"/>
        <rect x="8" y="13" width="8" height="5" rx="1"/>
      </svg>
    )
  },
  {
    label: "Curry & Gravy",
    image: "https://images.pexels.com/photos/2741458/pexels-photo-2741458.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M4 19h16M5 11a7 7 0 0 1 14 0v8H5v-8z"/>
        <path d="M9 11a3 3 0 0 1 6 0"/>
      </svg>
    )
  },
  {
    label: "Seafood Soup",
    image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M4 11a8 8 0 0 1 16 0v2H4v-2z"/>
        <path d="M3 13h18M7 20h10M5 13v7M19 13v7"/>
      </svg>
    )
  },
  {
    label: "Tagine",
    image: "https://images.pexels.com/photos/7218526/pexels-photo-7218526.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <ellipse cx="12" cy="16" rx="9" ry="4"/>
        <path d="M3 16v2a9 4 0 0 0 18 0v-2"/>
        <path d="M12 12V4M10 6l2-2 2 2"/>
      </svg>
    )
  },
  {
    label: "Fresh Salads",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2a10 10 0 0 1 0 20"/>
        <path d="M12 2a10 10 0 0 0 0 20"/>
        <path d="M2 12h20"/>
        <path d="M12 2C8 8 8 16 12 22M12 2c4 6 4 14 0 20"/>
      </svg>
    )
  }
];

export default function YourFishPage() {
  return (
    <main className="bg-[#F5EFE3] min-h-screen">
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background hero image – right half */}
        <div className="absolute inset-0 flex">
          <div className="w-full md:w-1/2 bg-[#F5EFE3]" />
          <div className="hidden md:block w-1/2 relative overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg?auto=compress&cs=tinysrgb&w=1260&q=80"
              alt="Grilled fish on fire"
              className="absolute inset-0 w-full h-full object-cover scale-105"
            />
            {/* Fade blend left edge */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#F5EFE3] to-transparent" />
          </div>
        </div>

        {/* Mobile background */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
            alt="Grilled fish"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#F5EFE3]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-20 pt-36 pb-24">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              {/* Nav label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1.5px] bg-[#C49A3C]" />
                <span className="text-[10px] tracking-[5px] uppercase text-[#C49A3C] font-semibold font-jost">
                  Your Fish, We Prepare
                </span>
              </div>

              <h1 className="font-playfair text-[clamp(36px,5.5vw,76px)] font-bold text-[#0A1628] leading-[1.08] mb-8">
                At Boat Seafood Restaurant, your catch becomes your perfect meal.
              </h1>

              <p className="text-[15px] text-[#0A1628]/65 leading-relaxed font-light mb-10 max-w-md">
                Bring your fresh fish directly from the market or the sea, and our chefs will prepare it exactly the way you love it — full of authentic flavor, fresh ingredients, and coastal tradition.
              </p>

              {/* 3 Step Images */}
              <div className="grid grid-cols-3 gap-3">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
                    className="group relative overflow-hidden rounded-sm shadow-lg cursor-pointer"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-2.5">
                      <span className="block text-[#C49A3C] text-[9px] font-bold tracking-[2px] mb-1 font-jost">{step.number}</span>
                      <p className="text-white text-[9px] leading-tight font-jost">{step.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Cooking Styles Section ── */}
      <section className="py-24 px-8 md:px-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          {/* Decorative script heading */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-12 h-[1px] bg-[#C49A3C]" />
            <span className="font-cormorant italic text-[#C49A3C] text-2xl tracking-wide">Choose Your Favorite Style</span>
            <span className="w-12 h-[1px] bg-[#C49A3C]" />
          </div>
          <h2 className="font-playfair text-[clamp(28px,4vw,52px)] font-bold text-[#0A1628] leading-tight">
            Prepared Just The Way You Love It
          </h2>
        </motion.div>

        {/* 4×2 grid of cooking styles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
          {cookingStyles.map((style, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group flex flex-col items-center gap-3 cursor-pointer"
            >
              <div className="w-full aspect-square overflow-hidden rounded-sm shadow-md">
                <img
                  src={style.image}
                  alt={style.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-[#0A1628]/50 group-hover:text-[#C49A3C] transition-colors">
                  {style.icon}
                </span>
                <span className="text-[12px] font-semibold tracking-wide text-[#0A1628] font-jost">{style.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/menu"
            className="bg-[#0A1628] text-white py-4 px-12 font-jost text-[11px] font-bold tracking-[3px] uppercase no-underline inline-block transition-all duration-300 hover:bg-[#C49A3C] rounded-sm"
          >
            And Much More
          </Link>
        </div>
      </section>

      {/* ── Bottom Banner ── */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[540px]">
          {/* Left: text content */}
          <div className="bg-[#F5EFE3] flex flex-col justify-center px-12 md:px-20 py-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playfair text-[clamp(24px,3.5vw,44px)] font-bold text-[#0A1628] leading-[1.25] mb-6">
                Whether it&apos;s a family catch, a special seafood selection, or your favorite local fish, we turn freshness into a memorable dining experience.
              </h2>
              <p className="font-cormorant italic text-[#C49A3C] text-[22px] font-semibold leading-snug">
                Your Fish. Your Taste.<br />Expertly Prepared.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://wa.me/971500000000?text=Hello%2C%20I%20want%20to%20bring%20my%20own%20fish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#C49A3C] text-white py-4 px-10 font-jost text-[11px] font-bold tracking-[3px] uppercase no-underline transition-all duration-300 hover:bg-[#0A1628] rounded-sm"
                >
                  Book Your Preparation
                </Link>
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2.5 border-2 border-[#0A1628] text-[#0A1628] py-4 px-10 font-jost text-[11px] font-bold tracking-[3px] uppercase no-underline transition-all duration-300 hover:bg-[#0A1628] hover:text-white rounded-sm"
                >
                  View Menu
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: full image */}
          <div className="relative overflow-hidden min-h-[400px]">
            <img
              src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&q=80"
              alt="Family dining at Boat Seafood Restaurant"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Boat branding overlay */}
            <div className="absolute top-8 left-8 bg-white/15 backdrop-blur-md border border-white/25 px-5 py-3 rounded-lg">
              <span className="text-white text-[10px] tracking-[3px] uppercase font-semibold font-jost">boat</span>
              <span className="block text-white/70 text-[8px] tracking-[2px] uppercase font-jost">Seafood Restaurant</span>
            </div>
            {/* Left-edge gradient blend */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F5EFE3] to-transparent hidden md:block" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
