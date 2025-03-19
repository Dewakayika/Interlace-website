'use client'
import React from 'react'
import Link from 'next/link';
import { Contact } from '../Data/data';

// Define SVG icons object to replace react-feather icons
const Icons = {
    Phone: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
    ),
    Mail: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
    MapPin: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    )
};

// Hexagon SVG component
const Hexagon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z" />
    </svg>
);

export default function ContactData() {
    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    {Contact.map((item, index) => {
                        const Icon = item.Icon;
                        return(
                            <div className="text-center px-6" key={index}>
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <div className="h-28 w-28 fill-violet-600/5 mx-auto rotate-[30deg]">
                                        {/* Hexagon background */}
                                    </div>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-violet-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                        <Icon width={36} height={36} />
                                    </div>
                                </div>
    
                                <div className="content mt-7">
                                    <h5 className="title h5 text-xl font-medium font-lexend">{item.title}</h5>
                                    <p className="text-slate-400 mt-3">{item.detail}</p>
    
                                    <div className="mt-5">
                                        <Link href={`${item.title === "Phone" ? 'tel:' : item.title === "Email" ? 'mailto:' : ''}${item.type}`} className="text-violet-600 hover:text-violet-600 after:bg-violet-600 transition duration-500">
                                            {item.type}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
