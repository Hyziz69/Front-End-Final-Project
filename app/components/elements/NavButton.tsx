import { motion } from "framer-motion";

const NavButton = ({
  text,
  primaryColor,
  secondaryColor,
}: {
  text: string;
  primaryColor: string;
  secondaryColor: string;
}) => {
  return (
    <motion.button
      className={`relative overflow-hidden px-7 py-2 rounded-xl font-medium cursor-pointer border-2 ml-5 bg-transparent`}
      style={{
        borderColor: primaryColor == "#FFFFFF" ? "#FFFFFF" : "#FDD90B",
      }}
      whileHover="hover"
      initial="rest"
    >
      <motion.div
        className={`absolute inset-0 origin-bottom`}
        variants={{
          rest: { scaleY: 0 },
          hover: { scaleY: 1 },
        }}
        style={{ background: `${primaryColor}` }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      <motion.span
        className="relative z-10"
        variants={{
          hover: { color: `${secondaryColor}` },
          rest: { color: `${primaryColor}` },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
    </motion.button>
  );
};

export default NavButton;
