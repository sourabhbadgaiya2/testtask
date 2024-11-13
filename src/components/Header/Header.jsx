import React, { useState } from "react";
import logo from "./logo.svg";
import "remixicon/fonts/remixicon.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='flex justify-between items-center p-4 bg-white shadow-md relative'>
      <div className='flex items-center gap-8'>
        <div className='text-lg font-bold flex gap-2'>
          <img src={logo} alt='' />
          Ganttify
        </div>
        <nav className='hidden md:flex space-x-4'>
          <a href='#' className='text-gray-600 hover:text-black'>
            Product
          </a>
          <a href='#' className='text-gray-600 hover:text-black'>
            Solutions
          </a>
          <a href='#' className='text-gray-600 hover:text-black'>
            Resources
          </a>
          <a href='#' className='text-gray-600 hover:text-black'>
            Company
          </a>
          <a href='#' className='text-gray-600 hover:text-black'>
            Pricing
          </a>
        </nav>
      </div>

      <div className='flex items-center'>
        {/* Desktop Buttons */}
        <button className='px-4 py-2 border rounded mr-2 hidden md:block'>
          Sign In
        </button>
        <button className='px-4 py-2 bg-black text-white rounded hidden md:block'>
          Get Started
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
          className='md:hidden p-2 focus:outline-none'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3 12H21M3 6H21M3 18H21'
              stroke='#0D0D12'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-10'>
          <nav className='flex flex-col space-y-4 p-4'>
            <a href='#' className='text-gray-600 hover:text-black'>
              Product
            </a>
            <a href='#' className='text-gray-600 hover:text-black'>
              Solutions
            </a>
            <a href='#' className='text-gray-600 hover:text-black'>
              Resources
            </a>
            <a href='#' className='text-gray-600 hover:text-black'>
              Company
            </a>
            <a href='#' className='text-gray-600 hover:text-black'>
              Pricing
            </a>
            <button className='px-4 py-2 border rounded'>Sign In</button>
            <button className='px-4 py-2 bg-black text-white rounded'>
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
