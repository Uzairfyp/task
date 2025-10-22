import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "How it works",
    "Products",
    "Integrations",
    "Use Cases",
    "Blogs",
    "Case Study",
    "Examples",
    "Login",
  ];

  // Convert link text to valid IDs for href
  const formatLink = (link) => link.toLowerCase().replace(/\s+/g, "-");

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">TaskLogo</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={`#${formatLink(link)}`}
                className="hover:text-blue-600 transition font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-700">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={`#${formatLink(link)}`}
                  className="hover:text-blue-600 transition font-medium block"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
