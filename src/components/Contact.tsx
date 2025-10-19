import { resumeData } from "../data/resumeData";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section className="bg-gradient-to-b py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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

                    <div className="mt-8">
                        <a
                            href="mailto:contact@yourcompany.com"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300"
                        >
                            Send Message
                        </a>
                    </div>
                </div>

                {/* Map Section */}
                <div className="rounded-3xl overflow-hidden shadow-lg h-[400px]">
                    <iframe
                        title="Company Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13605.476692157962!2d74.34068335!3d31.5203693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f8ab7fcb0f3%3A0x123456789abcdef!2sLahore!5e0!3m2!1sen!2s!4v1691074381841!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
