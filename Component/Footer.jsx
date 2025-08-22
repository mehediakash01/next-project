"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-gray-800 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold mb-2">PageTurner</h2>
          <p>Your one-stop online bookstore for all your favorite reads.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-[#23BE0A]">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#23BE0A]">Products</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#23BE0A]">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#23BE0A]">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social & Subscribe */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-700 hover:text-[#23BE0A]">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-700 hover:text-[#23BE0A]">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-700 hover:text-[#23BE0A]">
              <FaInstagram />
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} PageTurner. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
