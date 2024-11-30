import { motion } from "framer-motion";
import { Card } from "./ui/card";

const skills = {
  Languages: ["C++", "Python", "C", "HTML", "CSS", "JavaScript", "SQL"],
  "Frameworks/Libraries": ["Pandas", "NumPy", "Matplotlib", "Node.js", "PowerBI", "Apache"],
  Technologies: ["Linux", "Xampp", "JavaServer Pages (JSP)", "Object-Oriented Programming"],
  Tools: ["VS Code", "Eclipse", "GitHub"],
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools I've mastered throughout my journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium transition-all hover:scale-105 hover:bg-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;