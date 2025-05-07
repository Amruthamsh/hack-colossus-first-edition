import Navbar from ".././components/Navbar";
import Hero from ".././components/Sections/Hero";
import AboutUs from ".././components/Sections/AboutUs"; // Import the AboutPage component
import Tracks from ".././components/Sections/Tracks";
import Timeline from ".././components/Sections/Timeline";
import Footer from ".././components/Sections/Footer";
import Faq from ".././components/Sections/Faq";
import Sponsors from ".././components/Sections/Sponsors";
import Patrons from "@/components/Sections/Patrons";
import Collaborators from "@/components/Sections/Collaborators";
import StarsCanvas from ".././components/StarBackground";
import BackToTopButton from ".././components/BackToTopButton";
import ProgressBar from ".././components/ProgressBar";
import Winners from "@/components/Sections/Winners";
import Mentors from "@/components/Sections/Mentors";
import Jury from "@/components/Sections/Jury";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white relative z-10">
        <StarsCanvas />
        <ProgressBar />
        <div className="relative z-20">
          <Navbar />
          <Hero />
          <Winners />
          <Jury />
          <Mentors />
          <Tracks />
          <AboutUs />
          <Timeline />
          <Sponsors />
          <Faq />
          <Patrons />
          <Collaborators />
          <Footer />
          <BackToTopButton />
        </div>
      </div>
    </>
  );
};

export default Home;
