import { resumeData } from "../data/resumeData";

export default function About() {
    return (
        <section id="about" className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-3">About</h2>
            <p>{resumeData.summary}</p>
            <h3 className="mt-4 font-medium">Education</h3>
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
