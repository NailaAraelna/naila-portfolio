import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SocialButtons from "./components/SocialButtons";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <main className="overflow-x-hidden
    bg-[#FFF9F5]
    text-gray-900
    dark:bg-[#0F172A]
    dark:text-white
    transition-colors
    duration-500">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <SocialButtons />
      <Footer />
      <ThemeToggle />
    </main>
  );
}