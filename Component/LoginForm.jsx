"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Next.js 13+ app router
import { toast } from "react-hot-toast";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res.error) {
      toast.error(res.error); // show error toast
    } else if (res.ok) {
      toast.success("Login successful!"); // success toast
      router.push("/"); // redirect to home
      form.rest();
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

      <button type="submit" className="w-full h-12 bg-orange-500 text-white font-bold">
        {loading ? "Signing in..." : "Sign In"}
      </button>
       <p className="text-center text-gray-600">Or Sign In with</p>
      <SocialLogin></SocialLogin>

      <p className="text-center">
        Don't have an account?{" "}
        <Link href="/register" className="text-orange-500 font-bold">
          Register
        </Link>
      </p>
    </form>
  );
}
