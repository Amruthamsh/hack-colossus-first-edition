import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      // Adjust this value as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      className={`fixed bottom-4 right-4 bg-emerald-500 hover:bg-emerald-700 text-white rounded-full p-3 shadow-lg transition-transform transform ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      href="#top"
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 6"
        className="w-6 h-6"
      >
        <path d="M12 6H0l6-6z" />
      </svg>
      <span className="sr-only">Back to top</span>
    </a>
  );
};

export default BackToTopButton;
