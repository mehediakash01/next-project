"use client";

import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        
        {/* Placeholder login button */}
        <button
          className="w-full py-2 px-4 text-white font-semibold rounded-lg"
          style={{ backgroundColor: "#23BE0A" }}
          onClick={() => alert("Login functionality coming soon!")}
        >
          Sign In with Google
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Dont have an account?
          <a href="/signup" className="text-[#59C6D2] font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
