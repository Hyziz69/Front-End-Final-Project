"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050506] border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">SoundPulse</h2>
          <p className="text-gray-400 text-sm max-w-sm">
            Premium audio products designed for people who value clarity,
            comfort, and modern design.
          </p>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
            Navigate
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-gray-400 hover:text-white transition"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/help"
                className="text-gray-400 hover:text-white transition"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="text-gray-400 hover:text-white transition"
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
            Company
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition"
              >
                About us
              </Link>
            </li>
            <li>
              <span className="text-gray-400 text-sm">
                © {new Date().getFullYear()} SoundPulse
              </span>
            </li>
            <li>
              <span className="inline-block mt-3 h-1 w-12 bg-[#FDD90B] rounded-full" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
