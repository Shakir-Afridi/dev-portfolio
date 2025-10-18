import { resumeData } from "../data/resumeData";

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-start px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-cyan-400">
                {resumeData.name}
            </h1>
            <p className="mt-4 text-xl text-slate-300">
                {resumeData.title} — {resumeData.location}
            </p>
            <p className="mt-4 max-w-2xl text-slate-400">
                {resumeData.summary}
            </p>
            <div className="mt-6 flex space-x-4">
                <a
                    className="px-4 py-2 bg-cyan-500 text-white rounded-lg shadow hover:bg-cyan-600 transition"
                    href={`mailto:${resumeData.email}`}
                >
                    Email
                </a>
                <a
                    className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition"
                    href={resumeData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
            </div>
        </section>
    );
}
