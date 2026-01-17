"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Alex Morgan",
    role: "Music Producer",
    text: "The sound clarity is unreal. Every detail feels intentional and precise.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sophia Lee",
    role: "UI Designer",
    text: "Beautiful design and an immersive listening experience. Absolutely premium.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Daniel Novak",
    role: "Audio Engineer",
    text: "Balanced, powerful, and incredibly comfortable. Easily my daily headphones.",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
];

const ReviewsSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="bg-[#050506] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-white mb-12"
        >
          What people are saying
        </motion.h2>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#0E0E10] border border-white/10 rounded-2xl p-10"
            >
              <div className="flex flex-col items-center">
                <img
                  src={reviews[index].avatar}
                  alt={reviews[index].name}
                  className="w-16 h-16 rounded-full mb-4 border border-white/10"
                />

                <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-xl">
                  “{reviews[index].text}”
                </p>

                <span className="text-white font-medium">
                  {reviews[index].name}
                </span>
                <span className="text-sm text-gray-500">
                  {reviews[index].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="px-4 py-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={next}
              className="px-4 py-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
