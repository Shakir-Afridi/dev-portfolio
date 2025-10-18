import { resumeData } from "../data/resumeData";

export default function Experience() {
    return (
        <section id="work" className="px-6 py-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-cyan-400">
                Experience
            </h2>
            {resumeData.experience.map((exp, idx) => (
                <div
                    key={idx}
                    className="mb-8 p-6 rounded-lg bg-slate-800/50 border border-slate-700 shadow"
                >
                    <div className="flex justify-between flex-wrap">
                        <div>
                            <div className="font-semibold text-lg">
                                {exp.role} @ {exp.company}
                            </div>
                            <div className="text-sm text-slate-400">
                                {exp.start} — {exp.end ?? "Present"}
                            </div>
                        </div>
                        <div className="text-sm text-slate-500">
                            {exp.location}
                        </div>
                    </div>
                    <ul className="mt-3 list-disc ml-5 space-y-1 text-slate-300">
                        {exp.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
