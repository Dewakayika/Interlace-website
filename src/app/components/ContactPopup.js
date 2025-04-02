'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UilPhone, UilWhatsapp, UilTimes } from '@iconscout/react-unicons';

const ContactPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // State to control visibility after scrolling

    const contacts = [
        {
            title: "IELTS Course",
            subtitle: "+6285847419359",
            icon: <UilWhatsapp className="w-6 h-6" />,
            action: "Chat Now",
            type: "whatsapp",
            number: "6285847419359"
        },
        {
            title: "Consultation",
            subtitle: "+6285847419359",
            icon: <UilWhatsapp className="w-6 h-6" />,
            action: "Chat Now",
            type: "whatsapp",
            number: "6285847419359"
        }
    ];

    const handleAction = (contact) => {
        switch (contact.type) {
            case 'phone':
                window.location.href = `tel:${contact.number}`;
                break;
            case 'whatsapp':
                window.open(`https://wa.me/${contact.number}`, '_blank');
                break;
            case 'appointment':
                console.log('Book appointment');    
                break;
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const triggerPosition = 200; // Adjust this value based on your main section height
            setIsVisible(scrollPosition > triggerPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Animation variants
    const popupVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.95 },
        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, x: 50, scale: 0.95, transition: { duration: 0.4, ease: "easeIn" } }
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.2, transition: { duration: 0.4 } },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { opacity:0, y: 50, scale: 0.95, transition: { duration: 0.3, ease: "easeIn" } }
    };

    return (
        <>
            {/* Floating Button */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="fixed bottom-6 right-6 z-50 bg-primary-500 text-white p-4 rounded-full shadow-lg hover:bg-primary-600"
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="relative w-6 h-6">
                            <motion.div
                                className="absolute inset-0"
                                initial={{ rotate: 0, opacity: 1 }}
                                animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <UilTimes className="w-6 h-6" />
                            </motion.div>
                            <motion.div
                                className="absolute inset-0"
                                initial={{ rotate: 0, opacity: 1 }}
                                animate={{ rotate: isOpen ? -180 : 0, opacity: isOpen ? 0 : 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <UilPhone className="w-6 h-6" />
                            </motion.div>
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Contact Popup */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-24 right-6 z-50 w-72 bg-white rounded-lg shadow-xl overflow-hidden"
                        variants={popupVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {contacts.map((contact, index) => (
                            <motion.div
                                key={index}
                                className="p-4 border-b last:border-b-0 hover:bg-gray-50"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-primary-50 p-2 rounded-full hover:scale-110 transition-transform">
                                            {contact.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">{contact.title}</h3>
                                            <p className="text-xs text-gray-500">{contact.subtitle}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleAction(contact)}
                                        className="text-primary-500 text-sm font-medium hover:scale-105 transition-transform"
                                    >
                                        {contact.action}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default ContactPopup;