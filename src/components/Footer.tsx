import { GithubIcon, Mail, ArrowUp } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { resumeData } from "../data/resumeData";

export default function Footer() {
    return (
        <footer className="mt-8 bg-linear-to-b from-slate-900 to-slate-950 border-t border-slate-800 text-slate-400">
            <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
                <div className="text-center md:text-left">
                    <p className="text-slate-300 font-semibold">
                        {resumeData.name}
                    </p>
                    <p className="text-slate-500 mt-0.5">
                        Built with{" "}
                        <span className="text-cyan-400 font-medium">
                            Next.js
                        </span>{" "}
                        &{" "}
                        <span className="text-cyan-400 font-medium">
                            Tailwind CSS
                        </span>
                    </p>
                </div>

                <nav
                    className="flex items-center gap-5"
                    aria-label="Social links"
                >
                    <a
                        href={resumeData.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                        aria-label="GitHub profile"
                    >
                        <GithubIcon size={20} aria-hidden="true" />
                    </a>
                    <a
                        href={resumeData.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                        aria-label="LinkedIn profile"
                    >
                        <LinkedinIcon size={20} />
                    </a>
                    <a
                        href={`mailto:${resumeData.email}`}
                        className="hover:text-cyan-400 transition-colors"
                        aria-label={`Email ${resumeData.name}`}
                    >
                        <Mail size={20} aria-hidden="true" />
                    </a>
                </nav>

                <a
                    href="#about"
                    className="flex items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors text-sm"
                    aria-label="Back to top"
                >
                    <ArrowUp size={14} aria-hidden="true" />
                    Back to Top
                </a>
            </div>
        </footer>
    );
}
