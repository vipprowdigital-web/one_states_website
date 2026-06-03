

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const serviceLinks = [
  { name: "Hotel Brand Tie-Ups", href: "/services/hotel-brand-tie-ups" },
  { name: "Commercial Retail Leasing", href: "/services/commercial-retail-leasing" },
  { name: "Warehouse Solutions", href: "/services/warehouse-leasing" },
  { name: "Large Asset Transaction Advisory", href: "/services/large-asset-transaction-advisory" },
  { name: "JV & Strategic Collaborations", href: "/services/jv-collaboration" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

  const dropdownVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.98,
      transition: { duration: 0.15 },
    },
  };

  const isServicesActive = pathname.startsWith("/services");

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
          className={`sm:w-40 w-38 text-xl tracking-wider cursor-pointer font-extrabold transition-colors duration-300 ${
            isScrolled ? "text-white" : "text-primary"
          }`}
        >
          <Image
            width={1000}
            height={500}
            src={
              isScrolled
                ? "/one-states-logo-light.png"
                : "/one-states-logo-dark.png"
            }
            alt="One States Logo"
            className="w-full h-full"
          />
        </Link>

        {/* Hamburger */}
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
            const isActive = pathname === link.href || (link.hasDropdown && isServicesActive);

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className={`flex items-center gap-1 transition-colors duration-300 font-bold ${
                      isActive
                        ? "text-secondary opacity-100"
                        : isScrolled
                          ? "text-white/80 hover:text-white"
                          : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <motion.span
                      animate={{ rotate: dropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} strokeWidth={2.5} />
                    </motion.span>
                  </motion.button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white shadow-xl border border-gray-100 rounded-sm overflow-hidden z-50"
                      >
                        {/* Top accent line */}
                        <div className="h-0.5 w-full bg-secondary" />

                        <div className="py-2">
                          {serviceLinks.map((service, i) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setDropdownOpen(false)}
                              className={`block px-5 py-3 text-sm font-semibold text-gray-700 hover:text-secondary hover:bg-gray-50 transition-all duration-200 border-b border-gray-50 last:border-0 ${
                                pathname === service.href
                                  ? "text-secondary bg-orange-50"
                                  : ""
                              }`}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>

                        {/* View all link */}
                        <div className="border-t border-gray-100">
                          <Link
                            href="/services"
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center justify-between px-5 py-3 text-xs font-black tracking-widest uppercase text-secondary hover:bg-orange-50 transition-colors duration-200"
                          >
                            View All Services
                            <span className="text-base">→</span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

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
              className={`flex flex-col font-medium border-t pt-4 mt-3 ${
                isScrolled ? "border-white/20" : "border-gray-200"
              }`}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.hasDropdown && isServicesActive);

                if (link.hasDropdown) {
                  return (
                    <motion.div key={link.name} variants={linkVariants}>
                      {/* Services toggle */}
                      <button
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        className={`w-full flex items-center justify-between py-3 px-4 transition-colors duration-200 font-bold ${
                          isActive
                            ? "text-secondary"
                            : isScrolled
                              ? "text-white/80"
                              : "text-gray-700"
                        }`}
                      >
                        Services
                        <motion.span
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={14} strokeWidth={2.5} />
                        </motion.span>
                      </button>

                      {/* Mobile sub-links */}
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div
                              className={`ml-4 border-l-2 border-secondary pl-3 mb-2 flex flex-col gap-1`}
                            >
                              {serviceLinks.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setMobileServicesOpen(false);
                                  }}
                                  className={`block py-2 px-2 text-sm font-semibold rounded transition-colors duration-200 ${
                                    pathname === service.href
                                      ? "text-secondary"
                                      : isScrolled
                                        ? "text-white/70 hover:text-white"
                                        : "text-gray-600 hover:text-primary"
                                  }`}
                                >
                                  {service.name}
                                </Link>
                              ))}
                              <Link
                                href="/services"
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                                className="block py-2 px-2 text-xs font-black tracking-widest uppercase text-secondary"
                              >
                                View All →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.name}
                    variants={linkVariants}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`transition-colors duration-200 block py-3 px-4 rounded ${
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


// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Blog", href: "/blog" },
//   { name: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();

//   // Handle the scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuVariants = {
//     closed: {
//       opacity: 0,
//       height: 0,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//         staggerChildren: 0.05,
//         staggerDirection: -1,
//       },
//     },
//     open: {
//       opacity: 1,
//       height: "auto",
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 25,
//         staggerChildren: 0.07,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const linkVariants = {
//     closed: { opacity: 0, y: -10 },
//     open: { opacity: 1, y: 0 },
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full p-2 md:px-8 transition-all duration-500 ease-in-out z-50 ${
//         isScrolled ? "bg-primary text-white" : "bg-white text-gray-800"
//       }`}
//     >
//       <div className="w-full md:w-3/4 mx-auto flex flex-row justify-between items-center px-4 py-2">
//         {/* Logo */}
//         <Link
//           href="/"
//           className={`sm:w-40 w-38 text-xl tracking-wider cursor-pointer font-extrabold transition-colors duration-300 ${
//             isScrolled ? "text-white" : "text-primary"
//           }`}
//         >
//           <Image
//             width={1000}
//             height={500}
//             src={
//               isScrolled
//                 ? "/one-states-logo-light.png"
//                 : "/one-states-logo-dark.png"
//             }
//             alt="One States Logo"
//             className="w-full h-full"
//           />
//         </Link>

//         {/* Hamburger Icon Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="block md:hidden focus:outline-none p-2 relative w-6 h-6"
//           aria-label="Toggle Menu"
//         >
//           <div className="flex flex-col justify-between w-6 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             <motion.span
//               animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
//               transition={{ type: "spring", stiffness: 260, damping: 20 }}
//               className={`w-full h-0.5 block rounded-full transition-colors duration-300 ${
//                 isScrolled ? "bg-white" : "bg-gray-800"
//               }`}
//             />
//             <motion.span
//               animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
//               transition={{ duration: 0.2 }}
//               className={`w-full h-0.5 block rounded-full transition-colors duration-300 ${
//                 isScrolled ? "bg-white" : "bg-gray-800"
//               }`}
//             />
//             <motion.span
//               animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
//               transition={{ type: "spring", stiffness: 260, damping: 20 }}
//               className={`w-full h-0.5 block rounded-full transition-colors duration-300 ${
//                 isScrolled ? "bg-white" : "bg-gray-800"
//               }`}
//             />
//           </div>
//         </button>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-8 font-medium">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;
//             return (
//               <motion.div
//                 key={link.name}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link
//                   href={link.href}
//                   className={`transition-colors duration-300 block font-bold ${
//                     isActive
//                       ? "text-secondary opacity-100"
//                       : isScrolled
//                         ? "text-white/80 hover:text-white"
//                         : "text-gray-600 hover:text-primary"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Mobile Navigation Panel */}
//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             variants={menuVariants}
//             initial="closed"
//             animate="open"
//             exit="closed"
//             className="md:hidden overflow-hidden"
//           >
//             <div
//               className={`flex flex-col space-y-3 font-medium border-t pt-4 mt-3 ${
//                 isScrolled ? "border-white/20" : "border-gray-200"
//               }`}
//             >
//               {navLinks.map((link) => {
//                 const isActive = pathname === link.href;
//                 return (
//                   <motion.div
//                     key={link.name}
//                     variants={linkVariants}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Link
//                       href={link.href}
//                       onClick={() => setIsOpen(false)}
//                       className={`transition-colors duration-200 block py-1 px-4 rounded ${
//                         isActive
//                           ? "text-secondary font-bold"
//                           : isScrolled
//                             ? "text-white/80 hover:text-white"
//                             : "text-gray-700 hover:bg-gray-50 hover:text-primary"
//                       }`}
//                     >
//                       {link.name}
//                     </Link>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }
