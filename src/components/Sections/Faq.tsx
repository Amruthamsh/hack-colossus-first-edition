import RegisterButton from ".././RegisterButton";

const Faq = () => {
  const faqs = [
    {
      question: "What is Colossus?",
      answer:
        "Colossus is a national-level Hackathon aimed at fostering innovation and creativity among participants through collaborative problem-solving.",
    },
    {
      question: "Who can participate in Colossus?",
      answer:
        "Colossus is open to participants from across the nation who are passionate about leveraging technology to solve real-world and innovative challenges.",
    },
    {
      question: "How can I register for Colossus?",
      answer:
        "Participants need to pay a registration fee of ₹499. Registration details and deadlines will be shared on our official website and social media channels. Please stay tuned to our official channels for updates.",
    },
    {
      question: "What is the ideathon round?",
      answer:
        "The ideathon round is a pre-hackathon round where participants can submit their ideas for the hackathon before 24th August. The top ideas will be shortlisted and participants will be invited to participate in the hackathon.",
    },
    {
      question: "What happens if my team is not shortlisted?",
      answer:
        "If your team is not shortlisted in the Ideation Round, 90% of your registration fee (excluding taxes) will be refunded to the original mode of payment within 5-7 days.",
    },
    {
      question:
        "Are there any restrictions on the types of technologies or frameworks we can use?",
      answer: "No, you can use any technology or framework you want.",
    },
    {
      question:
        "Can we use external hardware like IoT devices or VR headsets in our project?",
      answer:
        "Participants are allowed to use any hardware they want in their projects. However, they must bring their own hardware to the hackathon. We will not be providing any hardware to the participants.",
    },
    {
      question: "Where and when will Colossus take place?",
      answer:
        "Colossus will take place at Dr. Ambedkar Institute of Technology on 30th-31st August. Specific details and additional information will be shared in the registration details and on our official website and social media channels.",
    },
    {
      question: "How many members are required to form a team?",
      answer: "A team should consist of 2-4 members.",
    },
    {
      question: "Do team members have to be from the same college?",
      answer: "Inter College Team Members are allowed to form a Team",
    },
    {
      question: "What are the benefits of participating in Colossus?",
      answer:
        "Participants will have the opportunity to network with industry leaders, gain mentorship, and showcase their skills on a national platform.",
    },
    {
      question: "How can I get involved with Colossus as a sponsor or partner?",
      answer:
        "For sponsorship and partnership opportunities, please reach out to our organizing team: Varun Raj: +91 93532 28225, Aniket Rai: +91 77184 11467.",
    },
    {
      question: "More Questions??",
      answer: "Contact us at colossus@drait.edu.in or hackcolossus@gmail.com",
    },
  ];

  return (
    <div id="faq">
      <div className="flex items-center justify-center pt-24">
        <div className="w-full max-w-7xl text-white">
          <h1 className="text-center text-4xl font-bold mb-12 poppins-bold">
            FAQs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/70 rounded-3xl shadow-lg overflow-hidden flex flex-col hover:scale-105 hover:shadow-xl hover:bg-purple-500/30 transition-transform duration-300"
              >
                <div className="p-6">
                  <h2 className="text-xl sm:text-xl font-semibold text-emerald-400 text-left poppins-medium">
                    {faq.question}
                  </h2>
                </div>
                <div className="p-6 flex-1">
                  <p className="text-md sm:text-base text-left poppins-regular">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center p-2">
        <RegisterButton />
      </div>
    </div>
  );
};

export default Faq;
