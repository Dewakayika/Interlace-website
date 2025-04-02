import { motion } from 'framer-motion';
import Image from 'next/image';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Information = () => {
    const cards = [
        {
            id: 1,
            title: "Education & Career Consultation",
            description: "Expert guidance for your academic journey including talent assessment, career planning, institution selection, and comprehensive support from pre-departure to post-arrival assistance.",
            background: "bg-gradient-to-l from-[#2271B1] to-[#19578A]",
            icon: "/images/lottie-animations/consultations animations.json",
            number: "/images/ilustrations/01.svg",
        },
        {
            id: 2,
            title: "Overseas Health Cover",
            description: "Comprehensive health insurance solutions ensuring your complete medical coverage and peace of mind during your stay in Australia.",
            background: "bg-gradient-to-b from-[#5C5C5C] to-[#383838]",
            icon: "/images/lottie-animations/health cover.json",
            number: "/images/ilustrations/02.svg",
        },
        {
            id: 3,
            title: "Visa & Migration Assistance",
            description: "Complete migration support including visa eligibility assessment, application processing, sponsorship arrangements, and  pathway guidance.",
            background: "bg-gradient-to-b from-[#1C517C] to-[#2271B1]",
            icon: "/images/lottie-animations/visa migration.json",
            number: "/images/ilustrations/03.svg",
        },
        {
            id: 4,
            title: "English Preparation",
            description: "We offer expert coaching for IELTS, PTE, and TOEFL iBT to help you meet university admission and visa requirements with confidence.",
            background: "bg-gradient-to-b from-[#1C517C] to-[#2271B1]",
            icon: "/images/lottie-animations/english-preparation.json",
            number: "/images/ilustrations/04.svg",
        },
        {
            id: 5,
            title: "Skill Assesment",
            description: "We provide expert guidance, thorough eligibility assessment, document preparation, and seamless application submission to ensure a smooth and successful process.",
            background: "bg-gradient-to-r from-[#262626] to-[#5C5C5C]",
            icon: "/images/lottie-animations/skill-migration.json",
            number: "/images/ilustrations/05.svg",
        },
    ];

    return (
        <section className="container mx-auto py-20 px-4">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 font-inter ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className={`rounded-2xl p-12 text-white ${cards[0].background} col-span-1 lg:col-span-2 md:h-[400px] relative overflow-hidden`}>

                    <div className="flex items-end justify-between align-center h-full">
                        <div className='w-1/2'> 
                            <div className="pb-10">
                                <Image src={cards[0].number} className="w-10" width={400} height={400} alt="Education & Carieer Consultant" />   
                            </div>
                            <div className='gap-4 font-inter'>
                                <h3 className="text-3xl font-medium mt-2 ">{cards[0].title}</h3>
                                <p className="mt-4 text-base font-thin">{cards[0].description}</p>
                            </div>
                        </div>
                    </div>
                    
                    <DotLottieReact src={cards[0].icon} className='h-[300px] w-auto absolute top-0 right-[-15%] ' loop autoplay />
                    
                </motion.div>

                {/* Rest of the cards remain unchanged */}
                {/* Card 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className={`rounded-2xl pt-0 pb-8 px-8  text-white ${cards[1].background} md:h-[650px] flex flex-col items-center`}>

                    <div className="flex flex-col items-center h-full justify-between">
                        <DotLottieReact src={cards[1].icon} className='h-[300px] w-auto relative' loop autoplay />
                        <div className="flex flex-col items-left text-left">
                            <div className="mb-6">
                            <Image src={cards[1].number} className="w-10" width={400} height={400} alt="Oversease Health Cover" />   
                            </div>
                        <div className='space-y-4 font-inter'>
                            <h3 className="text-3xl font-medium ">{cards[1].title}</h3>
                            <p className="text-base font-thin">{cards[1].description}</p>
                        </div>
                        </div>
                    </div>
                </motion.div>

                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className={`rounded-2xl pt-0 pb-8 px-8  text-white ${cards[2].background} md:h-[650px] flex flex-col items-center`}>

                    <div className="flex flex-col items-center h-full justify-between">
                        <DotLottieReact src={cards[2].icon} className='h-[300px] w-auto relative' loop autoplay />
                        <div className="flex flex-col items-left text-left">
                            <div className="mb-6">
                                <Image src={cards[2].number} className="w-10" width={400} height={400} alt="Visa & Migration Services" />   
                            </div>
                        <div className='space-y-4 font-inter'>
                            <h3 className="text-3xl font-medium">{cards[2].title}</h3>
                            <p className="text-base font-thin">{cards[2].description}</p>
                        </div>
                    </div>
                </div>

                </motion.div>

                {/* Card 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className={`rounded-2xl pt-0 pb-8 px-8  text-white ${cards[3].background} md:h-[650px] flex flex-col items-center`}>

                    <div className="flex flex-col items-center h-full justify-between">
                        <DotLottieReact src={cards[3].icon} className='h-[300px] w-auto relative' loop autoplay />
                        <div className="flex flex-col items-left text-left">
                            <div className="mb-6">
                            <Image src={cards[3].number} className="w-10" width={400} height={400} alt="IELTS Course Preparation" />   
                            </div>
                        <div className='space-y-4 font-inter'>
                            <h3 className="text-3xl font-medium ">{cards[3].title}</h3>
                            <p className="text-base font-thin">{cards[3].description}</p>
                        </div>
                        </div>
                    </div>
                </motion.div>

                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className={`rounded-2xl pt-0 pb-8 px-8  text-white ${cards[4].background} md:h-[650px] flex flex-col items-center`}>

                    <div className="flex flex-col items-center h-full justify-between">
                        <DotLottieReact src={cards[4].icon} className='h-[300px] w-auto relative' loop autoplay />
                        <div className="flex flex-col items-left text-left">
                            <div className="mb-6">
                            <Image src={cards[4].number} className="w-10" width={400} height={400} alt="Skill Assesment for Accoupation in Australia" />   
                            </div>
                        <div className='space-y-4 font-inter'>
                            <h3 className="text-3xl font-medium">{cards[4].title}</h3>
                            <p className="text-base font-thin">{cards[4].description}</p>
                        </div>
                    </div>
                </div>

                </motion.div>

                
            </div>
        </section>
    );
};

export default Information;