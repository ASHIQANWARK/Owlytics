import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/Files/Owlytics by Ique RGB.png"; // Adjust the path based on your folder structure


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleScrollTo = (id) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solution" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#00203c] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Owlytics Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(({ name, path, scrollTo }) =>
              scrollTo ? (
                <button
                  key={name}
                  onClick={() => handleScrollTo(scrollTo)}
                  className="text-base font-medium text-white hover:text-black transition"
                >
                  {name}
                </button>
              ) : (
                <Link
                  key={name}
                  to={path}
                  className="text-base font-medium text-white hover:text-black transition"
                >
                  {name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle mobile menu"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white z-50 p-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          aria-label="Close menu"
          className="absolute top-4 right-4 text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        <nav className="mt-12 space-y-6 text-lg font-semibold">
          {menuItems.map(({ name, path, scrollTo }) =>
            scrollTo ? (
              <button
                key={name}
                onClick={() => handleScrollTo(scrollTo)}
                className="block text-gray-800 hover:text-emerald-700"
              >
                {name}
              </button>
            ) : (
              <Link
                key={name}
                to={path}
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 hover:text-emerald-700"
              >
                {name}
              </Link>
            )
          )}

          <Link
            to="/book-demo"
            onClick={() => setIsOpen(false)}
            className="block mt-4 px-4 py-2 bg-emerald-700 text-white text-center rounded-md hover:bg-emerald-800 transition"
          >
            Book a Demo
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
