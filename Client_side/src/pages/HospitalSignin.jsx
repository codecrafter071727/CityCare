import React from "react";
import Navbar from "../components/Navbar";

function HospitalSignin() {
  return (
    <>
    <div>
        <Navbar/>
    </div>
      <main className="flex items-center justify-center h-screen place-content-center">
        <div className="w-[88vh] h-[50vh]  border-black rounded-lg bg-white shadow-md p-3">
          <center className="items-center p-2 ">
            <h1>Sign in</h1>
            <p className="text-slate-500">
              Enter your credentials to access your Hospital dashboard
            </p>
          </center>
          <div className="px-2">
            <p className="py-2 pl-1 m-0 font-medium"> Email </p>
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control"
                placeholder="Vishu"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <p className="py-2 pl-1 m-0 font-medium"> Password </p>
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control"
                placeholder="Pratap"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="px-3 py-3">
            <button type="button" className="w-full btn btn-dark">
              Sign in
            </button>
            <div className="flex justify-center">
              <div className="cursor-pointer ">Don't have an account? </div>
              <div className="underline cursor-pointer"> Signup</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HospitalSignin;
