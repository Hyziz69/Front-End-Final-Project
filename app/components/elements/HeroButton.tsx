import { easeIn, easeInOut, easeOut, motion } from "framer-motion";

const HeroButton = ({
  text,
  mainColor,
  hoverColor,
  textColor,
  delay,
}: {
  text: string;
  mainColor: string;
  hoverColor: string;
  textColor: string;
  delay: number;
}) => {
  return (
    <motion.button
      initial={{ y: 50, opacity: 0, filter: "blur(12px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.15, delay: delay }}
      style={{ backgroundColor: mainColor, color: textColor }}
      className="xl:w-[180px] lg:w-[150px] md:w-[150px] sm:w-[180px] w-[140px] lg:px-4 md:px-6 sm:px-15 px-5 lg:py-4 md:py-4 sm:py-3.5 py-2.5 rounded-xl font-medium cursor-pointer transition-transform duration-200 active:scale-95 mr-4 mb-5"
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = mainColor)}
    >
      {text}
    </motion.button>
  );
};
export default HeroButton;
