"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { resumeData } from "../data/resumeData";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <section
            id="contact"
            className="bg-gradient-to-b max-w-7xl mx-auto px-6 py-16"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Get in <span className="text-cyan-400">Touch</span>
                    </h2>
                    <p className="text-slate-400 mb-8">
                        {resumeData.contactUsDesc}
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-center space-x-4">
                            <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-cyan-400">
                                    Our Location
                                </h4>
                                <p className="text-slate-400">
                                    {resumeData.location}
                                </p>
                            </div>
                        </li>

                        <li className="flex items-center space-x-4">
                            <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-cyan-400">
                                    Email Us
                                </h4>
                                <p className="text-slate-400">
                                    {resumeData.email}
                                </p>
                            </div>
                        </li>

                        <li className="flex items-center space-x-4">
                            <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-cyan-400">
                                    Call Us
                                </h4>
                                <p className="text-slate-400">
                                    {resumeData.phone}
                                </p>
                            </div>
                        </li>
                    </ul>
                    {/* <div className="rounded-3xl overflow-hidden shadow-lg h-[400px] mt-6">
                        <iframe
                            title="Company Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13605.476692157962!2d74.254265!3d31.447167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f8ab7fcb0f3%3A0x123456789abcdef!2sSunfort%20Gardens%20Housing%20Society!5e0!3m2!1sen!2s!4v1691074381841!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div> */}
                </div>
                {
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Send a{" "}
                            <span className="text-cyan-400">Message</span>
                        </h2>

                        {submitted && (
                            <motion.div
                                className="mt-10 text-lg text-green-400"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                ✅ Thank you for your message! I’ll get back to
                                you soon.
                            </motion.div>
                        )}

                        <motion.form
                            action={`https://formsubmit.co/${resumeData.email}`}
                            method="POST"
                            onSubmit={() => setSubmitted(true)}
                            className="bg-slate-800/50 p-8 border-slate-700 shadow-lg text-left space-y-4 rounded-3xl overflow-hidden "
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Hidden inputs for security & UX */}
                            <input
                                type="hidden"
                                name="_captcha"
                                value="false"
                            />
                            <input type="hidden" name="_template" value="box" />
                            <input
                                type="hidden"
                                name="_next"
                                value="https://shakir-ullah.netlify.app/thanks"
                            />
                            <div>
                                <label className="block text-slate-300 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-300 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-300 mb-1">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
                            >
                                Send Message
                            </motion.button>
                        </motion.form>
                    </div>
                }
            </div>
        </section>
    );
}
