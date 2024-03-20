import React from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "./Logo.jsx";
import { motion, stagger } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="max-w-screen-2xl mx-auto fixed z-[999] top-0 w-full flex items-center justify-between px-5 sm:px-14 py-5 md:py-12">
      <div id="logo" className=" text-white overflow-hidden">
        <motion.span
          className="inline-block h-fit w-24 origin-left"
          initial={{ rotate: 90, y: "100%", opacity: 0 }}
          animate={{ rotate: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.65, ease: [1, 0, 0, 1], delay: 0.2 }}
        >
          <Logo />
        </motion.span>
      </div>
      <ul id="nav__links" className="hidden md:flex gap-7">
        {["work", "studio", "news", "contact"].map((item, idx) => (
          <li
            key={idx}
            className=" text-base font-medium capitalize overflow-hidden"
          >
            <motion.span
              className="inline-block h-fit w-fit origin-left"
              initial={{ rotate: 90, y: "100%", opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{
                duration: 0.65,
                ease: [1, 0, 0, 1],
                delay: 1 + idx * 0.1,
              }}
            >
              <a href="/">{item}</a>
            </motion.span>
          </li>
        ))}
      </ul>
      <div id="menu" className="text-2xl md:hidden">
        <FiMenu />
      </div>
    </nav>
  );
};

export default Navbar;
