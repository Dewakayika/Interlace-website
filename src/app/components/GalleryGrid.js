'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GalleryGrid({ galleries }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Animation config
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1, // delay between each image
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <>
                    <div className="relative z-10 text-center md:mt-10 mb-20 md:mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: false }}
                        className="text-primary-500 text-sm md:text-lg font-medium">
                        Our Gallery
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: false }}
                        className="text-2xl sm:text-2xl md:text-4xl font-bold mt-2 px-4">
                          Find out our activity at
                         <br></br> <span className="text-primary-500">Interlace Studies</span>
                    </motion.h2>
                </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show">

        {galleries.map((gallery) => (
          <motion.div
            key={gallery.id}
            variants={itemVariants}
            viewport={{ once: false }}
            className="relative group overflow-hidden rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedImage(gallery)}
          >
            {gallery.image && gallery.image.length > 0 && (
              <div className="relative aspect-square">
                <Image
                  src={`https://interlace-cms.onrender.com${gallery.image[0].formats.medium.url}`}
                  alt={gallery.alt || 'Gallery image'}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-3xl w-full bg-white rounded-lg shadow-lg p-4" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold hover:text-red-500"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <div className="relative w-full h-[400px]">
              <Image
                src={`https://interlace-cms.onrender.com${selectedImage.image[0].url}`}
                alt={selectedImage.alt || 'Detailed image'}
                fill
                className="object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
