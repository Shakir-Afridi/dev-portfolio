"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { resumeData } from "../data/resumeData";

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    return (
        <section
            id="education"
            className="max-w-7xl mx-auto px-6 py-8"
            ref={ref}
        >
            <motion.h2
                className="text-4xl font-bold mb-10 text-cyan-400 text-center"
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Education
            </motion.h2>

            <div className="relative border-slate-700 space-y-8">
                {resumeData.education.map((edu, i) => (
                    <motion.div
                        key={i}
                        className="relative"
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={controls}
                        transition={{
                            duration: 0.6,
                            delay: i * 0.2,
                            ease: "easeOut",
                        }}
                    >
                        {/* Education Card */}
                        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:shadow-cyan-400/10 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-2">
                                <GraduationCap className="w-5 h-5 text-cyan-400" />
                                <h3 className="text-lg font-semibold text-slate-100">
                                    {edu.degree}
                                </h3>
                            </div>
                            <p className="text-slate-300 font-medium mb-2">
                                {edu.institution}
                            </p>

                            <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>
                                        {edu.start} — {edu.end}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>{edu.location}</span>
                                </div>
                            </div>

                            <p className="text-sm text-slate-400 leading-relaxed">
                                {edu.description}
                            </p>

                            {edu.achievements && (
                                <ul className="mt-3 text-sm text-slate-300 list-disc list-inside space-y-1">
                                    {edu.achievements.map((a, idx) => (
                                        <li key={idx}>{a}</li>
                                    ))}
                                </ul>
                            )}

                            {edu.gpa && (
                                <p className="mt-3 text-sm font-semibold text-cyan-400">
                                    GPA: {edu.gpa}
                                </p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
