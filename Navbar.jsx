import { useEffect, useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur transition-shadow ${
        isSticky ? "shadow-sm" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Mobile: hamburger */}
        <button
          className="flex items-center justify-center md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <path d="M0 1h22M0 8h22M0 15h22" stroke="#0f172a" strokeWidth="1.6" />
          </svg>
        </button>

        {/* Brand */}
        <a href="#home" className="flex items-center gap-2">
          <span className="bg-brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white">
            DS
          </span>
          <span className="text-lg font-bold text-ink">
            Dev <span className="text-brand-gradient">Stack</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={i === 0 ? "text-brand-pink" : "hover:text-ink transition-colors"}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth buttons */}
        <div className="flex items-center gap-4">
          <a href="#signin" className="hidden text-sm font-medium text-slate-700 sm:block">
            Sign In
          </a>
          <a
            href="#signup"
            className="bg-brand-gradient rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-slate-100 bg-white px-6 py-4 text-sm font-medium text-slate-600 md:hidden">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 ${i === 0 ? "text-brand-pink" : ""}`}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a href="#signin" className="block py-2 sm:hidden">
              Sign In
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
