"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/building-blocks/Navbar";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Orders are typically processed within 1–2 business days. Delivery time depends on your location, but most orders arrive within 3–7 business days.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, SoundPulse ships worldwide. International shipping times and fees may vary depending on the destination.",
  },
  {
    question: "What is your return policy?",
    answer:
      "You can return your order within 30 days of delivery, provided the product is unused and in its original packaging.",
  },
  {
    question: "Is there a warranty included?",
    answer:
      "All SoundPulse products come with a 2-year limited warranty covering manufacturing defects.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach our support team through the Contact page. We aim to respond within 24 hours on business days.",
  },
];

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#050506] px-6 py-28">
        <div className="max-w-4xl mx-auto space-y-24">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <a href="/" className="text-white ml-1">
              Go back
            </a>
            <span className="block h-1 w-20 bg-[#FDD90B] rounded-full mb-8" />
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-400 max-w-xl">
              Find quick answers to common questions about orders, delivery, and
              support.
            </p>
          </motion.section>

          <section className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border-b border-white/10">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center py-6 text-left"
                >
                  <span className="text-white text-lg">{faq.question}</span>
                  <span className="text-[#FDD90B] text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <p className="text-gray-400 pb-6 leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
