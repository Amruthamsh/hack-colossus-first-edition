import GDSC from "/gdsc_logo.svg";
import Nanogram from "/nglogo.png";

const Collaborators = () => {
  return (
    <div
      id="collaborators"
      className="flex justify-center items-center pt-24 pb-12"
    >
      <div className="text-white">
        <h1 className="text-center text-4xl font-bold mb-12 poppins-bold">
          Collaborators
        </h1>
        <div className="bg-slate-800/70 rounded-3xl p-12 m-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center flex flex-col items-center">
              <a
                href="https://nanogramhub.wixsite.com/club"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Nanogram}
                  className="size-52 sm:size-64 rounded-full"
                  alt="Nanogram Logo"
                />
              </a>
              <p className="text-xl poppins-bold mt-2">Nanogram</p>
              <p>The Tech Club</p>
            </div>
            <p className="poppins-bold text-emerald-400 hidden lg:inline lg:text-9xl">
              X
            </p>
            <div className="text-center flex flex-col items-center">
              <a
                href="https://gdsc.rocks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GDSC}
                  alt="GDSC Logo"
                  className="size-52 sm:size-64 bg-gray-950 rounded-full"
                />
              </a>
              <p className="text-xl poppins-bold mt-2">
                Google Developers Student Club
              </p>
              <p>Chapter - Dr. AIT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
