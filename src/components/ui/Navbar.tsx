"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 font-Mont w-full z-30 uppercase text-white transition-colors duration-500 ease-in-out bg-gray-900`}
      role="navigation"
      aria-label="Main Navigation"
    >

      <div className="flex items-center justify-between  gap-0 md:gap-52 mx-6 sm:mx-10 lg:mx-16 py-4">

        <Link href="/" aria-label="Homepage" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            quality={75}
            width={240}
            height={80}
            priority
            className="h-10 sm:h-14 w-auto object-contain"
          />
        </Link>

        <ul className="hidden md:flex space-x-10 lg:space-x-16 tracking-wider text-sm md:text-md ">
          {navLinks.map(({ label, href }) => (
            <li key={label} className="relative group ">
              <Link href={href} className="px-1">
                {label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={closeMenu}
          role="presentation"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#1C1C1C] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-500">
          <span className="text-xl font-semibold">Menu</span>
          <button
            onClick={closeMenu}
            aria-label="Close mobile menu"
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4 tracking-wider">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={closeMenu}
                className="block py-2 text-lg hover:text-gray-400"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
