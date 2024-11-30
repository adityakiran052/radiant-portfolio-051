import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github, Code, Users, Database, Gamepad2, Ticket } from "lucide-react";

const projects = [
  {
    title: "Rock, Paper, Scissors Game",
    description: "Interactive game built with modern web technologies",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://demo.com/rps",
    github: "https://github.com/username/rps",
    icon: Gamepad2,
    color: "from-purple-400 to-pink-600",
  },
  {
    title: "Student Attendance Analyzer",
    description: "Analytics tool for tracking student attendance",
    tech: ["Python", "Pandas", "Matplotlib"],
    demo: "https://demo.com/attendance",
    github: "https://github.com/username/attendance",
    icon: Users,
    color: "from-blue-400 to-purple-600",
  },
  {
    title: "Expense Tracker",
    description: "Personal finance management application",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "https://demo.com/expenses",
    github: "https://github.com/username/expenses",
    icon: Database,
    color: "from-green-400 to-blue-600",
  },
  {
    title: "Ticket Booking System",
    description: "Online platform for event ticket reservations",
    tech: ["PHP", "MySQL", "Bootstrap"],
    demo: "https://demo.com/tickets",
    github: "https://github.com/username/tickets",
    icon: Ticket,
    color: "from-yellow-400 to-orange-600",
  },
  {
    title: "Guess the Word",
    description: "Word guessing game with multiple difficulty levels",
    tech: ["JavaScript", "CSS", "HTML"],
    demo: "https://demo.com/word",
    github: "https://github.com/username/word",
    icon: Code,
    color: "from-red-400 to-yellow-600",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated lines background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
            style={{ top: `${(i + 1) * 5}%` }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
              whileHover={{ y: -10 }}
            >
              <Card className="p-6 h-full flex flex-col bg-purple-900/10 backdrop-blur-lg border-purple-500/20 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] transition-all duration-300">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} w-fit mb-4`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-900/30 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild className="bg-purple-900/30 border-purple-500/20 text-purple-300 hover:bg-purple-900/50">
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
                  <Button variant="outline" size="sm" asChild className="bg-purple-900/30 border-purple-500/20 text-purple-300 hover:bg-purple-900/50">
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