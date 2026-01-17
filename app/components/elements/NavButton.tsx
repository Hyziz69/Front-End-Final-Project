import { motion } from "framer-motion";
import Link from "next/link";

const NavButton = ({
  text,
  primaryColor,
  secondaryColor,
  link,
}: {
  text: string;
  primaryColor: string;
  secondaryColor: string;
  link: string;
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
        <Link href={`/authorization/${link}`}>{text}</Link>
      </motion.span>
    </motion.button>
  );
};

export default NavButton;
