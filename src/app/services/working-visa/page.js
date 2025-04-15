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

export default function WorkingVisaPage() {
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
                        src="/images/hero/working-visa.png"
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
                        Working Visa Australia
                    </motion.h1>
                    <motion.p
                        className="text-sm md:text-lg font-light max-w-xl text-white/80 inline-block"
                        variants={fadeIn}
                    >
                        The Working Visa allows you to stay in Australia to work full-time in a recognized employment sector. This visa is suitable for international workers who wish to pursue their careers in Australia, including skilled and unskilled labor.
                    </motion.p>
                    <motion.div
                        className="flex gap-4 mt-8 d-block"
                        variants={fadeIn}
                    >
                        <a
                            href="requirements"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('step-visa')?.scrollIntoView({ behavior: 'smooth' });
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
                            <h2 className="text-3xl font-bold mb-6">General information about working visas</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Working visas are official documents that permit foreign nationals to legally work in another country
                                for a specified period. These permits are essential for compliance with immigration laws and regulations.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3">
                                    <TickCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Legal authorization to work in a foreign country</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <TickCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Protection of labor rights and benefits</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <TickCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Access to social services and healthcare</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <TickCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Pathway to permanent residency in many countries</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div className="md:w-1/2 grid grid-cols-2 gap-4" variants={fadeIn}>
                        <div className="col-span-2">
                            <Image
                                src="/images/ilustrations/working-hero.png"
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
                className="relative w-full "
                id="working-visa-type"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeIn}>
            <WorkingVisaType/>
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
                Working visa eligibility varies by country and visa type. However, most countries assess 
                applicants based on these common factors to determine qualification.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border flex gap-4 items-start">
                  <div className="bg-blue-50 p-2 rounded-full">
                    <TickCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Educational Qualifications</h3>
                    <p className="text-sm text-gray-500">Most countries require at least a bachelor s degree or equivalent professional certification.</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border flex gap-4 items-start">
                  <div className="bg-blue-50 p-2 rounded-full">
                  <TickCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Work Experience</h3>
                    <p className="text-sm text-gray-500">Typically 1-5 years of relevant work experience in your field of expertise.</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border flex gap-4 items-start">
                  <div className="bg-blue-50 p-2 rounded-full">
                  <TickCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Language Proficiency</h3>
                    <p className="text-sm text-gray-500">Proof of language skills in the official language of the destination country.</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border flex gap-4 items-start">
                  <div className="bg-blue-50 p-2 rounded-full">
                  <TickCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Health Requirements</h3>
                    <p className="text-sm text-gray-500">Medical examination to ensure you meet health standards of the destination country.</p>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
            <div className="">
            <div className="col-span-2">
                <Image
                                src="/images/ilustrations/working-requirements-hero.png"
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


    <motion.section
        className="container mx-auto py-16 bg-white"
        id="visa-processing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeIn}>

        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visa Processing Times</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Each Visa has its own processing time, which can vary based on type of visa and requirements.
                It is important to check the specific processing times for the visa you are applying for, as they can change frequently.
            </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
            {/* Column 1 */}
            <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="p-6 space-y-6">
                <VisaItem title="Subclass 482 – TSS" time="2–6 months" progress="1/4" note=" 75% in 2 months, 90% in 6 months" color="green" />
                <VisaItem title="Subclass 400 – Short Stay Specialist" time="2–4 weeks" progress="1/6" note=" 75% in 14 days, 90% in 30 days" color="blue" />
                <VisaItem title="Subclass 407 – Training Visa" time="3–5 months" progress="1/3" note=" 75% in 3 months, 90% in 5 months" color="orange" />
                <VisaItem title="Subclass 186 – Employer Nomination" time="6–10 months" progress="2/3" note=" 75% in 6 months, 90% in 10 months" color="purple" />
                </div>
            </div>

            {/* Column 2 */}
            <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="p-6 space-y-6">
                <VisaItem title="Subclass 491 – Skilled Regional" time="6–10 months" progress="2/3" note=" 75% in 6 months, 90% in 10 months" color="green" />
                <VisaItem title="Subclass 189 – Skilled Independent" time="4–7 months" progress="1/2" note=" 75% in 4 months, 90% in 7 months" color="blue" />
                <VisaItem title="Subclass 190 – Skilled Nominated" time="5–9 months" progress="2/3" note=" 75% in 5 months, 90% in 9 months" color="orange" />
                <VisaItem title="Subclass 494 – Skilled Employer Regional" time="5–9 months" progress="2/3" note=" 75% in 5 months, 90% in 9 months" color="purple" />
                </div>
            </div>
            </div>
        </div>
      </motion.section>

        <CTA/>
        <Footer/>
        </>

    )
}