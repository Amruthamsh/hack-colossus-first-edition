import { useState, useEffect } from "react";

const DateChangePopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";

      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  return (
    <div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white/90 p-6 rounded shadow-lg text-center m-4 max-w-lg backdrop-blur-lg backdrop-filter">
            <button
              className="absolute top-2 right-2 w-6 h-6 bg-gray-500 text-white font-bold rounded-full hover:bg-gray-700 transition duration-300"
              onClick={() => setShowPopup(false)}
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4 text-red-600 poppins-bold">
              Important Announcement!!
            </h2>
            <p className="mb-4 text-black text-lg poppins-medium text-left">
              The Hackathon dates has been changed to{" "}
              <span className="poppins-bold">13th and 14th September.</span>{" "}
            </p>
            <p className="mb-4 text-black text-lg poppins-medium text-left">
              Last date for Registration and Idea Submission is{" "}
              <span className="poppins-bold">3rd September.</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateChangePopup;
