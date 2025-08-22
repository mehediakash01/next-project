"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import SocialLogin from "./SocialLogin";
import { toast } from "react-hot-toast";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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

      if (!res.ok) {
        toast.error(data.message || "Registration failed");
        return;
      }

      toast.success("✅ Registered successfully! Logging in...");

      // Auto login after registration
      const loginRes = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (loginRes?.error) {
        toast.error(loginRes.error);
      } else {
        toast.success("🎉 Login successful!");
        router.push("/"); // redirect to home
      }

      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto space-y-6 p-6 rounded-2xl shadow-lg bg-white"
    >
      <h2 className="text-2xl font-bold text-center">Create Account</h2>

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

      <p className="text-center text-gray-600">Or Sign In with</p>
      <SocialLogin />

      <p className="text-center">
        Already have an account?{" "}
        <Link href="/login" className="font-bold hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
