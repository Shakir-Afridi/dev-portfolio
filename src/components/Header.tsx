"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => setMenuOpen(!menuOpen);
    const handleClose = () => setMenuOpen(false);

    const navItems = [
        { href: "#about", label: "About" },
        { href: "#education", label: "Education" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <motion.header
            className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-slate-800 mb-9"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo / Name */}
                <motion.div
                    className="text-xl font-bold text-cyan-400 cursor-pointer"
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgba(34,211,238,0.8)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {resumeData.name}
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-slate-200">
                    {navItems.map(({ href, label }) => (
                        <motion.div key={href} whileHover={{ y: -2 }}>
                            <Link
                                href={href}
                                className="relative group transition-colors"
                            >
                                <span className="group-hover:text-cyan-400 transition">
                                    {label}
                                </span>
                                <motion.span
                                    layoutId="underline"
                                    className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all"
                                ></motion.span>
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden text-slate-200 hover:text-cyan-400 transition"
                    onClick={handleToggle}
                    aria-label="Toggle menu"
                    whileTap={{ scale: 0.9 }}
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </motion.button>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        className="md:hidden bg-slate-900/90 border-t border-slate-800 backdrop-blur-md"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="flex flex-col space-y-4 py-4 px-6 text-slate-200">
                            {navItems.map(({ href, label }) => (
                                <motion.li
                                    key={href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Link
                                        href={href}
                                        className="block hover:text-cyan-400 transition"
                                        onClick={handleClose}
                                    >
                                        {label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
