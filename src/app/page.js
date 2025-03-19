'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const NavbarSmallLight = dynamic(()=>import('./components/navbar-small-light'));
const Switcher = dynamic(()=>import('./components/Switcher'));
const Footer = dynamic(()=>import('./components/footer'));
const About = dynamic(()=>import('./components/about'));
const Services = dynamic(()=>import('./services/page'));
const OurServices = dynamic(()=>import('./components/our-services'));
const StudyForms = dynamic(()=>import('./components/StudyForms'));
const ScrollButton = dynamic(()=>import('./components/ScrollButton'));
const ServiceCards = dynamic(()=>import('./components/ServiceCards'));

import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.css'
import ImageSlider from './components/ImageSlider'
export default function IndexTwo() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <NavbarSmallLight />
            <section className="relative w-full h-[1000px] lg:h-[1000px]" id="home">
                <div className="absolute z-20 left-1/2 md:top-[70%] top-[60%] -translate-x-1/2 -translate-y-1/2 container mx-auto">
                    <div className="grid grid-cols-1 pb-8 mt-10 mb-4">
                        <h3 className="font-bold lg:leading-normal leading-normal lg:text-[40px] text-3xl mb-5 mt-10 text-white font-inter max-w-2xl">Your Gateway to Global Education and Migration in Australia</h3>

                        <p className="text-lg font-light  max-w-xl text-white/60">
                            Interlace Studies is a leading education and migration consultancy that helps individuals achieve their dreams of studying and migrating in Australia.
                        </p>

                        {/* <div className="subcribe-form mt-6">
                            <form className="relative max-w-xl">
                                <input className="rounded-lg bg-white/70 h-12 w-full py-3 ps-5 pe-40 text-slate-950 dark:text-white" placeholder="Email Address / Phone Number" />
                                <button type="submit" className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-lg absolute h-11 top-0.5 end-0.5">Book a Consultation <i className="uil uil-arrow-right"></i></button>
                            </form>
                        </div> */}
                    </div>
                    <StudyForms />
                </div>
                
                <div className="absolute inset-0 bg-slate-950/60 z-10"></div>
                <ImageSlider />
                
            </section>
            
            
            <ServiceCards />
            {/* <About /> */}
            <Footer />
            {/* <Switcher /> */}
            
        </>
    )
}