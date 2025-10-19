"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "../data/resumeData";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<any | null>(null);

    return (
        <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
                Projects
            </h2>

            {/* Projects Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {resumeData.projects.map((p, i) => (
                    <motion.div
                        key={i}
                        className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 shadow-lg hover:shadow-cyan-400/20 cursor-pointer transition-all"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedProject(p)}
                    >
                        <h3 className="text-xl font-semibold text-slate-100 mb-1">
                            {p.title}
                        </h3>
                        <div className="text-sm text-slate-400 mb-2">
                            {p.company} • {p.period}
                        </div>
                        <p className="text-slate-300 line-clamp-3">
                            {p.summary}
                        </p>
                        <div className="mt-3 text-sm text-cyan-400">
                            {p?.tech?.join(", ")}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal for Detailed Project View */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        {/* Scrollable Content Container */}
                        <motion.div
                            className="relative bg-slate-900 rounded-2xl p-8 max-w-3xl w-full border border-slate-700 my-10 overflow-y-auto max-h-[90vh]"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-3 right-4 text-slate-400 hover:text-cyan-400 text-xl"
                                onClick={() => setSelectedProject(null)}
                            >
                                ✕
                            </button>

                            {/* Project Header */}
                            <h3 className="text-3xl font-semibold text-cyan-400 mb-2">
                                {selectedProject.title}
                            </h3>
                            <div className="text-slate-400 mb-4">
                                {selectedProject.company} •{" "}
                                {selectedProject.period}
                            </div>

                            {/* Detailed Description */}
                            <div className="text-slate-300 leading-relaxed space-y-4">
                                {selectedProject.summary
                                    ?.split("\n")
                                    .map((para: string, idx: number) => (
                                        <p key={idx}>{para.trim()}</p>
                                    ))}
                            </div>

                            {/* Key Contributions */}
                            {selectedProject.contributions && (
                                <div className="mt-6">
                                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                                        Key Contributions:
                                    </h4>
                                    <ul className="list-disc ml-6 space-y-2 text-slate-300">
                                        {selectedProject.contributions.map(
                                            (point: string, idx: number) => (
                                                <li key={idx}>{point}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}

                            {/* Outcome */}
                            {selectedProject.outcome && (
                                <div className="mt-6">
                                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                                        Outcome:
                                    </h4>
                                    <p className="text-slate-300 leading-relaxed">
                                        {selectedProject.outcome}
                                    </p>
                                </div>
                            )}

                            {/* Skills */}
                            {selectedProject.tech && (
                                <div className="mt-6">
                                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                                        Skills:
                                    </h4>
                                    <p className="text-cyan-300 text-sm">
                                        {selectedProject.tech.join(" · ")}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
