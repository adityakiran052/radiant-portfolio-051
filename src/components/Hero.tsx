import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { MapPin, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
      {/* Animated background circles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-screen filter blur-xl opacity-30"
          animate={{
            x: mousePosition.x * 0.02 * (i % 2 ? 1 : -1),
            y: mousePosition.y * 0.02 * (i % 2 ? 1 : -1),
          }}
          style={{
            width: `${Math.random() * 300 + 50}px`,
            height: `${Math.random() * 300 + 50}px`,
            background: `radial-gradient(circle, 
              hsl(${Math.random() * 360}, 70%, 50%),
              hsl(${Math.random() * 360}, 70%, 50%))`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-sm font-medium tracking-[0.3em] text-purple-400 bg-purple-900/20 px-4 py-2 rounded-full">
              WELCOME TO MY UNIVERSE
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Aditya Kiran
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 font-light"
          >
            <span className="text-purple-400">{"<"}</span>
            Aspiring Computer Scientist | AI & Data Enthusiast
            <span className="text-purple-400">{"/>"}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-gray-400"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-purple-900/20 px-4 py-2 rounded-full"
            >
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Pune, Maharashtra</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-purple-900/20 px-4 py-2 rounded-full"
            >
              <Phone className="w-4 h-4 text-purple-400" />
              <span>+91 9508557835</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-purple-900/20 px-4 py-2 rounded-full"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span>joyaditya04@gmail.com</span>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center"
          >
            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;