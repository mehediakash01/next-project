"use client"; 
import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
    const handleSignout = async () => {
    await signOut({ redirect: false });
    toast.success("✅ Logged out successfully!");
  };

  return (
    <nav className="navbar bg-base-100 shadow-sm px-4">
      {/* Left / Brand */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>

            {!session ? (
              <>
                <li>
                  <Link
                    href="/Login"
                    className="btn w-full text-white"
                    style={{ backgroundColor: "#23BE0A" }}
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="btn w-full text-white"
                    style={{ backgroundColor: "#59C6D2" }}
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/DashboardLayout"
                    className="btn w-full text-white"
                    style={{ backgroundColor: "#23BE0A" }}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignout}
                    className="btn w-full text-white"
                    style={{ backgroundColor: "#59C6D2" }}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Brand */}
        <Link href="/" className="btn btn-ghost text-xl">
          PageTurner
        </Link>
      </div>

      {/* Center / Main Nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/product">Products</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>

      {/* Right / User Actions */}
      <div className="navbar-end hidden lg:flex space-x-2">
        {!session ? (
          <>
            <Link
              href="/Login"
              className="btn text-white"
              style={{ backgroundColor: "#23BE0A" }}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="btn text-white"
              style={{ backgroundColor: "#59C6D2" }}
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/DashboardLayout"
              className="btn text-white"
              style={{ backgroundColor: "#23BE0A" }}
            >
              Dashboard
            </Link>
            <button
              onClick={() => signOut()}
              className="btn text-white"
              style={{ backgroundColor: "#59C6D2" }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
