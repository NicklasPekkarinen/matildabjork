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
    <nav className="relative flex items-center justify-between md:flex-col md:justify-center flex-wrap bg-transparent z-10 p-6 fixed w-full">
      <div className="flex flex-shrink-0 mr-6 md:mr-0 md:mb-4">
        <Link href="/">
          <span
            className={`text-xl md:text-5xl text-custom-blue ${fjallaOne.className}`}
          >
            Matilda Björk
          </span>
        </Link>
      </div>
      <div className="block lg:hidden ml-auto">
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
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:w-full lg:flex lg:items-center lg:w-auto text-custom-blue flex flex-col absolute top-full left-0 bg-white md:bg-transparent md:absolute md:right-0  md:rounded-lg z-50 w-full md:w-auto md:flex-row md:pl-4 md:py-4 md:top-auto md:left-auto md:right-auto md:mt-20`}
      >
        <div className="text-sm text-center py-2">
          <Link
            href="/om-mig"
            className="block mt-4 md:mt-2 lg:mr-4 lg:inline-block lg:mt-0 hover:text-custom-light-blue"
          >
            Om mig
          </Link>
        </div>
        <div className="text-sm text-center py-2">
          <Link
            href="/galleri"
            className="block mt-2 lg:mr-4 lg:inline-block lg:mt-0 hover:text-custom-light-blue"
          >
            Galleri
          </Link>
        </div>
        <div className="text-sm text-center py-2">
          <Link
            href="/contact"
            className="block mt-2 mb-4 md:mb-0 lg:mr-4 lg:inline-block lg:mt-0 hover:text-custom-light-blue"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}
