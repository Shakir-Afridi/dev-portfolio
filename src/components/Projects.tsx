"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Activity, X, ExternalLink } from "lucide-react";
import { Project, resumeData } from "../data/resumeData";

function ProjectCard({
    p,
    i,
    onSelect,
}: {
    p: Project;
    i: number;
    onSelect: (p: Project) => void;
}) {
    return (
        <motion.article
            className="group bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-700 shadow-lg hover:shadow-cyan-400/20 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
        >
            {/* Card header */}
            <div className="p-5 bg-linear-to-b from-slate-700/50 to-slate-800/50 flex flex-col items-center justify-center text-center">
                <div className="mb-3 text-cyan-400" aria-hidden="true">
                    <Activity size={34} />
                </div>
                <h3 className="text-sm font-semibold text-cyan-300 leading-snug">
                    {p.title}
                </h3>
            </div>

            {/* Card body */}
            <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-2 gap-2">
                    <p className="text-xs text-slate-400 font-medium truncate">
                        {p.company}
                    </p>
                    <span className="text-xs text-slate-500 shrink-0">
                        {p.year || p.period}
                    </span>
                </div>

                <p className="text-slate-400 text-sm line-clamp-3 mb-4 leading-relaxed flex-1">
                    {p.summary}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech?.slice(0, 3).map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs bg-slate-700/60 border border-slate-600/60 text-slate-300 px-2 py-0.5 rounded-md"
                        >
                            {tech}
                        </span>
                    ))}
                    {p.tech && p.tech.length > 3 && (
                        <span className="text-xs bg-slate-700/40 text-slate-500 px-2 py-0.5 rounded-md">
                            +{p.tech.length - 3}
                        </span>
                    )}
                </div>

                {/* External links */}
                {p.links && p.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-4">
                        {p.links.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`${link.name} (opens in new tab)`}
                                className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
                            >
                                <ExternalLink size={10} aria-hidden="true" />
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}

                <button
                    type="button"
                    onClick={() => onSelect(p)}
                    className="w-full mt-auto py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                    aria-label={`View details for ${p.title}`}
                >
                    <Eye size={14} aria-hidden="true" />
                    View Details
                </button>
            </div>
        </motion.article>
    );
}

function ProjectModal({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-project-title"
                className="relative bg-slate-900 rounded-2xl p-6 sm:p-8 max-w-2xl w-full border border-slate-700 overflow-y-auto max-h-[90vh] shadow-2xl"
                initial={{ scale: 0.93, opacity: 0, y: 16 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.93, opacity: 0, y: 16 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="absolute top-4 right-4 text-slate-400 hover:text-cyan-400 transition p-1.5 rounded-lg hover:bg-slate-800"
                    onClick={onClose}
                    aria-label="Close dialog"
                >
                    <X size={18} />
                </button>

                <h3
                    id="modal-project-title"
                    className="text-2xl font-bold text-cyan-400 mb-1 pr-10"
                >
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                    {project.company} · {project.period}
                </p>

                <div className="text-slate-300 text-sm leading-relaxed space-y-3">
                    {project.summary?.split("\n").map((para, idx) =>
                        para.trim() ? <p key={idx}>{para.trim()}</p> : null
                    )}
                </div>

                {project.contributions && project.contributions.length > 0 && (
                    <div className="mt-6">
                        <h4 className="text-base font-semibold text-cyan-400 mb-3">
                            Key Contributions
                        </h4>
                        <ul className="space-y-2" role="list">
                            {project.contributions.map((point, idx) => (
                                <li
                                    key={idx}
                                    className="text-slate-300 text-sm flex items-start gap-2 leading-relaxed"
                                >
                                    <span
                                        className="text-cyan-400 mt-1 shrink-0 text-xs"
                                        aria-hidden="true"
                                    >
                                        ▸
                                    </span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.outcome && (
                    <div className="mt-6">
                        <h4 className="text-base font-semibold text-cyan-400 mb-2">
                            Outcome
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            {project.outcome}
                        </p>
                    </div>
                )}

                {project.tech && project.tech.length > 0 && (
                    <div className="mt-6">
                        <h4 className="text-base font-semibold text-cyan-400 mb-3">
                            Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs bg-slate-800 border border-slate-700 text-slate-300 px-2.5 py-1 rounded-md"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {project.links && project.links.length > 0 && (
                    <div className="mt-6">
                        <h4 className="text-base font-semibold text-cyan-400 mb-3">
                            Links
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {project.links.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${link.name} (opens in new tab)`}
                                    className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
                                >
                                    <ExternalLink size={13} aria-hidden="true" />
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleSelect = useCallback((p: Project) => setSelectedProject(p), []);
    const handleClose = useCallback(() => setSelectedProject(null), []);

    return (
        <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
            {(resumeData?.openSourceProjects?.length ?? 0) > 0 && (
                <>
                    <motion.h2
                        className="text-4xl font-bold text-cyan-400 mb-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Open Source Projects
                    </motion.h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
                        {resumeData.openSourceProjects?.map((p, i) => (
                            <ProjectCard
                                key={i}
                                p={p}
                                i={i}
                                onSelect={handleSelect}
                            />
                        ))}
                    </div>
                </>
            )}

            <motion.h2
                className="text-4xl font-bold text-cyan-400 mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {resumeData.projects.map((p, i) => (
                    <ProjectCard key={i} p={p} i={i} onSelect={handleSelect} />
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={handleClose}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
