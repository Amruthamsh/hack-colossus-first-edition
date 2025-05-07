import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import software_first from "/software_first.jpeg";
import software_runner from "/software_runner.jpeg";
import hardware_first from "/hardware_first.jpeg";
import hardware_runner from "/hardware_runner.jpeg";
import open_first from "/open_first.jpeg";
import open_runner from "/open_runner.jpeg";
import ui_excellence from "/ui_excellence.jpeg";
import sustainability from "/sustainability.jpeg";
import tech_trail from "/tech_trailer.jpeg";
import innovators_edge from "/innovators_edge.jpeg";

const Winners = () => {
  const winners = [
    {
      image: software_first,
      team_name: "COLOSSUS TITAN",
      track: "WINNER - SOFTWARE TRACK",
    },
    {
      image: software_runner,
      team_name: "SNACK OVERFLOW",
      track: "RUNNER UP - SOFTWARE TRACK",
    },
    {
      image: hardware_first,
      team_name: "MATRIX",
      track: "WINNER - HARDWARE TRACK",
    },
    {
      image: hardware_runner,
      team_name: "MISSION POSSIBLE",
      track: "RUNNER UP - HARDWARE TRACK",
    },
    {
      image: open_first,
      team_name: "MIRAGE",
      track: "WINNER - OPEN INNOVATION",
    },
    {
      image: open_runner,
      team_name: "SURVEILLANCE WIZ!",
      track: "RUNNER UP - OPEN INNOVATION",
    },
    {
      image: ui_excellence,
      team_name: "TECHNOVATION",
      track: "UI EXCELLENCE",
    },
    {
      image: sustainability,
      team_name: "ELECTROSTORM",
      track: "SUSTAINABILITY STAR",
    },
    {
      image: tech_trail,
      team_name: "HACK WIZARDS",
      track: "TECH TRAILBLAZER",
    },
    {
      image: innovators_edge,
      team_name: "WHITE HAT",
      track: "INNOVATOR'S EDGE",
    },
  ];

  const settings = {
    dots: true, // Show dots below carousel
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto scroll
    autoplaySpeed: 2000, // Time between auto scrolls
    adaptiveHeight: true, // Adjust height based on content
  };

  return (
    <div className="max-w-80 sm:max-w-md md:max-w-2xl xl:max-w-3xl m-auto pt-10 poppins-regular">
      <h1 className="text-center text-2xl sm:text-4xl font-bold text-white mb-8">
        Proudly presenting our Winners!
      </h1>

      <Slider {...settings}>
        {winners.map((winner, index) => (
          <div key={index}>
            <img
              src={winner.image}
              alt={`Winner ${index + 1}`}
              className="rounded-3xl border-white border-4" // Center and limit the image width
            />
            <h2 className="text-center text-2xl font-bold text-white mt-4">
              {winner.team_name}
            </h2>
            <p className="text-center text-lg text-emerald-400 poppins-bold">
              {winner.track}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Winners;
