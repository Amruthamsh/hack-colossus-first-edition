import { useEffect, useState } from "react";

// Define a type for the time left object
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (): TimeLeft | {} => {
  const difference =
    +new Date(`09/14/${new Date().getFullYear()}`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="m-8">
      <div className="flex justify-center items-center m-2 xl:m-6">
        {Object.keys(timeLeft).length > 0 && (
          <div className="flex flex-col bg-slate-600/80 rounded-lg p-4 md:px-12 space-y-6">
            <h1 className="text-center text-xl md:text-3xl lg:text-5xl xl:text-6xl poppins-medium text-white">
              National Level 24 Hours Hackathon
            </h1>
            <div className="flex flex-row justify-center mt-3 space-x-2 sm:space-x-4 lg:space-x-10 xl:space-x-28 ">
              <div className="text-center">
                <div className="bg-slate-900 text-white font-bold rounded-lg p-4 text-3xl md:text-5xl lg:text-7xl size-16 md:size-24 lg:size-36 flex items-center justify-center">
                  <span>
                    {timeLeft.hasOwnProperty("days") &&
                      (timeLeft as TimeLeft).days}
                  </span>
                </div>
                <span className="block mt-2 text-lg md:text-xl text-emerald-400 font-bold">
                  Days
                </span>
              </div>
              <div className="text-center">
                <div className="bg-slate-900 text-white font-bold rounded-lg p-4 text-3xl md:text-5xl lg:text-7xl size-16 md:size-24 lg:size-36 flex items-center justify-center">
                  <span>
                    {timeLeft.hasOwnProperty("hours") &&
                      (timeLeft as TimeLeft).hours}
                  </span>
                </div>
                <span className="block mt-2 text-lg md:text-xl text-emerald-400 font-bold">
                  Hours
                </span>
              </div>
              <div className="text-center">
                <div className="bg-slate-900 text-white font-bold rounded-lg p-4 text-3xl md:text-5xl lg:text-7xl size-16 md:size-24 lg:size-36 flex items-center justify-center">
                  <span>
                    {timeLeft.hasOwnProperty("minutes") &&
                      (timeLeft as TimeLeft).minutes}
                  </span>
                </div>
                <span className="block mt-2 text-lg md:text-xl text-emerald-400 font-bold">
                  Minutes
                </span>
              </div>
              <div className="text-center">
                <div className="bg-slate-900 text-white font-bold rounded-lg p-4 text-3xl md:text-5xl lg:text-7xl size-16 md:size-24 lg:size-36 flex items-center justify-center">
                  <span>
                    {timeLeft.hasOwnProperty("seconds") &&
                      (timeLeft as TimeLeft).seconds}
                  </span>
                </div>
                <span className="block mt-2 text-lg md:text-xl text-emerald-400 font-bold">
                  Seconds
                </span>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center text-center space-x-2">
              <div className="rounded-md w-1/2">
                <div>
                  <h2 className="text-lg md:text-2xl poppins-bold">Date</h2>
                </div>
                <h2 className="text-sm md:text-lg">
                  13th & 14th September 2024
                </h2>
              </div>
              <div className="rounded-md w-1/2">
                <div>
                  <h2 className="text-lg md:text-2xl poppins-bold">Venue</h2>
                </div>
                <h2 className="text-sm md:text-lg">
                  Dr. Ambedkar Institute of Technology
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>

      <h1 className="text-center text-3xl md:text-5xl lg:text-7xl xl:text-[5.5rem] audiowide-regular pt-8 text-emerald-400">
        1 LAKH+ <span className="text-white">PRIZE POOL</span>
      </h1>
    </div>
  );
};

export default Countdown;
