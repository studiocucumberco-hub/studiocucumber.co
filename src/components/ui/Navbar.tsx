"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Only transparent on homepage
  const isHome = pathname === "/";

  // Check scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHome]);

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
      className={`
        fixed top-0 left-0 w-full z-30 font-Mont uppercase transition-colors duration-500
        ${isHome && !scrolled ? "bg-transparent text-white" : "bg-white text-black shadow-sm"}
      `}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="relative flex items-center mx-4 sm:mx-10 lg:mx-16 py-4 justify-between md:justify-center">


        {/* Left Desktop Links */}
        <ul className="hidden md:flex space-x-10 lg:space-x-16 absolute left-0 tracking-wider text-sm md:text-md">
          <li><Link href="/">Home</Link></li>
        </ul>

        {/* Logo */}
        <Link href="/" aria-label="Homepage" className="flex items-center ">

          <Image
            src="/logo.png"
            alt="Logo"
            width={300}
            height={100}
            priority
            className="h-12 sm:h-28 w-auto object-contain"
          />
        </Link>

        {/* Right Desktop Links */}
        <ul className="hidden md:flex space-x-10 lg:space-x-16 absolute right-0 tracking-wider text-sm md:text-md">
          <li><Link href="/work">Work</Link></li>
          <li><Link href="/about">About Us</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden absolute right-0 flex flex-col justify-center items-center w-10 h-10 space-y-1 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke={scrolled?"black":"white"} strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
          </svg>


        </button>

      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#1C1C1C] z-50 transform transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-500 text-white">
          <span className="text-xl font-semibold">Menu</span>
          <button onClick={closeMenu} aria-label="Close mobile menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4 tracking-wider text-white">
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
