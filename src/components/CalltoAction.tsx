"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
    const handleScrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="px-6 py-8 max-w-7xl mx-auto">
            <motion.div
                className="rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 p-[1px] shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="rounded-2xl bg-slate-900/90 backdrop-blur-md text-center py-12 px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Ready to Build Something Amazing?
                    </h2>

                    <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Leveraging my experience in{" "}
                        <span className="text-cyan-400 font-semibold">
                            modern web technologies
                        </span>
                        , I specialize in creating{" "}
                        <span className="text-cyan-400 font-semibold">
                            scalable, user-centric applications
                        </span>
                        that blend performance with exceptional design. Let’s
                        collaborate and bring your next idea to life.
                    </p>

                    <motion.button
                        onClick={handleScrollToContact}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-white text-sky-600 font-semibold py-3 px-6 rounded-md shadow hover:bg-slate-100 transition-colors"
                    >
                        Let’s Collaborate
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
}
