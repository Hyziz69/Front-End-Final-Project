"use client";

import { motion } from "framer-motion";
import Navbar from "../components/building-blocks/Navbar";
import { useCartStore } from "@/lib/store/cartStore";
import Link from "next/link";

const packages = [
  {
    name: "Standard Edition",
    price: "99€",
    description: "Everything you need to get started.",
    includes: [
      "SoundPulse headphones",
      "USB-C charging cable",
      "Protective case",
      "1-year warranty",
      "Standard delivery",
    ],
    highlight: false,
  },
  {
    name: "Premium Edition",
    price: "149€",
    description: "Our most complete package.",
    includes: [
      "SoundPulse headphones",
      "Premium carrying case",
      "USB-C fast charging cable",
      "2-year extended warranty",
      "Priority delivery",
    ],
    highlight: true,
  },
  {
    name: "Signature Edition",
    price: "199€",
    description: "Designed for the most demanding listeners.",
    includes: [
      "SoundPulse headphones",
      "Leather carrying case",
      "USB-C fast charging cable",
      "3-year extended warranty",
      "Express delivery",
    ],
    highlight: false,
  },
];

const PricingPage = () => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#050506] px-6 py-28">
        <div className="max-w-7xl mx-auto space-y-32">
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
              Choose your edition
            </h1>

            <p className="text-gray-400 text-lg max-w-xl">
              One-time purchase. Transparent pricing. No subscriptions.
            </p>
          </motion.section>

          <section className="grid md:grid-cols-3 gap-12">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl p-10 flex flex-col ${
                  pkg.highlight
                    ? "bg-[#0E0E10] border border-[#FDD90B]/40"
                    : "bg-[#0E0E10] border border-white/10"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FDD90B] text-black text-sm px-4 py-1 rounded-full">
                    Recommended
                  </span>
                )}

                <h2 className="text-2xl font-medium text-white mb-2">
                  {pkg.name}
                </h2>

                <p className="text-gray-400 mb-6">{pkg.description}</p>

                <p className="text-4xl font-semibold text-white mb-8">
                  {pkg.price}
                </p>

                <ul className="space-y-3 mb-10">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="text-gray-400 flex items-center gap-2"
                    >
                      <span className="text-[#FDD90B]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/cart"
                  className="mt-auto"
                  onClick={() =>
                    addItem({
                      id: pkg.name.toLowerCase().replace(/\s+/g, "-"),
                      name: pkg.name,
                      price: parseInt(pkg.price),
                      quantity: 1,
                    })
                  }
                >
                  <button
                    className={`w-full py-3 rounded-xl font-medium transition cursor-pointer ${
                      pkg.highlight
                        ? "bg-[#FDD90B] text-black hover:bg-[#E6C200]"
                        : "border border-white/10 text-white hover:bg-white/5"
                    }`}
                  >
                    Add to cart
                  </button>
                </Link>
              </motion.div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
