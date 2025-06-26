'use client'
import React from 'react';
import Link from 'next/link';
// Icons from iconsax
import { ArrowRight } from 'iconsax-react';


const HeroSection = () => {
    return (
        <div className="grid grid-cols-1 pb-8 mt-10 mb-4">
            <h3 className="font-bold lg:leading-normal leading-normal lg:text-4xl text-xl mb-5 mt-10 text-white font-inter max-w-2xl">
                Your Gateway to Global Education and Migration in Australia
            </h3>

            <p className="text-sm md:text-lg font-light max-w-xl text-white/80 inline-block">
                Interlace Studies is a leading education and migration consultancy that helps individuals achieve their dreams of studying and migrating in Australia.
            </p>

            <div className="flex gap-4 mt-8 d-block">
                <Link
                    href="https://wa.me/+6285847419359"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary items-center justify-center font-medium text-white px-4 py-3 text-sm md:text-lg bg-primary-500 hover:bg-transparant rounded-lg flex gap-4  hover:text-primary-500 hover:bg-white hover:scale-105 transition-all duration-300">
                    Book a Consultations 

                    {/* Arrow Right Icon */}
                    <div className="flex items-center justify-center bg-white rounded-full p-1 text-primary-500">   
                        <ArrowRight className="w-4 h-4" />
                    </div>

                </Link>
            </div>
        </div>
    );
};

export default HeroSection;