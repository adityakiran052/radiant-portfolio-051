import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { GraduationCap, Award, Brain, Code } from "lucide-react";

const timelineData = [
  {
    year: "2022 - Present",
    title: "MIT World Peace University",
    description: "BTech in Computer Science (AI and Data Science)",
    details: "CGPA: 8.78/10",
    icon: GraduationCap,
    color: "from-purple-400 to-pink-600",
  },
  {
    year: "2021 - 2022",
    title: "Montfort Academy",
    description: "HSC: 86%, JEE Mains 2023: 91%ile",
    icon: Brain,
    color: "from-blue-400 to-purple-600",
  },
  {
    year: "2021 - 2022",
    title: "Head Boy",
    description: "Student Leadership Role",
    icon: Award,
    color: "from-green-400 to-blue-600",
  },
  {
    year: "2024",
    title: "RIDE'24 Volunteer",
    description: "MIT-WPU Community Service",
    icon: Code,
    color: "from-yellow-400 to-orange-600",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 1}s infinite ${Math.random() * 2}s`,
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
            Education & Leadership
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pursuing Computer Science with a focus on AI and Data Science, while actively
            participating in leadership roles and community service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:scale-105 transition-all duration-300 bg-purple-900/10 backdrop-blur-lg border-purple-500/20">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-purple-400">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                    {item.details && (
                      <p className="text-sm text-purple-400 mt-1">{item.details}</p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default About;