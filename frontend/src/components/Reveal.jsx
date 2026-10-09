import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children, tone = "green", className = "" }) => {
  const colors = {
    green: "text-brand-green2",
    orange: "text-orange-400",
    sky: "text-sky-400",
  };
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`h-px w-8 ${tone === "orange" ? "bg-orange-400" : "bg-brand-green2"}`} />
      <span className={`font-mono text-[11px] font-semibold tracking-[0.28em] uppercase ${colors[tone]}`}>
        {children}
      </span>
    </div>
  );
};
