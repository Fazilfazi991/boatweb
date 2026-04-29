"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { menuItems } from "../data/menu";
import Link from "next/link";

export default function MenuShowcase() {
  return (
    <section className="bg-cream pt-12 pb-0" id="menu">

      <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr_1fr_1.35fr] md:grid-rows-[480px_310px] gap-[3px]">
        {menuItems.slice(0, 6).map((item, i) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden bg-cream 
              ${item.tall ? "md:row-span-2" : ""} 
              ${item.wide ? "md:col-span-2" : ""}
              ${!item.tall && !item.wide ? "aspect-[4/3] md:aspect-auto" : ""}
            `}
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.09]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-cream/30 to-transparent opacity-95 transition-opacity duration-400 group-hover:opacity-100"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-[34px_30px] translate-y-1.5 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
              <span className="block text-[8px] tracking-[4px] uppercase text-navy/70 font-medium mb-2">
                {item.tag}
              </span>
              <div className="font-playfair text-[22px] font-semibold text-navy leading-[1.22] mb-2.5 whitespace-pre-line drop-shadow-sm">
                {item.name}
              </div>
              <div className="text-[11.5px] font-medium text-navy/70 leading-[1.85] max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-h-[70px] group-hover:opacity-100">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        className="text-center p-[70px_60px_130px]"
      >
        <Link
          href="/menu"
          className="group inline-flex items-center gap-4 bg-navy text-cream py-4 px-10.5 font-jost text-[10px] font-bold tracking-[3px] uppercase no-underline transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-ocean hover:text-navy"
        >
          View Full Menu
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
        </Link>
      </motion.div>
    </section>
  );
}
