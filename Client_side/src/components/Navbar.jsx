import React from "react";
import { FaHospitalUser } from "react-icons/fa";
import GlowingButton from "./GlowingButton";

function Navbar() {
  return (
    <>
      <nav className="flex w-full h-[10vh] justify-around px-2 text-xl shadow-sm z-10 bg-white absolute top-0 left-0">
        <div className="flex p-2">
          {" "}
          <FaHospitalUser size={60} />
          <div className="px-3 pt-3 text-3xl max-md:text-xl max-md:mt-2">
            CityCare
          </div>
        </div>
        <div className="flex pt-[3vh] gap-x-8 text-slate-600 max-md:hidden">
          <div className="flex p-2 cursor-pointer gap-x-8">
            <div className="hover:scale-110">Services</div>
            <div className="hover:scale-110">ContactUs</div>
            <div className="hover:scale-110">Login</div>
            <div className="hover:scale-110">Signup</div>
            <div className=" hover:scale-110">crazy</div>
          </div>
        </div>
        <div className="pt-3 ">
          <GlowingButton />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
