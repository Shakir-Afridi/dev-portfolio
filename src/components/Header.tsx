"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { Menu, X } from "lucide-react";

const navItems = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);

    const handleClose = () => setMenuOpen(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sectionIds = navItems.map((i) => i.href.replace("#", ""));
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { rootMargin: "-35% 0px -55% 0px" }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <motion.header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "backdrop-blur-md bg-slate-900/85 border-b border-slate-800 shadow-lg shadow-slate-900/40"
                    : "bg-transparent"
            }`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    href="/#about"
                    className="text-xl font-extrabold bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                    aria-label={`${resumeData.name} – Back to top`}
                >
                    {resumeData.name}
                </Link>

                <nav
                    className="hidden md:flex items-center gap-8"
                    aria-label="Main navigation"
                >
                    {navItems.map(({ href, label }) => {
                        const sectionId = href.replace("#", "");
                        const isActive = activeSection === sectionId;
                        return (
                            <Link
                                key={href}
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                                className={`relative py-1 text-sm font-medium transition-colors hover:text-cyan-400 ${
                                    isActive ? "text-cyan-400" : "text-slate-300"
                                }`}
                            >
                                {label}
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-indicator"
                                        className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-cyan-400 rounded-full"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <motion.button
                    className="md:hidden text-slate-300 hover:text-cyan-400 transition p-1.5 rounded-md"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                    whileTap={{ scale: 0.88 }}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        id="mobile-nav"
                        className="md:hidden bg-slate-900/95 border-t border-slate-800 backdrop-blur-md"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        aria-label="Mobile navigation"
                    >
                        <ul className="flex flex-col py-3 px-6">
                            {navItems.map(({ href, label }, idx) => {
                                const sectionId = href.replace("#", "");
                                const isActive = activeSection === sectionId;
                                return (
                                    <motion.li
                                        key={href}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <Link
                                            href={href}
                                            onClick={handleClose}
                                            aria-current={isActive ? "page" : undefined}
                                            className={`block py-3 border-b border-slate-800/60 text-sm font-medium transition-colors hover:text-cyan-400 ${
                                                isActive
                                                    ? "text-cyan-400"
                                                    : "text-slate-300"
                                            }`}
                                        >
                                            {label}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
