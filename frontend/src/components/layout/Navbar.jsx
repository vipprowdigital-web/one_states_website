"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle the scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-2 md:px-8 transition-all duration-500 ease-in-out z-50 ${
        isScrolled ? "bg-primary text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="w-full md:w-3/4 mx-auto flex flex-row justify-between items-center px-4 py-2">
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl tracking-wider cursor-pointer font-extrabold transition-colors duration-300 ${
            isScrolled ? "text-white" : "text-primary"
          }`}
        >
          MYLOGO
        </Link>

        {/* Hamburger Icon Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden focus:outline-none p-2 relative w-6 h-6"
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col justify-between w-6 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`w-full h-0.5 block rounded-full transition-colors duration-300 ${
                isScrolled ? "bg-white" : "bg-gray-800"
              }`}
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={`w-full h-0.5 block rounded-full transition-colors duration-300 ${
                isScrolled ? "bg-white" : "bg-gray-800"
              }`}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`w-full h-0.5 block rounded-full transition-colors duration-300 ${
                isScrolled ? "bg-white" : "bg-gray-800"
              }`}
            />
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 block font-bold ${
                    isActive
                      ? "text-secondary opacity-100"
                      : isScrolled
                        ? "text-white/80 hover:text-white"
                        : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden"
          >
            <div
              className={`flex flex-col space-y-3 font-medium border-t pt-4 mt-3 ${
                isScrolled ? "border-white/20" : "border-gray-200"
              }`}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    variants={linkVariants}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`transition-colors duration-200 block py-1 px-4 rounded ${
                        isActive
                          ? "text-secondary font-bold"
                          : isScrolled
                            ? "text-white/80 hover:text-white"
                            : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
