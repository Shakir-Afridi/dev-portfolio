import Link from "next/link";
import { resumeData } from "../data/resumeData";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-cyan-400">
                    {resumeData.name}
                </div>
                <nav className="space-x-6 text-slate-200">
                    <Link href="#work">Work</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#about">About</Link>
                    <Link href="#contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
