import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skillls";
import CallToAction from "@/components/CalltoAction";

export default function Page() {
    return (
        <main>
            <Hero />
            <Education />
            <Experience />
            <CallToAction />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
