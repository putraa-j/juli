import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-8">
          <li>
            <a
              href="#home"
              className="text-gray-800 hover:text-gray-500 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-800 hover:text-gray-500 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-800 hover:text-gray-500 transition"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-800 hover:text-gray-500 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
