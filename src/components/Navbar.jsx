import React, { useState } from "react";
import { Icon } from "@iconify/react";
import logo from "../assets/images/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="flex items-center justify-between p-4 max-w-6xl mx-auto">
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-800 focus:outline-none mr-2 p-1"
            >
              {isOpen ? (
                <Icon icon="ci:close-md" width="24" height="24" />
              ) : (
                <Icon
                  icon="icon-park-outline:hamburger-button"
                  width="24"
                  height="24"
                />
              )}
            </button>
           
            <img src={logo} alt="" className="md:w-28 w-24 md:block text-2xl md:text-3xl font-black text-main-color mr-2"/>
            <ul className="hidden md:flex space-x-4">
              <li className="p-4 hover:text-main-color">
                <a href="features">Features</a>
              </li>
              <li className="p-4 hover:text-main-color">Pricing</li>
              <li className="p-4 hover:text-main-color">Templates</li>
              <li className="p-4 hover:text-main-color">Resources</li>
            </ul>
          </div>
          <div>
            <button className="hidden md:inline-block text-gray-800 border border-gray-300 px-4 py-2 mx-2 rounded shadow-sm font-semibold">
              Get a demo
            </button>
            <button className="text-white border border-red-600 px-4 py-2 mx-2 rounded shadow-sm font-semibold bg-red-600">
              Sign up for free
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden absolute w-full bg-white">
            <ul className="">
              <li className="p-4 my-2 border-l-8 border-red-500 bg-red-100 text-main-color">
                Features
              </li>
              <li className="p-4 my-2 border-l-8 text-gray-500">Pricing</li>
              <li className="p-4 my-2 border-l-8 text-gray-500">Templates</li>
              <li className="p-4 my-2 border-l-8 text-gray-500">Resources</li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
