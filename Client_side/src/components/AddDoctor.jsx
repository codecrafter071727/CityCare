import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AddDoctor = () => {
  const { hospitalId } = useParams(); // Get hospitalId from URL parameters
  const [doctorName, setDoctorName] = useState("");
  const [doctorSpecialization, setDoctorSpecialization] = useState("");
  const [doctorStatus, setDoctorStatus] = useState("");

  const handleAddDoctor = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/hospital/add-doctor/${hospitalId}`,
        {
          doctorName,
          doctorSpecialization,
         
        }
      );
      alert("Doctor added successfully!");
      setDoctorName("");
      setDoctorSpecialization("");
      setDoctorStatus("");
    } catch (error) {
      console.error("Error adding doctor:", error);
      alert("Failed to add doctor. Please try again.");
    }
  };

  return (
    <div className="p-6 mx-auto mt-10 bg-white rounded-md shadow-md w-[40rem]">
      <h2 className="mb-4 text-2xl font-bold text-center">Add Doctor</h2>
      <form onSubmit={handleAddDoctor}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Doctor Name
          </label>
          <input
            type="text"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            placeholder="Enter doctor's name"
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Specialization
          </label>
          <input
            type="text"
            value={doctorSpecialization}
            onChange={(e) => setDoctorSpecialization(e.target.value)}
            placeholder="Enter specialization"
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            value={doctorStatus}
            onChange={(e) => setDoctorStatus(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>
              Select status
            </option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full p-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
