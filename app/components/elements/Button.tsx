import { motion } from "framer-motion";

const Button = ({ text }: { text: string }) => {
  return (
    <motion.button
      className="relative overflow-hidden px-7 py-2 rounded-3xl font-medium cursor-pointer border-2 border-[#FDD90B] bg-transparent"
      whileHover="hover"
      initial="rest"
    >
      <motion.div
        className="absolute inset-0 bg-[#FDD90B] origin-bottom"
        variants={{
          rest: { scaleY: 0 },
          hover: { scaleY: 1 },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      <motion.span
        className="relative z-10"
        variants={{
          hover: { color: "black" },
          rest: { color: "#FDD90B" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
    </motion.button>
  );
};

export default Button;
