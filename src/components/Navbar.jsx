import React from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "./Logo.jsx";

const Navbar = () => {
  return (
    <nav className="max-w-screen-2xl mx-auto fixed z-[999] top-0 w-full flex items-center justify-between px-5 sm:px-14 py-5 md:py-12">
      <div id="logo" className="w-24 text-white">
        <Logo />
      </div>
      <ul id="nav__links" className="hidden md:flex gap-7">
        {["work", "studio", "news", "contact"].map((item, idx) => (
          <li key={idx} className=" text-base font-medium capitalize">
            <a href="/">{item}</a>
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
