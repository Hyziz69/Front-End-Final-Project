"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AboutSection() {
  return (
    <section className="bg-[#050506] py-24 px-6 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={item}>
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-semibold text-white mb-6"
          >
            About SoundPulse
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 leading-relaxed mb-4"
          >
            SoundPulse is a concept platform focused on delivering a premium
            listening experience through thoughtful design and modern
            technology.
          </motion.p>

          <motion.p
            variants={item}
            className="text-gray-400 leading-relaxed mb-6"
          >
            Built with performance and precision in mind, the project explores
            how minimal UI, smooth interactions, and bold visual hierarchy can
            elevate the presentation of high-fidelity audio products.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            {["High-fidelity sound", "Premium design", "Modern UI/UX"].map(
              (label) => (
                <span
                  key={label}
                  className="px-5 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white text-sm"
                >
                  {label}
                </span>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Visual / highlight */}
        <motion.div variants={item} className="relative">
          <motion.div
            className="absolute -inset-1 rounded-2xl bg-[#FDD90B]/20 blur-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <div className="relative bg-[#0E0E10] border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-medium text-white mb-3">
              Designed with intention
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Every element in this project was crafted to support clarity,
              usability, and emotional impact — from typography and spacing to
              motion and contrast.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
