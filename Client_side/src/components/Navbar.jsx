import React, { useRef, useState } from "react";
import { FaHospitalUser } from "react-icons/fa";
import GlowingButton from "./GlowingButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import SideScroll from "./SideScroll";
import { useNavigate } from "react-router-dom";
import ContactUs from "./ContactUs";

function Navbar() {
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [nav, setNav] = useState(false);
  return (
    <>
      <nav className="flex fixed top-0 left-0 w-full h-[9vh] justify-around px-2 text-xl shadow-sm z-10 bg-white ">
        <div className="flex p-2">
          {" "}
          <a href="/">
            <FaHospitalUser color="black" size={60} />
          </a>
          <div className="px-3 pt-3 text-3xl max-md:text-xl max-md:mt-2">
            <a href="/" className="text-black no-underline ">
              CityCare
            </a>
          </div>
        </div>
        <div className="flex pt-[2vh] gap-x-8 text-slate-600 max-lg:hidden">
          <div className="flex p-2 cursor-pointer gap-x-8">
            <ul></ul>
            <div
              onClick={() => {
                navigate("/contact-us");
              }}
              className="duration-100 hover:scale-110 "
            ></div>
            <div
              onClick={scrollToBottom}
              className="duration-100 hover:scale-110"
            >
              {" "}
              Contact Us{" "}
            </div>
            <div
              className="relative "
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <a href="#" className="no-underline text-slate-600">
                Sign Up / Sign In
              </a>
              {isDropdownOpen && (
                <div className="absolute left-0 p-3 bg-white shadow-lg h-52 w-52 rounded-xl text-slate-200">
                  <div>
                    <a
                      href="/hospital-signin"
                      className="block no-underline duration-300 border-b-2 text-slate-600 hover:scale-110"
                    >
                      Hospital Login
                    </a>
                  </div>

                  <div>
                    <a
                      href="/patient-signin"
                      className="block pt-3 no-underline duration-300 border-b-2 text-slate-600 hover:scale-110"
                    >
                      Patient Login
                    </a>
                  </div>
                  <div>
                    <a
                      href="/admin-login"
                      className="block pt-3 no-underline duration-300 border-b-2 text-slate-600 hover:scale-110"
                    >
                      Admin Login
                    </a>
                  </div>
                  <div>
                    <div
                      onClick={() => {
                        localStorage.removeItem("token");
                        alert("you are logged out successfuly");
                      }}
                      className="block pt-3 no-underline duration-300 border-b-2 text-slate-600 hover:scale-110"
                    >
                      Logout
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={() => {
                navigate("/dispensation");
              }}
              className=" hover:scale-110"
            >
              Medication
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/emergency");
          }}
          className="pt-[1.5vh] flex pl-14"
        >
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
          <SideScroll nav={nav} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
