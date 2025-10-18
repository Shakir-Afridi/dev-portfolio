import { resumeData } from "../data/resumeData";

export default function Contact() {
    return (
        <section id="contact" className="p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-3">Contact</h2>
            <p>
                Email:{" "}
                <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a>
            </p>
            <p>
                LinkedIn:{" "}
                <a href={resumeData.linkedin} target="_blank" rel="noreferrer">
                    Profile
                </a>
            </p>
        </section>
    );
}
