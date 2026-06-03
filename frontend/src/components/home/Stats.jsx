import { motion } from "framer-motion";

const STATS = [
  { value: "15+", label: "Years of Excellence" },
  { value: "4,200+", label: "Properties Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "32", label: "Cities Covered" },
];

// Refined variants tailored specifically for an elegant entry
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Cascades the animations beautifully
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Stats() {
  return (
    <section className="w-full pb-7 md:pb-16 bg-white flex justify-center items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-11/12 md:w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12"
      >
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex flex-col items-center text-center p-6 bg-secondary/5 rounded-2xl relative group transition-all duration-300 hover:shadow-md border border-transparent hover:border-secondary/10"
          >
            <span className="text-secondary font-black text-4xl md:text-5xl tracking-tight mb-2 selection:bg-primary selection:text-white">
              {s.value}
            </span>

            <span className="text-primary text-xs font-bold tracking-widest uppercase px-2 opacity-90">
              {s.label}
            </span>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-secondary rounded-full transition-all duration-300 group-hover:w-1/3" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
