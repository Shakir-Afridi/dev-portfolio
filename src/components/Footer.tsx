"use client";

import { resumeData } from "../data/resumeData";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-16 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 text-slate-400">
            <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                {/* Left section */}
                <div className="text-center md:text-left">
                    <p className="text-slate-300 font-medium">
                        © {currentYear} {resumeData.name}
                    </p>
                    <p className="text-slate-500">
                        Built with{" "}
                        <span className="text-cyan-400 font-semibold">
                            Next.js
                        </span>{" "}
                        &{" "}
                        <span className="text-cyan-400 font-semibold">
                            Tailwind CSS
                        </span>
                    </p>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-5 text-lg">
                    <a
                        href={resumeData.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={22} />
                    </a>
                    <a
                        href={resumeData.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={22} />
                    </a>
                    <a
                        href={`mailto:${resumeData.email}`}
                        className="hover:text-cyan-400 transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={22} />
                    </a>
                </div>

                {/* Back to top */}
                <div className="hidden md:block">
                    <a
                        href="#top"
                        className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                        <ArrowUp size={16} /> Back to Top
                    </a>
                </div>
            </div>
        </footer>
    );
}
