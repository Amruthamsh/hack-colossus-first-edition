const Timeline = () => {
  const events = [
    {
      title: "Ideathon",
      description: [
        "Submit your exciting idea by 3rd September!",
        "Finalists will be announced on 6th September.",
      ],
    },
    {
      title: "Registration and Opening Ceremony - 13th September",
      description: [
        "8:00 AM : Check-in and Registrations Start!",
        "9:00 AM : Inaugural Ceremony",
      ],
    },
    {
      title: "Initial Coding and Prototype Development",
      description: [
        "11:00 AM: Coding Starts!",
        "12 Noon: First Round of Mentoring",
      ],
    },
    {
      title: "Lunch Break and Continued Development",
      description: "1:30 PM : Lunch Break",
    },
    {
      title: "Tech Sessions",
      description: [
        "3:00 PM : Tech Sessions and Workshops",
        "4:30 PM : Evening Snacks",
      ],
    },
    {
      title: "Second Round of Mentoring and Continued Development",
      description: [
        "5:00 PM : Second Round of Mentoring",
        "8:30 PM : Dinner Break",
      ],
    },
    {
      title: "Night Shift and Continued Debugging",
      description: ["11:15 PM : Refreshments Events"],
    },
    {
      title: "Saturday, 14th September - Day 2",
      description: [
        "1:00 AM : Midnight Snacks",
        "8:00 AM : Initial Judging Round",
      ],
    },
    {
      title: "Breakfast and Refreshment break",
      description: "9:00 AM : Breakfast and Refreshment Break",
    },
    {
      title: "Judging and Project Submission",
      description: ["10:30 AM : Coding Stops! & Judging starts"],
    },
    {
      title: "Lunch Break",
      description: ["12:30 PM : Lunch Break"],
    },
    {
      title: "Prize Distribution and Closing Ceremony",
      description: [
        "1:00 PM : Jury Speech and Top 5 teams Presentation!",
        "2:30 PM: Prize Distribution and Valedictory Ceremony",
      ],
    },
  ];

  return (
    <div className="relative pt-20 poppins-medium" id="timeline">
      <h1 className="text-center text-4xl font-bold text-white mb-12">
        Timeline
      </h1>

      {/* Vertical Line */}
      <div
        className="absolute -z-10 left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-500 md:block"
        style={{ top: "16rem", height: "calc(100% - 25rem)" }}
      ></div>

      <div className="flex flex-col items-center mx-4">
        {/* Card */}
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-center w-full max-w-sm md:max-w-4xl mb-8 ${
              index % 2 === 0 ? "md:justify-end" : "md:justify-start"
            }`}
          >
            <div
              className={`p-6 max-w-sm w-full bg-slate-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 hover:shadow-xl transition-transform duration-300 ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              <h2 className="text-xl font-semibold text-emerald-400 text-left">
                {event.title}
              </h2>

              {Array.isArray(event.description) ? (
                event.description.map((desc, i) => (
                  <p key={i} className="text-md text-left mt-2">
                    {desc}
                  </p>
                ))
              ) : (
                <p className="text-md text-left mt-2">{event.description}</p>
              )}
            </div>

            <div
              className={`hidden md:block -z-10 absolute left-1/2 -translate-x-1/2 ${
                index % 2 === 0 ? "ml-8" : "-ml-8"
              } h-1 w-16 bg-slate-300`}
            ></div>

            {/* Circle  */}
            <div className="hidden -z-10 md:block absolute left-1/2 transform -translate-x-1/2 bg-emerald-500 border-2 w-4 h-4 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
