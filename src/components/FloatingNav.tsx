import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const FloatingNav = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="floating-nav"
    >
      <div className="flex items-center gap-6">
        <a href="#" className="text-purple-400 hover:text-purple-300">Home</a>
        <a href="#about" className="text-purple-400 hover:text-purple-300">About</a>
        <a href="#projects" className="text-purple-400 hover:text-purple-300">Projects</a>
        <a href="#contact" className="text-purple-400 hover:text-purple-300">Contact</a>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
};

export default FloatingNav;