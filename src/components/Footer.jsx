import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext, { DataContext } from '../context/Usercontext';

const Footer = () => {
    const data= useContext(DataContext)
  return (
    <footer className="bg-gray-900 text-white py-1 ">
      <div className="container mx-auto px-4 md:px-8 flex flex-wrap justify-between gap-6">
        {/* Footer Brand or Title */}
        <div>
          <h2 className="text-2xl font-bold mb-2">ReactApp {data} platform</h2>
          <p className="text-gray-400 text-sm">
            Building awesome projects with React.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-teal-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-teal-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-teal-400 transition-colors">
                Product
              </Link>
            </li>
            {/* <li>
              <Link to="/contact" className="hover:text-teal-400 transition-colors">
                Contact
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors text-2xl"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors text-2xl"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors text-2xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ReactApp. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
