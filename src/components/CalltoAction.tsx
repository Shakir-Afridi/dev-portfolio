"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
    return (
        <section
            className="px-6 py-8 max-w-7xl mx-auto"
            aria-label="Call to action"
        >
            <motion.div
                className="rounded-2xl bg-linear-to-r from-sky-500 via-indigo-500 to-fuchsia-500 p-px shadow-lg shadow-indigo-500/20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="rounded-2xl bg-slate-900/90 backdrop-blur-md text-center py-14 px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Ready to Build Something Amazing?
                    </h2>

                    <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed text-sm md:text-base">
                        Leveraging my experience in{" "}
                        <span className="text-cyan-400 font-semibold">
                            modern web technologies
                        </span>
                        , I specialize in creating{" "}
                        <span className="text-cyan-400 font-semibold">
                            scalable, user-centric applications
                        </span>{" "}
                        that blend performance with exceptional design. Let&apos;s
                        collaborate and bring your next idea to life.
                    </p>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-white text-sky-600 font-semibold py-3 px-7 rounded-xl shadow hover:bg-slate-100 transition-colors"
                    >
                        Let&apos;s Collaborate
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
