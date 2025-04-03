import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const VisionMission = () => {
    return (
        <section className="container mx-auto py-10 md:py-20 px-4">
          <div className="container mx-auto">
            {/* Section Title */}
            <div className="relative text-center">
                {/* Absolute Centered Image */}
                <Image src="/images/ilustrations/ilustration-vision-mission.svg" 
                    className="absolute z-[-1] md:top-[-250%] sm:top-[-150%] top-[-100%] left-1/2 transform -translate-x-1/2 hidden md:block"
                    width={1000} height={1000} alt="Education & Carieer Consultant" loading="lazy"/>

                {/* Title Content */}
                <div className="relative z-10 text-center md:mt-56 mb-20 md:mb-40">
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-primary-500 text-sm md:text-lg font-medium">
                        Vision & Mission
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-2xl md:text-4xl font-bold mt-2 px-4">
                          Let`s grow your career at
                         <br></br> <span className="text-primary-500">Interlace Studies</span>
                    </motion.h2>
                </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid gap-8">
                {/* Vision Card */}
                <div className="grid grid-cols-1 gap-8 items-center border border-primary-500 bg-white rounded-2xl">
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                        className="flex flex-col md:flex-row">
                        <div className="p-4 md:p-8 flex-1">
                          <div className="flex items-start relative h-full">
                            <div>
                              <h3 className="text-xl md:text-3xl font-bold md:font-medium mb-4 md:mb-8">Our Vision</h3>
                              <p className="text-gray-600 text-justify font-light text-sm md:text-base">
                                  Our goal is to establish ourselves as the premier provider of career counseling, education, and migration consulting services in Australia, catering to students from all corners of the world, and assisting them in fulfilling their academic and shaping the future.
                              </p>
                            </div>
                          </div>
                        </div>
                        <Image src="/images/ilustrations/vision.png" className="w-full md:w-auto max-h-[300px] md:max-h-[400px] object-cover rounded-b-2xl md:rounded-r-2xl md:rounded-b-none" width={350} height={350} alt="Skill & Migration Services" priority/>
                    </motion.div>  
                </div>

                <div className="grid grid-cols-1 gap-8 items-center border border-primary-500 bg-white rounded-2xl">
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                        className="flex flex-col-reverse md:flex-row">
                        <Image src="/images/ilustrations/mision.png" className="w-full md:w-auto max-h-[300px] md:max-h-[400px] object-cover rounded-b-2xl md:rounded-l-2xl md:rounded-t-none" width={350} height={350} alt="One stop solution for working oversease" priority/>
                        <div className="p-4 md:p-8 flex-1">
                          <div className="flex items-start relative h-full">
                            <div>
                              <h3 className="text-xl md:text-3xl font-bold md:font-medium mb-4 md:mb-8">Our Mission</h3>
                              <p className="text-gray-600 text-justify font-light text-sm md:text-base">
                              At the core of our mission is the commitment to provide exceptional services, empowering students and job seekers to achieve their career aspirations and making them invaluable contributors to their respective organizations.
                              </p>
                            </div>
                          </div>
                        </div>
                    </motion.div>  
                </div>
            </div>
          </div>
        </section>
    );
};

export default VisionMission;