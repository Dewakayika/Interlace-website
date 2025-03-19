import React, { useState, useEffect } from 'react';

const ScrollButton = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Expand button after scrolling 100px
            setIsExpanded(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button 
            className={`fixed bottom-8 right-8 z-50 flex items-center gap-2 transition-all duration-500 ease-in-out ${
                isExpanded 
                ? 'bg-black/90 pl-4 pr-5 py-3 rounded-full' 
                : 'bg-black w-12 h-12 rounded-full'
            }`}
        >
            <span className="flex items-center justify-center">
                <svg 
                    className={`w-6 h-6 transition-transform duration-500 ${isExpanded ? 'rotate-0' : '-rotate-90'}`}
                    fill="none" 
                    stroke="white" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                    />
                </svg>
            </span>
            <span 
                className={`text-white whitespace-nowrap overflow-hidden transition-all duration-500 ${
                    isExpanded ? 'w-auto opacity-100' : 'w-0 opacity-0'
                }`}
            >
                Book your flight
            </span>
        </button>
    );
};

export default ScrollButton; 