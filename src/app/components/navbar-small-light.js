'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Link as Link1 } from 'react-scroll';
import * as Unicons from '@iconscout/react-unicons';

export default function NavbarSmallLight() {
   const [isOpen, setMenu] = useState(true);
   const[navbarTop, setNavbarTop] = useState(false); 

   useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
    window.scrollTo(0, 0)
   }, []);

    function windowScroll() {
        setNavbarTop(document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50)
    }
    const toggleMenu = () => {
        setMenu(!isOpen)
    }
    return (
        <>
            <nav className={`${navbarTop === true ? 'is-sticky' : ''} navbar font-inter `} id="navbar">
                <div className="container flex flex-wrap items-center justify-end">
                    <a className="navbar-brand md:me-8" href="/">
                        {/* Desktop logo */}
                        <span className="hidden md:inline-block dark:hidden">
                            <Image src="/images/logo/interlace-logo-light.png" priority className="l-dark w-[156px]" alt="Interlace Studies Logo" width={156} height={28}/>
                            <Image src="/images/logo/interlace-logo-dark.png" priority className="l-light w-[156px]" alt="Interlace Studies Logo" width={156} height={28}/>
                        </span>
                        <Image src="/images/logo/interlace-logo-light.png" priority className="hidden dark:md:inline-block w-[156px]" alt="Interlace Studies Logo" width={156} height={28}/>
                        
                        {/* Mobile logo */}
                        <span className="md:hidden dark:hidden">
                            <Image src="/images/logo/interlace-logo-light.png" priority className="l-dark w-[100px]" alt="Interlace Studies Logo" width={100} height={18}/>
                            <Image src="/images/logo/interlace-logo-dark.png" priority className="l-light w-[100px]" alt="Interlace Studies Logo" width={100} height={18}/>
                        </span>
                        <Image src="/images/logo/interlace-logo-light.png" priority className="hidden dark:inline-block md:hidden w-[120px]" alt="Interlace Studies Logo" width={120} height={18}/>
                    </a>

                    <div className="nav-icons flex items-center lg_992:order-2 ms-auto lg:ms-4">
                        <button data-collapse="menu-collapse" type="button" onClick={toggleMenu}
                            className="collapse-btn inline-flex items-center ms-3 text-slate-950 dark:text-white lg_992:hidden"
                            aria-controls="menu-collapse" aria-expanded="false">
                            <span className="sr-only">Navigation Menu</span>
                            <i className="mdi mdi-menu text-[24px]"></i>
                        </button>
                    </div>
                    <div className={`${isOpen === true ? 'navigation lg_992:order-1 lg_992:flex hidden ms-auto' : 'navigation lg_992:order-1 lg_992:flex block ms-auto'}`} id="menu-collapse">
                        <ul className="navbar-nav nav-light font-inter" id="navbar-navlist">
                            <li className={`nav-item`}>
                                <Link1 to="home" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Home</Link1>
                            </li>
                            <li className={`nav-item`}>
                                <Link1 to="features" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Services</Link1>
                            </li>
                            <li className={`nav-item`}>
                                <Link1 to="testi" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Review</Link1>
                            </li>
                            <li className={`nav-item`}>
                                <Link1 to="blog" spy={true} smooth={true} duration={500} className="nav-link">Blog</Link1>
                            </li>
                            <li className={`nav-item`}>
                                <Link1 to="contact" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Contact us</Link1>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
