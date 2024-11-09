import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleMenuClick = (index) => {
    setActiveIndex(index);
    closeMenu();
  };

  return (
    <>
      {/* Navbar */}
      <div className="w-full bg-secondary py-4 text-slate-400">
        <div className="flex md:justify-between md:items-center px-8 container">
          <div
            onClick={toggleMenu}
            className="cursor-pointer text-3xl md:hidden transition ease-in-out duration-100 text-tertiary"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          
          <h1 className="md:hidden text-xl ml-4 text-tertiary hover:opacity-85">.Elang</h1>

          <ul className="hidden md:flex gap-12 relative md:mx-auto text-2xl text-tertiary">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
              <li key={index} className="relative">
                <Link
                  to={index === 0 ? "/" : `/${item.toLowerCase()}`}
                  className={`relative hover:text-white ${activeIndex === index ? "" : ""} after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px]
                  after:bg-tertiary after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
                  onClick={() => handleMenuClick(index)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition ease-in-out duration-100" onClick={closeMenu}></div>
      )}

      <div
        className={`fixed w-50 bg-[#001F3F] text-gray-200 p-8 rounded-r-lg gap-6 transition-transform duration-500 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <ul className="flex flex-col gap-8 font-primary text-tertiary">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                to={index === 0 ? "/" : `/${item.toLowerCase()}`}
                className={`relative hover:text-white ${activeIndex === index ? "" : ""} after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-tertiary after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
                onClick={() => handleMenuClick(index)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
