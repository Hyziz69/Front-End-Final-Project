"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLink from "../elements/NavLink";
import NavButton from "../elements/NavButton";
import NavbarAuth from "../elements/NavbarAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#050506] text-white w-full fixed top-0 z-50 shadow-md pt-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-xl font-heading tracking-wide">SoundPulse</div>

        <div className="hidden md:flex gap-8">
          <NavLink destination="about" />
          <NavLink destination="help" />
          <NavLink destination="pricing" />
        </div>

        <div className="hidden md:block">
          <NavbarAuth />
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#050506] border-t border-gray-800 py-4 space-y-4 flex flex-col items-center">
          <NavLink destination="About" />
          <NavLink destination="Features" />
          <NavLink destination="Pricing" />

          <button className="bg-[#FDD90B] px-5 py-2 rounded-lg font-medium hover:opacity-90 transition text-black">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
