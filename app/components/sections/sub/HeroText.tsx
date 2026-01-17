import { delay, easeInOut, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroButton from "../../elements/HeroButton";

const HeroText = () => {
  const paragraphWords = [
    "Engineered for precision,",
    "designed for obsession",
  ];

  const delay = [0.75, 1];

  return (
    <div className="w-[100%] lg:w-[60%] h-[30%] flex flex-col items-left sm:items-center justify-between  ">
      <div className="mb-5 md:w-[95%] justify-center">
        <div className="w-full flex flex-col items-center md:items-start md:mt-0 mt-12">
          <motion.h1
            className="2xl:text-8xl xl:text-7xl lg:text-5xl md:text-5xl sm:text-7xl text-4xl font-bold leading-tight mb-2 whitespace-nowrap tracking-tight text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: easeInOut, delay: 0.2 }}
          >
            Feel the{" "}
            <motion.span className="relative bg-[linear-gradient(120deg,#FFF4B0_0%,#FFD700_25%,#FFB700_50%,#FFD700_75%,#FFF4B0_100%)] bg-[length:250%_250%] bg-clip-text text-transparent animate-shine">
              Sound
            </motion.span>
          </motion.h1>
          <p className="xl:text-2xl lg:text-lg sm:text-base text-xs mb-5 text-white">
            {paragraphWords.map((word, key) => (
              <motion.span
                key={key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: easeInOut,
                  delay: delay[key],
                }}
              >
                {word + " "}
              </motion.span>
            ))}
          </p>

          <div className="w-[100%] flex justify-center md:justify-start">
            <HeroButton
              text="Buy now"
              mainColor="#FDD90B"
              hoverColor="#E6C200"
              textColor="#050506"
              delay={1.75}
            />
            <HeroButton
              text="Learn more"
              mainColor="#1A1A1A"
              hoverColor="#2A2A2A"
              textColor="#E0E0E0"
              delay={2.1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroText;
