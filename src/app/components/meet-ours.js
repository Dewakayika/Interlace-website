'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {MeetOursdata} from "../Data/data"

// Social Media Icons as SVG components
const SocialIcons = {
    Facebook: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 16} height={props.height || 16} fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
        </svg>
    ),
    Instagram: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 16} height={props.height || 16} fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
    ),
    LinkedIn: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 16} height={props.height || 16} fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    )
};

export default function MeetOurs() {
    const data = MeetOursdata.slice(0, 4)
    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl font-medium font-lexend">Meet Our Teammates</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome
                        template, you can replace it with any text.</p>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    {data.map((item, index) => (
                        <div className="lg:col-span-3 md:col-span-6" key={index} >
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <Image src={item.image} className="" alt="" height={0} width={0} sizes='100vw' style={{width:"100%", height:"auto"}}/>
                                    <ul
                                        className="list-none absolute top-1/2 -translate-y-1/2 -end-20 group-hover:end-5 transition-all duration-500 ease-in-out">
                                        <li className="">
                                            <Link href=""
                                                className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white">
                                                <SocialIcons.Facebook className="h-4 w-4" />
                                            </Link>
                                        </li>
                                        <li className="mt-1">
                                            <Link href=""
                                                className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white">
                                                <SocialIcons.Instagram className="h-4 w-4" />
                                            </Link>
                                        </li>
                                        <li className="mt-1">
                                            <Link href=""
                                                className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white">
                                                <SocialIcons.LinkedIn className="h-4 w-4" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content mt-3">
                                    <Link href=""
                                        className="text-lg hover:text-violet-600 transition-all duration-500 ease-in-out h5 font-lexend">{item.title}</Link>
                                    <p className="text-slate-400">{item.type}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
