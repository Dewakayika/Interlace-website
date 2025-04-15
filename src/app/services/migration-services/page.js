'use client';
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "iconsax-react";

const NavbarSmallDark = dynamic(() => import('../../components/navbar-small-dark'), { ssr: false });
const Footer = dynamic(() => import('../../components/footer'), { ssr: false });
const OurProcess = dynamic(() => import('../../components/our-process'), { ssr: false });

export default function MigrationServices() {
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
                                Migration Services
                            </h1>
                            <p className="text-gray-600 leading-relaxed">
                                We provide comprehensive migration services to help individuals and families navigate the complexities of relocating to a new country. Our team of experts offers personalized guidance and support throughout the entire process, ensuring a smooth transition and successful settlement in your new home.
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
                                src="/images/ilustrations/migration-services.png"
                                alt="Education Consultant"
                                className="w-full h-auto "
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </section>

                        <section className="bg-gray-100 h-full">
                            <div className="container mx-auto">
                                <div className="container mx-auto px-4 text-center py-14">
                                        <div className="md:flex mb-10 justify-center gap-20 w-full ">
                                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:text-left text-center md:w-1/2">
                                                    We support visa services for students and professionals
                                                </h2>
                                            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12 text-left italic w-1/2 hidden md:block">
                                                We provide comprehensive visa services for students and professionals, ensuring a smooth transition to your new educational or professional journey. 
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {/* Card 1 */}
                                            <div className="bg-white  rounded-sm overflow-hidden text-left">
                                                <Image
                                                    src="/images/blog/1.jpg"
                                                    alt="Green area care"
                                                    className="w-full h-48 object-cover"
                                                    width={400}
                                                    height={200}
                                                />
                                                <div className="p-6">
                                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Student Visa</h3>
                                                        <p className="text-gray-600 mb-4">
                                                            We assist with student visa applications, ensuring compliance with all requirements for a successful application process.
                                                        </p>
                                                        <a href="/services/student-visa" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition">
                                                            Learn More <ArrowRight size="20" variant="Bold" className="inline-block ml-2" />
                                                        </a>
                                                </div>
                                            </div>
            
                                            {/* Card 2 */}
                                            <div className="bg-white  rounded-sm overflow-hidden text-left">
                                                <Image
                                                    src="/images/blog/2.jpg"
                                                    alt="Seasonal maintenance"
                                                    className="w-full h-48 object-cover"
                                                    width={400}
                                                    height={200}
                                                />
                                                <div className="p-6">
                                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Working Visa</h3>
                                                    <p className="text-gray-600 mb-4">
                                                        We provide expert guidance on work visa applications, ensuring you meet all eligibility criteria and documentation requirements.
                                                    </p>
                                                    <a href="/services/working-visa" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition">
                                                            Learn More <ArrowRight size="20" variant="Bold" className="inline-block ml-2" />
                                                        </a>
                                                </div>
                                            </div>
            
                                            {/* Card 3 */}
                                            <div className="bg-white  rounded-sm overflow-hidden text-left">
                                                <Image
                                                    src="/images/blog/3.jpg"
                                                    alt="Public area cleaning"
                                                    className="w-full h-48 object-cover"
                                                    width={400}
                                                    height={200}
                                                />
                                                <div className="p-6">
                                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Working Holiday Visa</h3>
                                                    <p className="text-gray-600 mb-4">
                                                        We assist with working holiday visa applications, ensuring compliance with all requirements for a successful application process.
                                                    </p>
                                                    <a href="/services/student-visa" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition">
                                                            Learn More <ArrowRight size="20" variant="Bold" className="inline-block ml-2" />
                                                        </a>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </section>
            
                        <section className='bg-slate-950' >
                            <OurProcess/>
                        </section>



            <Footer />
        </>
    );
}