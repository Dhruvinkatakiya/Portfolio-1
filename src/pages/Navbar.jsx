import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";


export default function Navbar() {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock(); // Set initial time
    const interval = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="bg-black sticky top-0 z-50 w-full flex flex-col items-center overflow-x-hidden">
      <nav className="w-full flex flex-col items-center pt-5 px-2 sm:px-0 transition-all duration-300">
        <div
          className={`flex flex-col items-center bg-gray-900/80 rounded-3xl px-4 sm:px-10 py-2 shadow-2xl border-b-0 border-gray-700 backdrop-blur-lg max-w-2xl w-full relative transition-all duration-300 ${
            menuOpen
              ? "border-b-4 border-cyan-400"
              : "border-b border-gray-700"
          }`}
          style={{
            boxShadow: menuOpen
              ? "0 8px 32px 0 rgba(31,38,135,0.37)"
              : "0 4px 16px 0 rgba(31,38,135,0.17)",
            transition:
              "border-radius 0.4s cubic-bezier(.4,2,.6,1), border-color 0.3s, box-shadow 0.3s",
          }}
        >
          <div className="flex items-center w-full">
            {/* Profile initials */}
            <a
              href="#home"
              onClick={handleNavClick}
              className="flex items-center   justify-center w-10 h-10  text-white font-extrabold text-xl mr-4 sm:mr-10 shadow-lg transition-transform duration-200 hover:scale-110"
              aria-label="Go to Home"
            >
              <img loading="lazy"
              src={logo}
              alt="Profile"
              className=" object-cover   mx-auto  shadow-xl "
            />
            </a>

            {/* Desktop Nav links */}
            <nav className="hidden sm:flex gap-4 sm:gap-10 text-white font-medium text-base tracking-tight">
              {["about", "work", "skills", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="relative px-2 py-1 transition-all duration-200 hover:text-cyan-400 group"
                >
                  <span className="transition-colors duration-200">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Hamburger for mobile */}
            <button
              className="sm:hidden ml-auto text-white text-2xl focus:outline-none transition-transform duration-200 hover:scale-110 hover:text-cyan-400"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Status with Live Clock (desktop only) */}
            <div className="hidden sm:flex ml-auto items-center gap-2 pl-8">
              <span className="text-xs text-gray-400 font-mono">{time}</span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs text-green-400 font-medium">Online</span>
            </div>
          </div>

          {/* Mobile Nav links (inside navbar, animated) */}
          <div
            className={`w-full flex flex-col items-center gap-1 sm:hidden transition-all duration-500 ease-in-out ${
              menuOpen
                ? "opacity-100 max-h-60 scale-y-100 py-2 pointer-events-auto"
                : "opacity-0 max-h-0 scale-y-95 py-0 pointer-events-none"
            }`}
            style={{
              transitionProperty: "opacity, max-height, padding, transform",
            }}
          >
            {["about", "work", "skills", "contact"].map((item, idx) => (
              <a
                key={item}
                href={`#${item}`}
                className="w-full text-center py-3 text-base font-semibold text-white rounded-xl transition-all duration-300 hover:bg-cyan-500/20 hover:scale-105 hover:text-cyan-400 group"
                style={{
                  letterSpacing: "0.02em",
                  transitionDelay: menuOpen ? `${idx * 60 + 100}ms` : "0ms",
                  transitionProperty: "all",
                }}
                onClick={handleNavClick}
              >
                <span className="inline-block transition-all duration-200 group-hover:tracking-widest group-hover:text-cyan-400">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
                <span className="block mx-auto mt-1 h-0.5 w-0 bg-cyan-400 rounded-full transition-all duration-300 group-hover:w-2/3"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
