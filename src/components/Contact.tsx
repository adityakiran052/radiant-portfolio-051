import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm always open to new opportunities and collaborations. Feel free to
            reach out through any of these platforms.
          </p>
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;