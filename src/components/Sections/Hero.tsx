import hack_logo from "/hackathon_logo2.svg";
import RegisterButton from "./../RegisterButton";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div
      className="pt-24 flex flex-col md:flex-row items-center justify-center lg:space-x-16 space-y-6"
      id="home"
    >
      <div className="border-2 border-emerald-500 p-1 rounded-full">
        <div className="size-60 md:size-96 xl:size-[30rem] border-2 border-white rounded-full p-6 xl:p-10 flex flex-col justify-center items-center space-y-2 xl:space-y-8">
          <img src={hack_logo} alt="Hack Colossus Logo" className="" />
          <div>
            <h2 className="poppins-bold text-white text-xl lg:text-3xl xl:text-5xl text-center">
              COLOSSUS
            </h2>
            <h2 className="poppins-bold text-white text-[12px] lg:text-base xl:text-2xl text-center">
              HACKATHON
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-2 lg:mt-10 relative z-10 text-center mx-4">
        <div className="border rounded-md p-4 w-auto">
          <h1 className="text-5xl text-neon-green lg:text-7xl xl:text-8xl font-bold leading-tight text-emerald-00 audiowide-regular">
            COLOSSUS
          </h1>
          <h1 className="text-[2.59rem] lg:text-[3.9rem] xl:text-[5.1rem] font-bold leading-tight text-white audiowide-regular">
            HACKATHON
          </h1>
        </div>
        <h1 className="poppins-medium pt-2 pb-4 text-xl xl:text-3xl">
          National Level 24 Hours Hackathon
        </h1>
        <div className="text-left pt-4 flex flex-col space-y-2">
          <div className="flex flex-row space-x-2">
            <FaCalendarAlt className="text-xl xl:text-3xl text-white" />
            <h2 className="poppins-medium text-base xl:text-2xl text-white">
              13th and 14th September 2024
            </h2>
          </div>
          <div className="flex flex-row space-x-2">
            <MdOutlinePlace className="text-xl xl:text-3xl text-white" />
            <h2 className="poppins-medium text-base xl:text-2xl text-white">
              Dr. Ambedkar Institute Of Technology, Bengaluru
            </h2>
          </div>
          <div className="flex flex-row space-x-2">
            <IoWarningOutline className="text-xl xl:text-3xl text-white" />
            <h2 className="poppins-medium text-base xl:text-2xl text-white">
              Register and submit your exciting idea by{" "}
              <span className="poppins-bold text-neon-green">
                3rd September
              </span>
            </h2>
          </div>
        </div>
        <div className="">
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;
