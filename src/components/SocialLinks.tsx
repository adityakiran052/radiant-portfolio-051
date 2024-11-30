import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full transition-all hover:scale-110 hover:bg-secondary"
        asChild
      >
        <a
          href="https://github.com/adityakiran052"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground"
        >
          <Github className="h-5 w-5" />
        </a>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full transition-all hover:scale-110 hover:bg-secondary"
        asChild
      >
        <a
          href="https://linkedin.com/in/aditya-kiran-a9b748239"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full transition-all hover:scale-110 hover:bg-secondary"
        asChild
      >
        <a
          href="mailto:joyaditya04@gmail.com"
          className="text-foreground"
        >
          <Mail className="h-5 w-5" />
        </a>
      </Button>
    </div>
  );
};

export default SocialLinks;