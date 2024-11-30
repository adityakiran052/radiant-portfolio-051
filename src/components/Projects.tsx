import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Rock, Paper, Scissors Game",
    description: "Interactive game built with modern web technologies",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://demo.com/rps",
    github: "https://github.com/username/rps",
  },
  {
    title: "Student Attendance Analyzer",
    description: "Analytics tool for tracking student attendance",
    tech: ["Python", "Pandas", "Matplotlib"],
    demo: "https://demo.com/attendance",
    github: "https://github.com/username/attendance",
  },
  {
    title: "Expense Tracker",
    description: "Personal finance management application",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "https://demo.com/expenses",
    github: "https://github.com/username/expenses",
  },
  {
    title: "Ticket Booking System",
    description: "Online platform for event ticket reservations",
    tech: ["PHP", "MySQL", "Bootstrap"],
    demo: "https://demo.com/tickets",
    github: "https://github.com/username/tickets",
  },
  {
    title: "Guess the Word",
    description: "Word guessing game with multiple difficulty levels",
    tech: ["JavaScript", "CSS", "HTML"],
    demo: "https://demo.com/word",
    github: "https://github.com/username/word",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one has helped me
            grow as a developer and solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;