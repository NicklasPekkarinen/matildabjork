'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        id="topNav"
        ref={menuRef}
        data-content-field="navigation"
        className={`flex flex-col items-center w-full relative ${pathname === '/galleri' ? '' : 'fixed'} z-10`}
      >
        <Link href="/">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-custom-blue text-5xl lg:text-7xl font-bold font-ivy Intro-contactLinkText ColorLink js-splitLetters mb-4">
              Matilda Björk
            </h1>
            {/* Horizontal Line */}
            <div className="w-96 h-px bg-custom-medium-blue mb-4"></div>
            <h2 className="text-custom-blue text-xl lg:text-3xl font-caslon">
              Akvareller
            </h2>
          </div>
        </Link>

        {/* Navigation Menu - Centered under title */}
        <nav className="w-full text-center">
          <ul className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <Link
                href="/om-mig"
                onClick={handleLinkClick}
                className={`${
                  pathname === '/om-mig'
                    ? 'text-custom-light-blue'
                    : 'text-custom-medium-blue'
                } hover:text-custom-light-blue active:text-custom-light-blue transition-colors duration-200 font-caslon`}
              >
                Om mig
              </Link>
            </li>

            <li>
              <Link
                href="/galleri"
                onClick={handleLinkClick}
                className={`${
                  pathname === '/galleri'
                    ? 'text-custom-light-blue'
                    : 'text-custom-medium-blue'
                } hover:text-custom-light-blue active:text-custom-light-blue transition-colors duration-200 font-caslon`}
              >
                Galleri
              </Link>
            </li>

            <li>
              <a
                href="https://www.instagram.com/matildabjork.art"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="text-custom-medium-blue hover:text-custom-light-blue active:text-custom-light-blue transition-colors duration-200 font-caslon"
              >
                Instagram
              </a>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className={`${
                  pathname === '/contact'
                    ? 'text-custom-light-blue'
                    : 'text-custom-medium-blue'
                } hover:text-custom-light-blue active:text-custom-light-blue transition-colors duration-200 font-caslon`}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>

        {/* Burger Menu Button - Only visible on mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden fixed top-4 right-4 p-2 rounded transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-custom-medium-blue rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`h-0.5 w-full bg-custom-medium-blue rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-0.5 w-full bg-custom-medium-blue rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </div>
    </>
  );
};

export default Navigation;
