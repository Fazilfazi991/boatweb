"use client";

import { motion } from "framer-motion";

const items = [
  "Fresh Daily Catch",
  "Waterfront Market · Dubai",
  "Open 12 PM — 11 PM Daily",
  "Premium Seafood Since 2021",
  "Private Events Available",
  "Expertly Prepared · Honestly Served",
];

export default function Ticker() {
  // Duplicate items to ensure smooth infinite loop
  const tickerItems = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-navy overflow-hidden py-4 border-y border-ocean-light/10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40,
        }}
      >
        {tickerItems.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-9 text-[9.5px] tracking-[3px] uppercase text-white/40 font-light"
          >
            <span className="w-[3px] h-[3px] rounded-full bg-ocean shrink-0"></span>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
