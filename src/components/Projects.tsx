"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Activity } from "lucide-react";
import { Project, resumeData } from "../data/resumeData";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );

    const ProjectCard = ({ p, i }: { p: Project; i: number }) => {
        return (
            <motion.div
                key={i}
                className="group bg-slate-900/60 rounded-2xl overflow-hidden border border-slate-800 shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(p)}
            >
                {/* Header Section */}
                <div className="relative p-6 bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col items-center justify-center text-center">
                    <div className="mb-4 text-cyan-400">
                        <Activity size={42} />
                    </div>
                    <h3 className="text-lg font-semibold text-cyan-300 mb-1">
                        {p.title}
                    </h3>
                </div>

                {/* Body Section */}
                <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                        <h4 className="text-base font-semibold text-slate-100">
                            {p.title}
                        </h4>
                        <span className="text-xs text-slate-500">
                            {p.year || p.period}
                        </span>
                    </div>

                    <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                        {p.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {p.tech
                            ?.slice(0, 3)
                            .map((tech: string, idx: number) => (
                                <span
                                    key={idx}
                                    className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        {p.tech && p.tech.length > 3 && (
                            <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded-md">
                                +{p.tech.length - 3} more
                            </span>
                        )}
                    </div>

                    {/* Links */}
                    {p.links && p.links.length > 0 && (
                        <div className="mb-5">
                            <h4 className="text-md font-semibold text-slate-400 mb-2">
                                Important Links:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {p.links.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-xs text-cyan-400 hover:text-cyan-300 underline transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between border-t border-slate-800 pt-4 text-slate-400 text-xs" />

                    {/* Button */}
                    <button
                        onClick={() => setSelectedProject(p)}
                        className="w-full mt-6 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                        <Eye size={16} /> View Details
                    </button>
                </div>
            </motion.div>
        );
    };

    return (
        <section id="projects" className="max-w-7xl mx-auto px-6 py-8">
            {(resumeData?.openSourceProjects?.length ?? 0) > 0 && (
                <>
                    <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
                        Open Source Projects
                    </h2>
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                        {resumeData.openSourceProjects?.map((p, i) => (
                            <ProjectCard p={p} i={i} />
                        ))}
                    </div>
                </>
            )}
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
                Projects
            </h2>

            {/* Projects Grid */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {resumeData.projects.map((p, i) => (
                    <ProjectCard p={p} i={i} />
                ))}
            </div>

            {/* Modal for Detailed View */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="relative bg-slate-900 rounded-2xl p-6 sm:p-8 max-w-[100vw] sm:max-w-2xl w-full border border-slate-700 my-6 sm:my-10 overflow-y-auto max-h-[90vh]"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-3 right-4 text-slate-400 hover:text-cyan-400 text-xl"
                                onClick={() => setSelectedProject(null)}
                            >
                                ✕
                            </button>

                            <h3 className="text-3xl font-semibold text-cyan-400 mb-2">
                                {selectedProject.title}
                            </h3>
                            <div className="text-slate-400 mb-4">
                                {selectedProject.company} •{" "}
                                {selectedProject.period}
                            </div>

                            <div className="text-slate-300 leading-relaxed space-y-4">
                                {selectedProject.summary
                                    ?.split("\n")
                                    .map((para: string, idx: number) => (
                                        <p key={idx}>{para.trim()}</p>
                                    ))}
                            </div>

                            {selectedProject.contributions && (
                                <div className="mt-6">
                                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                                        Key Contributions:
                                    </h4>
                                    <ul className="list-disc ml-6 space-y-2 text-slate-300">
                                        {selectedProject.contributions.map(
                                            (point, idx) => (
                                                <li key={idx}>{point}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}

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
                            {/* Links */}
                            {selectedProject.links &&
                                selectedProject.links.length > 0 && (
                                    <div className="mt-6">
                                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                                            Important Links:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.links.map(
                                                (link, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={link.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                        className="text-xs text-cyan-400 hover:text-cyan-300 underline transition-colors"
                                                    >
                                                        {link.name}
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
