import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiMessageSquare } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll when menu is closed
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      // Ensure body scroll is restored when component unmounts
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50" ref={menuRef}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 lg:gap-4 group" aria-label="Go to Home">
          <img src="/logo.jpeg" alt="Kunal Logo" className="w-10 h-10 object-contain group-hover:scale-105 transition" />
          <span className="text-2xl font-bold text-blue-700 tracking-wide flex items-center group-hover:text-blue-800">
            KUNAL<sup className="ml-1 text-xs">™</sup>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden min-[1103px]:flex items-center gap-6 text-sm font-semibold text-gray-700">
          <li><Link to="/" className="hover:text-blue-700">HOME</Link></li>

          {/* ABOUT US Dropdown */}
          <li className="relative group">
            <button className="hover:text-blue-700 flex items-center gap-1 focus:outline-none">
              ABOUT <span>&#9662;</span>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded 
                            opacity-0 group-hover:opacity-100 
                            invisible group-hover:visible 
                            transition-all duration-150 z-50">
              <ul className="py-2">
                <li><Link to="/about" className="block px-4 py-2 hover:bg-blue-50">About Us</Link></li>
                <li><Link to="/mission" className="block px-4 py-2 hover:bg-blue-50">Vision and Mission</Link></li>
                <li><Link to="/management" className="block px-4 py-2 hover:bg-blue-50">Our Team</Link></li>
                <li><Link to="/gallery" className="block px-4 py-2 hover:bg-blue-50">Gallery</Link></li>
              </ul>
            </div>
          </li>

          <li><Link to="/ehs" className="hover:text-blue-700">EHS</Link></li>

          {/* PROJECTS Dropdown */}
          <li className="relative group">
            <button className="hover:text-blue-700 flex items-center gap-1 focus:outline-none">
              PROJECTS <span>&#9662;</span>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded 
                            opacity-0 group-hover:opacity-100 
                            invisible group-hover:visible 
                            transition-all duration-150 z-50">
              <ul className="py-2">
                <li><Link to="/projects?type=running" className="block px-4 py-2 hover:bg-blue-50">Running Projects</Link></li>
                <li><Link to="/projects?type=completed" className="block px-4 py-2 hover:bg-blue-50">Completed Projects</Link></li>
              </ul>
            </div>
          </li>

          <li><Link to="/services" className="hover:text-blue-700">SERVICES</Link></li>

          {/* RESOURCES Dropdown */}
          <li className="relative group">
            <button className="hover:text-blue-700 flex items-center gap-1 focus:outline-none">
              RESOURCES <span>&#9662;</span>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded 
                            opacity-0 group-hover:opacity-100 
                            invisible group-hover:visible 
                            transition-all duration-150 z-50">
              <ul className="py-2">
                <li><Link to="/resources" className="block px-4 py-2 hover:bg-blue-50">Tools Plants and Machinery</Link></li>
                <li><Link to="/workforce" className="block px-4 py-2 hover:bg-blue-50">Workforce</Link></li>
              </ul>
            </div>
          </li>

          <li><Link to="/career" className="hover:text-blue-700">CAREER</Link></li>
          <li><Link to="/contact" className="hover:text-blue-700">CONTACT</Link></li>
          <li><Link to="/feedback" className="hover:text-blue-700 flex items-center gap-1">
            <FiMessageSquare className="w-4 h-4" />
            FEEDBACK
          </Link></li>
        </ul>

        {/* Contact & CTA - Desktop */}
        <div className="hidden min-[1103px]:flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500">Have any Question?</span>
            <a href="tel:+918200417508" className="text-sm font-bold text-gray-800 hover:text-blue-700">
              +91 8200 417 508
            </a>
          </div>
          <Link
            to="/quote"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded transition"
          >
            GET A QUOTE
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="hidden max-[1102px]:flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-blue-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="hidden max-[1102px]:block absolute top-full left-0 w-full bg-white z-40 shadow-md mobile-menu">
          <ul className="flex flex-col gap-4 p-6 text-base font-semibold text-gray-800">
            <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-700">HOME</Link></li>

            {/* Mobile Dropdowns with <details> */}
            <li>
              <details className="group">
                <summary className="hover:text-blue-700 cursor-pointer flex items-center justify-between">
                  ABOUT US
                  <span className="text-xs transition-transform group-open:rotate-180">▼</span>
                </summary>
                <ul className="pl-4 mt-2 space-y-2">
                  <li><Link to="/about" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-blue-700">About Us</Link></li>
                  <li><Link to="/mission" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-blue-700">Vision and Mission</Link></li>
                  <li><Link to="/management" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-blue-700">Our Team</Link></li>
                  <li><Link to="/gallery" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-blue-700">Gallery</Link></li>
                </ul>
              </details>
            </li>

            <li><Link to="/ehs" onClick={() => setMenuOpen(false)} className="hover:text-blue-700">EHS</Link></li>

            <li>
              <details className="group">
                <summary className="hover:text-blue-700 cursor-pointer flex items-center justify-between">
                  PROJECTS
                  <span className="text-xs transition-transform group-open:rotate-180">▼</span>
                </summary>
                <ul className="pl-4 mt-2 space-y-2">
                  <li><Link to="/projects?type=running" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-blue-700">Running Projects</Link></li>
                  <li><Link to="/projects?type=completed" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-blue-700">Completed Projects</Link></li>
                </ul>
              </details>
            </li>

            <li><Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-blue-700">SERVICES</Link></li>

            <li>
              <details className="group">
                <summary className="hover:text-blue-700 cursor-pointer flex items-center justify-between">
                  RESOURCES
                  <span className="text-xs transition-transform group-open:rotate-180">▼</span>
                </summary>
                <ul className="pl-4 mt-2 space-y-2">
                  <li><Link to="/resources" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-blue-700">Tools Plants and Machinery</Link></li>
                  <li><Link to="/workforce" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-blue-700">Workforce</Link></li>
                </ul>
              </details>
            </li>

            <li><Link to="/career" onClick={() => setMenuOpen(false)} className="hover:text-blue-700">CAREER</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-700">CONTACT</Link></li>
            <li><Link to="/feedback" onClick={() => setMenuOpen(false)} className="hover:text-blue-700 flex items-center gap-2">
              <FiMessageSquare className="w-4 h-4" />
              FEEDBACK
            </Link></li>

            <li>
              <Link
                to="/quote"
                onClick={() => setMenuOpen(false)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded shadow text-center block"
              >
                GET A QUOTE
              </Link>
            </li>

            <li className="text-right mt-4">
              <span className="text-xs text-gray-500 block">Have any Question?</span>
              <a href="tel:+918200417508" className="text-sm font-bold text-gray-800 hover:text-blue-700">
                +91 8200 417 508
              </a>
            </li>
          </ul>
        </div>
      )}

    </header>
  );
};

export default Navbar;
