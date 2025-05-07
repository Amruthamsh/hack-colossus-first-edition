import collegePhoto from "/collegeFinal.jpeg";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 pt-20" id="about">
      <h1 className="text-4xl font-bold text-center mb-12 poppins-bold">
        About Us
      </h1>

      <div className="max-w-6xl mx-auto text-md lg:text-xl text-center">
        <div className="flex flex-col space-y-8 text-left items-center">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="basis-1/3 mb-4 md:mb-0">
              <img
                src={collegePhoto}
                className="rounded-lg w-full h-auto"
                alt="Hack Colossus Logo"
              />
            </div>
            <p className="poppins-regular text-left sm:text-justify md:basis-2/3">
              <span className="text-blue-400 poppins-bold">
                Dr. Ambedkar Institute of Technology (Dr. AIT)
              </span>{" "}
              was founded by M.H. Jayaprakash Narayan in 1980. Named after Dr.
              B.R. Ambedkar, the institute is affiliated with Visvesvaraya
              Technological University (VTU), Belagavi, and is recognized and
              accredited by AICTE and NBA respectively. The institution is
              accredited by NAAC with an A+ Grade.
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row md:space-x-8 items-center">
            <p className="poppins-regular text-left sm:text-justify md:basis-2/3">
              <span className="text-neon-green poppins-bold">Colossus</span> is
              a thrilling 24-hour hackathon organized by the technical club at
              Dr. Ambedkar Institute of Technology, Bengaluru, in collaboration
              with Nanogram Hub and the Google Developers Student Club.
              Scheduled for September 13th and 14th, 2024, this offline event
              invites college students from diverse backgrounds to develop
              innovative solutions that push the boundaries of technology
            </p>
            <div className="audiowide-regular text-center border-2 rounded-md sm:w-1/3 flex flex-col items-center justify-start lg:space-y-8 mb-4 lg:pb-4 p-2">
              <p className="text-neon-green text-3xl lg:text-5xl">COLOSSUS</p>
              <p className="text-2xl lg:text-[2.55rem]">HACKATHON</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center space-x-6 sm:space-x-16 md:space-x-40 lg:space-x-64 mb-12 mt-8">
        <div className="text-center poppins-medium">
          <h2 className="text-2xl sm:text-4xl font-bold text-emerald-400">
            160+
          </h2>
          <p className="text-sm sm:text-base">ON-CAMPUS PARTICIPANTS</p>
        </div>
        <div className="text-center poppins-medium">
          <h2 className="text-2xl sm:text-4xl font-bold text-emerald-400">
            40+
          </h2>
          <p className="text-sm sm:text-base">TEAMS</p>
        </div>
        <div className="text-center poppins-medium">
          <h2 className="text-2xl sm:text-4xl font-bold text-emerald-400">
            16k+
          </h2>
          <p className="text-sm sm:text-base">REACH ON SOCIAL MEDIA</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
