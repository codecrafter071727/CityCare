import React from "react";

function HospitalSignUP() {
  return (
    <>
      <main className="flex items-center justify-center h-screen place-content-center">
        <div className="w-[88vh] h-[68vh]  border-black rounded-lg bg-white">
          <center className="items-center p-2 ">
            <h1>Sign up</h1>
            <p className="text-slate-500">
              Enter your Hospital details to Register with CityCare
            </p>
          </center>
          <div className="px-2">
            <p className="py-2 pl-1 m-0 font-medium"> Hospital Name </p>
            <div claclassNamess="input-group flex-nowrap">
              <input
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <p className="py-2 pl-1 m-0 font-medium"> Email </p>
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <p className="py-2 pl-1 m-0 font-medium"> Password </p>
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <p className="py-2 pl-1 m-0 font-medium"> Contact Number </p>
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <p className="py-2 pl-1 m-0 font-medium"> Address </p>
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <p className="py-2 pl-1 m-0 font-medium"> Number of beds </p>
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="px-3 py-3">
            <button type="button" className="w-full btn btn-dark">
              Sign up
            </button>
            <div className="flex justify-center">
              <div className="cursor-pointer ">Hospital already Registered? </div>
              <div className="underline cursor-pointer"> Signin</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HospitalSignUP;
