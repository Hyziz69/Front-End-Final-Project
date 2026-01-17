import { easeOut, motion } from "framer-motion";
import FeatureBlock from "../../building-blocks/FeatureBlock";

const Features = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-[#050506] text-white px-4 sm:px-6 lg:px-12 my-12">
      <motion.h1
        initial={{ y: 50, opacity: 0, filter: "blur(12px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: easeOut }}
        className="
          text-4xl
          sm:text-5xl
          lg:text-7xl
          font-semibold
          text-center
          mt-20
          mb-16
        "
      >
        Why these headphones
      </motion.h1>

      <div className="w-full max-w-7xl flex flex-col gap-20">
        <FeatureBlock
          id={0}
          text="bitch ass nigga"
          reversed={false}
          imageSrc="sound.png"
        />
        <FeatureBlock
          id={1}
          text="bitch ass nigga"
          reversed={true}
          imageSrc="noiseCancelation.png"
        />
        <FeatureBlock
          id={2}
          text="bitch ass nigga"
          reversed={false}
          imageSrc="battery.png"
        />
        <FeatureBlock
          id={3}
          text="bitch ass nigga"
          reversed={true}
          imageSrc="premium.png"
        />
      </div>
    </section>
  );
};

export default Features;
