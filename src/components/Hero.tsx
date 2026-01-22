"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    const scrollToStory = () => {
        const element = document.getElementById("story");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Video Background with Fallback */}
            <div className="absolute inset-0 z-0">
                {/* Fallback gradient background - replace with video/image when available */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]" /> */}

                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/assets/images/hero-fallback.jpg"
                    className="w-full h-full object-cover"
                >
                    <source src="/assets/video/hero.mp4" type="video/mp4" />
                </video>

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 section-container w-full">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Tagline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
                    >
                        The True Cost of{" "}
                        <span className="text-brand">Creating Life</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10"
                    >
                        Three hopeful moms face the ethical dilemmas of IVF in this film about
                        the modern pursuit of parenthood.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a
                            href="https://givebutter.com/9TjGEz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-brand text-[#0A0A0A] rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg shadow-brand/20"
                        >
                            Support the Film
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                onClick={scrollToStory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
                aria-label="Scroll to explore"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-sm font-medium tracking-wide uppercase">
                        Scroll to explore
                    </span>
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </motion.button>
        </section>
    );
}
