import featuresData from "@/app/data/features.json";
import { motion, easeOut } from "framer-motion";

const FeatureBlock = ({
  id,
  imageSrc,
  text,
  reversed,
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
      className="w-[80%]  text-white flex mb-4 items-center p-5 mt-15"
      style={{
        flexDirection: reversed ? "row-reverse" : "row",
        marginRight: reversed ? "0" : "6rem",
      }}
    >
      <img
        src={"/images/" + imageSrc}
        alt={imageSrc}
        className="w-[350px] h-[330px]"
      />

      <div className="h-[120px] flex flex-col justify-between">
        <h1 className="text-4xl text-[#FDD90B]">{feature.title}</h1>
        <p className="text-lg">{feature.description}</p>
      </div>
    </motion.div>
  );
};
export default FeatureBlock;
