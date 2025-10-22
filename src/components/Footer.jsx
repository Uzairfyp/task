import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1B3F] text-gray-200 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* --- Column 1: Logo + Description --- */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">Logo here</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Photomo is dedicated to protecting user data with the highest standards
            of privacy and security compliance.
          </p>
          <p className="text-xs text-gray-400">
            © Photomo - All rights reserved.
          </p>
        </div>

        {/* --- Column 2: Pages + General Links --- */}
        <div className="flex flex-col sm:flex-row gap-10">
          {/* Pages */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">PAGES</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-pink-400 cursor-pointer">Home</li>
              <li className="hover:text-pink-400 cursor-pointer">AI Gallery</li>
              <li className="hover:text-pink-400 cursor-pointer">Photo Selection</li>
              <li className="hover:text-pink-400 cursor-pointer">Beam</li>
              <li className="hover:text-pink-400 cursor-pointer">Spotlight</li>
              <li className="hover:text-pink-400 cursor-pointer">Creator Pass</li>
              <li className="hover:text-pink-400 cursor-pointer">How it works?</li>
              <li className="hover:text-pink-400 cursor-pointer">Examples</li>
              <li className="hover:text-pink-400 cursor-pointer">Blogs</li>
            </ul>
          </div>

          {/* General */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">GENERAL</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-pink-400 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-pink-400 cursor-pointer">Refund Policy</li>
              <li className="hover:text-pink-400 cursor-pointer">Terms and Conditions</li>
              <li className="hover:text-pink-400 cursor-pointer">FAQs</li>
            </ul>
          </div>
        </div>

        {/* --- Column 3: Contact Info --- */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            CONNECT WITH US
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-pink-400" />
              hello@Photomol.ai
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-pink-400" />
              +91 1234567890
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-pink-400" />
              +91 9876543210
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-pink-400 mt-1" />
              <span>
                5th Floor, Ideas to Impacts,
                <br />
                Town Hall market, 007. New York
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Photomo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
