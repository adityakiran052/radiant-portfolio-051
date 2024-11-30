import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { useState } from "react";

const skills = {
  Languages: ["C++", "Python", "C", "HTML", "CSS", "JavaScript", "SQL"],
  "Frameworks/Libraries": ["Pandas", "NumPy", "Matplotlib", "Node.js", "PowerBI", "Apache"],
  Technologies: ["Linux", "Xampp", "JavaServer Pages (JSP)", "Object-Oriented Programming"],
  Tools: ["VS Code", "Eclipse", "GitHub"],
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-20">
        {[...Array(400)].map((_, i) => (
          <motion.div
            key={i}
            className="border-[0.5px] border-purple-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
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
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
              <Card className="p-6 h-full bg-purple-900/10 backdrop-blur-lg border-purple-500/20 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 text-sm font-medium cursor-pointer relative"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        boxShadow: hoveredSkill === skill
                          ? "0 0 20px rgba(147,51,234,0.5)"
                          : "0 0 0px rgba(147,51,234,0)",
                      }}
                    >
                      {skill}
                      {hoveredSkill === skill && (
                        <motion.div
                          className="absolute -inset-1 rounded-full border border-purple-500"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                        />
                      )}
                    </motion.span>
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