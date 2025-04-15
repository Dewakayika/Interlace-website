'use client';
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "iconsax-react";

const NavbarSmallDark = dynamic(() => import('../../components/navbar-small-dark'), { ssr: false });
const Footer = dynamic(() => import('../../components/footer'), { ssr: false });
const OurProcess = dynamic(() => import('../../components/our-process'), { ssr: false });

export default function SkillAssessment() {
    return (
        <>
            <NavbarSmallDark />
            <section className="container mx-auto px-4 md:py-14 py-10 md:h-screen h-full">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full py-20">
                    {/* Left Content */}
                    <div className="md:px-4">
                        <div className="space-y-6">
                            <p className="text-sm font-medium text-primary-500 uppercase tracking-wide leading-relaxed">
                                Our Services
                            </p>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                               Skill Assessment
                            </h1>
                            <p className="text-gray-600 leading-relaxed">
                                We provide comprehensive skill assessment services to help individuals and organizations evaluate and enhance their skills and competencies. Our assessments are designed to identify strengths and areas for improvement, enabling targeted development plans and career progression.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-10">
                             
                            </p>
                        </div>
                        <a href="https://wa.me/+6285847419359" target="_blank" className="button px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition  relative">
                            Consultation Now <ArrowRight size="20" variant="Bold" className="inline-block ml-2" />
                        </a>
                    </div>

                    {/* Right Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <Image
                                src="/images/ilustrations/skill-assessment.png"
                                alt="Education Consultant"
                                className="w-full h-auto "
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}