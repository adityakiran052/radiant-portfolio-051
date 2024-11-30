import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-400 hover:bg-purple-900/50 hover:text-purple-300"
          asChild
        >
          <a
            href="https://github.com/adityakiran052"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
        </Button>
      </motion.div>
      
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-400 hover:bg-purple-900/50 hover:text-purple-300"
          asChild
        >
          <a
            href="https://linkedin.com/in/aditya-kiran-a9b748239"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
      </motion.div>
      
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-400 hover:bg-purple-900/50 hover:text-purple-300"
          asChild
        >
          <a
            href="mailto:joyaditya04@gmail.com"
          >
            <Mail className="h-5 w-5" />
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default SocialLinks;