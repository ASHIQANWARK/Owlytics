import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import logo from "../assets/images/Files/Owlytics by Ique White.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#061428] to-[#0b1c3a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo */}
        <Link to="/">
          <img src={logo} alt="Owlytics Logo" className="h-10 w-auto" />
        </Link>

        {/* Column 2: Contact + Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <p className="text-gray-300">
            Address: Door No: 84, 3rd Cross Rd, KHB Block, Koramangala,
            Bengaluru, Karnataka 560095
          </p>
          <p className="text-gray-300 mt-2">
            Email:{" "}
            <a
              href="mailto:contact@owlytics.co"
              className="text-[#ffab00] hover:underline"
            >
              contact@owlytics.co
            </a>
          </p>
          <p className="text-gray-300 mt-2">
            <Link
              to="/privacypolicy"
              className="text-[#ffab00] hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/contact" className="text-[#ffab00] hover:underline">
              Help Centre
            </Link>
          </p>
        </div>

        {/* Column 3: Socials */}
        <div className="flex flex-col items-center mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Follow Us
          </h3>
          <div className="flex space-x-6">
            <a
              href="#"
              aria-label="Facebook"
              className="text-[#1358f9] transition duration-300 hover:scale-110 hover:opacity-80"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/incubenation?igsh=MWRtbmxyZHNlYjhyMA=="
              aria-label="Instagram"
              className="text-[#e82323] transition duration-300 hover:scale-110 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              aria-label="X"
              className="text-[#2bf00c] transition duration-300 hover:scale-110 hover:opacity-80"
            >
              <FaX size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/incubenation"
              aria-label="LinkedIn"
              className="text-[#1358f9] transition duration-300 hover:scale-110 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Column 4: Map */}
        <div className="w-full flex justify-center md:justify-end">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=Koramangala,Bengaluru&output=embed"
            width="100%"
            height="180"
            className="rounded-lg shadow-lg max-w-md"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; 2025 iQue Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
