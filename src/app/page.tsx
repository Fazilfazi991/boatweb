import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Origin from "@/components/Origin";
import Stats from "@/components/Stats";
import MenuShowcase from "@/components/MenuShowcase";
import DailyCatch from "@/components/DailyCatch";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <Origin />
      <Stats />
      <DailyCatch />
      
      {/* Manifesto Section — editorial split layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        {/* Left: full-color image, no overlay */}
        <div className="relative overflow-hidden min-h-[420px]">
          <img
            src="/images/custom/menu_seafood_tower_platter_1777327161161.png"
            alt="Seafood Tower"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover scale-[1.04] hover:scale-100 transition-transform duration-[2s] ease-out"
          />
          {/* Subtle left-edge gradient so the panel blend is seamless */}
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#001a24] to-transparent hidden md:block"></div>
        </div>

        {/* Right: dark panel with editorial quote */}
        <div className="bg-[#001a24] flex flex-col justify-center px-12 md:px-16 py-20">
          <span className="inline-flex items-center gap-3 text-[10px] tracking-[5px] uppercase text-ocean font-semibold mb-8">
            <span className="w-8 h-[1px] bg-ocean shrink-0"></span>
            Brand Manifesto
          </span>
          <blockquote className="font-cormorant italic text-[clamp(28px,3.5vw,52px)] font-bold text-white leading-[1.35] mb-8">
            "Seafood is not just food — it is an experience, a story, and a{" "}
            <em className="not-italic text-ocean">connection to the sea.</em>"
          </blockquote>
          <cite className="text-[11px] tracking-[3px] uppercase text-white/50 font-semibold not-italic">
            — Boat Seafood, Dubai
          </cite>
        </div>
      </div>

      <MenuShowcase />
      <Experience />
      <Gallery />
      <Testimonials />

      {/* Sensory Break (Bottom) */}
      <section className="relative h-[82vh] overflow-hidden flex items-center justify-center group">
        <img 
          src="/images/custom/sensory_table_ambience_1777327223551.png" 
          alt="Restaurant ambience" 
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover scale-[1.06] transition-transform duration-[14s] ease-linear group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/15"></div>
        
        <div className="relative text-center max-w-[680px] px-10">
          <span className="inline-flex items-center justify-center gap-3.5 text-[10px] tracking-[5px] uppercase text-white/80 font-bold mb-6.5">
            <span className="w-6.5 h-[1px] bg-white/50 shrink-0"></span>
            Dubai's Finest Seafood
          </span>
          <h2 className="font-playfair font-semibold leading-[1.02] text-white text-[clamp(38px,5.5vw,82px)] mb-8 drop-shadow-lg">
            The Table is Set.<br />
            <em className="italic text-ocean">Are You Ready?</em>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-7 mt-11">
            <a
              href="#loc"
              className="group bg-white/10 backdrop-blur-sm border border-white/40 text-white py-[17px] px-[50px] font-jost text-[10px] font-bold tracking-[3px] uppercase no-underline inline-block transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden shadow-xl hover:bg-ocean hover:border-ocean hover:text-navy"
            >
              Find Us
            </a>
          </div>
        </div>
      </section>

      <Location />
      <Footer />
    </main>
  );
}
