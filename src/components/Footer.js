import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-bg text-primary-text py-6">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl mb-4">Bull Sheet Metal</h3>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com" className="text-accent-1">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com" className="text-accent-2">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.twitter.com" className="text-primary-text">
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-secondary-text">
          &copy; 2022 Bull Sheet Metal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
