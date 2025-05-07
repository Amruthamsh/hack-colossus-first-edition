import ashutosh from "/ashutosh.jpeg";
import gaurav from "/gaurav.jpeg";
import shrey from "/shreyambesh.jpg";
import nikhil from "/nikhil-jain.jpeg";
import guruvyas from "/guruvyas.jpeg";
import pandya from "/hardik.jpeg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactGA from "react-ga4";
import { FaLinkedin } from "react-icons/fa";

const data = [
  {
    name: "Ashutosh Pandey",
    desc: "Compiler Engineer @AMD. SIH Winner 2019",
    link: "https://www.linkedin.com/in/ashupdsce/",
    image: ashutosh,
  },
  {
    name: "Gaurav K P",
    desc: "Software & Product Engineering at rePurpose Global",
    link: "https://www.linkedin.com/in/raghavendra-k-bb56571b5/",
    image: gaurav,
  },
  {
    name: "Shrey Ambesh",
    desc: "Technical Lead at rePurpose Global",
    link: "https://www.linkedin.com/in/shreyambesh/",
    image: shrey,
  },
  {
    name: "Nikhil Jain C S",
    desc: "Founder and CEO @VisionAstraa Startup Academy",
    link: "https://www.linkedin.com/in/nikhiljaincs/",
    image: nikhil,
  },
  {
    name: "Guruvyas K P",
    desc: "Data Analytics Specialist @Benchmark Gensuite",
    link: "https://www.linkedin.com/in/krgvyas/",
    image: guruvyas,
  },
];

const Jury = () => {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = (event: string, url: string) => {
    ReactGA.event({
      category: "Social Links",
      action: "Click",
      label: event,
    });
    window.open(url, "_blank");
  };

  return (
    <div className="w-3/4 m-auto py-10 poppins-regular max-w-[1536px]">
      <h1 className="text-center text-4xl font-bold text-white mb-12">
        Chief Jury
      </h1>

      <div className="flex flex-row justify-center">
        <div className="text-black flex flex-col place-content-center mb-12 w-96">
          <div className="h-56 rounded-t-xl bg-slate-800 flex justify-center items-center">
            <img
              src={pandya}
              alt="profile photo"
              className="size-48 rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center gap-2 p-4 flex-grow justify-between bg-white rounded-b-2xl ">
            <div className="flex flex-col items-center gap-2">
              <p className="poppins-bold text-xl text-center">
                Dr. Hardik Jeetendra Pandya
              </p>
              <p className="text-center">
                Assistant Professor in the Department of Electronic Systems
                Engineering, Division of EECS, IISc Bangalore{" "}
              </p>
            </div>
            <button
              className="text-blue-600 hover:text-emerald-400"
              onClick={() =>
                handleClick(
                  "LinkedIn",
                  "https://www.linkedin.com/in/hardik-jeetendra-pandya-iit-delhi-umd-harvard-medical-school-8575bb34/"
                )
              }
            >
              <FaLinkedin className="size-8" />
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-center text-4xl font-bold text-white mb-12">
        Our Jury
      </h1>

      <Slider {...settings}>
        {data.map((d) => (
          <div className="bg-white text-black rounded-2xl flex flex-col">
            <div className="h-56 rounded-t-xl bg-slate-800 flex justify-center items-center">
              <img
                src={d.image}
                alt="profile photo"
                className="size-48 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-2 p-4 flex-grow justify-between h-44 sm:h-48">
              <div className="flex flex-col items-center gap-2">
                <p className="poppins-bold text-xl">{d.name} </p>
                <p className="text-center">{d.desc}</p>
              </div>
              <button
                className="text-blue-600 hover:text-emerald-400"
                onClick={() => handleClick("LinkedIn", `${d.link}`)}
              >
                <FaLinkedin className="size-8" />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Jury;
