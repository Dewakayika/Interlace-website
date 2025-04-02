'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { UilPhone, UilWhatsapp, UilCalendarAlt, UilTimes, UilArrowCircleRight } from '@iconscout/react-unicons';

const NavbarSmallLight = dynamic(()=>import('./components/navbar-small-light'));
const Switcher = dynamic(()=>import('./components/Switcher'));
const Footer = dynamic(()=>import('./components/footer'));
const About = dynamic(()=>import('./components/about'));
const Services = dynamic(()=>import('./services/page'));
const OurServices = dynamic(()=>import('./components/our-services'));
const StudyForms = dynamic(()=>import('./components/StudyForms'));
const ScrollButton = dynamic(()=>import('./components/ScrollButton'));
const ServiceCards = dynamic(()=>import('./components/ServiceCards'));
const Information = dynamic(()=>import('./components/Information'));
const UniversityLogo = dynamic(()=>import('./components/LogoSlider')); 
const FAQ = dynamic(()=>import('./components/faq'));
const CTA = dynamic(()=>import('./components/cta-card'));
const VisionMission = dynamic(()=>import('./components/vision-mission'));
const OurProcess = dynamic(()=>import('./components/our-process'));
const Testimonial = dynamic(()=>import('./components/testimonial'));


import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.css'
import ImageSlider from './components/ImageSlider'
export default function IndexTwo() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <NavbarSmallLight />    
            <section className="relative w-full md:h-screen h-screen" id="home">
                <div className="absolute z-20 left-1/2 md:top-[65%] top-[65%] -translate-x-1/2 -translate-y-1/2 container mx-auto">
                    <div className="grid grid-cols-1 pb-8 mt-10 mb-4">
                        <h3 className="font-bold lg:leading-normal leading-normal lg:text-4xl text-xl mb-5 mt-10 text-white font-inter max-w-2xl">Your Gateway to Global Education and Migration in Australia</h3>

                        <p className="text-sm md:text-lg font-light  max-w-xl text-white/80 inline-block ">
                            Interlace Studies is a leading education and migration consultancy that helps individuals achieve their dreams of studying and migrating in Australia.
                        </p>
                        
                        <div className="flex gap-4 mt-8  d-block md:hidden ">
                            <Link href="#ServicesCards" className=" btn btn-primary font-medium text-white px-4 py-3 text-sm md:text-lg bg-primary-500 hover:bg-transparant  rounded-lg flex gap-4">Book a Consultations  <UilArrowCircleRight className="w-5 h-5" /> </Link>
                        </div>

                    </div>

                    
                    <StudyForms />
                    
                </div>
                
                <div className="absolute inset-0 bg-slate-950/60 z-10"></div>
                <ImageSlider />
                
            </section>
            
            <ServiceCards />

            <div className=" bg-gray-50">
                <Information/>
            </div>
         
                
            <UniversityLogo />
            <VisionMission/>
            <div className=' bg-slate-950'> 
                <OurProcess/>
            </div>

            <Testimonial/>

            <div className='bg-gray-50'>
                <FAQ/>
            </div>

            <CTA />
            {/* <About /> */}
            <Footer />
            {/* <Switcher /> */}
            
        </>
    )
}