"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Layers,
    Palette,
    Wrench,
    Database,
    ServerCog,
} from "lucide-react";

type SkillEntry = { name: string; level: number; color: string };
type SkillCategory = { title: string; icon: ReactNode; skills: SkillEntry[] };

const skillsData: SkillCategory[] = [
    {
        title: "Frontend Frameworks",
        icon: <Code2 className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
        skills: [
            { name: "React", level: 95, color: "bg-cyan-500" },
            { name: "Redux", level: 90, color: "bg-pink-500" },
            { name: "Next.js", level: 80, color: "bg-slate-400" },
        ],
    },
    {
        title: "Programming Languages",
        icon: <Layers className="w-5 h-5 text-orange-400" aria-hidden="true" />,
        skills: [
            { name: "JavaScript", level: 90, color: "bg-yellow-400" },
            { name: "TypeScript", level: 95, color: "bg-blue-400" },
            { name: "HTML5", level: 90, color: "bg-orange-500" },
            { name: "CSS3", level: 90, color: "bg-sky-400" },
        ],
    },
    {
        title: "UI/UX Libraries",
        icon: <Palette className="w-5 h-5 text-pink-400" aria-hidden="true" />,
        skills: [
            { name: "Material UI", level: 95, color: "bg-pink-400" },
            { name: "Tailwind CSS", level: 85, color: "bg-cyan-400" },
            { name: "Styled Components", level: 85, color: "bg-purple-400" },
            { name: "Bootstrap", level: 85, color: "bg-blue-400" },
        ],
    },
    {
        title: "Backend Technologies",
        icon: <ServerCog className="w-5 h-5 text-green-400" aria-hidden="true" />,
        skills: [
            { name: "Node.js", level: 95, color: "bg-green-500" },
            { name: "Express.js", level: 95, color: "bg-emerald-500" },
            { name: "REST APIs", level: 90, color: "bg-cyan-400" },
            { name: "MongoDB", level: 70, color: "bg-green-600" },
        ],
    },
    {
        title: "Development Tools",
        icon: <Wrench className="w-5 h-5 text-yellow-400" aria-hidden="true" />,
        skills: [
            { name: "Git", level: 92, color: "bg-red-500" },
            { name: "VS Code", level: 95, color: "bg-blue-400" },
            { name: "Webpack", level: 80, color: "bg-sky-400" },
            { name: "Vite", level: 88, color: "bg-amber-400" },
        ],
    },
    {
        title: "Databases & Cloud",
        icon: <Database className="w-5 h-5 text-indigo-400" aria-hidden="true" />,
        skills: [
            { name: "PostgreSQL", level: 85, color: "bg-blue-500" },
            { name: "MySQL", level: 85, color: "bg-cyan-500" },
            { name: "AWS", level: 75, color: "bg-orange-400" },
            { name: "Firebase", level: 70, color: "bg-yellow-500" },
        ],
    },
];

function SkillBar({ skill, delay }: { skill: SkillEntry; delay: number }) {
    return (
        <div>
            <div className="flex justify-between text-sm text-slate-300 mb-1.5">
                <span>{skill.name}</span>
                <span className="tabular-nums text-slate-400">
                    {skill.level}%
                </span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                    className={`h-full ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay,
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="max-w-7xl mx-auto px-6 py-16">
            <motion.h2
                className="text-4xl font-bold text-cyan-400 mb-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Skills & Expertise
            </motion.h2>
            <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto text-sm md:text-base">
                A comprehensive overview of my technical expertise and
                professional competencies.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skillsData.map((category, i) => (
                    <motion.div
                        key={i}
                        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-md hover:shadow-cyan-400/10 hover:border-slate-600 transition-all duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.07 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2.5 mb-5">
                            {category.icon}
                            <h3 className="text-base font-semibold text-slate-100">
                                {category.title}
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {category.skills.map((skill, idx) => (
                                <SkillBar
                                    key={idx}
                                    skill={skill}
                                    delay={idx * 0.12}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
