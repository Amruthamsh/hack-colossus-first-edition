import avigdor from "/avigdor-logo.jpeg";
import _0xday from "/0xday-logo.jpeg";
import jvglobal from "/jvglobal-logo.jpeg";

const Sponsors = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-24 poppins-medium"
      id="sponsors"
    >
      <h1 className="text-4xl text-white font-bold text-center">
        Our Sponsors
      </h1>
      <div className="flex flex-wrap justify-center gap-8 md:gap-24 pt-16 max-w-7xl">
        <div className="w-48 sm:w-56 md:w-64 flex items-center justify-center">
          <img src={avigdor} alt="Avigdor" className="w-full h-auto" />
        </div>
        <div className="w-48 sm:w-56 md:w-64 flex items-center justify-center">
          <img src={_0xday} alt="0xday" className="w-full h-auto" />
        </div>
        <div className="w-48 sm:w-56 md:w-64 flex items-center justify-center">
          <img
            src={jvglobal}
            alt="JV Global"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
