"use client";
import {useState, useEffect} from "react";
import Image from "next/image";
import {motion, useMotionValue, useSpring} from "framer-motion";
import Link from "next/link";

export default function LinkPreview({
    children,
    url,
    className = "",
    quality = 50,
    layout = "intrinsic",
    isStatic = false,
    imageSrc = "",
}) {
    const [isMounted, setIsMounted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [imageDimensions, setImageDimensions] = useState({width: 500, height: 100});

    const springConfig = {
        stiffness: 100,
        damping: 15
    };
    const x = useMotionValue(0);
    const translateX = useSpring(x, springConfig);

    const handleMouseMove = (event) => {
        const targetRect = event.target.getBoundingClientRect();
        const eventOffsetX = event.clientX - targetRect.left;
        const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
        x.set(offsetFromCenter);
    };

    const onImageLoadingComplete = (img) => {
        setImageDimensions({width: img.naturalWidth, height: img.naturalHeight});
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <motion.span // Changed from div to span to be inline-safe
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative inline-block ${className}`}
            onMouseMove={handleMouseMove}
        >
            <span>{children}</span> {/* Prevent raw text ending up around a div */}

            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    className="absolute z-10 bg-white rounded-xl"
                    style={{
                        width: imageDimensions.width,
                        height: imageDimensions.height,
                        x: translateX,
                    }}
                >
                    <Link
                        href={url}
                        className="block p-1 bg-white rounded-2xl"
                        style={{ fontSize: 0 }}
                    >
                        <Image
                            src={imageSrc}
                            width={imageDimensions.width}
                            height={imageDimensions.height}
                            quality={quality}
                            layout={layout}
                            priority={true}
                            className="rounded-2xl"
                            alt="preview image"
                            onLoadingComplete={onImageLoadingComplete}
                        />
                    </Link>
                </motion.div>
            )}
        </motion.span>
    );
}
