import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </Component>
  );
}
