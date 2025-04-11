'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky || isOpen ? 'bg-white dark:bg-slate-900 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="hidden sm:block">
            {(isSticky || isOpen) ? (
              <Image
                src="/images/logo/interlace-logo-light.png"
                alt="Logo Light"
                width={156}
                height={28}
                priority
              />
            ) : (
              <Image
                src="/images/logo/interlace-logo-dark.svg"
                alt="Logo Dark"
                width={156}
                height={28}
                priority
              />
            )}
          </div>

          <div className="sm:hidden">
            {(isSticky || isOpen) ? (
              <Image
                src="/images/logo/interlace-logo-light.png"
                alt="Mobile Logo Light"
                width={100}
                height={18}
                priority
              />
            ) : (
              <Image
                src="/images/logo/interlace-logo-dark.svg"
                alt="Mobile Logo Dark"
                width={100}
                height={18}
                priority
              />
            )}
          </div>
        </Link>

        {/* Desktop menu */}
        <div className="hidden sm:flex items-center space-x-6">
          <NavLink href="/" isSticky={isSticky}>Home</NavLink>
          <NavLink href="#about" onClick={(e) => handleScrollTo(e, 'about')} isSticky={isSticky}>About Us</NavLink>
          <NavLink href="/services" isSticky={isSticky}>Our Services</NavLink>
          <NavLink href="#our-process" onClick={(e) => handleScrollTo(e, 'our-process')} isSticky={isSticky}>Service Stages</NavLink>
          <NavLink href="#testi" onClick={(e) => handleScrollTo(e, 'testi')} isSticky={isSticky}>Review</NavLink>
        </div>

        {/* Toggle button (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`sm:hidden focus:outline-none ${isSticky || isOpen ? 'text-slate-950 dark:text-white' : 'text-white'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-slate-900`}>
        <MobileLink href="/" onClick={() => setIsOpen(false)} active={true}>Home</MobileLink>
        <MobileLink href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About Us</MobileLink>
        <MobileLink href="/services" onClick={() => setIsOpen(false)}>Our Services</MobileLink>
        <MobileLink href="#our-process" onClick={(e) => handleScrollTo(e, 'our-process')}>Service Stages</MobileLink>
        <MobileLink href="#testi" onClick={(e) => handleScrollTo(e, 'testi')}>Review</MobileLink>
      </div>
    </nav>
  );
}

function NavLink({ href, children, onClick, isSticky }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`transition-colors text-base font-medium ${isSticky ? 'text-slate-950 dark:text-white hover:underline' : 'text-white hover:underline'}`}
    >
      {children}
    </a>
  );
}

function MobileLink({ href, children, onClick, active }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`block w-full px-4 py-3 text-base font-medium ${
        active ? 'text-blue-600' : 'text-gray-900 dark:text-white'
      } hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors`}
    >
      {children}
    </a>
  );
}
