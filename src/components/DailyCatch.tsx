"use client";

import { motion } from "framer-motion";
import { ArrowRight, Waves } from "lucide-react";
import Link from "next/link";

const dailyCatch = [
  {
    name: "Alaskan King Crab",
    origin: "Bering Sea",
    description: "Premium clusters, naturally sweet and tender.",
    image: "/images/custom/menu_alaskan_king_crab.png",
    price: "310",
  },
  {
    name: "Mediterranean Sea Bass",
    origin: "Greece",
    description: "Whole-roasted with sea salt, citrus, and herbs.",
    image: "/images/custom/menu_seabass_mediterranean_1777327177113.png",
    price: "185",
  },
  {
    name: "Bluefin Tuna",
    origin: "Local Waters",
    description: "Sustainably caught, served as carpaccio or grilled.",
    image: "https://images.pexels.com/photos/3296395/pexels-photo-3296395.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    price: "145",
  },
];

export default function DailyCatch() {
  return (
    <section className="bg-cream py-32 px-8 md:px-20 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-3 text-[10px] tracking-[5px] uppercase text-ocean font-bold mb-6">
            <Waves size={16} /> Fresh From the Market
          </span>
          <h2 className="font-playfair text-[clamp(40px,5vw,72px)] font-bold text-navy leading-none">
            Today's <em className="italic text-ocean">Catch</em>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-md text-right"
        >
          <p className="text-[14px] leading-relaxed text-navy/60 font-light mb-8">
            Our selection changes every morning based on what the ocean provides. 
            Hand-picked at the Waterfront Market at dawn.
          </p>
          <Link href="/menu" className="group inline-flex items-center gap-3 text-[10px] tracking-[3px] uppercase text-navy font-bold transition-colors hover:text-ocean">
            View Market Menu <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {dailyCatch.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group cursor-default"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-8 rounded-sm">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500"></div>
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full">
                <span className="text-[8px] tracking-[2px] uppercase text-navy font-bold">AED {item.price}</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-[9px] tracking-[4px] uppercase text-ocean font-bold mb-3">{item.origin}</span>
              <h3 className="font-playfair text-2xl font-bold text-navy mb-4">{item.name}</h3>
              <p className="text-[13px] leading-relaxed text-navy/50 font-light italic">"{item.description}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
