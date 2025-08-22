"use client";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export default function SocialLogin() {
  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" }); // redirect to home after success
  };

  return (
    <div className="flex justify-center gap-8">
      <button
        onClick={handleGoogleLogin}
        className="bg-slate-200 rounded-full p-3 hover:bg-slate-300 transition"
      >
        <FaGoogle size={20} />
      </button>
    </div>
  );
}
