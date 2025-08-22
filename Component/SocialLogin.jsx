"use client";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

export default function SocialLogin() {

  return (
    <div className="flex justify-center gap-8">
      <p
       
        className="bg-slate-200 rounded-full p-3"
      >
        <FaGoogle type="button" />
      </p>
      <p
      
        className="bg-slate-200 rounded-full p-3"
      >
        <FaGithub type="button" />
      </p>
    </div>
  );
}