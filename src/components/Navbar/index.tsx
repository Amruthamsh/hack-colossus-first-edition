import { HashLink as Link } from "react-router-hash-link";
import MobileNavbar from "./mobileNavbar";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <div className="mx-3 flex justify-center poppins-regular">
      <nav className="fixed z-[60] w-full bg-gray-800/80 bg-clip-padding px-2 py-2 backdrop-blur-lg backdrop-filter ">
        <div className="flex h-9 md:h-12 items-center md:justify-center justify-start">
          <div className="mr-14 lg:mr-27 xl:mr-52 audiowide-regular text-center border-2 rounded-md px-2">
            <p className="text-neon-green text-[1.02rem] lg:text-[1.31rem] mb-0 leading-tight">
              COLOSSUS
            </p>
            <p className="text-sm lg:text-lg mt-0 leading-tight">HACKATHON</p>
          </div>

          <div className="hidden items-center md:space-x-4 lg:space-x-10 md:flex">
            {navLinks.map((link, index) => (
              <div key={index} className="group relative">
                <Link
                  to={link.url}
                  className="text-white text-xl lg:text-2xl hover:text-emerald-300"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
