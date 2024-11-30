import { motion } from "framer-motion";
import { Card } from "./ui/card";

const timelineData = [
  {
    year: "2023",
    title: "MIT World Peace University",
    description: "Bachelor's in Computer Science",
  },
  {
    year: "2022",
    title: "Montfort Academy",
    description: "High School Diploma",
  },
  {
    year: "2022",
    title: "Head Boy",
    description: "Student Leadership Role",
  },
  {
    year: "2024",
    title: "RIDE'24 Volunteer",
    description: "Community Service",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm passionate about leveraging technology to solve real-world problems.
            My journey in computer science has equipped me with both technical skills
            and leadership experience.
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
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  {item.year}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;