import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { navLinks } from "@/constants";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed right-4 md:right-12 mt-4 md:mt-6 z-[60] flex items-center space-x-4 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="inline-flex items-center justify-center rounded-full text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300/20"
        >
          {isOpen ? (
            <IoMdClose className="h-6 w-6" />
          ) : (
            <HiOutlineMenuAlt3 className="h-6 w-6" />
          )}
        </button>
      </div>

      <div
        className={`fixed top-11 flex w-full justify-center transition-transform duration-200 ${
          isOpen
            ? "z-[60] translate-y-0 mt-3"
            : "z-0 -translate-y-[30rem] -mt-1"
        } px-2 lg:hidden`}
      >
        <div
          className={`justify-center" z-[60] w-full flex flex-col space-y-3 rounded-xl bg-slate-800/70 bg-clip-padding py-5 backdrop-blur-lg 
               backdrop-filter hover:border-white/40 lg:hidden 
            `}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              onClick={() => setIsOpen(false)}
              className={`pl-4 text-center text-lg text-white underline-offset-4 hover:text-green-300`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
