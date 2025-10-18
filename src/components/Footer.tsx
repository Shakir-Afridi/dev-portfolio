import { resumeData } from "../data/resumeData";

export default function Footer() {
    return (
        <footer className="mt-12 py-6 text-center text-slate-500 border-t border-slate-800">
            © {new Date().getFullYear()} {resumeData.name} — Built with Next.js
            & Framer Motion
        </footer>
    );
}
