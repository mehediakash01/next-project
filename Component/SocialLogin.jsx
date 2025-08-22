"use client";
import { signIn } from "next-auth/react";

import { FaGoogle } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div className="flex justify-center gap-8">
      <button
        onClick={() => signIn("google")}
        className="bg-slate-200 rounded-full p-3"
      >
        <FaGoogle size={20} />
      </button>

   
    </div>
  );
}
