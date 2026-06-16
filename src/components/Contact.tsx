"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { resumeData } from "../data/resumeData";

const contactInfo = [
    {
        icon: <MapPin className="w-5 h-5" aria-hidden="true" />,
        label: "Location",
        value: resumeData.location,
        href: undefined as string | undefined,
    },
    {
        icon: <Mail className="w-5 h-5" aria-hidden="true" />,
        label: "Email",
        value: resumeData.email,
        href: `mailto:${resumeData.email}`,
    },
    {
        icon: <Phone className="w-5 h-5" aria-hidden="true" />,
        label: "Phone",
        value: resumeData.phone,
        href: `tel:${resumeData.phone.replace(/\s/g, "")}`,
    },
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <section
            id="contact"
            className="max-w-7xl mx-auto px-6 py-16"
            aria-label="Contact section"
        >
            <motion.h2
                className="text-4xl font-bold text-center text-white mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Get in <span className="text-cyan-400">Touch</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact info */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        {resumeData.contactUsDesc}
                    </p>

                    <ul className="space-y-5" role="list">
                        {contactInfo.map(({ icon, label, value, href }) => (
                            <li key={label} className="flex items-center gap-4">
                                <div className="bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 p-3 rounded-xl shrink-0">
                                    {icon}
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-0.5">
                                        {label}
                                    </p>
                                    {href ? (
                                        <a
                                            href={href}
                                            className="text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                                        >
                                            {value}
                                        </a>
                                    ) : (
                                        <p className="text-slate-400 text-sm">
                                            {value}
                                        </p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact form */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white mb-6">
                        Send a{" "}
                        <span className="text-cyan-400">Message</span>
                    </h3>

                    {submitted ? (
                        <motion.div
                            className="flex items-center gap-3 text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl p-4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            role="status"
                            aria-live="polite"
                        >
                            <CheckCircle
                                size={20}
                                className="shrink-0"
                                aria-hidden="true"
                            />
                            <span>
                                Thank you! I&apos;ll get back to you soon.
                            </span>
                        </motion.div>
                    ) : (
                        <form
                            action={`https://formsubmit.co/${resumeData.email}`}
                            method="POST"
                            onSubmit={() => setSubmitted(true)}
                            className="bg-slate-800/50 border border-slate-700 p-8 space-y-5 rounded-2xl"
                            noValidate
                        >
                            <input
                                type="hidden"
                                name="_captcha"
                                value="false"
                            />
                            <input
                                type="hidden"
                                name="_template"
                                value="box"
                            />
                            <input
                                type="hidden"
                                name="_next"
                                value="https://shakir-ullah.netlify.app/thanks"
                            />
                            <input
                                type="hidden"
                                name="_subject"
                                value="New message from your portfolio!"
                            />

                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className="block text-sm font-medium text-slate-300 mb-2"
                                >
                                    Name{" "}
                                    <span
                                        className="text-red-400"
                                        aria-hidden="true"
                                    >
                                        *
                                    </span>
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    required
                                    autoComplete="name"
                                    placeholder="Your Name"
                                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-email"
                                    className="block text-sm font-medium text-slate-300 mb-2"
                                >
                                    Email{" "}
                                    <span
                                        className="text-red-400"
                                        aria-hidden="true"
                                    >
                                        *
                                    </span>
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    required
                                    autoComplete="email"
                                    placeholder="your@email.com"
                                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="block text-sm font-medium text-slate-300 mb-2"
                                >
                                    Message{" "}
                                    <span
                                        className="text-red-400"
                                        aria-hidden="true"
                                    >
                                        *
                                    </span>
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Your message..."
                                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl shadow-md transition-colors"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
