import { motion } from "framer-motion";

export const ScrollReveal = ({ children, delay = 0, yOffset = 50 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.25, 0, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const TextReveal = ({ text, className = "" }) => {
  const words = text.split(" ");
  return (
    <motion.p className={`flex flex-wrap gap-1 ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: index * 0.05,
            ease: [0.25, 0.25, 0, 1],
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  );
};
