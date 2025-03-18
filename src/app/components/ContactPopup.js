'use client'
import React, { useState } from 'react';
import { UilPhone, UilWhatsapp, UilCalendarAlt, UilTimes } from '@iconscout/react-unicons';

const ContactPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const contacts = [
        {
            title: "IELTS Course",
            subtitle: "+6285847419359",
            icon: <UilPhone className="w-6 h-6" />,
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
        switch(contact.type) {
            case 'phone':
                window.location.href = `tel:${contact.number}`;
                break;
            case 'whatsapp':
                window.open(`https://wa.me/${contact.number}`, '_blank');
                break;
            case 'appointment':
                // Add your appointment booking logic here
                console.log('Book appointment');
                break;
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 bg-violet-600 text-white p-4 rounded-full shadow-lg hover:bg-violet-700 transition-all duration-500 ease-in-out transform hover:scale-110 active:scale-95"
            >
                <div className="relative w-6 h-6">
                    <div className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                        isOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-0'
                    }`}>
                        <UilTimes className="w-6 h-6" />
                    </div>
                    <div className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                        !isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                    }`}>
                        <UilPhone className="w-6 h-6" />
                    </div>
                </div>
            </button>

            {/* Contact Popup */}
            <div className={`fixed bottom-24 right-6 z-50 transition-all duration-500 ease-in-out transform ${
                isOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
            }`}>
                <div className="w-72 bg-white rounded-lg shadow-xl overflow-hidden">
                    {contacts.map((contact, index) => (
                        <div 
                            key={index}
                            className="transform transition-all duration-300 ease-in-out"
                            style={{
                                transitionDelay: `${index * 50}ms`,
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? 'translateX(0)' : 'translateX(20px)'
                            }}
                        >
                            <div className="p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-violet-100 p-2 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-violet-200">
                                            {contact.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">{contact.title}</h3>
                                            <p className="text-xs text-gray-500">{contact.subtitle}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleAction(contact)}
                                        className="text-violet-600 text-sm font-medium hover:text-violet-700 transition-all duration-300 hover:scale-105 active:scale-95"
                                    >
                                        {contact.action}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-black transition-all duration-500 ease-in-out ${
                    isOpen ? 'opacity-20' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsOpen(false)}
            />
        </>
    );
};

export default ContactPopup; 