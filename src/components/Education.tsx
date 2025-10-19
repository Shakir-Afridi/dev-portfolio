"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { resumeData } from "../data/resumeData";

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });
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
            className="px-6 py-12 max-w-7xl mx-auto"
            ref={ref}
        >
            <motion.h2
                className="text-3xl font-semibold mb-6 text-cyan-400"
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

            <ul>
                {resumeData.education.map((e, i) => (
                    <motion.li
                        key={i}
                        className="mt-4"
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
                        <div className="font-semibold text-slate-100">
                            {e.degree} — {e.institution}
                        </div>
                        <div className="text-sm text-slate-400">
                            {e.start} — {e.end} • GPA: {e.gpa}
                        </div>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
