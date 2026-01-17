"use client";

import { motion } from "framer-motion";
import Navbar from "../components/building-blocks/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#050506] px-6 py-28">
        <div className="max-w-7xl mx-auto space-y-40">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <a href="/" className="text-white ml-1">
              Go back
            </a>
            <span className="block h-1 w-20 bg-[#FDD90B] rounded-full mb-8" />
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6">
              About SoundPulse
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              SoundPulse is a modern audio company built around precision,
              reliability, and thoughtful design.
            </p>
          </motion.section>

          <section className="grid md:grid-cols-3 gap-14">
            {[
              {
                title: "Purpose",
                text: "We focus on creating products and experiences that feel intentional, refined, and consistent.",
              },
              {
                title: "Approach",
                text: "Decisions are driven by quality, simplicity, and long-term value — not trends.",
              },
              {
                title: "Standards",
                text: "Every release reflects our commitment to detail, performance, and trust.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-6"
              >
                <span className="absolute left-0 top-1 h-5 w-1 bg-[#FDD90B] rounded-full" />
                <h2 className="text-xl font-medium text-white mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </section>

          <section className="relative rounded-3xl bg-[#0E0E10] px-12 py-20">
            <div className="absolute inset-0 rounded-3xl bg-[#FDD90B]/10 blur-3xl" />
            <div className="relative max-w-3xl">
              <h3 className="text-3xl font-semibold text-white mb-6">
                Built as a long-term brand
              </h3>
              <p className="text-gray-400 max-w-lg leading-relaxed">
                SoundPulse was founded with a long-term perspective — focusing
                on trust, consistency, and a clear identity rather than
                short-term releases.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-2 md:grid-cols-4 gap-14">
            {[
              { label: "Founded", value: "2021" },
              { label: "Headquarters", value: "Europe" },
              { label: "Focus", value: "Premium Audio" },
              { label: "Customers", value: "Worldwide" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <p className="text-[#FDD90B] text-2xl font-semibold mb-2">
                  {item.value}
                </p>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-gray-400 leading-relaxed">
              We believe strong brands are built through consistency, respect
              for users, and attention to detail — values that guide everything
              we do.
            </p>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
