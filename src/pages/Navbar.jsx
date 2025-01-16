import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa"; // Import ikon yang diperlukan
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

  const menuItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "About", icon: <FaUser />, path: "/about" },
    { name: "Skills", icon: <FaCode />, path: "/skills" },
    { name: "Projects", icon: <FaProjectDiagram />, path: "/projects" },
    { name: "Contact", icon: <FaEnvelope />, path: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="w-full bg-secondary py-4 shadow-md fixed z-10 hover:opacity-75 transition-all duration-500">
        <div className="flex justify-between items-center px-8 container">
          {/* Logo */}
          <h1 className="text-xl font-bold text-tertiary hover:opacity-85">
            .El
          </h1>
          {/* Hamburger Menu */}
          <div
            onClick={toggleMenu}
            className="cursor-pointer text-3xl md:hidden transition ease-in-out duration-100 text-tertiary"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-12 text-lg font-semibold text-tertiary">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`relative group ${
                  activeIndex === index ? "text-white" : "hover:text-white"
                }`}
              >
                <Link
                  to={item.path}
                  className="flex items-center gap-2 duration-300 hover:scale-105 hover:duration-300 transition-all"
                  onClick={() => handleMenuClick(index)}
                >
                  {item.icon} {item.name}
                </Link>
                <div
                  className={`absolute left-0 bottom-[-6px] h-[2px] w-0 bg-tertiary transition-all duration-300 ${
                    activeIndex === index ? "w-full" : "group-hover:w-full"
                  }`}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
  className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-[#001F3F]/80 text-gray-200 p-8 flex flex-col gap-6 rounded-r-lg shadow-2xl backdrop-blur-lg z-50 transition-transform duration-500 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <ul className="flex flex-col gap-6 font-primary text-lg">
    {menuItems.map((item, index) => (
      <li key={index}>
        <Link
          to={item.path}
          className={`flex items-center gap-3 transition duration-300 transform text-tertiary  ${
            activeIndex === index
              ? "text-tertiary font-bold scale-105 shadow-lg"
              : "hover:text-tertiary hover:scale-105"
          }`}
          onClick={() => handleMenuClick(index)}
        >
          <span className="transition-transform duration-300 hover:rotate-12">
            {item.icon}
          </span>
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
  <button
    className="mt-auto bg-gradient-to-r from-tertiary to-yellow-400 text-white py-2 px-4 rounded-lg hover:scale-110 hover:shadow-xl transition duration-300 ease-in-out"
    onClick={closeMenu}
  >
    Close Menu
  </button>
</div>

    </>
  );
};

export default Navbar;
