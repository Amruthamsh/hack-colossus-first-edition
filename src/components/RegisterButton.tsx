/*
import { useState, useEffect } from "react";

const RegisterButton = ({ name }: { name: string }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleRazorpayClick = () => {
    window.open("https://pages.razorpay.com/hackcolossus", "_blank");
    setShowPopup(false);
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup in case component unmounts
    };
  }, [showPopup]);

  return (
    <div>
      <button
        className="m-4 px-6 py-2 hover:bg-purple-600 text-xl text-white font-bold rounded bg-emerald-500 transition duration-300 poppins-bold"
        onClick={handleButtonClick}
      >
        {name}
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded shadow-lg text-center m-4 max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-black poppins-medium">
              Instructions
            </h2>
            <p className="mb-4 text-black poppins-regular">
              Here are some instructions for the registration process. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Modi unde
              aliquid, delectus sapiente minima magni voluptate dolore saepe
              ipsam fugiat similique pariatur optio tenetur omnis hic
              dignissimos tempora nam harum!
            </p>

            <button
              className="m-2 px-6 py-2 bg-emerald-500 text-white font-bold rounded hover:bg-purple-600 transition duration-300"
              onClick={handleRazorpayClick}
            >
              Go to Razorpay
            </button>
            <button
              className="m-2 px-6 py-2 bg-gray-500 text-white font-bold rounded hover:bg-gray-700 transition duration-300"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterButton;
*/

import ReactGA from "react-ga4";

const RegisterButton = () => {
  const handleClick = (event: string) => {
    ReactGA.event({
      category: "Social Links",
      action: "Click",
      label: event,
    });
    window.open(
      "https://drive.google.com/file/d/1l16sXATvse09wVuIRrw-O-UGQpDAr85e/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <button
      className="m-4 px-6 py-2 hover:bg-pink-600 text-xl lg:text-2xl text-white font-bold rounded-full bg-blue-700 transition duration-300 poppins-bold border-w"
      onClick={() => handleClick("Register Button")}
    >
      View Ideathon Results
    </button>
  );
};

export default RegisterButton;
