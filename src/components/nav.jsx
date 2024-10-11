import React, { useState } from "react";

const Nav = () => {
  const [homeToggle, setHomeToggle] = useState(false); // Initially set to false for hidden menu
  const navMenu = [
    "HOME",
    "PRODUCT & SERVICE",
    "HEALTH & DIET",
    "ABOUT US",
    "CONTACT US",
  ];

  // Toggle function to open and close the mobile menu
  const openNavLink = () => {
    setHomeToggle((prevState) => !prevState); // Toggle between true and false
  };

  return (
    <>
      <nav className="bg-white h-fit relative">
        <div className="mx-auto flex items-center justify-around">
          {/* Logo Section */}
          <div className="flex items-center lg:space-x-3 gap-2">
            <img
              src="./LogoImg/LOGO.png"
              className="object-cover object-center"
              width={80}
              alt="Logo"
            />
            <span className="lg:text-2xl text-base whitespace-nowrap font-bold text-gray-700">
              Bakery & Pastry
            </span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            <ul className="flex xl:gap-5 lg:gap-4 gap-3 text-sm font-medium text-gray-700 justify-end">
              {navMenu.map((value, index) => (
                <li
                  className="cursor-pointer hover:text-orange-700 transition-all duration-300 lg:text-[14px] font-semibold md:text-[13px]"
                  key={index}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              onClick={openNavLink}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (hidden by default) */}
        {homeToggle && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-4 p-4">
              {navMenu.map((value, index) => (
                <li
                  className="text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-700 transition-all duration-300"
                  key={index}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/** Border bottom */}
        <div className="absolute h-1 left-[10%] right-[10%] bg-orange-800"></div>
      </nav>
    </>
  );
};

export default Nav;
