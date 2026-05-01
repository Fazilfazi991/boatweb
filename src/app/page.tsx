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

      {/* Book a Table — premium reservation section */}
      <section className="relative min-h-[92vh] overflow-hidden flex items-center justify-center group">
        {/* Background photo — minimal overlay to keep full color */}
        <img
          src="/images/custom/sensory_table_ambience_1777327223551.png"
          alt="Restaurant ambience"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover scale-[1.04] transition-transform duration-[16s] ease-linear group-hover:scale-[1.08]"
        />
        {/* Very subtle gradient — just enough for card readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/25 to-black/40"></div>

        {/* Floating reservation card */}
        <div className="relative w-full max-w-[520px] mx-6">

          {/* Availability pulse badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-white/90">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ade80]"></span>
              </span>
              Tables Available Tonight
            </span>
          </div>

          {/* Headline */}
          <div className="text-center mb-8">
            <p className="text-[11px] tracking-[6px] uppercase text-ocean font-semibold mb-3">Waterfront Market · Dubai</p>
            <h2 className="font-playfair text-[clamp(36px,5vw,64px)] font-bold text-white leading-[1.05] drop-shadow-xl">
              Reserve Your<br /><em className="italic text-ocean">Table</em>
            </h2>
          </div>

          {/* Glass reservation card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-7 shadow-2xl">
            <div className="grid grid-cols-3 gap-3 mb-4">
              {/* Date */}
              <div className="col-span-3 sm:col-span-1 flex flex-col gap-1.5">
                <label className="text-[9px] tracking-[3px] uppercase text-white/60 font-semibold">Date</label>
                <input
                  type="date"
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-3 text-white text-sm font-light focus:outline-none focus:border-ocean transition-colors w-full [color-scheme:dark]"
                />
              </div>
              {/* Time */}
              <div className="col-span-3 sm:col-span-1 flex flex-col gap-1.5">
                <label className="text-[9px] tracking-[3px] uppercase text-white/60 font-semibold">Time</label>
                <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-3 text-white text-sm font-light focus:outline-none focus:border-ocean transition-colors w-full [color-scheme:dark] appearance-none">
                  <option value="">Select time</option>
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                  <option>10:00 PM</option>
                </select>
              </div>
              {/* Guests */}
              <div className="col-span-3 sm:col-span-1 flex flex-col gap-1.5">
                <label className="text-[9px] tracking-[3px] uppercase text-white/60 font-semibold">Guests</label>
                <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-3 text-white text-sm font-light focus:outline-none focus:border-ocean transition-colors w-full [color-scheme:dark] appearance-none">
                  <option>1 guest</option>
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                  <option>5 guests</option>
                  <option>6+ guests</option>
                </select>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/971500000000?text=Hello%2C%20I%20would%20like%20to%20book%20a%20table%20at%20Boat%20Seafood"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-center gap-3 bg-ocean text-navy py-4 rounded-xl font-jost text-[13px] font-bold tracking-[3px] uppercase no-underline transition-all duration-300 hover:bg-white hover:shadow-2xl mt-1"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book via WhatsApp
            </a>

            <p className="text-center text-[10px] text-white/40 mt-3 tracking-[1px]">
              Open daily · 12:00 PM – 11:00 PM · Waterfront Market
            </p>
          </div>
        </div>
      </section>

      <Location />
      <Footer />
    </main>
  );
}
