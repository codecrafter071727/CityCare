import React, { useState } from "react";
import Navbar from "../components/Navbar";

function App() {
  // States for dosages
  const [paracetamolDosage, setParacetamolDosage] = useState("500mg");
  const [citrazinDosage, setCitrazinDosage] = useState("10mg");
  const [azithromycinDosage, setAzithromycinDosage] = useState("250mg");
  const [amoxicillinDosage, setAmoxicillinDosage] = useState("250mg");
  const [metronidazoleDosage, setMetronidazoleDosage] = useState("500mg");
  const [ibuprofenDosage, setIbuprofenDosage] = useState("200mg");
  const [metforminDosage, setMetforminDosage] = useState("500mg");
  const [ranitidineDosage, setRanitidineDosage] = useState("150mg");
  const [omeprazoleDosage, setOmeprazoleDosage] = useState("20mg");

  // State to show/hide more details
  const [showMoreDetails, setShowMoreDetails] = useState({
    paracetamol: false,
    citrazin: false,
    azithromycin: false,
    amoxicillin: false,
    metronidazole: false,
    ibuprofen: false,
    metformin: false,
    ranitidine: false,
    omeprazole: false,
  });

  const toggleMoreDetails = (medicine) => {
    setShowMoreDetails((prevState) => ({
      ...prevState,
      [medicine]: !prevState[medicine],
    }));
  };

  // Function to update dosage state
  const updateDosage = (setDosage) => (e) => {
    setDosage(e.target.value);
  };

  // Medication card component
  const MedicineCard = ({
    medicineName,
    imgSrc,
    dosage,
    setDosage,
    dosageOptions,
    medicineKey,
    description,
    moreDetails,
  }) => (
    <div className="p-6 bg-white rounded shadow-lg">
      <img
        src={imgSrc}
        alt={medicineName}
        className="object-cover w-full h-32 rounded"
      />
      <h2 className="mt-4 text-2xl font-bold">{medicineName}</h2>
      <div className="mt-4">
        <label
          htmlFor={`${medicineName}-dosage`}
          className="block mb-2 text-gray-700"
        >
          Select Dosage:
        </label>
        <select
          id={`${medicineName}-dosage`}
          value={dosage}
          onChange={updateDosage(setDosage)}
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded shadow-sm"
        >
          {dosageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4 text-gray-700">{description}</div>
      <button
        onClick={() => toggleMoreDetails(medicineKey)}
        className="px-4 py-2 mt-4 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700"
      >
        {showMoreDetails[medicineKey] ? "Hide Details" : "More Details"}
      </button>
      {showMoreDetails[medicineKey] && (
        <div className="mt-4 text-gray-700">{moreDetails}</div>
      )}
    </div>
  );

  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Medicine Cards */}
          <MedicineCard
            medicineName="Paracetamol"
            imgSrc="https://via.placeholder.com/150"
            dosage={paracetamolDosage}
            setDosage={setParacetamolDosage}
            dosageOptions={["250mg", "500mg", "600mg"]}
            medicineKey="paracetamol"
            description={<p>Dosage: {paracetamolDosage}</p>}
            moreDetails={
              <div>
                <p>Used for pain relief and fever reduction.</p>
                <p>Do not exceed 4g per day to avoid liver damage.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Citrazin"
            imgSrc="https://via.placeholder.com/150"
            dosage={citrazinDosage}
            setDosage={setCitrazinDosage}
            dosageOptions={["10mg", "20mg", "30mg"]}
            medicineKey="citrazin"
            description={<p>Dosage: {citrazinDosage}</p>}
            moreDetails={
              <div>
                <p>Used to relieve allergy symptoms.</p>
                <p>May cause drowsiness; avoid operating machinery.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Azithromycin"
            imgSrc="https://via.placeholder.com/150"
            dosage={azithromycinDosage}
            setDosage={setAzithromycinDosage}
            dosageOptions={["250mg", "500mg"]}
            medicineKey="azithromycin"
            description={<p>Dosage: {azithromycinDosage}</p>}
            moreDetails={
              <div>
                <p>Antibiotic used to treat infections.</p>
                <p>May cause stomach upset; take with food if needed.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Amoxicillin"
            imgSrc="https://via.placeholder.com/150"
            dosage={amoxicillinDosage}
            setDosage={setAmoxicillinDosage}
            dosageOptions={["250mg", "500mg"]}
            medicineKey="amoxicillin"
            description={<p>Dosage: {amoxicillinDosage}</p>}
            moreDetails={
              <div>
                <p>Antibiotic used for bacterial infections.</p>
                <p>Consult your doctor if allergic to penicillin.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Metronidazole"
            imgSrc="https://via.placeholder.com/150"
            dosage={metronidazoleDosage}
            setDosage={setMetronidazoleDosage}
            dosageOptions={["500mg", "750mg"]}
            medicineKey="metronidazole"
            description={<p>Dosage: {metronidazoleDosage}</p>}
            moreDetails={
              <div>
                <p>Used to treat bacterial and parasitic infections.</p>
                <p>Avoid alcohol while taking this medication.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Ibuprofen"
            imgSrc="https://via.placeholder.com/150"
            dosage={ibuprofenDosage}
            setDosage={setIbuprofenDosage}
            dosageOptions={["200mg", "400mg", "600mg"]}
            medicineKey="ibuprofen"
            description={<p>Dosage: {ibuprofenDosage}</p>}
            moreDetails={
              <div>
                <p>Used for pain relief, inflammation, and fever.</p>
                <p>Take with food to reduce stomach upset.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Metformin"
            imgSrc="https://via.placeholder.com/150"
            dosage={metforminDosage}
            setDosage={setMetforminDosage}
            dosageOptions={["500mg", "850mg", "1000mg"]}
            medicineKey="metformin"
            description={<p>Dosage: {metforminDosage}</p>}
            moreDetails={
              <div>
                <p>Used to manage blood sugar levels in type 2 diabetes.</p>
                <p>Monitor kidney function while on this medication.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Ranitidine"
            imgSrc="https://via.placeholder.com/150"
            dosage={ranitidineDosage}
            setDosage={setRanitidineDosage}
            dosageOptions={["150mg", "300mg"]}
            medicineKey="ranitidine"
            description={<p>Dosage: {ranitidineDosage}</p>}
            moreDetails={
              <div>
                <p>Used to reduce stomach acid production.</p>
                <p>Consult your doctor if symptoms persist.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Omeprazole"
            imgSrc="https://via.placeholder.com/150"
            dosage={omeprazoleDosage}
            setDosage={setOmeprazoleDosage}
            dosageOptions={["20mg", "40mg"]}
            medicineKey="omeprazole"
            description={<p>Dosage: {omeprazoleDosage}</p>}
            moreDetails={
              <div>
                <p>Reduces stomach acid and treats ulcers.</p>
                <p>Long-term use may affect calcium absorption.</p>
              </div>
            }
          />
        </div>
      </main>
    </div>
  );
}

export default App;
