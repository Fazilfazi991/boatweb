"use client";

export default function Footer() {
  return (
    <footer className="bg-[#001117] border-t border-ocean-light/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr] gap-14 py-21 px-8 md:px-20 border-b border-white/5">
        <div>
          <span className="font-playfair text-2xl font-normal text-white block mb-4.5">
            Boat
            <span className="text-[9px] font-jost font-light tracking-[3px] text-ocean-light align-super ml-1">
              Seafood
            </span>
          </span>
          <p className="text-xs font-light text-white/30 leading-[2.05] max-w-[270px] mb-8">
            Premium seafood dining at the heart of Dubai's Waterfront Market. Where the ocean meets the city. Est. 2021.
          </p>
          <div className="flex gap-2.5">
            <a
              href="#"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/35 transition-all duration-300 hover:border-ocean hover:text-ocean"
              title="Instagram"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/35 transition-all duration-300 hover:border-ocean hover:text-ocean"
              title="TikTok"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/></svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/35 transition-all duration-300 hover:border-ocean hover:text-ocean"
              title="Facebook"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <div className="text-[8px] tracking-[4px] uppercase text-ocean-light mb-6.5 font-normal">Navigate</div>
          <ul className="list-none flex flex-col gap-3.5 m-0 p-0">
            <li><a href="#menu" className="text-xs font-light text-white/35 no-underline transition-colors duration-300 hover:text-white/80 block">The Menu</a></li>
            <li><a href="#exp" className="text-xs font-light text-white/35 no-underline transition-colors duration-300 hover:text-white/80 block">Experience</a></li>
            <li><a href="#loc" className="text-xs font-light text-white/35 no-underline transition-colors duration-300 hover:text-white/80 block">Location</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[8px] tracking-[4px] uppercase text-ocean-light mb-6.5 font-normal">Dining</div>
          <ul className="list-none flex flex-col gap-3.5 m-0 p-0">
            <li><a href="#" className="text-xs font-light text-white/35 no-underline transition-colors duration-300 hover:text-white/80 block">Private Events</a></li>
            <li><a href="#" className="text-xs font-light text-white/35 no-underline transition-colors duration-300 hover:text-white/80 block">Corporate Dining</a></li>
            <li><a href="#" className="text-xs font-light text-white/35 no-underline transition-colors duration-300 hover:text-white/80 block">Gift Cards</a></li>
            <li><a href="#" className="text-xs font-light text-white/35 no-underline transition-colors duration-300 hover:text-white/80 block">Catering</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[8px] tracking-[4px] uppercase text-ocean-light mb-6.5 font-normal">Contact</div>
          <ul className="list-none flex flex-col gap-3.5 m-0 p-0">
            <li><a href="#" className="text-xs font-light text-white/35 no-underline transition-colors duration-300 hover:text-white/80 block">+971 4 XXX XXXX</a></li>
            <li><a href="#" className="text-xs font-light text-white/35 no-underline transition-colors duration-300 hover:text-white/80 block">hello@boatseafood.ae</a></li>
            <li><a href="#" className="text-xs font-light text-white/35 no-underline transition-colors duration-300 hover:text-white/80 block">Waterfront Market, Dubai</a></li>
            <li><a href="#" className="text-xs font-light text-white/35 no-underline transition-colors duration-300 hover:text-white/80 block">Open 12 PM – 11 PM</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6.5 px-8 md:px-20 text-[10px] font-light text-white/20 tracking-[0.8px]">
        <p className="m-0">&copy; 2025 Boat Seafood, Dubai. All rights reserved.</p>
        <p className="m-0">Waterfront Market · Deira, UAE</p>
      </div>
    </footer>
  );
}
