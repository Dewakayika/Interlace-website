"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { TickCircle } from "iconsax-react";

export default function WorkingVisaPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    const [activeTab, setActiveTab] = useState("temporary");

    const tabs = [
        { id: "temporary", label: "Temporary Work Visas" },
        { id: "permanent", label: "Permanent Work Visas" },
        { id: "other", label: "Other Work-Related Visas" },
    ];

    const tabContent = {
        temporary: [
            {
                legend: "Subclass 482",
                title: "Temporary Skill Shortage",
                description: "Requires employer sponsorship and is available for occupations in demand",
                details: ["Up to 2 years duration", "No official age limit", "At least 2 years of experience"],
            },
            {
                legend: "Subclass 400",
                title: "Short Stay Specialist",
                description: "For short-term, highly specialized work or cultural exchange",
                details: ["Up to 3-6 months", "No age restriction", "Highly specialized skills or knowledge"],
            },
            {
                legend: "Subclass 407",
                title: "Training Visa",
                description: "For occupation training or professional development",
                details: ["Valid for up to 2 years", "Must be 18 years or older", "Structured workplace training"],
            },
        ],
        permanent: [
            {
                legend: "Subclass 186",
                title: "Employer Nomination Scheme",
                description: "Permanent residency for skilled workers sponsored by their employer",
                details: [
                    "Pathway to Australian citizenship",
                    "Employer sponsorship required",
                    "PR long-term employment contract",
                    "Duration: Permanent",
                    "Age limit: Under 45",
                ],
            },
            {
                legend: "Subclass 189",
                title: "Skilled Independent Visa",
                description: "For skilled workers without employer sponsorship",
                details: [
                    "Pathway to Australian citizenship",
                    "No employer or state nomination required",
                    "Permanent residency with full work rights",
                    "Duration: Permanent",
                    "Age limit: Under 45",
                ],
            },
            {
                legend: "Subclass 190",
                title: "Skilled Nominated Visa",
                description: "Similar to 189 but requires state or territory nomination",
                details: [
                    "Pathway to Australian citizenship",
                    "State or territory nomination required",
                    "PR work in nominating region",
                    "Duration: Permanent",
                    "Age limit: Under 45",
                ],
            },
        ],
        other: [
            {
                legend: "Subclass 491",
                title: "Skilled Work Regional (Provisional) Visa",
                description: "For skilled workers nominated by a state/territory or sponsored to live and work in regional Australia",
                details: [
                    "5-year provisional visa",
                    "Requires state/territory nomination",
                    "Must live and work in a regional area",
                    "Duration: 5 years",
                    "Age limit: Under 45",
                ],
            },
            {
                legend: "Subclass 494",
                title: "Skilled Employer Sponsored Regional (Provisional) Visa",
                description: "For skilled workers sponsored by an employer in regional Australia",
                details: [
                    "5-year provisional visa",
                    "Employer sponsorship in regional area",
                    "At least 3 years of work experience",
                    "Duration: 5 years",
                    "Age limit: Under 45",
                ],
            },
        ],
    };

    return (
        <>
            <section className="container mx-auto py-16 justify-center items-center object-center flex flex-col ">
                <motion.h1
                    className="text-3xl md:text-4xl font-bold text-center mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Types of Working Visas
                </motion.h1>
                <motion.p
                    className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Explore different categories of working visas designed to meet various employment situations and professional backgrounds.
                </motion.p>

                {/* Tabs */}
                {/* Tabs */}
                <motion.div
                    className="relative flex justify-center space-x-4 mb-8 bg-gray-100 p-2 w-fit items-center rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-4 py-2 text-sm font-medium rounded-lg ${
                                activeTab === tab.id
                                    ? "text-white"
                                    : "text-gray-600 hover:bg-gray-300"
                            }`}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTabIndicator"
                                    className="absolute inset-0 bg-blue-600 rounded-lg z-0"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </motion.div>

                    {/* Tab Content */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        hidden= {{ opacity: 0, y: 30 }}
                        visible={{ opacity: 1, y: 0 }}
                        >

                        {tabContent[activeTab].map((visa, index) => (
                            <motion.div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-6 border border-gray-100 hover:shadow-lg transition"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.1 }}
                            >
                                <p className="text-sm text-primary-500">{visa.legend}</p>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{visa.title}</h3>
                                <p className="text-gray-600 mb-4">{visa.description}</p>
                                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                                    {visa.details.map((detail, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <TickCircle size="12" className="text-primary-500" variant="Bold" /> {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
            </section>
        </>
    );
}