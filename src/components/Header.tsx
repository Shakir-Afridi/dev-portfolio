"use client";

import { useState } from "react";
import Link from "next/link";
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
        <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-slate-800 mb-9">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-cyan-400">
                    {resumeData.name}
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-slate-200">
                    {navItems.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="hover:text-cyan-400 transition"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-200 hover:text-cyan-400 transition"
                    onClick={handleToggle}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {menuOpen && (
                <nav className="md:hidden bg-slate-900/90 border-t border-slate-800 backdrop-blur-md">
                    <ul className="flex flex-col space-y-4 py-4 px-6 text-slate-200">
                        {navItems.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className="block hover:text-cyan-400 transition"
                                    onClick={handleClose}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
