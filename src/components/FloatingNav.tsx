import { motion } from "framer-motion";

const FloatingNav = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="floating-nav"
    >
      <div className="flex items-center gap-6">
      </div>
    </motion.nav>
  );
};

export default FloatingNav;