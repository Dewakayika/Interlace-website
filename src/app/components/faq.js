import { useState } from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


const FAQ = () => {
    const faqs = [
        { question: "How do you define Interlace Studies?", answer: "Interlace Studies is a research-based career and skill-focused educational service provider. Research has been our focus as it has been a scientifically well-accepted way of discovering new knowledge and problem-solving. We truly are problem solvers in the field of Career and Education." },
        { question: "How how you different?", answer: "Interlace Studies We believe students should focus more on career development than selecting an educational institution. A solid career plan develops a pathway to reach the destination you want to reach. After the development of a solid career path, then comes the selection of the institutions." },
        { question: "How do you help us differently?", answer: "Interlace Studies You get an academic degree from the educational institutions of your choice. But we will prepare you side by side for the globalized knowledge-based job market which changes rapidly." },
        { question: "Do you focus on making money?", answer: "Interlace Studies We absolutely want to make clear to our fellow students that we value more the service we provide than the business we make out of it. We certainly gain out of this business. However, we would like to see our students being confident, be ready to take challenges of finding a career and academic success, be ready to be entrepreneurs, and establish their own business." },
        { question: "Why yet another education agency?", answer: "Interlace Studies has been born out of the necessity. All of the founding members have studied or worked abroad. We have walked a challenging path as overseas students, entrepreneurs, and professional workers. Looking back to our path, we learn so many things. We now realize, we could have worked more logically and would have achieved our dream. We just want to help our newcomers tell our story to make the journey more fruitful, enjoyable, and more productive." },
        { question: "Do you help us with our academic issue?", answer: "Interlace Studies Absolutely. We have in-depth experiences in how it feels to arrive in a quite different place. We have experienced sleepless nights writing and rewriting assignments one after another. We had a quite hard time understanding quite a different educational culture. We have worked two-three part-time works without any knowledge of time management. But, we now can look back to our path and think why didn’t we do this or that way which could have been better." },
        { question: "Do you help us find a part-time or full-time job?", answer: "Interlace Studies In fact, no one can promise to find a job for anyone. Getting a job either part-time or full-time depends on the capacity of the individual. But, we have experience working in different areas in our student life. We certainly help you to develop the right attitude to find a job. Believe us, getting a job depends more on your enthusiasm, passion rather than your academic qualification. We help you to write a job-winning CV, writing a cover letter which helps transfer your interest into the work." },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="container mx-auto py-20 px-4">
            <div className="container md:w-[75%] w-full text-center mb-10">
                    <DotLottieReact src='/images/lottie-animations/cursor-faq.json' className='w-[300px] h-[auto] absolute top-0 left-0 hidden md:block' loop autoplay />
                    <DotLottieReact src='/images/lottie-animations/cursor-questions.json' className='w-[300px] h-[auto] absolute md:top-0 md:right-0 top-0 left-[30%' loop autoplay />
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="md:text-5xl text-2xl leading-[120%]  font-bold text-gray-800 ">
                    Frequently Asked <span className="text-primary-500">Questions</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="text-gray-600 mt-4 md:text-base text-sm">
                    Find detailed answers to common inquiries about our services, company policies, and customer support options to help you get the best experience.
                </motion.p>
            </div>

            <div className="container mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: false }}
                        className="bg-white shadow-sm rounded-lg overflow-hidden"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium focus:outline-none text-sm md:text-lg"
                        >
                            <span>{faq.question}</span>
                            <motion.span 
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="text-xl" 
                            >
                                +
                            </motion.span>
                        </button>
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ 
                                height: activeIndex === index ? "auto" : 0,
                                opacity: activeIndex === index ? 1 : 0
                            }}
                            transition={{ 
                                height: { duration: 0.4, ease: "easeInOut" },
                                opacity: { duration: 0.3, ease: "easeInOut" }
                            }}
                            className="overflow-hidden"
                        >
                            <div className="px-6 py-4 text-gray-600 md:text-base text-sm">
                                {faq.answer}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;