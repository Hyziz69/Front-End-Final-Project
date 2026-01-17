"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const row: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const specs = [
  { label: "Driver Size", value: "40 mm" },
  { label: "Frequency Range", value: "20 Hz – 20 kHz" },
  { label: "Noise Cancellation", value: "Active (ANC)" },
  { label: "Battery Life", value: "Up to 40 hours" },
  { label: "Charging", value: "USB-C Fast Charge" },
  { label: "Connectivity", value: "Bluetooth 5.3" },
  { label: "Weight", value: "260 g" },
  { label: "Microphones", value: "Dual Beamforming" },
];

const TechSpecsSection = () => {
  return (
    <section className="bg-[#050506] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Technical Specifications
          </h2>
          <p className="text-gray-400">
            Precision-engineered components designed for uncompromising sound.
          </p>
        </motion.div>

        {/* Specs list */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {specs.map(({ label, value }) => (
            <motion.div
              key={label}
              variants={row}
              className="flex items-center justify-between py-4"
            >
              <div className="flex items-center gap-4">
                <span className="block w-1 h-6 bg-[#FDD90B] rounded-full" />
                <span className="text-gray-400">{label}</span>
              </div>

              <span className="text-white font-medium">{value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechSpecsSection;
