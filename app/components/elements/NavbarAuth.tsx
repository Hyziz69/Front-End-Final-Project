"use client";

import { useSession, signOut } from "next-auth/react";
import NavButton from "./NavButton";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const NavbarAuth = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <span className="text-gray-400">Loading...</span>;
  }

  return (
    <>
      {session ? (
        <div className="flex items-center gap-4">
          <span className="text-gray-400 mr-5">{session.user?.name}</span>
          <Link href={"/cart"}>
            <Image
              src={"/images/Cart.png"}
              width={32}
              height={28}
              alt="Cart Image"
              className="mr-6 cursor-pointer"
            />
          </Link>
          <button
            onClick={() => signOut()}
            className="text-md text-gray-400 hover:text-white transition border-2 px-6 py-2 rounded-lg cursor-pointer"
          >
            Log out
          </button>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default NavbarAuth;
