import shivji from "/shivji.jpeg";
import prakhar from "/prakhar.jpeg";
import kewal from "/kewal.jpeg";
import krtin from "/krtin.jpeg";
import raghavendra from "/raghavendra.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactGA from "react-ga4";
import { FaLinkedin } from "react-icons/fa";

const data = [
  {
    name: "Shivji Agnihotri",
    desc: "AI & Machines Learning Engineer @ Sangria by dotkonnekt",
    link: "https://www.linkedin.com/in/shivjiagnihotri/",
    image: shivji,
  },
  {
    name: "Raghavendra K",
    desc: "Data Scientist at Salesforce | WEB3 Developer",
    link: "https://www.linkedin.com/in/raghavendra-k-bb56571b5/",
    image: raghavendra,
  },
  {
    name: "Kewal Bajaj",
    desc: "Professional Roboticist at Newspace Research",
    link: "https://www.linkedin.com/in/kewal-bajaj-99a96b102/",
    image: kewal,
  },
  {
    name: "Krtin Shet",
    desc: "Product & Development @ ChaiDEX. Systems Engineer | Architect",
    link: "https://www.linkedin.com/in/krtin-shet-838564194/",
    image: krtin,
  },
  {
    name: "Prakhar Sharan",
    desc: "SDE 1 @ Amazon. Specialization in AWS and Backend",
    link: "https://www.linkedin.com/in/prakhar-sharan-dev/",
    image: prakhar,
  },
];

const Mentors = () => {
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
    <div className="w-3/4 m-auto pt-10 poppins-regular max-w-[1536px]">
      <h1 className="text-center text-4xl font-bold text-white mb-12">
        Our Mentors
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

export default Mentors;
