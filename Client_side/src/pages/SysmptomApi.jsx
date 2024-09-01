import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const symptomDatabase = {
  fever: { condition: "Common flu or cold.", doctor: "General Physician" },
  cough: {
    condition: "Possible respiratory infection.",
    doctor: "pulmonologist",
  },
  headache: {
    condition: "Could be a migraine or tension headache.",
    doctor: "neurologist",
  },
  "sore throat": {
    condition: "May indicate a throat infection.",
    doctor: "ENT Specialist",
  },
  fatigue: {
    condition: "Can be due to various factors, including lack of sleep.",
    doctor: "general-physician",
  },
  "chest pain": {
    condition: "Could be related to heart issues or muscular strain.",
    doctor: "cardiologist",
  },
  "shortness of breath": {
    condition: "May indicate respiratory issues or heart conditions.",
    doctor: "pulmonologist",
  },
  nausea: {
    condition: "Can be caused by digestive issues or infections.",
    doctor: "gastroenterologist",
  },
  dizziness: {
    condition: "Could be related to inner ear issues or low blood pressure.",
    doctor: "neurologist",
  },
  "joint pain": {
    condition: "Could be arthritis or other musculoskeletal issues.",
    doctor: "rheumatologist",
  },
  rashes: {
    condition: "Can be due to various skin conditions or allergies.",
    doctor: "dermatologist",
  },
  "abdominal pain": {
    condition: "May indicate gastrointestinal issues.",
    doctor: "gastroenterologist",
  },
  "swollen legs": {
    condition: "Could be related to circulatory issues or kidney problems.",
    doctor: "cardiologist",
  },
  insomnia: {
    condition: "May be caused by stress, anxiety, or sleep disorders.",
    doctor: "Sleep Specialist",
  },
};

const SymptomChecker = () => {
  const navigate = useNavigate();
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
    <>
      <Navbar />
      <div className="w-full p-8 mx-auto mt-12 bg-white rounded-lg shadow-md max-w-8xl">
        <h2 className="mb-6 text-3xl font-extrabold text-gray-800">
          Symptom Checker
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-5">
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
          <div className="flex">
            <div className="p-6 mt-8 w-[100%] border-l-4 border-green-400 rounded-md shadow-md bg-green-50">
              <h3 className="text-lg font-semibold text-green-800">
                Possible Condition:
              </h3>
              <p className="text-gray-700">{result}</p>
              <h4 className="mt-4 font-semibold text-green-800 text-md">
                Consult to this Doctor speacialisation:
              </h4>
              <p className="text-gray-700">{doctor}</p>
            </div>
            <div
              onClick={() => {
                navigate(`/special-doctors/${doctor}`);
              }}
              className="w-full p-6 mt-8 text-xl border-green-400 rounded-md bg-green-50"
            >
              consult to your: <Button doctor={doctor} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SymptomChecker;
