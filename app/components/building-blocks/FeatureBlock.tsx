import featuresData from "@/app/data/features.json";
import { motion, easeOut } from "framer-motion";

const FeatureBlock = ({
  id,
  imageSrc,
  reversed = false,
}: {
  id: number;
  imageSrc: string;
  text?: string;
  reversed?: boolean;
}) => {
  const feature = featuresData.features[id];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0, filter: "blur(12px)" }}
      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: easeOut }}
      className={`
        w-full
        flex
        flex-col
        lg:flex-row
        ${reversed ? "lg:flex-row-reverse" : ""}
        items-center
        gap-10
        py-10
      `}
    >
      <img
        src={`/images/${imageSrc}`}
        alt={feature.title}
        className="
          w-full
          max-w-xs
          sm:max-w-sm
          lg:max-w-md
          aspect-square
          object-contain
        "
      />

      <div className="flex flex-col gap-4 text-center lg:text-left max-w-xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FDD90B]">
          {feature.title}
        </h2>
        <p className="text-base sm:text-lg text-white/80">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureBlock;
