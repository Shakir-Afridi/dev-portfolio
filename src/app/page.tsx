import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
    return (
        <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
