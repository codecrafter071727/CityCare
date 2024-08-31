import React from "react";

const CancerCare = () => {
  return (
    <div className="flex flex-col items-center justify-between p-8 bg-gray-100 lg:flex-row lg:p-16">
      {/* Left Content */}
      <div className="flex flex-col items-start space-y-6 text-center lg:text-left lg:w-1/2">
        <h1 className="text-4xl font-bold text-gray-800 lg:text-5xl">
          Cancer Care
        </h1>
        <button className="px-6 py-3 text-lg font-medium text-white bg-orange-300 rounded-full">
          Enquire Now
        </button>
      </div>

      {/* Right Content */}
      <div className="relative flex items-center justify-center mt-8 lg:w-1/2 lg:mt-0">
        <div className="absolute top-0 right-0 w-full lg:w-96">
          <img
            src="https://via.placeholder.com/300x300.png?text=Heart+Image"
            alt="Heart"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute w-full p-8 lg:left-0 lg:w-2/3 lg:p-12">
          <ul className="space-y-6 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 font-bold text-red-500">•</span>{" "}
              Multi-disciplinary Tumor Board approach for end-to-end, customized
              treatment of all cancers
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-red-500">•</span> Latest,
              advanced technologies for fast, accurate diagnosis and precise
              intervention
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-red-500">•</span> Experts in
              minimally invasive robotic surgeries for faster recovery
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-red-500">•</span> Among first
              in India to adopt latest therapies like SBRT that treat lung and
              liver cancer in under 20 minutes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CancerCare;
