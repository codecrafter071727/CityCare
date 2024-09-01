import React, { useState } from "react";

const symptomDatabase = {
  fever: { condition: "Common flu or cold.", doctor: "General Physician" },
  cough: {
    condition: "Possible respiratory infection.",
    doctor: "Pulmonologist",
  },
  headache: {
    condition: "Could be a migraine or tension headache.",
    doctor: "Neurologist",
  },
  "sore throat": {
    condition: "May indicate a throat infection.",
    doctor: "ENT Specialist",
  },
  fatigue: {
    condition: "Can be due to various factors, including lack of sleep.",
    doctor: "General Physician",
  },
  "chest pain": {
    condition: "Could be related to heart issues or muscular strain.",
    doctor: "Cardiologist",
  },
  "shortness of breath": {
    condition: "May indicate respiratory issues or heart conditions.",
    doctor: "Pulmonologist",
  },
  nausea: {
    condition: "Can be caused by digestive issues or infections.",
    doctor: "Gastroenterologist",
  },
  dizziness: {
    condition: "Could be related to inner ear issues or low blood pressure.",
    doctor: "Neurologist",
  },
  "joint pain": {
    condition: "Could be arthritis or other musculoskeletal issues.",
    doctor: "Rheumatologist",
  },
  rashes: {
    condition: "Can be due to various skin conditions or allergies.",
    doctor: "Dermatologist",
  },
  "abdominal pain": {
    condition: "May indicate gastrointestinal issues.",
    doctor: "Gastroenterologist",
  },
  "swollen legs": {
    condition: "Could be related to circulatory issues or kidney problems.",
    doctor: "Cardiologist",
  },
  insomnia: {
    condition: "May be caused by stress, anxiety, or sleep disorders.",
    doctor: "Sleep Specialist",
  },
};

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [result, setResult] = useState("");
  const [doctor, setDoctor] = useState("");

  const handleSymptomClick = (symptom) => {
    setSelectedSymptoms((prevSymptoms) =>
      prevSymptoms.includes(symptom)
        ? prevSymptoms.filter((sym) => sym !== symptom)
        : [...prevSymptoms, symptom]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let diagnosis = "No specific diagnosis available.";
    let recommendedDoctor = "No specific recommendation.";

    // Check for selected symptoms and match the database
    selectedSymptoms.forEach((symptom) => {
      if (symptomDatabase[symptom]) {
        diagnosis = symptomDatabase[symptom].condition;
        recommendedDoctor = symptomDatabase[symptom].doctor;
      }
    });
    setResult(diagnosis);
    setDoctor(recommendedDoctor);
  };

  return (
    <div className="w-full max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-3xl font-extrabold text-gray-800">
        Symptom Checker
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
          {Object.keys(symptomDatabase).map((symptom) => (
            <div
              key={symptom}
              className={`p-4 border rounded-lg cursor-pointer transition duration-200 ease-in-out transform
                            ${
                              selectedSymptoms.includes(symptom)
                                ? "bg-blue-400 text-white border-blue-500"
                                : "bg-gray-50 border-gray-300"
                            }
                            hover:bg-blue-300 hover:border-blue-400 hover:scale-105`}
              onClick={() => handleSymptomClick(symptom)}
            >
              <p className="text-lg font-medium">{symptom}</p>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg shadow md:w-auto hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Check Symptoms
        </button>
      </form>
      {result && (
        <div className="p-6 mt-8 border-l-4 border-green-400 rounded-md shadow-md bg-green-50">
          <h3 className="text-lg font-semibold text-green-800">
            Possible Condition:
          </h3>
          <p className="text-gray-700">{result}</p>
          <h4 className="mt-4 font-semibold text-green-800 text-md">
            Consult:
          </h4>
          <p className="text-gray-700">{doctor}</p>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
