"use client";

import { useState, useEffect, FormEvent } from "react";
import { useParams } from "next/navigation";
import { signIn } from "next-auth/react";

export default function AuthPage() {
  const { mode } = useParams<{ mode: string }>();
  const [modeParam, setModeParam] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (mode === "login" || mode === "register") {
      setModeParam(mode);
    }
  }, [mode]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      window.location.href = "/";
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-[#050506] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#0E0E10] rounded-2xl p-6 shadow-xl border border-white/5">
        <a href="/" className="text-white">
          Go back
        </a>

        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-white">
            {modeParam === "login" ? "Welcome back" : "Create an account"}
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            {modeParam === "login"
              ? "Log in to continue your sound experience"
              : "Sign up and feel the sound"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {modeParam === "register" && (
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-[#1A1A1A] text-white placeholder-gray-500 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#FDD90B]"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#1A1A1A] text-white placeholder-gray-500 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#FDD90B]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#1A1A1A] text-white placeholder-gray-500 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#FDD90B]"
          />

          <button
            type="submit"
            className="w-full bg-[#FDD90B] text-[#050506] font-medium py-3 rounded-xl hover:bg-[#E6C200] transition cursor-pointer"
          >
            {modeParam === "login" ? "Log in" : "Sign up"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs text-gray-500">OR</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="
            w-full mb-3 py-3 rounded-xl
            bg-white text-black font-medium
            hover:bg-gray-200 transition cursor-pointer
          "
        >
          Continue with Google
        </button>

        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="
            w-full py-3 rounded-xl
            bg-white text-black font-medium
            hover:bg-gray-200 transition cursor-pointer
          "
        >
          Continue with GitHub
        </button>

        <button
          onClick={() =>
            setModeParam(modeParam === "login" ? "register" : "login")
          }
          className="w-full mt-6 text-gray-400 text-sm hover:text-white transition cursor-pointer"
        >
          {modeParam === "login"
            ? "Create an account"
            : "Already have an account?"}
        </button>
      </div>
    </div>
  );
}
