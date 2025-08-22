"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
  
      email,
      password,
      callbackUrl:'/'
    });

    setLoading(false);

    if (res.error) {
      setError(res.error);
    } else {
      setError("");
    routr
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
      <label className="form-control w-full">
        <span className="label-text font-bold">Email</span>
        <input type="text" name="email" className="input input-bordered w-full" />
      </label>
      <label className="form-control w-full">
        <span className="label-text font-bold">Password</span>
        <input type="password" name="password" className="input input-bordered w-full" />
      </label>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="w-full h-12 bg-orange-500 text-white font-bold">
        {loading ? "Signing in..." : "Sign In"}
      </button>
      <p className="text-center">
        Don't have an account?{" "}
        <Link href="/register" className="text-orange-500 font-bold">
          Register
        </Link>
      </p>
    </form>
  );
}
