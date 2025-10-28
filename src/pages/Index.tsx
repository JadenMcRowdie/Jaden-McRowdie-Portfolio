import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import ResumeLinks from "@/components/ResumeLinks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ResumeLinks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
