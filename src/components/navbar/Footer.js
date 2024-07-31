import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <p className="text-center md:text-left">&copy; 2024 YouTube Trending. All rights reserved.</p>
        <div className="footer-links flex space-x-4 mt-4 md:mt-0">
          <a href="/about" className="footer-link hover:text-gray-400 transition-colors duration-300">About</a>
          <a href="/contact" className="footer-link hover:text-gray-400 transition-colors duration-300">Contact</a>
          <a href="/privacy" className="footer-link hover:text-gray-400 transition-colors duration-300">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
