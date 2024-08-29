import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Dispensation() {
  const [paracetamolDosage, setParacetamolDosage] = useState("500mg");
  const [citrazinDosage, setCitrazinDosage] = useState("10mg");
  const [azithromycinDosage, setAzithromycinDosage] = useState("250mg");
  const [showMoreDetails, setShowMoreDetails] = useState({
    paracetamol: false,
    citrazin: false,
  });

  const updateParacetamolDetails = (e) => {
    setParacetamolDosage(e.target.value);
  };

  const updateCitrazinDetails = (e) => {
    setCitrazinDosage(e.target.value);
  };

  const toggleMoreDetails = (medicine) => {
    setShowMoreDetails((prevState) => ({
      ...prevState,
      [medicine]: !prevState[medicine],
    }));
  };
  return (
    <div>
      <Navbar />
      <main className="container px-4 py-12 mx-auto mt-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Paracetamol Card */}
          <div className="p-6 bg-white rounded shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Paracetamol"
              className="object-cover w-full h-32 rounded"
            />
            <h2 className="mt-4 text-2xl font-bold">Paracetamol</h2>
            <div className="mt-4">
              <label
                htmlFor="paracetamol-dosage"
                className="block mb-2 text-gray-700"
              >
                Select Dosage:
              </label>
              <select
                id="paracetamol-dosage"
                value={paracetamolDosage}
                onChange={updateParacetamolDetails}
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded shadow-sm"
              >
                <option value="250mg">250mg</option>
                <option value="500mg">500mg</option>
                <option value="600mg">600mg</option>
              </select>
            </div>
            <div className="mt-4 text-gray-700">
              {paracetamolDosage === "250mg" && (
                <div>
                  <p>Dosage: 250mg</p>
                  <p>Age Group: 12+</p>
                  <p>Usage: Pain relief, fever reducer</p>
                  <p>Side Effects: Nausea, rash, etc.</p>
                  <p>Warnings: Do not exceed 4g per day</p>
                </div>
              )}
              {paracetamolDosage === "500mg" && (
                <div>
                  <p>Dosage: 500mg</p>
                  <p>Age Group: 12+</p>
                  <p>Usage: Pain relief, fever reducer</p>
                  <p>Side Effects: Nausea, rash, etc.</p>
                  <p>Warnings: Do not exceed 4g per day</p>
                </div>
              )}
              {paracetamolDosage === "600mg" && (
                <div>
                  <p>Dosage: 600mg</p>
                  <p>Age Group: 12+</p>
                  <p>Usage: Pain relief, fever reducer</p>
                  <p>Side Effects: Nausea, rash, etc.</p>
                  <p>Warnings: Do not exceed 4g per day</p>
                </div>
              )}
            </div>
            <button
              onClick={() => toggleMoreDetails("paracetamol")}
              className="px-4 py-2 mt-4 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700"
            >
              {showMoreDetails.paracetamol ? "Hide Details" : "More Details"}
            </button>
            {showMoreDetails.paracetamol && (
              <div className="mt-4 text-gray-700">
                <p>
                  Paracetamol, also known as acetaminophen in some countries, is
                  a common over-the-counter medication used to treat pain and
                  reduce fever.
                </p>
                <p>
                  <strong>Mechanism of action:</strong> Reduces the production
                  of prostaglandins, which cause pain and fever.
                </p>
                <p>
                  <strong>Safety profile:</strong> Generally safe, but can cause
                  liver damage if taken in excessive amounts.
                </p>
                <p>
                  <strong>Contraindications:</strong> Consult a doctor if you
                  have liver disease or consume large amounts of alcohol.
                </p>
                <p>
                  <strong>Interactions:</strong> Can interact with other
                  medications, so inform your healthcare provider about all
                  drugs you're taking.
                </p>
              </div>
            )}
          </div>

          {/* Citrazin Card */}
          <div className="p-6 bg-white rounded shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Citrazin"
              className="object-cover w-full h-32 rounded"
            />
            <h2 className="mt-4 text-2xl font-bold">Citrazin</h2>
            <div className="mt-4">
              <label
                htmlFor="citrazin-dosage"
                className="block mb-2 text-gray-700"
              >
                Select Dosage:
              </label>
              <select
                id="citrazin-dosage"
                value={citrazinDosage}
                onChange={updateCitrazinDetails}
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded shadow-sm"
              >
                <option value="10mg">10mg</option>
                <option value="20mg">20mg</option>
                <option value="30mg">30mg</option>
              </select>
            </div>
            <div className="mt-4 text-gray-700">
              {citrazinDosage === "10mg" && (
                <div>
                  <p>Dosage: 10mg</p>
                  <p>Age Group: 6+</p>
                  <p>Usage: Allergy relief</p>
                  <p>Side Effects: Drowsiness, headache</p>
                  <p>Warnings: Avoid operating machinery</p>
                </div>
              )}
              {citrazinDosage === "20mg" && (
                <div>
                  <p>Dosage: 20mg</p>
                  <p>Age Group: 12+</p>
                  <p>Usage: Allergy relief</p>
                  <p>Side Effects: Drowsiness, headache</p>
                  <p>Warnings: Avoid operating machinery</p>
                </div>
              )}
              {citrazinDosage === "30mg" && (
                <div>
                  <p>Dosage: 30mg</p>
                  <p>Age Group: 18+</p>
                  <p>Usage: Allergy relief</p>
                  <p>Side Effects: Drowsiness, headache</p>
                  <p>Warnings: Avoid operating machinery</p>
                </div>
              )}
            </div>
            <button
              onClick={() => toggleMoreDetails("citrazin")}
              className="px-4 py-2 mt-4 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700"
            >
              {showMoreDetails.citrazin ? "Hide Details" : "More Details"}
            </button>
            {showMoreDetails.citrazin && (
              <div className="mt-4 text-gray-700">
                <p>
                  Citrazin is an antihistamine used to relieve allergy symptoms
                  such as watery eyes, runny nose, itching eyes/nose, sneezing,
                  hives, and itching.
                </p>
                <p>
                  <strong>Mechanism of action:</strong> Blocks histamine, a
                  substance in the body that causes allergic symptoms.
                </p>
                <p>
                  <strong>Safety profile:</strong> Generally safe, but may cause
                  drowsiness in some individuals.
                </p>
                <p>
                  <strong>Contraindications:</strong> Consult a doctor if you
                  have kidney or liver disease.
                </p>
                <p>
                  <strong>Interactions:</strong> May interact with alcohol and
                  other sedatives, increasing drowsiness.
                </p>
              </div>
            )}
          </div>

          {/* Azithromycin card */}
          <div className="p-6 bg-white rounded shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Citrazin"
              className="object-cover w-full h-32 rounded"
            />
            <h2 className="mt-4 text-2xl font-bold">Azithromycin</h2>
            <div className="mt-4">
              <label
                htmlFor="Azithromycin-dosage"
                className="block mb-2 text-gray-700"
              >
                Select Dosage:
              </label>
              <select
                id="Azithromycin-dosage"
                value={setAzithromycinDosage}
                onChange={updateCitrazinDetails}
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded shadow-sm"
              >
                <option value="250mg">250mg</option>
                <option value="500mg">500mg</option>
              </select>
            </div>
            <div className="mt-4 text-gray-700">
              {azithromycinDosage === "10mg" && (
                <div>
                  <p>Dosage: 10mg</p>
                  <p>Age Group: 6+</p>
                  <p>Usage: Antibiotic</p>
                  <p>Side Effects: fever,swelling</p>
                  <p>Warnings: Avoid operating machinery</p>
                </div>
              )}
              {citrazinDosage === "20mg" && (
                <div>
                  <p>Dosage: 20mg</p>
                  <p>Age Group: 12+</p>
                  <p>Usage: Allergy relief</p>
                  <p>Side Effects: Drowsiness, headache</p>
                  <p>Warnings: Avoid operating machinery</p>
                </div>
              )}
              {citrazinDosage === "30mg" && (
                <div>
                  <p>Dosage: 30mg</p>
                  <p>Age Group: 18+</p>
                  <p>Usage: Allergy relief</p>
                  <p>Side Effects: Drowsiness, headache</p>
                  <p>Warnings: Avoid operating machinery</p>
                </div>
              )}
            </div>
            <button
              onClick={() => toggleMoreDetails("citrazin")}
              className="px-4 py-2 mt-4 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700"
            >
              {showMoreDetails.citrazin ? "Hide Details" : "More Details"}
            </button>
            {showMoreDetails.citrazin && (
              <div className="mt-4 text-gray-700">
                <p>
                  Citrazin is an antihistamine used to relieve allergy symptoms
                  such as watery eyes, runny nose, itching eyes/nose, sneezing,
                  hives, and itching.
                </p>
                <p>
                  <strong>Mechanism of action:</strong> Blocks histamine, a
                  substance in the body that causes allergic symptoms.
                </p>
                <p>
                  <strong>Safety profile:</strong> Generally safe, but may cause
                  drowsiness in some individuals.
                </p>
                <p>
                  <strong>Contraindications:</strong> Consult a doctor if you
                  have kidney or liver disease.
                </p>
                <p>
                  <strong>Interactions:</strong> May interact with alcohol and
                  other sedatives, increasing drowsiness.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dispensation;
