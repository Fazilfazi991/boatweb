"use client";

const images = [
  "https://images.pexels.com/photos/20814983/pexels-photo-20814983/free-photo-of-steaming-seafood-bowl.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
  "https://images.pexels.com/photos/10368144/pexels-photo-10368144.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
  "https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
  "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
  "https://images.pexels.com/photos/1683545/pexels-photo-1683545.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 h-[200px] md:h-[320px] gap-1 md:gap-[3px]">
      {images.map((src, i) => (
        <div key={i} className={`relative overflow-hidden group ${i >= 3 ? "hidden md:block" : ""}`}>
          <img
            src={src}
            alt="Gallery image"
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-ink/10 transition-colors duration-400 group-hover:bg-ink/30"></div>
        </div>
      ))}
    </div>
  );
}
