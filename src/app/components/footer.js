'use client'
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { UilLinkedin, UilFacebook, UilInstagram, UilTwitter, UilYoutube } from '@iconscout/react-unicons';

export default function Footer() {
    const currentYear = new Date().getFullYear(); // Extracted for reusability

    return (
        <footer className="footer bg-slate-950 text-gray-200">
            {/* Main Footer Section */}
            <div className="container py-[60px]">
                <div className="text-center">
                    {/* Logo */}
                    <Image
                        src="/images/interlace-logo-dark.png"
                        className="block mx-auto"
                        alt="Interlace Studies Logo"
                        width={64}
                        height={64}
                        priority
                    />
                    {/* Description */}
                    <p className="max-w-xl mx-auto text-slate-400 mt-8">
                        Interlace Studies is a leading education and migration consultancy that helps individuals achieve their dreams of studying and migrating abroad.
                    </p>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="py-[30px] border-t border-slate-800">
                <div className="container text-center md:flex md:justify-between md:items-center">
                    {/* Copyright */}
                    <p className="text-gray-400 md:text-start text-center">
                        © {currentYear} Interlace Studies. All rights reserved.
                    </p>
                    {/* Social Media Links */}
                    <ul className="list-none flex justify-center md:justify-end mt-4 md:mt-0">
                        {[
                            { href: 'https://www.linkedin.com/company/interlace-studies-bali/about/', icon: <UilLinkedin width={16} /> },
                            { href: 'https://www.facebook.com/profile.php?id=61573884216310', icon: <UilFacebook width={16} /> },
                            { href: 'https://www.instagram.com/interlacestudies.bali/', icon: <UilInstagram width={16} /> },
                            { href: 'https://www.youtube.com/@InterlaceBali', icon: <UilYoutube width={16} /> },
                        ].map((social, index) => (
                            <li key={index} className="inline ms-1">
                                <Link
                                    href={social.href}
                                    target="_blank"
                                    className="h-8 w-8 inline-flex items-center justify-center text-base font-normal border border-gray-800 rounded-md hover:border-primary-500 hover:bg-primary-500 transition duration-500 ease-in-out"
                                >
                                    {social.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
