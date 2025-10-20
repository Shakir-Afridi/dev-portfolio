"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Layers,
    Palette,
    Wrench,
    Database,
    ServerCog,
} from "lucide-react";

const skillsData = [
    {
        title: "Frontend Frameworks",
        icon: <Code2 className="w-5 h-5 text-cyan-400" />,
        skills: [
            { name: "React", level: 95, color: "bg-cyan-500" },
            { name: "Redux", level: 90, color: "bg-pink-500" },
            { name: "Next.js", level: 80, color: "bg-slate-400" },
        ],
    },
    {
        title: "Programming Languages",
        icon: <Layers className="w-5 h-5 text-orange-400" />,
        skills: [
            { name: "JavaScript", level: 90, color: "bg-yellow-400" },
            { name: "TypeScript", level: 95, color: "bg-blue-400" },
            { name: "HTML5", level: 90, color: "bg-orange-500" },
            { name: "CSS3", level: 90, color: "bg-sky-400" },
        ],
    },
    {
        title: "UI/UX Libraries",
        icon: <Palette className="w-5 h-5 text-pink-400" />,
        skills: [
            { name: "Material UI", level: 95, color: "bg-pink-400" },
            { name: "Tailwind CSS", level: 85, color: "bg-cyan-400" },
            { name: "Styled Components", level: 85, color: "bg-purple-400" },
            { name: "Bootstrap", level: 85, color: "bg-blue-400" },
        ],
    },
    {
        title: "Backend Technologies",
        icon: <ServerCog className="w-5 h-5 text-green-400" />,
        skills: [
            { name: "Node.js", level: 95, color: "bg-green-500" },
            { name: "Express.js", level: 95, color: "bg-emerald-500" },
            { name: "REST APIs", level: 90, color: "bg-cyan-400" },
            { name: "MongoDB", level: 70, color: "bg-green-600" },
        ],
    },
    {
        title: "Development Tools",
        icon: <Wrench className="w-5 h-5 text-yellow-400" />,
        skills: [
            { name: "Git", level: 92, color: "bg-red-500" },
            { name: "VS Code", level: 95, color: "bg-blue-400" },
            { name: "Webpack", level: 80, color: "bg-sky-400" },
            { name: "Vite", level: 88, color: "bg-amber-400" },
        ],
    },
    {
        title: "Databases & Cloud",
        icon: <Database className="w-5 h-5 text-indigo-400" />,
        skills: [
            { name: "PostgreSQL", level: 85, color: "bg-blue-500" },
            { name: "MySQL", level: 85, color: "bg-cyan-500" },
            { name: "AWS", level: 75, color: "bg-orange-400" },
            { name: "Firebase", level: 70, color: "bg-yellow-500" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="max-w-7xl mx-auto px-6 py-8">
            <motion.h2
                className="text-4xl font-bold text-cyan-400 mb-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Skills & Expertise
            </motion.h2>
            <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
                A comprehensive overview of my technical expertise and
                professional competencies.
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {skillsData.map((category, i) => (
                    <motion.div
                        key={i}
                        className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-md hover:shadow-cyan-400/10 transition-all duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        {/* Header */}
                        <div className="flex items-center gap-2 mb-5">
                            {category.icon}
                            <h3 className="text-lg font-semibold text-slate-100">
                                {category.title}
                            </h3>
                        </div>

                        {/* Skills */}
                        <div className="space-y-4">
                            {category.skills.map((skill, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between text-sm text-slate-300 mb-1">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${skill.color} transition-all duration-700`}
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
