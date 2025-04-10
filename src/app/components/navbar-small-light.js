'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavbarSmallLight() {
    const [isOpen, setMenu] = useState(false);
    const [isSticky, setSticky] = useState(false); 

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                setSticky(window.scrollY >= 50);
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const toggleMenu = () => {
        setMenu((prev) => !prev);
    };

    return (
        <nav className={`${isSticky ? 'is-sticky' : ''} navbar font-inter`} id="navbar">
            <div className="container flex flex-wrap items-center justify-between">
                {/* Logo */}
                <Link href="/" className="navbar-brand md:me-8">
                    {/* Desktop Logo */}
                    <span className="sm:inline-block hidden">
                        <Image
                            src="/images/logo/interlace-logo-light.png"
                            priority
                            className="l-dark w-[156px]"
                            alt="Interlace Studies Logo"
                            width={156}
                            height={28}
                        />
                        <Image
                            src="/images/logo/interlace-logo-dark.svg"
                            priority
                            className="l-light w-[156px]"
                            alt="Interlace Studies Logo dark"
                            width={156}
                            height={28}
                        />
                    </span>
                    {/* Mobile Logo */}
                    <span className="sm:hidden dark:hidden">
                        <Image
                            src="/images/logo/interlace-logo-light.png"
                            priority
                            className="l-dark w-[100px]"
                            alt="Interlace Studies Logo"
                            width={100}
                            height={18}
                        />
                        <Image
                            src="/images/logo/interlace-logo-dark.svg"
                            priority
                            className="l-light w-[100px]"
                            alt="Interlace Studies Logo"
                            width={100}
                            height={18}
                        />
                    </span>
                </Link>

                {/* Menu Toggle Button */}
                <button
                    type="button"
                    onClick={toggleMenu}
                    className="collapse-btn inline-flex items-center ms-3 text-slate-950 dark:text-white lg_992:hidden"
                    aria-controls="menu-collapse"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Navigation Menu</span>
                    <i className="mdi mdi-menu text-[24px]"></i>
                </button>

                {/* Navigation Menu */}
                <div
                    className={`${
                        isOpen ? 'block' : 'hidden'
                    } navigation lg_992:flex ms-auto lg_992:order-1`}
                    id="menu-collapse"
                >
                    <ul className="navbar-nav nav-light font-inter" id="navbar-navlist">
                        <li className="nav-item">
                            <Link
                                href="/"
                                className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#about"
                                className="nav-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/services"
                                className="nav-link"
                            >
                                Our Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#our-process"
                                className="nav-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('our-process')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Service Stages
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#testi"
                                className="nav-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('testi')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Review
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
