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
                    viewport={{ once: true }}
                    className={`rounded-2xl md:p-12 md:pb-12 p-5 pb-10 text-white ${cards[0].background} col-span-1 lg:col-span-2 md:h-[400px] relative overflow-hidden`}>

                    <div className="flex items-end justify-between align-center h-full">
                        <div className='md:w-1/2 w-full mt-52 md:mt-0'> 
                            <div className="md:pb-10 pb-4">
                                <Image src={cards[0].number} className="md:w-10 w-7" width={400} height={400} alt="Education & Carieer Consultant" /> 
                            </div>
                            <div className='gap-4 font-inter '>
                                <h3 className="md:text-3xl text-xl font-medium mt-2 ">{cards[0].title}</h3>
                                <p className="md:mt-4 mt-2 md:text-base text-xs font-thin text-justify md:text-left">{cards[0].description}</p>
                            </div>
                        </div>
                    </div>
                    <DotLottieReact src={cards[0].icon} className='md:h-[300px] h-[200px] w-auto absolute top-0 md:right-[-22%] lg:right-[-15%] right-[-20%]' loop autoplay />
                </motion.div>

                {cards.slice(1).map((card, index) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`rounded-2xl md:pt-0 md:pb-8 md:px-8 px-5 pb-8 text-white ${card.background} md:h-[650px] flex flex-col items-center`}>

                        <div className="flex flex-col items-center h-full justify-between">
                            <DotLottieReact src={card.icon} className='h-[300px] md:top-0 top-[-15%] w-auto relative' loop autoplay />
                            <div className="flex flex-col items-left text-left">
                                <div className="md:mb-6 mb-5">
                                    <Image src={card.number} className="md:w-10 w-7" width={400} height={400} alt={card.title} />   
                                </div>
                                <div className='md:space-y-4 space-y-2 font-inter'>
                                    <h3 className="md:text-3xl text-xl font-medium">{card.title}</h3>
                                    <p className="md:text-base text-xs font-thin md:text-left text-justify">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Information;