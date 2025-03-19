'use client'
import { motion } from 'framer-motion';

const ServiceCards = () => {
    const mainText = "Interlace Studies is an education and migration consultancy helping individuals study and settle in Australia. We offer expert support for university applications, visas, and migration, ensuring a smooth transition and a bright future.";

    const features = [
        {
            icon: "🔒",
            title: "Education & Career Consultation",
            description: "Expert guidance on choosing the right study programs, universities, and career pathways in Australia."
        },
        {
            icon: "📅",
            title: "Visa & Migration Assistance",
            description: "Support for various visa applications, including student, skilled worker, partner, and permanent residency visas."
        },
        {
            icon: "🌏",
            title: "Skills Assessment & Sponsorship",
            description: "Assistance with skills recognition, employer sponsorship, and migration programs for professionals."
        },
        {
            icon: "✨",
            title: "IELTS Preparation Course",
            description: "Comprehensive training to improve English proficiency and achieve high IELTS scores for study, work, or migration."
        }
    ];

    return (
        <section className="container mx-auto py-24 mt-5">
            <div className="container mx-auto px-4">
                <div className="mb-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="text-lg font-medium">
                        ABOUT US
                    </motion.span>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-[90%] mb-20">
                    {mainText.split(" ").map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ 
                                opacity: 1, 
                                y: 0,
                                transition: {
                                    duration: 0.3,
                                    delay: i * 0.03,
                                    ease: "easeOut"
                                }
                            }}
                            viewport={{ once: true }}
                            className="inline-block mr-[0.2em] text-[2.5rem] md:text-[3.5rem] font-medium leading-[1.3] tracking-[-0.02em] text-justify"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.div>

                <hr className="my-10 border-t-2 border-stone-200" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ 
                                opacity: 1, 
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }
                            }}
                            whileHover={{ scale: 1.08 }}
                            viewport={{ once: true }}
                            className="group relative aspect-auto min-h-[300px] border-2 border-stone-200 overflow-hidden rounded-xl  cursor-pointer">

                            {/* Number indicator */}
                            <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-medium text-black/70">
                                {feature.number}
                            </div>

                            {/* Default state with icon and title */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t ">
                                <span className="text-3xl block mb-3">{feature.icon}</span>
                                <h3 className="text-lg font-medium text-black/80">
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Hover state with description */}
                            <div className="absolute inset-0 bg-black/80 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
                                <p className="text-sm text-white/80 leading-relaxed">
                                    {feature.description}
                                </p>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="mt-4 flex items-center text-white/90 text-sm font-medium"
                                >
                                    Learn more
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.div>
                            </div>

                            {/* Texture overlay */}
                            <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none texture-overlay"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCards; 