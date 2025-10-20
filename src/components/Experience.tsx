"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function ExperienceSection() {
    return (
        <section
            id="experience"
            className="relative max-w-7xl mx-auto px-6 py-16"
        >
            <h2 className="text-4xl font-bold text-cyan-400 mb-12">
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
        </section>
    );
}
