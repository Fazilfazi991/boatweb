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
      
      {/* Video Manifesto Section (Sensory Break / Interlude) */}
      <div className="relative h-[72vh] overflow-hidden flex items-center justify-center z-0">
        <img src="/images/custom/menu_seafood_tower_platter_1777327161161.png" alt="Sensory Background" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[2px]"></div>
        
        <div className="relative text-center max-w-[860px] px-[60px]">
          <blockquote className="font-cormorant italic text-[clamp(26px,4.2vw,56px)] font-bold text-navy leading-[1.42] mb-[22px] drop-shadow-md">
            "Seafood is not just food — it is an experience, a story, and a <strong className="not-italic text-navy font-extrabold underline decoration-ocean/30">connection to the sea.</strong>"
          </blockquote>
          <cite className="text-[10px] tracking-[4.5px] uppercase text-navy/70 font-bold not-italic">
            Boat Seafood · Brand Manifesto
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
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[2px]"></div>
        
        <div className="relative text-center max-w-[680px] px-10">
          <span className="inline-flex items-center justify-center gap-3.5 text-[10px] tracking-[5px] uppercase text-navy/70 font-bold mb-6.5">
            <span className="w-6.5 h-[1px] bg-navy/30 shrink-0"></span>
            Dubai's Finest Seafood
          </span>
          <h2 className="font-playfair font-semibold leading-[1.02] text-navy text-[clamp(38px,5.5vw,82px)] mb-8 drop-shadow-sm">
            The Table is Set.<br />
            <em className="italic text-ocean">Are You Ready?</em>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-7 mt-11">
            <a
              href="#loc"
              className="group bg-navy text-cream py-[17px] px-[50px] font-jost text-[10px] font-bold tracking-[3px] uppercase no-underline inline-block transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-ocean -translate-x-[101%] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0"></div>
              <span className="relative z-10 group-hover:text-navy">Find Us</span>
            </a>
          </div>
        </div>
      </section>

      <Location />
      <Footer />
    </main>
  );
}
