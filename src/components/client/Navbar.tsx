'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Fjalla_One } from 'next/font/google';

const fjallaOne = Fjalla_One({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between flex-wrap bg-transparent z-10 p-6 fixed w-full md:flex-col md:justify-center">
      {/* Logo */}
      <div className="flex flex-shrink-0 mr-6 md:mr-0 md:mb-4">
        <Link href="/">
          <span
            className={`text-xl md:text-5xl text-custom-blue ${fjallaOne.className}`}
          >
            Matilda Björk
          </span>
        </Link>
      </div>

      {/* Hamburger Button (Visible on Small Screens Only) */}
      <div className="block md:hidden ml-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 hover:text-stone-600 hover:border-white"
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
          </svg>
        </button>
      </div>

      {/* Menu */}
      <div
        className={`${
          isOpen ? 'fixed inset-0 bg-white flex flex-col z-50' : 'hidden'
        } md:flex md:flex-col md:w-auto md:items-center md:relative md:bg-transparent md:z-30`}
      >
        {/* Close Button for Mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-600 text-xl md:hidden"
          aria-label="Close Menu"
        >
          ✕
        </button>

        {/* Menu Links */}
        <div className="flex flex-col space-y-4 mt-20 md:flex-row md:space-y-0 md:space-x-8 md:mt-4 md:mb-8">
          <Link
            href="/om-mig"
            className="md:text-custom-blue text-sm font-bold text-center hover:text-custom-light-blue"
            onClick={() => setIsOpen(false)}
          >
            Om mig
          </Link>
          <Link
            href="/galleri"
            className="md:text-custom-blue text-sm font-bold text-center hover:text-custom-light-blue"
            onClick={() => setIsOpen(false)}
          >
            Galleri
          </Link>
          <Link
            href="/contact"
            className="md:text-custom-blue text-sm font-bold text-center hover:text-custom-light-blue"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}
