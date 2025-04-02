import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Testimonial = () => {
  const products = [
    {
      title: "Moonbeam",
      link: "",
      thumbnail: "/images/ilustrations/Testimoni-01.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "/images/ilustrations/Testimoni-02.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail: "/images/ilustrations/Testimoni-03.png",
    },
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail: "/images/ilustrations/Testimoni-04.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail: "/images/ilustrations/Testimoni-05.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail: "/images/ilustrations/Testimoni-01.png",
    },
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail: "/images/ilustrations/Testimoni-02.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail: "/images/ilustrations/Testimoni-03.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail: "/images/ilustrations/Testimoni-04.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail: "/images/ilustrations/Testimoni-05.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail: "/images/ilustrations/Testimoni-01.png",
    },
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail: "/images/ilustrations/Testimoni-02.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail: "/images/ilustrations/Testimoni-03.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail: "/images/ilustrations/Testimoni-04.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail: "/images/ilustrations/Testimoni-05.png",
    },
  ];

;
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    });
  
    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  
    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  
    return (
      <div
        ref={ref}
        className="h-[300vh] pt-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
        <Header />
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
        >
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
            {firstRow.map((product) => (
              <ProductCard product={product} translate={translateX} key={product.title} />
            ))}
          </motion.div>
          <motion.div className="flex flex-row mb-20 space-x-20">
            {secondRow.map((product) => (
              <ProductCard product={product} translate={translateXReverse} key={product.title} />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
            {thirdRow.map((product) => (
              <ProductCard product={product} translate={translateX} key={product.title} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  };
  
  export const Header = () => {
    return (
      <div className="max-w-7xl relative mx-auto py-20 md:pt-40 px-4 w-full left-0 top-0">
        <h1 className="text-2xl md:text-5xl font-bold dark:text-white">
            Client feedback <br /> is our Achievements
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
            We take pride in our work and are committed to providing the highest level of service to our clients. 
            Our testimonials are a testament to our dedication and expertise in the field of education and migration consulting.
        </p>
      </div>
    );
  };
  
  export const ProductCard = ({ product, translate }) => {
    return (
      <motion.div
        style={{
          x: translate,
        }}
        whileHover={{
          y: -20,
        }}
        key={product.title}
        className="group/product h-80 w-[30rem] relative shrink-0">
          <Image
            src={product.thumbnail}
            height="300"
            width="300"
            className="object-cover object-left-top absolute h-full w-full inset-0"
            alt={product.title}
          />
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
          
        </h2>
      </motion.div>
    );
  };

export default Testimonial;
