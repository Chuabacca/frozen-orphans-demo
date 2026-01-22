"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0A0A0A] border-t border-white/10">
            <div className="section-container pt-6 pb-16 md:pt-10 md:pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Column 1: Logo & Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/frozen-orphans-demo/assets/images/logo.png"
                                alt="Frozen Orphans"
                                width={120}
                                height={44}
                                className="object-contain"
                            />
                            <span className="text-white font-semibold text-lg">
                                Frozen Orphans
                            </span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Frozen Orphans is a nonprofit 501(c)(3) operating in the state of California.
                        </p>
                    </motion.div>

                    {/* Column 2: Navigation & Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h5 className="text-white font-semibold mb-4">Quick Links</h5>
                        <nav className="flex flex-col gap-2 mb-6">
                            <a
                                href="#story"
                                className="text-white/60 hover:text-brand transition-colors text-sm"
                            >
                                The Story
                            </a>
                            <a
                                href="#mission"
                                className="text-white/60 hover:text-brand transition-colors text-sm"
                            >
                                Our Mission
                            </a>
                            <a
                                href="#team"
                                className="text-white/60 hover:text-brand transition-colors text-sm"
                            >
                                The Team
                            </a>
                            <a
                                href="https://givebutter.com/9TjGEz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/60 hover:text-brand transition-colors text-sm"
                            >
                                Donate
                            </a>
                        </nav>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/frozenorphans/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand hover:text-[#0A0A0A] transition-all duration-200"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/frozenorphans/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand hover:text-[#0A0A0A] transition-all duration-200"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.youtube.com/@frozenorphans"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand hover:text-[#0A0A0A] transition-all duration-200"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:info@frozenorphans.org"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand hover:text-[#0A0A0A] transition-all duration-200"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Column 3: Newsletter Signup */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h5 className="text-white font-semibold mb-4">Stay Updated</h5>
                        <p className="text-white/60 text-sm mb-4">
                            Subscribe to receive updates about the film and our mission.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-brand transition-colors text-sm"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-brand text-[#0A0A0A] rounded-full font-medium text-sm hover:bg-white transition-colors whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © {currentYear} Frozen Orphans. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="text-white/40 hover:text-white/60 text-sm transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-white/40 hover:text-white/60 text-sm transition-colors"
                        >
                            Terms of Use
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
