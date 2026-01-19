"use client";

import NavButton from "./NavButton";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const NavbarAuth = () => {
  return (
    <>
      <NavButton
        text="Log in"
        primaryColor="#FFFFFF"
        secondaryColor="#1A1A1A"
        link="login"
      />
      <NavButton
        text="Sign up"
        primaryColor="#FDD90B"
        secondaryColor="#000000"
        link="register"
      />
    </>
  );
};

export default NavbarAuth;
