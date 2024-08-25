import React from "react";
import { FaHospitalUser } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className="flex w-full h-[10vh] justify-around p-2 text-xl shadow-sm bg-white">
        <div className="flex">
          {" "}
          <FaHospitalUser size={60} />
          <div className="p-3 text-3xl ">CityCare</div>
        </div>
        <div className="flex p-3 gap-x-8">
          <div>Services</div>
          <div>Contact Us</div>
          <div>Login</div>
          <div>Signup</div>
          <div>Request Callback</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
