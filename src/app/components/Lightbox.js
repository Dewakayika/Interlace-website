'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const handleOpenLightbox = (event) => {
      setImages(event.detail.images);
      setCurrentImage(event.detail.index);
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('openLightbox', handleOpenLightbox);
    return () => {
      window.removeEventListener('openLightbox', handleOpenLightbox);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      onClick={handleClose}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        onClick={handleClose}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous button */}
      <button
        className="absolute left-4 text-white hover:text-gray-300 transition-colors"
        onClick={handlePrevious}
      >
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        className="absolute right-4 text-white hover:text-gray-300 transition-colors"
        onClick={handleNext}
      >
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
        {currentImage + 1} / {images.length}
      </div>

      {/* Main image */}
      <div className="relative w-full h-full max-w-7xl max-h-[90vh] p-4">
        <Image
          src={images[currentImage]}
          alt={`Gallery image ${currentImage + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
} 