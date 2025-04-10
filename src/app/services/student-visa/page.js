"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const NavbarSmallLight = dynamic(() => import('../../components/navbar-small-light'), {ssr: false});
const Footer = dynamic(() => import('../../components/footer'), {ssr: false});
const StepsVisa = dynamic(() => import('../../components/StepsToGetVisa'), {ssr: false});
const StudentVisaCost = dynamic(() => import('../../components/StudentVisaCost'), {ssr: false});


export default function StudentVisaPage() {
    return(
        <>
            < NavbarSmallLight />
            <section className="relative w-full md:h-screen h-screen bg-blue-500" id="home">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/hero/Visa-hero.png" 
                            alt="Student Visa Background"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
                    </div>

                    {/* Content */}
                    <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white container mx-auto text-left">
                        <h1 className="text-2xl md:text-4xl font-bold mb-4">
                            Student Visa (Subclass 500)
                        </h1>
                        <p className="text-sm md:text-lg font-light max-w-xl text-white/80 inline-block">
                            The Student Visa allows you to stay in Australia to study full-time in a recognized education institution. This visa is suitable for international students who wish to pursue their studies in Australia, including primary, secondary, and higher education.
                        </p>
                        <div className="flex gap-4 mt-8 d-block md:hidden">
                            <a href="step-visa"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('step-visa')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="btn btn-primary font-medium text-white px-4 py-3 text-sm md:text-lg bg-primary-500 hover:bg-transparant rounded-lg flex gap-4">
                                Visa Requirements
                            </a>
                            <a href=" "
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="btn btn-border-primary-500 font-medium text-white px-4 py-3 text-sm md:text-lg border-1 hover:bg-transparant rounded-lg flex gap-4">
                                Request Consultation
                            </a>
                        </div>
                    </div>
                </section>
                
                <section className=" bg-gray-50 container mx-auto" id='step-visa'>
                    <StepsVisa/>
                </section>

                <section className=" bg-gray-50 container mx-auto" id='cost-visa'>
                    <StudentVisaCost/>
                </section>
                

                <Footer/>
        </>

    )
}