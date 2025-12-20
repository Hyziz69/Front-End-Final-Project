import { easeOut, motion } from "framer-motion";
import FeatureBlock from "../../building-blocks/FeatureBlock";

const Features = () => {
  return (
    <section className="w-screen min-h-screen flex flex-col items-center relative bg-[#050506] text-white my-12">
      <motion.h1
        initial={{ y: 50, opacity: 0, filter: "blur(12px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: easeOut }}
        className="text-7xl mb-30 mt-20"
      >
        Why these headphones
      </motion.h1>
      <FeatureBlock
        id={0}
        text="bitch ass nigga"
        reversed={false}
        imageSrc={"sound.png"}
      />
      <FeatureBlock
        id={1}
        text="bitch ass nigga"
        reversed={true}
        imageSrc={"noiseCancelation.png"}
      />
      <FeatureBlock
        id={2}
        text="bitch ass nigga"
        reversed={false}
        imageSrc={"battery.png"}
      />
      <FeatureBlock
        id={3}
        text="bitch ass nigga"
        reversed={true}
        imageSrc={"premium.png"}
      />
    </section>
  );
};
export default Features;
