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
                className="text-5xl sm:text-6xl font-extrabold text-cyan-400"
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
                {resumeData.title} — {resumeData.location}
            </motion.p>

            {/* Summary */}
            <motion.p
                className="mt-4 max-w-4xl text-slate-400"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                {resumeData.summary}
            </motion.p>

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
        </section>
    );
}
