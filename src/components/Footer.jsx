import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiPhone,
  FiMail,
  FiMessageCircle,
  FiArrowRight,
} from 'react-icons/fi';

const Footer = () => (
  <footer className="bg-white border-t pt-8 pb-4 px-4 md:px-0">
    {/* top row */}
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
      {/* logo + address */}
      <div className="flex-1 flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
        <img src="/logo.jpeg" alt="Kunal Logo" className="w-14 h-14 object-contain mb-2 md:mb-0" />
        <div>
          <span className="text-2xl font-bold text-blue-700 flex items-center">
            KUNAL<sup className="ml-1 text-xs">™</sup>
          </span>
          <div className="font-semibold text-gray-700 mt-1 mb-1">
            Kunal Global Fabtech Pvt. Ltd.
          </div>
          <p className="text-sm text-gray-500 mb-2 leading-relaxed">
            Arazi 74, Plot No. 4, Hassanpur, Maswanpur,
            <br />
            Kalyanpur, Kanpur, U.P. – 208019
          </p>


          {/* mail login link */}
          {/* test */}
          
          <a
            href="#"
            className="text-orange-500 font-medium hover:underline inline-flex items-center text-sm"
          >
            Mail Login <FiArrowRight className="ml-1" />
          </a>
        </div>
      </div>

      {/* link columns */}
      <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* company */}
        <div>
          <h4 className="font-bold text-gray-700 mb-2">Company</h4>
          <ul className="flex flex-col gap-1 text-sm text-gray-600">
            <li><Link to="/about" className="hover:text-blue-700">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-700">Contact</Link></li>
            <li><Link to="/contact" className="hover:text-blue-700">Journey</Link></li>
            <li><Link to="/services" className="hover:text-blue-700">Services</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-700">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* resources */}
        <div>
          <h4 className="font-bold text-gray-700 mb-2">Resources</h4>
          <ul className="flex flex-col gap-1 text-sm text-gray-600">
            <li><Link to="/resources" className="hover:text-blue-700">Tools</Link></li>
            <li><Link to="/management" className="hover:text-blue-700">Team</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-700">Gallery</Link></li>
            <li><Link to="/career" className="hover:text-blue-700">Career</Link></li>
          </ul>
        </div>

        {/* contact */}
        <div>
          <h4 className="font-bold text-gray-700 mb-2">Contact Us</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <FiPhone className="text-orange-500" /> +91 98717 97888
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-orange-500" /> 0512‑3154971
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-orange-500" /> info@kunalfabtech.com
            </li>
            <li className="flex items-center gap-2">
              <FiMessageCircle className="text-orange-500" /> @kunalfabtech
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* bottom bar */}
    <div className="mt-8 pt-4 border-t text-xs text-gray-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        <span>
          © 2025&nbsp;
          <a href="#" className="text-blue-700 hover:underline">
            Kunal Global Fabtech Pvt. Ltd.
          </a>
          &nbsp;– All rights reserved.
        </span>
        <span>
          Designed and Maintenance by&nbsp;
          <a href="#" className="text-orange-500 hover:underline">
            Avyukt Core Technology
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
