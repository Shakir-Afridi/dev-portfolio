"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

import { Briefcase, Code, Building2, Award } from "lucide-react";

export default function ExperienceSection() {
    return (
        <section
            id="experience"
            className="relative max-w-7xl mx-auto px-6 py-16"
        >
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
                Experience
            </h2>

            <div className="relative">
                {/* Center timeline */}
                <div className="absolute left-1/2 top-0 h-full w-1 bg-cyan-400 -translate-x-1/2" />

                <div className="space-y-12">
                    {resumeData.experience.map((exp, index) => {
                        const isLeft = index % 2 !== 0;
                        return (
                            <motion.div
                                key={index}
                                className={`relative flex flex-col md:flex-row items-center ${
                                    isLeft
                                        ? "md:justify-end"
                                        : "md:justify-start"
                                }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                }}
                                viewport={{ once: true }}
                            >
                                {/* Card */}
                                <div
                                    className={`bg-slate-800 rounded-2xl p-6 shadow-lg w-full md:w-[48%] `}
                                >
                                    <h3 className="text-xl font-semibold text-white">
                                        {exp.role}
                                    </h3>
                                    <p className="text-cyan-300 text-sm mb-2">
                                        {exp.company}
                                    </p>
                                    <ul className="mt-3 list-disc ml-5 space-y-1 text-slate-300">
                                        {exp.bullets.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Dot */}
                                {/* Date label */}
                                <div
                                    className={`hidden md:block absolute ${
                                        isLeft ? "-ml-24" : "ml-24"
                                    } left-1/2 -translate-x-1/2 text-cyan-300 text-sm font-medium `}
                                >
                                    {exp.start} - {exp.end}
                                </div>
                                <span className="hidden md:block absolute w-5 h-5 bg-cyan-400 rounded-full left-1/2 -translate-x-1/2 ring-8 ring-slate-900" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            <HighlightsSection />
        </section>
    );
}

const highlights = [
    {
        title: "Years Experience",
        description: "7+",
        icon: <Briefcase className="w-10 h-10 text-cyan-400" />,
    },
    {
        title: "Projects",
        description: "12+",
        icon: <Code className="w-10 h-10 text-cyan-400" />,
    },
    {
        title: "Companies",
        description: "3",
        icon: <Building2 className="w-10 h-10 text-cyan-400" />,
    },
    {
        title: "Achievements",
        description: "5",
        icon: <Award className="w-10 h-10 text-cyan-400" />,
    },
];

function HighlightsSection() {
    return (
        <section
            id="highlights"
            className="px-6 py-20 max-w-7xl mx-auto text-center"
        >
            <motion.h2
                className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-14"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Highlights
            </motion.h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {highlights.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.08 }}
                        transition={{
                            duration: 0.5,
                            delay: idx * 0.15,
                            type: "spring",
                            stiffness: 100,
                        }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center bg-slate-800/50 border border-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
                    >
                        <div className="mb-3">{item.icon}</div>
                        <motion.div
                            className="text-4xl sm:text-5xl font-extrabold text-slate-100 mb-1"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {item.description}
                        </motion.div>
                        <div className="text-sm font-medium text-slate-400 uppercase tracking-wide">
                            {item.title}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
