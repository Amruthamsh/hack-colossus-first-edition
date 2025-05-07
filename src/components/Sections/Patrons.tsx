const Patrons = () => {
  return (
    <div id="patrons">
      <div className="flex items-center justify-center pt-20">
        <div className="w-full sm:max-w-screen-2xl text-white">
          <h1 className="text-center text-4xl font-bold mb-12 poppins-bold">
            Patrons
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 poppins-medium text-center">
            <div className="bg-slate-800/70 rounded-3xl px-8 p-4">
              <h1 className="text-2xl text-emerald-400 font-bold">Convenors</h1>
              <div className="flex flex-col gap-6 py-6">
                <div>
                  <h2 className="text-xl font-semibold">
                    Dr. M. N. Tippeswamy
                  </h2>
                  <h3 className="text-sm">Principal, Dr. AIT</h3>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Dr. Siddaraju</h2>
                  <h3 className="text-sm">Vice-Principal, Dr. AIT</h3>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/70 rounded-3xl px-8 p-4">
              <h1 className="text-2xl text-emerald-400 font-bold">
                Co-Convenor
              </h1>
              <div className="py-6">
                <h2 className="text-xl font-semibold">Dr. K. R. Shylaja</h2>
                <h3 className="text-sm">Student Welfare Officer, Dr. AIT</h3>
              </div>
            </div>
            <div className="bg-slate-800/70 rounded-3xl px-8 p-4">
              <h1 className="text-2xl text-emerald-400 font-bold">
                Faculty Co-ordinators
              </h1>
              <div className="flex flex-col gap-6 py-6">
                <div>
                  <h2 className="text-xl font-semibold">Prof. Chetan N</h2>
                  <h3 className="text-sm">
                    Student Welfare Co-ordinator, Dr. AIT
                  </h3>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Prof. Kesthara V</h2>
                  <h3 className="text-sm">
                    Student Welfare Co-ordinator, Dr. AIT
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/70 rounded-3xl px-8 p-4">
              <h1 className="text-2xl text-emerald-400 font-bold">Advisors</h1>
              <div className="flex flex-col gap-6 py-6">
                <div>
                  <h2 className="text-xl font-semibold">Prof. L. M. Patnaik</h2>
                  <h3 className="text-sm">Senior Research Advisor, Dr. AIT</h3>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">
                    Prof. N. C. Shivaprakash
                  </h2>
                  <h3 className="text-sm">Mentor, Dr. AIT</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patrons;
