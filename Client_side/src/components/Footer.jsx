import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 text-gray-800 bg-white">
      <div className="container px-4 mx-auto lg:flex lg:justify-between">
        <div className="mb-8 lg:w-1/3 lg:mb-0">
          <h2 className="mb-4 text-2xl font-bold">Please drop your review</h2>
          <div className="flex items-center border-b border-black">
            <input
              type="email"
              placeholder="Email address"
              className="w-full py-2 text-gray-600 focus:outline-none"
            />
            <button className="ml-2 text-xl">&#8594;</button>
          </div>
        </div>

        <div className="mb-8 lg:w-1/4 lg:mb-0">
          <h3 className="mb-4 font-bold">Social Handles</h3>
          <ul>
            <li className="mb-2">Instagram</li>
            <li className="mb-2">Whatsapp </li>
            <li className="mb-2">Community</li>
            <li className="italic">Mail</li>
          </ul>
        </div>

        <div className="lg:w-1/4">
          <h3 className="mb-4 font-bold">Support</h3>
          <ul>
            <li className="mb-2">Get all hospitals</li>
            <li className="mb-2">Help & FAQ</li>
            <li className="mb-2">Terms & Conditions</li>
            <li className="mb-2">Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
