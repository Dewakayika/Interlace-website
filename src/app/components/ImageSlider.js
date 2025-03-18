'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            src: '/images/bg/hero-bg-01.png',
            alt: 'Hero Image 1'
        },
        {
            src: '/images/bg/hero-bg-02.png',
            alt: 'Hero Image 2'
        },
        {
            src: '/images/bg/hero-bg-03.png',
            alt: 'Hero Image 3'
        },
        {
            src: '/images/bg/hero-bg-04.png',
            alt: 'Hero Image 4'
        },
        {
            src: '/images/bg/hero-bg-05.png',
            alt: 'Hero Image 5'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, );

    return (
        <div className="relative w-full h-full">
            {/* Main Image */}
            <div className="relative w-full h-full overflow-hidden">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-1000 ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority={index === 0}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                                ? 'bg-white w-4' 
                                : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider; 