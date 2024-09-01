import React from "react";
import { useNavigate } from "react-router-dom";

function HeroLeft() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between p-10 bg-gray-50">
      <div className="w-1/2">
        <h2 className="text-lg font-semibold text-gray-500">Specialities</h2>
        <h1 className="mt-4 text-5xl font-bold leading-snug text-gray-800 max-md:hidden">
          An Ecosystem for Clinical Excellence
        </h1>
        <div onClick={()=>{
          navigate("/sysmptoms-api")
        }} className="w-64 p-2 text-3xl shadow rounded-xl bg-slate-200">
        <button>
        Symptom Tracker
        </button>
        </div>
      </div>
      <div className="w-1/2">
        <ul className="space-y-6">
          <li className="flex items-center justify-between cursor-pointer">
            <div
              onClick={() => {
                navigate("/cardiac-care");
              }}
              className="flex items-center"
            >
              <span className="font-semibold text-red-500">Cardiac Care</span>
            </div>
            <span className="text-xl text-red-500">&gt;</span>
          </li>
          <li className="flex items-center justify-between">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                navigate("/cancer-care");
              }}
            >
              <span className="text-gray-700">Cancer Care</span>
            </div>
            <span className="text-xl text-gray-700">&gt;</span>
          </li>
          <li className="flex items-center justify-between cursor-pointer">
            <div onClick={()=>{
              navigate("/Neurosciences")
            }} className="flex items-center">
              <span className="text-gray-700">Neurosciences</span>
            </div>
            <span className="text-xl text-gray-700">&gt;</span>
          </li>
          <li className="flex items-center justify-between cursor-pointer">
            <div onClick={()=>{
              navigate("/gastrosciences")
            }} className="flex items-center">
              <span className="text-gray-700">Gastrosciences</span>
            </div>
            <span className="text-xl text-gray-700">&gt;</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-gray-700">Orthopaedics</span>
            </div>
            <span className="text-xl text-gray-700">&gt;</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-gray-700">Renal Care</span>
            </div>
            <span className="text-xl text-gray-700">&gt;</span>
          </li>
        </ul>
        <div className="mt-10">
          <button className="flex items-center font-semibold text-red-500">
            View All Specialities
            <span className="ml-2 text-xl">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroLeft;
