import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const LogosSlider = () => {
    const logos = [
        "/images/univ-logo/Frame 5.svg",
        "/images/univ-logo/Frame 6.svg",
        "/images/univ-logo/Frame 7.svg",
        "/images/univ-logo/Frame 8.svg",
        "/images/univ-logo/Frame 9.svg",
        "/images/univ-logo/Frame 10.svg",
        "/images/univ-logo/Frame 12.svg",
        "/images/univ-logo/Frame 13.svg",
        "/images/univ-logo/Frame 14.svg",
        "/images/univ-logo/Frame 15.svg",
        "/images/univ-logo/Frame 16.svg",
        "/images/univ-logo/Frame 17.svg",
        "/images/univ-logo/Frame 18.svg",
        "/images/univ-logo/Frame 19.svg",
        "/images/univ-logo/Frame 20.svg"
    ];

    const [width, setWidth] = useState(0);
    const sliderRef = useRef();

    useEffect(() => {
        // Calculate the total width of the slider
        if (sliderRef.current) {
            setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
        }
    }, []);

    return (

        <motion.div ref={sliderRef} className="relative overflow-hidden cursor-grab mt-20 mb-20">
            <div className='text-xs font-medium md:text-base text-center mb-10 text-gray-600 font-inter'>
                Our Top University & College Partners
            </div>
            {/* Left Fade */}
            <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

            {/* Right Fade */}
            <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <motion.div
                className="flex space-x-6"
                animate={{ x: [0, -width] }} // Continuous scrolling to the left
                transition={{
                    duration: 50, // Adjust the duration for speed
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{ display: "flex" }}
            >
                {/* Duplicate the logos array to create a seamless loop */}
                {/* Duplicate the logos array to create a seamless loop */}
                {[...logos, ...logos].map((logo, index) => (
                    <motion.div key={index} className="flex items-center justify-center min-w-[150px]" >
                        <img
                            src={logo}
                            alt={`Logo ${index + 1}`}
                            className="max-h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default LogosSlider;