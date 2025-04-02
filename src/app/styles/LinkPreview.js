"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

export default function LinkPreview({
  children,
  url,
  className = "",
  quality = 50,
  layout = "intrinsic", // Layout set to intrinsic to auto adjust based on image aspect ratio
  isStatic = false,
  imageSrc = "", // Local image source
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 500, height: 100 }); // Default values

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
    x.set(offsetFromCenter);
  };

  const onImageLoadingComplete = (img) => {
    setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
  };

  // Use `useEffect` to set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Ensure the component renders correctly only on the client-side
  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block ${className}`} // Use inline-block for inline behavior
      onMouseMove={handleMouseMove}
    >
      {children}

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.6 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 260, damping: 20 },
          }}
          exit={{ opacity: 0, y: 20, scale: 0.6 }}
          className="absolute z-10  bg-white rounded-xl"
          style={{
            width: imageDimensions.width,  // Dynamically set width based on the image's natural width
            height: imageDimensions.height,
            x: translateX, // Dynamically set height based on the image's natural height
          }}
        >
          <Link
            href={url}
            className="block p-1 bg-white rounded-2xl"
            style={{ fontSize: 0 }}
          >
            <Image
              src={imageSrc} // Local image used directly
              width={imageDimensions.width} // Dynamically set width based on the image's natural width
              height={imageDimensions.height} // Dynamically set height based on the image's natural height
              quality={quality}
              layout={layout}
              priority={true}
              className="rounded-2xl"
              alt="preview image"
              onLoadingComplete={onImageLoadingComplete} // Get image dimensions when loaded
            />
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
