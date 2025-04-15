"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { TickCircle } from 'iconsax-react';
import { motion } from 'framer-motion';

const WorkingVisaType = dynamic(() => import('../../components/working-visa-type'), { ssr: false });
const NavbarSmallight = dynamic(() => import('../../components/navbar-small-light'), { ssr: false });
const Footer = dynamic(() => import('../../components/footer'), { ssr: false });
const StepsVisa = dynamic(() => import('../../components/StepsToGetVisa'), { ssr: false });
const StudentVisaCost = dynamic(() => import('../../components/StudentVisaCost'), { ssr: false });
const CTA = dynamic(() => import('../../components/cta-card'), { ssr: false });
const VisaItem = dynamic(() => import('../../components/ui/visa-item'), { ssr: false });

export default function WorkingHolidayVisaPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <>
            <NavbarSmallight />
            <motion.section
                className="relative w-full md:h-screen h-screen bg-blue-500"
                id="home"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeIn}>

                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero/working-holiday-visa.png"
                        alt="Student Visa Background"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
                </div>

                {/* Content */}
                <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white container mx-auto text-left">
                    <motion.h1
                        className="text-2xl md:text-4xl font-bold mb-4"
                        variants={fadeIn}
                    >
                        Working Holiday (WHV)
                    </motion.h1>
                    <motion.p
                        className="text-sm md:text-lg font-light max-w-xl text-white/80 inline-block"
                        variants={fadeIn}
                    >
                        A Working Holiday Visa (WHV) allows young people to travel and work in a foreign country for a limited time, typically up to 12 months. This visa is designed to promote cultural exchange and tourism while providing an opportunity for individuals to gain work experience abroad.
                    </motion.p>
                    <motion.div
                        className="flex gap-4 mt-8 d-block"
                        variants={fadeIn}
                    >
                        <a
                            href="requirements"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('requirements')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn btn-primary font-medium text-white px-4 py-3 text-sm md:text-lg bg-primary-500 hover:bg-transparant rounded-lg flex gap-4"
                        >
                            Visa Requirements
                        </a>
                        <a
                            href="https://wa.me/+6285847419359"
                            target='_blank'

                            className="btn btn-border-primary-500 font-medium text-white px-4 py-3 text-sm md:text-lg border-1 hover:bg-transparant rounded-lg flex gap-4"
                        >
                            Request Consultation
                        </a>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                className="container mx-auto py-16 bg-gray-50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeIn}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div className="md:w-1/2" variants={fadeIn}>
                            <h2 className="text-3xl font-bold mb-6">General information about Working Holiday Visas</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Working visas are official documents that permit foreign nationals to legally work in another country
                                for a specified period. These permits are essential for compliance with immigration laws and regulations.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3">
                                    <TickCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Work Rights (Up to 6 months with one employeer)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <TickCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Study Rights (up to 4 months)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <TickCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Regional work opportunity for visa extension.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <TickCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Processing time (1 -4 Months)</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div className="md:w-1/2 grid grid-cols-2 gap-4" variants={fadeIn}>
                        <div className="col-span-2">
                            <Image
                                src="/images/ilustrations/working-holiday-hero.png"
                                alt="Education Consultant"
                                className="w-full h-auto "
                                width={500}
                                height={500}
                            />
                        </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>


    
        <motion.section
        className="relative w-full"
        id='requirements'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeIn}>

        {/* Eligibility Requirements */}
      <section className="container mx-auto py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.div className="md:w-1/2" variants={fadeIn}>
            <div className="">
              <h2 className="text-3xl font-bold mb-6">Eligibility Requirements</h2>
              <p className="text-gray-600 mb-6">
                Working Holiday visa eligibility varies by country and visa type. However, most countries assess 
                applicants based on these common factors to determine qualification.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border flex gap-4 items-start">
                  <div className="bg-blue-50 p-2 rounded-full">
                    <TickCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Educational Qualifications</h3>
                    <p className="text-sm text-gray-500">Minimum diploma 2 o4 university degreee.</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border flex gap-4 items-start">
                  <div className="bg-blue-50 p-2 rounded-full">
                  <TickCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">English Language Proficiency</h3>
                    <p className="text-sm text-gray-500">IELTS, TOEFL, or equivalent </p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border flex gap-4 items-start">
                  <div className="bg-blue-50 p-2 rounded-full">
                  <TickCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">SDWHV <span className='italic'>Required*</span></h3>
                    <p className="text-sm text-gray-500">Surat Dukungan from ministry of law RI. </p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border flex gap-4 items-start">
                  <div className="bg-blue-50 p-2 rounded-full">
                  <TickCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Health Requirements</h3>
                    <p className="text-sm text-gray-500">Medical examination to ensure you meet health standards.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border flex gap-4 items-start">
                  <div className="bg-blue-50 p-2 rounded-full">
                  <TickCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Valid Passport fo stay</h3>
                    <p className="text-sm text-gray-500"> Must have a valid passport with at least 6 months.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border flex gap-4 items-start">
                  <div className="bg-blue-50 p-2 rounded-full">
                  <TickCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Financial Proof</h3>
                    <p className="text-sm text-gray-500">Minimum <span className='font-bold'>AUD 5000 + return ticket founds </span></p>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
            <div className="">
            <div className="col-span-2">
                <Image
                                src="/images/ilustrations/working-requirements-hero-2.png"
                                alt="Education Consultant"
                                className="w-full h-auto "
                                width={500}
                                height={500}
                            />
                        </div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>
    
    
        </motion.section>


        <CTA/>
        <Footer/>
        </>

    )
}