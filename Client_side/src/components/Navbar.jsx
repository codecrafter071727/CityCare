import React, { useState } from "react";
import { FaHospitalUser } from "react-icons/fa";
import GlowingButton from "./GlowingButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import SideScroll from "./SideScroll";

function Navbar() {
  const [nav, setNav] = useState(true);
  return (
    <>
      <nav className="flex fixed top-0 left-0 w-full h-[9vh] justify-around px-2 text-xl shadow-sm z-10 bg-white ">
        <div className="flex p-2">
          {" "}
          <FaHospitalUser size={60} />
          <div className="px-3 pt-3 text-3xl max-md:text-xl max-md:mt-2">
            CityCare
          </div>
        </div>
        <div className="flex pt-[2vh] gap-x-8 text-slate-600 max-md:hidden">
          <div className="flex p-2 cursor-pointer gap-x-8">
            <div className="hover:scale-110">Services</div>
            <div className="hover:scale-110">ContactUs</div>
            <div className="hover:scale-110">Login</div>
            <div className="hover:scale-110">Signup</div>
            <div className=" hover:scale-110">crazy</div>
          </div>
        </div>
        <div className="pt-[1.5vh] flex">
          <GlowingButton />
          <div
            onClick={() => {
              setNav(!nav);
            }}
            className="mt-1 ml-5 sm:hidden"
          >
            {nav ? (
              <RxCross1 size={35} />
             
            ) : (
              <RxHamburgerMenu className="" size={35} />
            )}
          </div>
        </div>
        <div>
        <SideScroll  nav={nav} />
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;
