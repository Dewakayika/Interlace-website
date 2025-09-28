'use client'
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';

const NavbarSmallLight = dynamic(() => import('./components/navbar-small-light'), {ssr: false});
const Footer = dynamic(() => import('./components/footer'), {ssr: false});
const StudyForms = dynamic(() => import('./components/StudyForms'), {ssr: false});
const ServiceCards = dynamic(() => import('./components/ServiceCards'), {ssr: false});
const Information = dynamic(() => import('./components/Information'), {ssr: false});
const UniversityLogo = dynamic(() => import('./components/LogoSlider'), {ssr: false});
const FAQ = dynamic(() => import('./components/faq'), {ssr: false});
const CTA = dynamic(() => import('./components/cta-card'), {ssr: false});
const VisionMission = dynamic(() => import('./components/vision-mission'), {ssr: false});
const OurProcess = dynamic(() => import('./components/our-process'), {ssr: false});
const Testimonial = dynamic(() => import('./components/testimonial'), {ssr: false});
const ImageSlider = dynamic(() => import('./components/ImageSlider'), {ssr: false});
const HeroSection = dynamic(() => import('./components/HeroSection'), {ssr: false});
const RelatedLinks = dynamic(() => import('./components/RelatedLinks'), {ssr: false});

export default function IndexTwo() {
    return (
        <> 
        < NavbarSmallLight /> 
        <section className="relative w-full md:h-screen h-screen" id="home">
                <div className="absolute z-20 left-1/2 md:top-[65%] top-[65%] -translate-x-1/2 -translate-y-1/2 container mx-auto">
            <HeroSection/>
            {/* <StudyForms/> */}
        </div>
        <div className="absolute inset-0 bg-slate-950/60 z-10"></div>
        <ImageSlider/>
        </section>


        <section id="about">
            <div className="container mx-auto px-4">
                <ServiceCards />
            </div>  
        </section>


        <section className=" bg-gray-50" id='services'>
            <Information/>
        </section>
        <UniversityLogo/>
        <VisionMission/>
        <section className=' bg-slate-950' id='our-process'>
            <OurProcess/>
        </section>
        <section id="testi">
            <Testimonial/>
        </section>

        <section className='bg-gray-50'>
            <FAQ/>
        </section>
        <RelatedLinks/>
        <CTA/>
        <Footer/>
    </>
    )
}