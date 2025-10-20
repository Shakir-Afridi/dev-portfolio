"use client";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";

export default function Hero() {
    return (
        <section
            id="about"
            className="flex flex-col justify-center items-start max-w-7xl mx-auto px-6 py-16"
        >
            {/* Name */}
            <motion.h1
                className="text-4xl sm:text-5xl font-extrabold text-cyan-400"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {resumeData.name}
            </motion.h1>

            {/* Title + Location */}
            <motion.p
                className="mt-4 text-xl text-slate-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                {resumeData.title}
            </motion.p>
            <motion.p
                className="mt-4 text-xl text-slate-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                {resumeData.location}
            </motion.p>

            {/* Summary */}
            <motion.div
                className="mt-4 max-w-4xl text-slate-400"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                {resumeData.summary
                    ?.split("\n")
                    .map((para: string, idx: number) => (
                        <p key={idx} className={`${!para ? "p-1" : ""}`}>
                            {para?.trim()}
                        </p>
                    ))}
            </motion.div>
            {/* Buttons */}
            <motion.div
                className="mt-6 flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
                <a
                    className="px-4 py-2 bg-cyan-500 text-white rounded-lg shadow hover:bg-cyan-600 transition"
                    href={`mailto:${resumeData.email}`}
                >
                    Email
                </a>
                <a
                    className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition"
                    href={resumeData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
            </motion.div>
            {resumeData.technicalExpertize?.length > 0 ||
            resumeData.engineeringValues?.length > 0 ? (
                <div className="flex flex-col md:flex-row justify-between gap-4 mt-6 w-full">
                    {resumeData.technicalExpertize?.length > 0 && (
                        <motion.div
                            className="bg-cyan-900 text-white rounded-2xl p-6 md:w-1/2 w-full shadow-lg"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h3 className="text-2xl font-bold mb-2">
                                🔧 Technical Expertise:
                            </h3>
                            {resumeData.technicalExpertize.map((Item, idx) => (
                                <p key={idx} className="text-gray-300">
                                    🔹 {Item}
                                </p>
                            ))}
                        </motion.div>
                    )}

                    {resumeData.engineeringValues?.length > 0 && (
                        <motion.div
                            className="bg-gray-800 text-white rounded-2xl p-6 md:w-1/2 w-full shadow-lg"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h3 className="text-2xl font-bold mb-2">
                                🧠 Engineering Values:
                            </h3>
                            {resumeData.engineeringValues.map((Item, idx) => (
                                <p key={idx} className="text-gray-300">
                                    🔹 {Item}
                                </p>
                            ))}
                        </motion.div>
                    )}
                </div>
            ) : null}
        </section>
    );
}
