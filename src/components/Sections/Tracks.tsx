import RegisterButton from "../RegisterButton";

const Tracks = () => {
  const tracks = [
    {
      number: 1,
      title: "SOFTWARE TRACK",
      description: ["BLOCKCHAIN", "AI & ML"],
    },
    {
      number: 2,
      title: "HARDWARE TRACK",
      description: ["ROBOTICS", "IoT"],
    },
    {
      number: 3,
      title: "OPEN INNOVATION",
      description: [
        "Integrating diverse technologies.",
        "Solve real world problems!",
      ],
    },
  ];

  return (
    <div id="tracks" className="poppins-medium pt-20">
      <h1 className="text-center text-4xl font-bold text-white mb-12">
        Hackathon Tracks
      </h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-slate-800/70 rounded-3xl shadow-lg overflow-hidden flex flex-col hover:scale-105 hover:shadow-xl hover:bg-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl font-bold bg-purple-700 text-white m-4">
                    {track.number}
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-emerald-400 poppins-bold">
                    {track.title}
                  </h2>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 m-4">
                {track.description.map((desc, i) => (
                  <li key={i} className="text-lg text-white">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};

export default Tracks;
