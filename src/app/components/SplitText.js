'use client'
import React, { useEffect, useState } from 'react';

const SplitText = ({ text, delay = 0, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <span className={`inline-flex flex-wrap ${className}`}>
            {text.split(' ').map((word, wordIndex) => (
                <span key={wordIndex} className="mr-2 overflow-hidden">
                    {word.split('').map((char, charIndex) => (
                        <span
                            key={charIndex}
                            className={`inline-block transition-all duration-500 ease-out`}
                            style={{
                                transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                                opacity: isVisible ? 1 : 0,
                                transitionDelay: `${delay + (wordIndex * 0.15) + (charIndex * 0.025)}s`
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </span>
            ))}
        </span>
    );
};

export default SplitText; 