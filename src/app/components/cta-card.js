import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CTACard = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 relative mb-10">
            <div className='container mx-auto' >
            <div className="container mx-auto bg-primary-500 rounded-xl overflow-hidden p-4 pb-0 md:pb-8 md:p-12">
            
                {/* Background Grid */}
                <div
                    className="absolute inset-0 bg-grid-pattern"
                    style={{
                        backgroundImage: "url('/images/ilustrations/grid-cta.svg')",
                        height: "100%",
                        width: "100%",
                    }}
                ></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-white w-full md:max-w-lg">
                            
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight md:text-left text-center">
                            Ready to start your <br className="hidden sm:block" />
                            <span className="text-white">journey in Australia?</span>
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-white/80 md:text-left text-justify">
                            We are here to help you achieve your dreams of studying and migrating in Australia. Book a consultation now and lets start your journey together.
                        </p>
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="mt-6 w-full sm:w-auto bg-white text-blue-500 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100 transition duration-300">
                            Consultation Now →
                        </motion.button>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="mt-8 md:mt-0 md:ml-8 relative md:absolute md:top-0 md:right-0">

                        <Image 
                            src="/images/ilustrations/pasport-visa.svg" 
                            alt="Passport and Card" 
                            width={350} 
                            height={350} 
                            className="w-64 sm:w-80 md:w-[350px] h-auto object-contain"
                        />
                    </motion.div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default CTACard;