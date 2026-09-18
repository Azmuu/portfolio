import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Education from "../components/Education";
import Learning from "../components/Learning";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-navy-950 text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
