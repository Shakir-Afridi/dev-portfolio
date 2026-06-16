"use client";
import { motion } from "framer-motion";
import { Briefcase, Code, Building2, Award, Calendar, MapPin } from "lucide-react";
import { resumeData, ExperienceItem } from "@/data/resumeData";

function formatDate(dateStr: string): string {
    if (!dateStr || dateStr === "Present") return "Present";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
    return (
        <div className={`bg-slate-800/60 border rounded-2xl p-6 shadow-lg transition-all duration-300 ${exp.clientOf ? "border-amber-500/40 hover:shadow-amber-400/10 hover:border-amber-500/60" : "border-slate-700 hover:shadow-cyan-400/10 hover:border-slate-600"}`}>
            <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
            <div className="mt-1 mb-4 flex flex-wrap items-center gap-2">
                <p className="text-cyan-300 text-sm font-medium">{exp.company}</p>
                {exp.clientOf && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium bg-amber-500/10 border border-amber-500/30 text-amber-400 px-2 py-0.5 rounded-full">
                        <Building2 size={10} aria-hidden="true" />
                        via {exp.clientOf}
                    </span>
                )}
            </div>
            <ul className="space-y-2" role="list">
                {exp.bullets.map((b, i) => (
                    <li
                        key={i}
                        className="text-slate-300 text-sm leading-relaxed flex items-start gap-2"
                    >
                        <span
                            className="text-cyan-400 mt-1 shrink-0 text-xs"
                            aria-hidden="true"
                        >
                            ▸
                        </span>
                        {b}
                    </li>
                ))}
            </ul>
            {exp.tech && exp.tech.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-xs bg-slate-700/60 border border-slate-600/60 text-slate-300 px-2.5 py-0.5 rounded-md"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

const highlights = [
    {
        title: "Years Experience",
        value: "7+",
        icon: <Briefcase className="w-9 h-9 text-cyan-400" aria-hidden="true" />,
    },
    {
        title: "Projects",
        value: "12+",
        icon: <Code className="w-9 h-9 text-cyan-400" aria-hidden="true" />,
    },
    {
        title: "Companies",
        value: "3",
        icon: <Building2 className="w-9 h-9 text-cyan-400" aria-hidden="true" />,
    },
    {
        title: "Achievements",
        value: "5",
        icon: <Award className="w-9 h-9 text-cyan-400" aria-hidden="true" />,
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="relative max-w-7xl mx-auto px-6 py-16">
            <motion.h2
                className="text-4xl font-bold text-cyan-400 mb-14 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Experience
            </motion.h2>

            <div className="relative">
                {/* Desktop center line */}
                <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-linear-to-b from-cyan-400/70 via-cyan-400/30 to-transparent -translate-x-1/2 pointer-events-none" />

                {/* Mobile left border line */}
                <div className="md:hidden absolute left-4 top-0 h-full w-0.5 bg-linear-to-b from-cyan-400/70 via-cyan-400/30 to-transparent pointer-events-none" />

                <div className="space-y-10">
                    {resumeData.experience.map((exp, index) => {
                        const isLeft = index % 2 !== 0;
                        return (
                            <motion.article
                                key={index}
                                className={`relative flex flex-col md:flex-row ${
                                    isLeft ? "md:justify-end" : "md:justify-start"
                                }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.08,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                aria-label={`${exp.role} at ${exp.company}`}
                            >
                                {/* Mobile layout: left-padded */}
                                <div className="md:hidden pl-10">
                                    {/* Mobile dot */}
                                    <span className={`absolute left-2.5 top-4 w-4 h-4 rounded-full ring-4 ring-slate-900 z-10 ${exp.clientOf ? "bg-amber-400" : "bg-cyan-400"}`} />
                                    <p className={`text-xs font-medium mb-2 flex flex-wrap items-center gap-x-3 gap-y-0.5 ${exp.clientOf ? "text-amber-300" : "text-cyan-300"}`}>
                                        <span className="flex items-center gap-1">
                                            <Calendar size={11} aria-hidden="true" />
                                            <time dateTime={exp.start}>
                                                {formatDate(exp.start)}
                                            </time>
                                            {" – "}
                                            <time dateTime={exp.end ?? ""}>
                                                {formatDate(exp.end ?? "Present")}
                                            </time>
                                        </span>
                                        {exp.location && (
                                            <span className="flex items-center gap-1 text-slate-500">
                                                <MapPin size={11} aria-hidden="true" />
                                                {exp.location}
                                            </span>
                                        )}
                                    </p>
                                    <ExperienceCard exp={exp} />
                                </div>

                                {/* Desktop card */}
                                <div className="hidden md:block w-[46%]">
                                    <ExperienceCard exp={exp} />
                                </div>

                                {/* Desktop: center dot */}
                                <span className={`hidden md:block absolute w-4 h-4 rounded-full left-1/2 -translate-x-1/2 top-5 ring-4 ring-slate-900 z-10 ${exp.clientOf ? "bg-amber-400" : "bg-cyan-400"}`} />

                                {/* Desktop: date + location label on opposing side */}
                                <div
                                    className={`hidden md:flex flex-col gap-0.5 absolute top-4 text-right ${
                                        isLeft
                                            ? "right-[53%] items-end pr-6"
                                            : "left-[53%] items-start pl-6 text-left"
                                    }`}
                                >
                                    <p className={`text-xs font-medium whitespace-nowrap flex items-center gap-1 ${exp.clientOf ? "text-amber-300" : "text-cyan-300"}`}>
                                        <Calendar size={11} aria-hidden="true" />
                                        <time dateTime={exp.start}>
                                            {formatDate(exp.start)}
                                        </time>
                                        {" – "}
                                        <time dateTime={exp.end ?? ""}>
                                            {formatDate(exp.end ?? "Present")}
                                        </time>
                                    </p>
                                    {exp.location && (
                                        <p className="text-slate-500 text-xs flex items-center gap-1">
                                            <MapPin size={10} aria-hidden="true" />
                                            {exp.location}
                                        </p>
                                    )}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>

            {/* Highlights */}
            <section
                id="highlights"
                className="pt-20 text-center"
                aria-label="Career highlights"
            >
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Highlights
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                    {highlights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, y: -4 }}
                            transition={{
                                duration: 0.45,
                                delay: idx * 0.1,
                                type: "spring",
                                stiffness: 200,
                            }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center bg-slate-800/40 border border-slate-700 rounded-2xl p-6 shadow-md hover:shadow-cyan-500/15 hover:border-slate-600 transition-all cursor-default"
                        >
                            <div className="mb-3">{item.icon}</div>
                            <div className="text-4xl sm:text-5xl font-extrabold text-slate-100 mb-1 tabular-nums">
                                {item.value}
                            </div>
                            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                                {item.title}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </section>
    );
}
