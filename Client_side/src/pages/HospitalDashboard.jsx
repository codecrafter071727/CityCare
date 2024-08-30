import React from "react";
import Navbar from "../components/Navbar";

const FeatureCard = ({ title, content }) => (
  <div className={`p-4 w-[50rem] rounded-lg bg-slate-100 `}>
    <h3 className="mb-4 text-xl font-bold">{title}</h3>
    <div>{content}</div>
  </div>
);

const PatientQueue = () => (
  <div className="flex flex-col h-screen p-4 text-black rounded-lg bg-slate-100 w-[33rem]">
    <h3 className="mb-4 text-xl font-bold text-black">Patient Queue</h3>
    <div className="flex-grow p-4 overflow-y-scroll bg-white rounded-lg">
      <table className="w-full">
        <thead className="sticky top-0 bg-white">
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Date</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
       
      </table>
      <div className="flex gap-x-12">
            <p>vishu</p>
            <p>24 august</p>
            <p>300</p>
            <p className="ml-8">coming</p>
          </div>
    </div>
  </div>
);
function HospitalDashboard() {
  const patients = Array.from({ length: 10 }).map((_, index) => ({
    name: `Patient ${index + 1}`,
    date: `2024-04-0${index + 1}`,
    amount: `$${(index + 1) * 100}`,
    status: index % 2 === 0 ? "Success" : "Pending",
  }));

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap min-h-screen gap-4 p-8 mt-12 bg-gradient-to-r ">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          <FeatureCard
            title="Total payCheque"
            content={
              <>
                <div className="text-3xl font-bold">$20,500.05</div>
                <div className="flex justify-between mt-4 max-md:hidden max-md:w-[32rem]">
                  <div>
                    <div>Replenishment</div>
                    <div>Last: April 2nd, 2024</div>
                    <div>Next: May 2nd, 2024</div>
                  </div>
                  <div>
                    <div>Budget</div>
                    <div>Daily: $200</div>
                    <div>Monthly: $5,000</div>
                  </div>
                  <div>
                    <div>Income</div>
                    <div>Last Month: $10,000</div>
                    <div>This Month: $15,000</div>
                  </div>
                </div>
              </>
            }
            bgColor="bg-slate-100 text-black"
            extraClasses="flex-grow"
          />
          <PatientQueue />
        </div>
        {/* <FeatureCard
        title="Upcoming Bills"
        content={
          <div className="flex flex-wrap gap-4">
            <div className="w-1/5 p-4 bg-white rounded-lg">
              Studio Shodwe
              <br />5 days left
              <br />
              $500
            </div>
            <div className="w-1/5 p-4 bg-white rounded-lg">
              Larana Inc.
              <br />5 days left
              <br />
              $500
            </div>
            <div className="w-1/5 p-4 bg-white rounded-lg">
              New Bill 1<br />5 days left
              <br />
              $500
            </div>
            <div className="w-1/5 p-4 bg-white rounded-lg">
              New Bill 2<br />5 days left
              <br />
              $500
            </div>
            <div className="w-1/5 p-4 bg-white rounded-lg">
              New Bill 2<br />5 days left
              <br />
              $500
            </div>
          </div>
        }
        bgColor="bg-slate-100 text-black"
        extraClasses="w-full"
      /> */}
      </div>
    </>
  );
}

export default HospitalDashboard;
