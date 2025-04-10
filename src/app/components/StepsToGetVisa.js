'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        title: 'Choose the Right Course and Institution',
        description: [
            'Select a CRICOS-Registered Course based on your talent mapping and career pathway planning.',
            'Ensure the university/college/TAFE offers the necessary support for international students.',
        ],
    },
    {
        title: 'Receive a Confirmation of Enrollment (CoE)',
        description: [
            'Apply for the course and receive a Letter of Offer (LoA) from the institution.',
            'Accept the offer and pay the required tuition deposit (Tuition free for the 1st semester).',
            'Obtain a Confirmation of Enrollment (CoE), which is essential for your visa application.',
        ],
    },
    {
        title: 'Gather Required Documents',
        description: [
            'Passport: Ensure your passport is valid for the duration of your stay.',
            'Coe from the educational institutiin',
            'Genuine Temporary Entrant (GTE) statement proving you intend to study & not migrate permanently.',
            'Provide proof of financial capacity (Tuition fees, living expenses, travel costs).',   
            'English language proficiency test results (IELTS, TOEFL, PTE, etc.).',
            'Obtain Overseas Student Health Cover (OSHC).',
        ],
    },
    {
        title: 'Apply for the Student Visa (Subclass 500)',
        description: [
            'Create an ImmiAccount on the Australian Government’s Department of Home Affairs website.',
            'Complete the online application and upload all necessary documents.',
            'Pay the visa application fee.',
        ],
    },
    {
        title: 'Complete Health Check & Biometrics (If Required)',
        description: [
            'Undertake a medical examination by an authorized panel physician.',
            'Provide biometric data (fingerprints and photo) if requested by the immigration office.',
        ],
    },
    {
        title: 'Attend a Visa Interview (If Required)',
        description: [
            'Some applicants may be required to attend an interview at the Australian Embassy/Consulate.',
            'Be prepared to answer questions regarding your study plans, financial capability, and future intentions.',
        ],
    },
    {
        title: 'Receive Visa Decision',
        description: [
            'If approved, you will receive your visa grant notification with conditions and expiry details.',
            'Follow visa conditions, including course attendance and work limits (48 hours per fortnight during the semester).',
        ],
    },
];

const StepsToGetVisa = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className='text-left py-10'> 
                    <div className='border-primary-500  inline-block p-4 rounded-xl'>
                        <p className=" text-primary-500 text-base font-medium max-w-xl">
                            HOW TO
                        </p>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-2">
                        Steps to Get a Student Visa (Subclass 500)
                    </h2>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                            viewport={{ once: false }}
                            className="bg-white shadow-sm rounded-lg overflow-hidden"
                        >
                            {/* Accordion Header */}
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium focus:outline-none text-sm md:text-lg"
                            >
                                <span>{`${index + 1}. ${step.title}`}</span>
                                <motion.span
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="text-xl" >
                                    {activeIndex === index ?    '−' : '+'}
                                </motion.span>
                            </button>

                            {/* Accordion Content */}
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: activeIndex === index ? 'auto' : 0,
                                    opacity: activeIndex === index ? 1 : 0,
                                }}
                                transition={{
                                    height: { duration: 0.4, ease: 'easeInOut' },
                                    opacity: { duration: 0.3, ease: 'easeInOut' },
                                }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 py-4 text-gray-600 md:text-base text-sm">
                                    <ul className="list-disc list-inside space-y-2">
                                        {step.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepsToGetVisa;