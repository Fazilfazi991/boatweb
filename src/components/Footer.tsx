"use client";

export default function Footer() {
  return (
    <footer className="bg-[#001117] border-t border-ocean-light/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr] gap-14 py-24 px-8 md:px-20 border-b border-white/5">
        <div>
          {/* Logo — significantly larger */}
          <div className="mb-8 h-28 w-56">
            <img src="/logo.png" alt="Boat Seafood" className="h-full w-auto object-contain brightness-0 invert" />
          </div>
          <p className="text-base font-light text-white/65 leading-[2.1] max-w-[280px] mb-8">
            Premium seafood dining at the heart of Dubai's Waterfront Market. Where the ocean meets the city. Est. 2021.
          </p>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/boat_seafood_/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-white/15 flex items-center justify-center text-white/40 transition-all duration-300 hover:border-ocean hover:text-ocean" title="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://www.tiktok.com/@boatseafoodrestaurant" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-white/15 flex items-center justify-center text-white/40 transition-all duration-300 hover:border-ocean hover:text-ocean" title="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/></svg>
            </a>
            <a href="https://www.facebook.com/boatseafoodrestaurant/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-white/15 flex items-center justify-center text-white/40 transition-all duration-300 hover:border-ocean hover:text-ocean" title="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <div className="text-[13px] tracking-[4px] uppercase text-ocean-light mb-7 font-semibold">Navigate</div>
          <ul className="list-none flex flex-col gap-4 m-0 p-0">
            <li><a href="/menu"  className="text-base font-light text-white/65 no-underline transition-colors duration-300 hover:text-white block">The Menu</a></li>
            <li><a href="/#exp" className="text-base font-light text-white/65 no-underline transition-colors duration-300 hover:text-white block">Experience</a></li>
            <li><a href="/#loc" className="text-base font-light text-white/65 no-underline transition-colors duration-300 hover:text-white block">Location</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[13px] tracking-[4px] uppercase text-ocean-light mb-7 font-semibold">Dining</div>
          <ul className="list-none flex flex-col gap-4 m-0 p-0">
            <li><a href="#" className="text-base font-light text-white/65 no-underline transition-colors duration-300 hover:text-white block">Private Events</a></li>
            <li><a href="#" className="text-base font-light text-white/65 no-underline transition-colors duration-300 hover:text-white block">Corporate Dining</a></li>
            <li><a href="#" className="text-base font-light text-white/65 no-underline transition-colors duration-300 hover:text-white block">Gift Cards</a></li>
            <li><a href="#" className="text-base font-light text-white/65 no-underline transition-colors duration-300 hover:text-white block">Catering</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[13px] tracking-[4px] uppercase text-ocean-light mb-7 font-semibold">Contact</div>
          <ul className="list-none flex flex-col gap-4 m-0 p-0">
            <li><a href="tel:+97140000000" className="text-base font-light text-white/65 no-underline transition-colors duration-300 hover:text-white block">+971 4 XXX XXXX</a></li>
            <li><a href="mailto:hello@boatseafood.ae" className="text-base font-light text-white/65 no-underline transition-colors duration-300 hover:text-white block">hello@boatseafood.ae</a></li>
            <li><a href="/#loc" className="text-base font-light text-white/65 no-underline transition-colors duration-300 hover:text-white block">Waterfront Market, Dubai</a></li>
            <li><span className="text-base font-light text-white/65 block">Open 12 PM – 11 PM</span></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-7 px-8 md:px-20 text-[13px] font-light text-white/40 tracking-[0.8px]">
        <p className="m-0">&copy; 2025 Boat Seafood, Dubai. All rights reserved.</p>
        <p className="m-0">Waterfront Market · Deira, UAE</p>
      </div>
    </footer>
  );
}
