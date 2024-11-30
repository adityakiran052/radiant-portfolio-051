import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ThreeBackground from "@/components/ThreeBackground";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Index = () => {
  useEffect(() => {
    console.log("Portfolio website loaded with 3D elements");
  }, []);

  return (
    <ThemeProvider>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen relative"
      >
        <ThreeBackground />
        <Navigation />
        
        <section id="home">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Hero />
          </motion.div>
        </section>
        
        <section id="about">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <About />
          </motion.div>
        </section>
        
        <section id="projects">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Projects />
          </motion.div>
        </section>
        
        <section id="skills">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Skills />
          </motion.div>
        </section>
        
        <section id="contact">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Contact />
          </motion.div>
        </section>
      </motion.main>
    </ThemeProvider>
  );
};

export default Index;