'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {ArrowDown2, ArrowUp2} from 'iconsax-react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isOpenMob, setIsOpenMob] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
                  src="/images/logo/interlace-logo-light.png"
                  alt="Logo Dark"
                  width={156}
                  height={28}
                  priority
                />
              )}
            </div>
            <div className="block md:hidden">
              {(isSticky || isOpen) ? (
                <Image
                  src="/images/logo/interlace-logo-light.png"
                  alt="Logo Light"
                  width={100}
                  height={28}
                  priority
                />
              ) : (
                <Image
                  src="/images/logo/interlace-logo-light.png"
                  alt="Logo Dark"
                  width={100}
                  height={28}
                  priority
                />
              )}
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden sm:flex items-center space-x-6 relative text-slate-950">
            <NavLink href="/" isSticky={isSticky}>Home</NavLink>
            <NavLink href="#about" onClick={(e) => handleScrollTo(e, 'about')} isSticky={isSticky}>About Us</NavLink>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`transition-colors text-base font-medium ${isSticky ? 'text-slate-950 dark:text-slate-950' : 'text-slate-950'} hover:underline flex items-center justify-center gap-2`}
              >
                Our Services
                {isDropdownOpen ? (
                  <ArrowUp2 variant="Bold" size="16" />
                ) : (
                  <ArrowDown2 variant="Bold" size="16" />
                )}
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 mt-2 w-[500px] bg-white dark:bg-slate-900 shadow-lg rounded-lg p-4 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-semibold text-gray-500 dark:text-white mb-2">Our Services</p>
                      <DropdownItem
                        href="/services/education-career"
                        title="Education Consultation"
                        description="Course and uni guidance."
                      />
                      <DropdownItem
                        href="/services/migration-services"
                        title="Migration Services"
                        description="Help with your migration process."
                      />
                      <DropdownItem
                        href="/services/skill-assessment"
                        title="Skill Assessment"
                        description="Evaluate your skills for migration."
                      />
                      <DropdownItem
                        href="/services/english-preparation"
                        title="English Preparation"
                        description="Prep for IELTS, PTE, and more."
                      />
                      <DropdownItem
                        href="/services/overseas-health-cover"
                        title="Overseas Health Cover"
                        description="Health insurance for abroad."
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-semibold text-gray-500 dark:text-white mb-2">Visa Type</p>
                      <DropdownItem
                        href="/services/student-visa"
                        title="Student Visa"
                        description="Study visa support."
                      />
                      <DropdownItem
                        href="/services/working-visa"
                        title="Working Visa"
                        description="Work legally overseas."
                      />
                      <DropdownItem
                        href="/services/working-holiday"
                        title="Work & Holiday Visa"
                        description="Work and travel abroad."
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/galleries" isSticky={isSticky}>Gallery</NavLink>
            <NavLink href="/blogs" isSticky={isSticky} >Blog</NavLink>
          </div>

          {/* Toggle button (mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`sm:hidden focus:outline-none ${isSticky || isOpen ? 'text-slate-950 dark:text-white' : 'text-slate-950'}`}
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
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        id="MobNav"
        className="sm:hidden overflow-hidden bg-white dark:bg-slate-900 container mx-auto"
      >
        <MobileLink href="/" onClick={() => setIsOpen(false)}>Home</MobileLink>
        <MobileLink href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About Us</MobileLink>

        {/* Our Services Toggle Button */}
        <div className='flex hover:bg-gray-100 justify-center items-center'>
        <button onClick={() => setServicesOpen(!servicesOpen)}
          className="w-full text-left px-4 py-3 text-base font-medium text-gray-900 dark:text-white  dark:hover:bg-slate-800 transition-colors">
          Our Services
        </button>
        {servicesOpen ? (
            <ArrowUp2 variant="Bold" size="16" />
          ) : (
            <ArrowDown2 variant="Bold" size="16" />
          )}
        </div>

        {/* Dropdown (Mobile) */}
        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="pl-6 pr-4 py-2 flex flex-col gap-1"
            >
              <DropdownItem href="/services/education-career" title="Education Consultation" description="Course and uni guidance." />
              <DropdownItem href="/services/migration-services" title="Migration Services" description="Help with your migration process." />
              <DropdownItem href="/services/skill-assessment" title="Skill Assessment" description="Evaluate your skills for migration." />
              <DropdownItem href="/services/english-preparation" title="English Preparation" description="Prep for IELTS, PTE, and more." />
              <DropdownItem href="/services/overseas-health-cover" title="Overseas Health Cover" description="Health insurance for abroad." />
              <DropdownItem href="/services/student-visa" title="Student Visa" description="Study visa support." />
              <DropdownItem href="/services/working-visa" title="Working Visa" description="Work legally overseas." />
              <DropdownItem href="/services/working-holiday" title="Work & Holiday Visa" description="Work and travel abroad." />
            </motion.div>
          )}
        </AnimatePresence>

        <MobileLink href="/galleries" onClick={() => setIsOpen(false)}>Gallery</MobileLink>
        <MobileLink href="/blogs" onClick={() => setIsOpen(false)}>Blog</MobileLink>
      </motion.div>

    </nav>
  );
}

function NavLink({ href, children, onClick, isSticky }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`transition-colors text-base font-medium ${isSticky ? 'text-slate-950 dark:text-white hover:underline' : 'text-slate-950 hover:underline'}`}
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

function DropdownItem({ href, title, description }) {
  return (
    <Link href={href} className="block p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition">
      <h3 className="text-sm font-medium text-gray-900 dark:text-white">{title}</h3>
      <p className="text-xs text-gray-600 dark:text-gray-400">{description}</p>
    </Link>
  );
}