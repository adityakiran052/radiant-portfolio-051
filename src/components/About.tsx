import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { GraduationCap, Award } from "lucide-react";

const timelineData = [
  {
    year: "2022 - Present",
    title: "MIT World Peace University",
    description: "BTech in Computer Science (AI and Data Science)",
    details: "CGPA: 8.78/10",
    icon: GraduationCap,
  },
  {
    year: "2021 - 2022",
    title: "Montfort Academy",
    description: "HSC: 86%, JEE Mains 2023: 91%ile",
    icon: GraduationCap,
  },
  {
    year: "2021 - 2022",
    title: "Head Boy",
    description: "Student Leadership Role",
    icon: Award,
  },
  {
    year: "2024",
    title: "RIDE'24 Volunteer",
    description: "MIT-WPU Community Service",
    icon: Award,
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Education & Leadership</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    {item.details && (
                      <p className="text-sm text-primary mt-1">{item.details}</p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;