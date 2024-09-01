import React, { useState } from "react";
import Navbar from "../components/Navbar";

const MedicineInfo = () => {
  // Define state for selected dosages
  const [selectedDosage, setSelectedDosage] = useState({
    paracetamol: 500,
    cetirizine: 10,
    ibuprofen: 400,
    amoxicillin: 500,
  });

  // Medicine data
  const medicineData = {
    paracetamol: {
      name: "Paracetamol",
      image:
        "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/5/22/1432316638772/Paracetamol---should-you--009.jpg?width=700&quality=85&auto=format&fit=max&s=4762a5336c860dcbda1aaac586d38945",
      options: [250, 500, 650],
      info: {
        250: {
          usage: "Used to relieve mild pain and reduce fever.",
          dosage:
            "250 mg every 4-6 hours as needed. Do not exceed 1 gram in 24 hours.",
          sideEffects: "Nausea, rash, headache.",
        },
        500: {
          usage: "Used to relieve moderate pain and reduce fever.",
          dosage:
            "500 mg every 4-6 hours as needed. Do not exceed 4 grams in 24 hours.",
          sideEffects: "Nausea, liver damage with excessive use, rash.",
        },
        650: {
          usage:
            "Used to relieve moderate to severe pain and reduce high fever.",
          dosage:
            "650 mg every 4-6 hours as needed. Do not exceed 4 grams in 24 hours.",
          sideEffects: "Nausea, liver damage with excessive use, dizziness.",
        },
        details: `Paracetamol, also known as acetaminophen in some countries, is a common over-the-counter medication used to treat pain and reduce fever.
        <br><br>
        <strong>Mechanism of Action:</strong> Reduces the production of prostaglandins, chemicals that cause pain and fever.
        <br><br>
        <strong>Safety Profile:</strong> Generally safe when used as directed but can cause serious liver damage if overdosed.
        <br><br>
        <strong>Contraindications:</strong> People with liver disease or heavy alcohol use should consult a doctor before use.
        <br><br>
        <strong>Interactions:</strong> Can interact with other medications; inform healthcare providers about all drugs being taken.
        <br><br>
        <strong>Availability:</strong> Widely available over the counter in most countries.`,
      },
    },
    cetirizine: {
      name: "Cetirizine",
      image: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/5/22/1432316638772/Paracetamol---should-you--009.jpg?width=700&quality=85&auto=format&fit=max&s=4762a5336c860dcbda1aaac586d38945",
      options: [5, 10, 20],
      info: {
        5: {
          usage:
            "Relieves mild allergy symptoms such as sneezing and runny nose.",
          dosage: "5 mg once daily.",
          sideEffects: "Drowsiness, dry mouth, fatigue.",
        },
        10: {
          usage:
            "Relieves moderate allergy symptoms including itching and watery eyes.",
          dosage: "10 mg once daily.",
          sideEffects: "Drowsiness, headache, dry mouth.",
        },
        20: {
          usage: "Used in severe allergic reactions under medical supervision.",
          dosage: "20 mg once daily. Consult a doctor before use.",
          sideEffects: "Increased drowsiness, confusion, dry mouth.",
        },
        details: `Cetirizine is a second-generation antihistamine used to treat allergy symptoms.
        <br><br>
        <strong>Mechanism of Action:</strong> Blocks histamine receptors, reducing allergic responses.
        <br><br>
        <strong>Safety Profile:</strong> Generally well-tolerated with minimal sedation compared to first-generation antihistamines.
        <br><br>
        <strong>Contraindications:</strong> Patients with severe kidney disease should adjust dosage or avoid use.
        <br><br>
        <strong>Interactions:</strong> May increase effects of sedatives and alcohol.
        <br><br>
        <strong>Availability:</strong> Available over the counter in most countries.`,
      },
    },
    ibuprofen: {
      name: "Ibuprofen",
      image: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/5/22/1432316638772/Paracetamol---should-you--009.jpg?width=700&quality=85&auto=format&fit=max&s=4762a5336c860dcbda1aaac586d38945",
      options: [200, 400, 600],
      info: {
        200: {
          usage: "Relieves mild pain such as headaches and menstrual cramps.",
          dosage:
            "200 mg every 4-6 hours as needed. Do not exceed 1200 mg in 24 hours.",
          sideEffects: "Stomach upset, nausea, dizziness.",
        },
        400: {
          usage: "Relieves moderate pain and reduces inflammation.",
          dosage:
            "400 mg every 4-6 hours as needed. Do not exceed 1200 mg in 24 hours without medical advice.",
          sideEffects: "Stomach pain, heartburn, nausea.",
        },
        600: {
          usage:
            "Used for severe pain and inflammation under medical supervision.",
          dosage:
            "600 mg every 6 hours as prescribed. Monitor for side effects.",
          sideEffects:
            "Increased risk of gastrointestinal bleeding, kidney issues.",
        },
        details: `Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever.
        <br><br>
        <strong>Mechanism of Action:</strong> Inhibits prostaglandin synthesis, reducing pain and inflammation.
        <br><br>
        <strong>Safety Profile:</strong> Generally safe when used as directed but can cause gastrointestinal issues and increase cardiovascular risk with prolonged use.
        <br><br>
        <strong>Contraindications:</strong> Patients with ulcers, bleeding disorders, or kidney disease should use cautiously.
        <br><br>
        <strong>Interactions:</strong> May interact with blood thinners, other NSAIDs, and certain blood pressure medications.
        <br><br>
        <strong>Availability:</strong> Available over the counter in lower doses; higher doses require a prescription.`,
      },
    },
    amoxicillin: {
      name: "Amoxicillin",
      image: "https://via.placeholder.com/400x200.png?text=Amoxicillin",
      options: [250, 500, 875],
      info: {
        250: {
          usage:
            "Treats mild bacterial infections such as ear and throat infections.",
          dosage: "250 mg every 8 hours for 7-10 days.",
          sideEffects: "Nausea, diarrhea, rash.",
        },
        500: {
          usage:
            "Treats moderate bacterial infections including respiratory tract infections.",
          dosage: "500 mg every 8 hours for 7-10 days.",
          sideEffects: "Nausea, diarrhea, yeast infections.",
        },
        875: {
          usage:
            "Used for severe infections like pneumonia under medical supervision.",
          dosage: "875 mg every 12 hours for 7-14 days.",
          sideEffects: "Gastrointestinal upset, allergic reactions, skin rash.",
        },
        details: `Amoxicillin is a broad-spectrum penicillin antibiotic used to treat various bacterial infections.
        <br><br>
        <strong>Mechanism of Action:</strong> Inhibits bacterial cell wall synthesis, leading to cell death.
        <br><br>
        <strong>Safety Profile:</strong> Generally safe but can cause allergic reactions in penicillin-sensitive individuals.
        <br><br>
        <strong>Contraindications:</strong> Patients with known penicillin allergy should avoid use.
        <br><br>
        <strong>Interactions:</strong> May interact with anticoagulants and other antibiotics.
        <br><br>
        <strong>Availability:</strong> Available by prescription in most countries.`,
      },
    },
  };

  // Function to handle dosage change
  const handleDosageChange = (medicine, dosage) => {
    setSelectedDosage((prevState) => ({
      ...prevState,
      [medicine]: dosage,
    }));
  };

  // Function to open modal
  const [modalContent, setModalContent] = useState(null);

  const openModal = (medicine) => {
    setModalContent(medicineData[medicine].info.details);
    document.getElementById("modal").classList.remove("hidden");
  };

  const closeModal = () => {
    setModalContent(null);
    document.getElementById("modal").classList.add("hidden");
  };

  return (
    <>
    <Navbar/>
    <div className="mt-12 bg-gray-100">
      <div className="container py-10 mx-auto">
        <h1 className="mb-10 text-3xl font-bold text-center">
          Medicine Information
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {Object.keys(medicineData).map((medicineKey) => {
            const medicine = medicineData[medicineKey];
            const selectedInfo = medicine.info[selectedDosage[medicineKey]];
            return (
              <div
                key={medicineKey}
                className="overflow-hidden bg-white rounded-lg shadow-md"
              >
                <img
                  src={medicine.image}
                  alt={`${medicine.name} Image`}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-semibold">
                    {medicine.name}
                  </h2>
                  <p className="mb-4 text-gray-700">{selectedInfo.usage}</p>
                  <label className="block mb-2 text-gray-700">
                    Select Dosage:
                    <select
                      value={selectedDosage[medicineKey]}
                      onChange={(e) =>
                        handleDosageChange(
                          medicineKey,
                          parseInt(e.target.value)
                        )
                      }
                      className="block w-full mt-1 border border-gray-300 rounded-md"
                    >
                      {medicine.options.map((option) => (
                        <option key={option} value={option}>
                          {option} mg
                        </option>
                      ))}
                    </select>
                  </label>
                  <p className="mt-4 text-gray-600">
                    <strong>Dosage Instructions:</strong> {selectedInfo.dosage}
                  </p>
                  <p className="text-gray-600">
                    <strong>Side Effects:</strong> {selectedInfo.sideEffects}
                  </p>
                  <button
                    onClick={() => openModal(medicineKey)}
                    className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md"
                  >
                    More Information
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <div
        id="modal"
        className="fixed inset-0 flex items-center justify-center hidden bg-black bg-opacity-50"
      >
        <div className="w-full max-w-xl p-6 bg-white rounded-lg">
          <button
            onClick={closeModal}
            className="float-right text-xl font-bold text-red-500"
          >
            &times;
          </button>
          <div dangerouslySetInnerHTML={{ __html: modalContent }} />
        </div>
      </div>
    </div>
    </>
  );
};

export default MedicineInfo;
