"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { resumeData } from "../data/resumeData";

function formatDate(dateStr: string): string {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function Education() {
    return (
        <section id="education" className="max-w-7xl mx-auto px-6 py-16">
            <motion.h2
                className="text-4xl font-bold mb-12 text-cyan-400 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Education
            </motion.h2>

            <div className="space-y-6">
                {resumeData.education.map((edu, i) => (
                    <motion.article
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.55,
                            delay: i * 0.12,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        aria-label={`${edu.degree} at ${edu.institution}`}
                    >
                        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 hover:shadow-cyan-400/10 transition-all duration-300">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-1.5">
                                        <GraduationCap
                                            className="w-5 h-5 text-cyan-400 shrink-0"
                                            aria-hidden="true"
                                        />
                                        <h3 className="text-lg font-semibold text-slate-100">
                                            {edu.degree}
                                        </h3>
                                    </div>
                                    <p className="text-slate-300 font-medium ml-8">
                                        {edu.institution}
                                    </p>
                                </div>
                                {edu.gpa && (
                                    <span className="shrink-0 self-start text-sm font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-lg">
                                        GPA: {edu.gpa}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mt-3 ml-8">
                                <div className="flex items-center gap-1.5">
                                    <Calendar
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                    />
                                    <time dateTime={edu.start}>
                                        {formatDate(edu.start)}
                                    </time>
                                    <span aria-hidden="true">–</span>
                                    <time dateTime={edu.end}>
                                        {formatDate(edu.end)}
                                    </time>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MapPin
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                    />
                                    <span>{edu.location}</span>
                                </div>
                            </div>

                            {edu.description && (
                                <p className="text-sm text-slate-400 leading-relaxed mt-4 ml-8">
                                    {edu.description}
                                </p>
                            )}

                            {edu.achievements?.length > 0 && (
                                <ul
                                    className="mt-4 ml-8 space-y-1.5"
                                    role="list"
                                    aria-label="Achievements"
                                >
                                    {edu.achievements.map((a, idx) => (
                                        <li
                                            key={idx}
                                            className="text-sm text-slate-300 flex items-center gap-2"
                                        >
                                            <Award
                                                className="w-4 h-4 text-yellow-400 shrink-0"
                                                aria-hidden="true"
                                            />
                                            {a}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
