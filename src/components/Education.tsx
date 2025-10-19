import { resumeData } from "../data/resumeData";

export default function About() {
    return (
        <section id="about" className="px-6 py-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-cyan-400">
                Education
            </h2>
            <ul>
                {resumeData.education.map((e, i) => (
                    <li key={i} className="mt-2">
                        <div className="font-semibold">
                            {e.degree} — {e.institution}
                        </div>
                        <div className="text-sm">
                            {e.start} — {e.end} • GPA: {e.gpa}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
