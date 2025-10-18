import { resumeData } from "../data/resumeData";

export default function Projects() {
    return (
        <section id="projects" className="px-6 py-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-cyan-400">
                Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
                {resumeData.projects.map((p, i) => (
                    <div
                        key={i}
                        className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 shadow cursor-pointer"
                    >
                        <div className="font-semibold text-lg text-slate-100">
                            {p.title}
                        </div>
                        <div className="text-sm text-slate-400">
                            {p.company} • {p.period}
                        </div>
                        <p className="mt-2 text-slate-300">{p.summary}</p>
                        <div className="mt-3 text-sm text-cyan-400">
                            {p.tech.join(", ")}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
