"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LinkPreview from "@/app/styles/LinkPreview";

const TimelineComponent = () => {
  const data = [
    {
      title: "Consultation",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-200 text-normal md:text-lg font-normal mb-8">
            This initial stage involves{" "}
            <LinkPreview  url="" imageSrc="/images/ilustrations/Consultation-01.svg" className="md:text-white" alt="discussing educational and immigration ">
              discussing educational and immigration 
            </LinkPreview>{" "}
            goals. We provide guidance on suitable institutions, visa options, and necessary requirements based on the{" "}
            <LinkPreview url="" imageSrc="/images/ilustrations/Consultation-02.svg" className="md:text-white" alt="getting to know the applicant`s background">
              applicant`s background 
            </LinkPreview>{" "}
            and preferences.
          </p>
        </div>
      ),
    },
    {
      title: "Document Preparation",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-200 text-normal md:text-lg font-normal mb-8">
            In this phase, the applicant{" "}
            <LinkPreview url="" imageSrc="/images/ilustrations/Document Preparation-01.svg" className="md:text-white" alt="gathering and preparing ">
              gathers and prepares 
            </LinkPreview> {" "}
            the required documents, such as academic transcripts, language proficiency certificates, financial statements, and identification papers.{" "}
            <LinkPreview url="" imageSrc="/images/ilustrations/Document Preparation-02.svg" className="md:text-white" alt="assisting requrement documents">
              We assist in ensuring all documents
            </LinkPreview>{" "}
            meet the necessary standards and comply with regulations.
          </p>
        </div>
      ),
    },
    {
      title: "Application Submission",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-200 text-normal md:text-lg font-normal mb-8">
            <LinkPreview url="" imageSrc="/images/ilustrations/Application Submission-01.svg" className="md:text-white">
              The final step involves submitting
            </LinkPreview>{" "}
            the application to the chosen institution and immigration authorities.{" "}
            <LinkPreview url="" imageSrc="/images/ilustrations/Application Submission-02.svg" className="md:text-white">
              We manage the process
            </LinkPreview>
            , track application progress, and provide updates until a decision is received.
          </p>
        </div>
      ),
    },
  ];

  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="container mx-auto">
    <div className="container max-auto font-inter md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-xl md:text-4xl mb-4 text-white dark:text-white max-w-4xl font-inter md:text-left text-center font-semibold">
          Our Services Stages
        </h2>
        <p className="text-neutral-500 dark:text-neutral-200 text-md md:text-lg font-inter mb-8 md:w-[80%] md:text-left hidden md:block">
          We provide a comprehensive range of services to help you achieve your educational and immigration goals. Our process is designed to be flexible, personalized, and tailored to your specific needs.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <h6 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-neutral-200 dark:text-neutral-500">
                {item.title}
              </h6>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h6 className="md:hidden block text-lg mb-4 text-left font-bold text-neutral-200 dark:text-neutral-500">
                {item.title}
              </h6>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-700 dark:via-neutral-700 to-transparent"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default TimelineComponent;
