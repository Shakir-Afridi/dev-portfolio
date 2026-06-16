"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Download, Mail } from "lucide-react";

function LinkedinIcon({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}
import { resumeData } from "../data/resumeData";

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    const fadeUp = (delay = 0) => ({
        initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay, ease: "easeOut" as const },
    });

    const slideIn = (dir: "left" | "right") => ({
        initial: shouldReduceMotion
            ? { opacity: 0 }
            : { opacity: 0, x: dir === "left" ? -60 : 60 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.7, ease: "easeOut" as const },
        viewport: { once: true, amount: 0.3 as const },
    });

    const cleanTitle = resumeData.title.replace(/^🚀\s*/, "");

    return (
        <section
            id="about"
            aria-label="About Shakir Ullah"
            className="flex flex-col items-center max-w-7xl mx-auto px-6 py-16 text-center"
        >
            <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent"
                {...fadeUp(0)}
            >
                {resumeData.name}
            </motion.h1>

            <motion.p
                className="mt-4 text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed"
                {...fadeUp(0.2)}
            >
                {cleanTitle}
            </motion.p>

            <motion.p
                className="mt-2 text-sm text-slate-500 flex items-center gap-1"
                {...fadeUp(0.3)}
            >
                <span aria-hidden="true">📍</span>
                {resumeData.location}
            </motion.p>

            <motion.div
                className="mt-6 max-w-3xl space-y-4"
                {...fadeUp(0.4)}
            >
                {resumeData.summary?.split("\n").map((para, idx) =>
                    para.trim() ? (
                        <p key={idx} className="text-slate-400 leading-relaxed text-sm md:text-base">
                            {para.trim()}
                        </p>
                    ) : null
                )}
            </motion.div>

            <motion.div
                className="mt-8 flex flex-wrap justify-center gap-3"
                {...fadeUp(0.55)}
            >
                <motion.a
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    href={`mailto:${resumeData.email}`}
                    aria-label={`Send email to ${resumeData.email}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 font-semibold text-sm transition-all shadow-md hover:shadow-cyan-400/20"
                >
                    <Mail size={15} aria-hidden="true" />
                    Email Me
                </motion.a>
                <motion.a
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    href={resumeData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit LinkedIn profile (opens in new tab)"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 font-semibold text-sm transition-all shadow-md hover:shadow-cyan-400/20"
                >
                    <LinkedinIcon size={15} />
                    LinkedIn
                </motion.a>
                <motion.a
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    href="/files/ShakirUllah_Resume.pdf"
                    download="ShakirUllah_Resume.pdf"
                    aria-label="Download resume as PDF"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-700 hover:bg-cyan-600 text-white font-semibold text-sm transition-all shadow-md hover:shadow-cyan-400/20"
                >
                    <Download size={15} aria-hidden="true" />
                    Download Resume
                </motion.a>
            </motion.div>

            {(resumeData.technicalExpertize?.length > 0 ||
                resumeData.engineeringValues?.length > 0) && (
                <div className="flex flex-col md:flex-row gap-6 mt-14 w-full text-left">
                    {resumeData.technicalExpertize?.length > 0 && (
                        <motion.div
                            className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 md:w-1/2 w-full"
                            {...slideIn("left")}
                        >
                            <h3 className="text-lg font-bold mb-4 text-slate-100 flex items-center gap-2">
                                <span aria-hidden="true">🔧</span>
                                Technical Expertise
                            </h3>
                            <ul className="space-y-2.5" role="list">
                                {resumeData.technicalExpertize.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="text-slate-300 text-sm flex items-start gap-2 leading-relaxed"
                                    >
                                        <span
                                            className="text-cyan-400 mt-0.5 shrink-0"
                                            aria-hidden="true"
                                        >
                                            ▸
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {resumeData.engineeringValues?.length > 0 && (
                        <motion.div
                            className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 md:w-1/2 w-full"
                            {...slideIn("right")}
                        >
                            <h3 className="text-lg font-bold mb-4 text-slate-100 flex items-center gap-2">
                                <span aria-hidden="true">🧠</span>
                                Engineering Values
                            </h3>
                            <ul className="space-y-2.5" role="list">
                                {resumeData.engineeringValues.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="text-slate-300 text-sm flex items-start gap-2 leading-relaxed"
                                    >
                                        <span
                                            className="text-cyan-400 mt-0.5 shrink-0"
                                            aria-hidden="true"
                                        >
                                            ▸
                                        </span>
                                        {item.trim()}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            )}
        </section>
    );
}
