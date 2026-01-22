"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Title */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group"
          >
            {/* Placeholder for logo - replace with actual logo */}
            <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-[#0A0A0A] font-bold text-lg">
              FO
            </div>
            <span className="text-white font-semibold text-lg tracking-tight hidden sm:block group-hover:text-brand transition-colors">
              Frozen Orphans
            </span>
          </button>

          {/* CTA Button */}
          <a
            href="https://givebutter.com/9TjGEz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-brand text-brand rounded-full font-medium text-sm hover:bg-brand hover:text-[#0A0A0A] transition-all duration-200 hover:scale-105"
          >
            Donate Now
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
