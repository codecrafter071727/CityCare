import React from "react";

function HospitalDashboard() {
  return (
    <>
      <div className="min-h-screen p-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
        {/* Navbar */}
        <div className="flex items-center justify-between p-4 bg-blue-900 bg-opacity-80 rounded-xl">
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-white bg-blue-700 rounded-full">
              Account
            </button>
            <button className="px-4 py-2 text-white bg-purple-700 rounded-full">
              Dashboard
            </button>
            <button className="px-4 py-2 text-white bg-blue-700 rounded-full">
              Settings
            </button>
            <button className="px-4 py-2 text-white bg-blue-700 rounded-full">
              Help
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-white">Logo</div>
            <input
              type="text"
              placeholder="Search here"
              className="px-4 py-2 text-white placeholder-white bg-white rounded-full bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <div className="flex space-x-2">
              <button className="text-white">
                <i className="fas fa-comment-dots"></i>
              </button>
              <button className="text-white">
                <i className="fas fa-bell"></i>
              </button>
              <button className="text-white">
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Total Balance Card */}
          <div className="col-span-2 p-6 text-white bg-blue-700 bg-opacity-50 rounded-xl">
            <h2 className="text-xl">Total Balance</h2>
            <p className="mt-4 text-5xl font-bold">$20,500.05</p>
            <div className="flex justify-between mt-4 text-sm">
              <div>
                <p>Replenishment</p>
                <p>Last: April 2nd, 2024</p>
                <p>Next: May 2nd, 2024</p>
              </div>
              <div>
                <p>Budget</p>
                <p>Daily: $200</p>
                <p>Monthly: $5,000</p>
              </div>
              <div>
                <p>Income</p>
                <p>Last Month: $10,000</p>
                <p>This Month: $15,000</p>
              </div>
            </div>
          </div>

          {/* Patient queue Card */}
          <div className="p-6 text-white bg-purple-700 bg-opacity-50 rounded-xl">
            <h2 className="mb-4 text-xl">Patient Queue</h2>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Name</span>
              <span className="text-sm">Date</span>
              <span className="text-sm">Amount</span>
              <span className="text-sm">Status</span>
            </div>
            {/* Scrollable Section */}
            <div className="pr-2 space-y-2 overflow-y-auto max-h-40">
              {[
                "Studio Shodwe",
                "Borcelie",
                "Fauget",
                "Larana Inc.",
                "New Entry 1",
                "New Entry 2",
              ].map((name, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-white rounded-md bg-opacity-20"
                >
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-white rounded-full">
                      {/* Icon Placeholder */}
                      <i className="fas fa-building"></i>
                    </div>
                    <span>{name}</span>
                  </div>
                  <span>May 2nd, 2024</span>
                  <span>$1,000.50</span>
                  <button
                    className={`px-4 py-2 rounded-full ${
                      index % 2 === 0 ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {index % 2 === 0 ? "Success" : "Pending"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Credit Card Info Card */}
          {/* <div className="p-6 text-white bg-blue-700 bg-opacity-50 rounded-xl max-md:hidden">
            <h2 className="mb-4 text-xl">Credit Card</h2>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full"></div>
              <div>
                <p>123-456-7890</p>
                <p className="text-sm">Claudia Alves</p>
                <p className="text-sm">Valid Thru December 2024</p>
              </div>
            </div>
          </div> */}

          {/* Upcoming Bills Card with Scroll */}
          <div className="col-span-2 p-6 text-white bg-purple-700 bg-opacity-50 rounded-xl">
            <h2 className="mb-4 text-xl">Upcoming Bills</h2>
            {/* Scrollable Section */}
            <div className="flex space-x-4 overflow-x-auto">
              {[
                "Studio Shodwe",
                "Larana Inc.",
                "New Bill 1",
                "New Bill 2",
                "New Bill 2",
                "New Bill 2",
                "New Bill 2",
              ].map((bill, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 space-x-4 text-black bg-white rounded-md bg-opacity-20 min-w-max"
                >
                  <div className="p-2 bg-white rounded-full">
                    {/* Icon Placeholder */}
                    <i className="fas fa-building"></i>
                  </div>
                  <div>
                    <p>{bill}</p>
                    <p className="text-sm">5 days left</p>
                    <p className="text-sm">$500</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transfer and Request Buttons */}
         
        </div>
      </div>
    </>
  );
}

export default HospitalDashboard;
