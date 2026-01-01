import { motion as Motion } from "framer-motion";

const Reveal = ({ children, delay = 0 }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay
      }}
    >
      {children}
    </Motion.div>
  );
};

export default Reveal;
