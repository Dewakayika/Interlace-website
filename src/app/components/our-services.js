'use client'
import React from 'react';
import Link from 'next/link';
import { services } from '../Data/data';

// Hexagon SVG component
const HexagonIcon = ({ className }) => (
    <svg 
        className={className} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z" />
    </svg>
);

export default function OurServices({title, desc}) {
    return (
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="features">
            <div className="container lg mx-auto">
                {title || desc ?
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-2xl text-xl font-medium font-lexend">{title}</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">{desc}</p>
                    </div>    
                    : null
                }

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {services.map((item, index) => {
                        const Icon = item.Icon
                        return(
                            <div key={index} className="group relative lg:px-6 mt-4 rounded-xl overflow-hidden text-center">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <HexagonIcon 
                                        className="h-28 w-28 fill-violet-600/5 mx-auto rotate-[30deg]"
                                    />
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-violet-600 rounded-xl text-3xl flex align-middle justify-center items-center">
                                        <Icon width={30} height={30}/>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link href="/services" className="font- text-lg h5 hover:text-violet-600 font-lexend">
                                        {item.title}
                                    </Link>
                                    <p className="text-slate-400 mt-3">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};