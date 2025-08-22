"use client";
import React, { useState } from "react";
import Link from "next/link";
import SocialLogin from "./SocialLogin";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setMessage("✅ User registered successfully!");
      form.reset();
    } catch (err) {
      setMessage("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto space-y-6 p-6 rounded-2xl shadow-lg bg-white"
    >
      <h2 className="text-2xl font-bold text-center ">Create Account</h2>

      <label className="form-control w-full">
        <span className="label-text font-bold mb-1">Name</span>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="input input-bordered w-full"
          required
        />
      </label>

      <label className="form-control w-full">
        <span className="label-text font-bold mb-1">Email</span>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="input input-bordered w-full"
          required
        />
      </label>

      <label className="form-control w-full">
        <span className="label-text font-bold mb-1">Password</span>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="input input-bordered w-full"
          required
        />
      </label>

      <button
        type="submit"
        className="w-full h-12 bg-[#23BE0A] hover:bg-[#23BE0A70] text-white font-bold rounded-lg transition"
        disabled={loading}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>

      {message && <p className="text-center text-sm font-semibold">{message}</p>}

      <p className="text-center text-gray-600">Or Sign In with</p>
      <SocialLogin />

      <p className="text-center">
        Already have an account?{" "}
        <Link href="/Login" className=" font-bold hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
