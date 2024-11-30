import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { useState } from "react";
import SkillChart from "./SkillChart";

const skills = {
  Languages: {
    "C++": 85,
    "Python": 90,
    "C": 80,
    "HTML": 95,
    "CSS": 85,
    "JavaScript": 88,
    "SQL": 82
  },
  "Frameworks/Libraries": {
    "Pandas": 85,
    "NumPy": 80,
    "Matplotlib": 75,
    "Node.js": 78,
    "PowerBI": 70,
    "Apache": 65
  },
  Technologies: {
    "Linux": 85,
    "Xampp": 75,
    "JavaServer Pages (JSP)": 70,
    "Object-Oriented Programming": 90
  },
  Tools: {
    "VS Code": 95,
    "Eclipse": 80,
    "GitHub": 85
  }
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("Languages");

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
            A comprehensive visualization of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Category Selection */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-purple-900/10 backdrop-blur-lg border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Categories</h3>
              <div className="flex flex-col gap-2">
                {Object.keys(skills).map((category) => (
                  <motion.button
                    key={category}
                    className={`px-4 py-2 rounded-lg text-left transition-all ${
                      selectedCategory === category
                        ? "bg-purple-500/30 text-purple-200"
                        : "hover:bg-purple-500/20 text-purple-300"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </Card>
          </div>

          {/* Skill Chart */}
          <div className="lg:col-span-2">
            <Card className="p-6 h-full bg-purple-900/10 backdrop-blur-lg border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">{selectedCategory}</h3>
              <div className="h-[400px]">
                <SkillChart skills={skills[selectedCategory as keyof typeof skills]} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;