import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-primary-bg text-primary-text p-4 sticky top-0 z-50">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-semibold">Bull Sheet Metal</div>

        <div className="md:flex flex-1 justify-evenly items-center hidden">
          <a
            href="#about"
            className="text-accent-1 px-4 py-2 rounded hover:bg-secondary-bg transition duration-300"
          >
            About
          </a>
          <a
            href="#showcase"
            className="text-accent-2 px-4 py-2 rounded hover:bg-secondary-bg transition duration-300"
          >
            Showcase
          </a>
          <a
            href="#contact"
            className="text-primary-text px-4 py-2 rounded hover:bg-secondary-bg transition duration-300"
          >
            Contact
          </a>
        </div>

        <div className="flex space-x-4">
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes />
              ) : (
                <div>
                  <div className="w-6 h-1 bg-accent-1 mb-1"></div>
                  <div className="w-6 h-1 bg-accent-2 mb-1"></div>
                  <div className="w-6 h-1 bg-primary-text mb-1"></div>
                </div>
              )}
            </button>
          </div>

          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-1"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-2"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-text"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden fixed top-16 right-0 z-50 bg-primary-bg p-4">
            <a
              href="#about"
              className="text-accent-1 block px-4 py-2 rounded hover:bg-secondary-bg transition duration-300"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              href="#showcase"
              className="text-accent-2 block px-4 py-2 rounded hover:bg-secondary-bg transition duration-300"
              onClick={closeMenu}
            >
              Showcase
            </a>
            <a
              href="#contact"
              className="text-primary-text block px-4 py-2 rounded hover:bg-secondary-bg transition duration-300"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
