import { motion } from 'framer-motion';


const ServiceCards = () => {
    const mainText = "We provide expert guidance on university applications, visas, and relocation, ensuring a smooth transition and successful future in Australia.";

    const statistics = [
        { value: "20+", label: "University Partners" },
        { value: "10", label: "Branch around the world" },
        { value: "1500+", label: "Success Visa application" },
        { value: "1400+", label: "Client satisfactions" }
    ];

    return (

        

        <section className="py-10 mt-5">
            <div className="container mx-auto px-4">
                <div className="container mx-auto ">

                {/* About Us Section */}
                <div className="mb-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: false }}
                        className="text-xs font-medium md:text-base text-justify">
                        ABOUT US
                    </motion.span>
                </div>

                
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="max-w-[90%] mb-10">
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
                                    ease: "easeOut" }
                            }}
                            viewport={{ once: false }}
                            className=" inline-block mr-[0.2em] text-xl md:text-[2.5rem] font-bold md:font-medium leading-[1.3] tracking-[-0.04rem] text-justify"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.div>
                

                <hr className="my-10 border-t-2 border-stone-200" />

                {/* Statistics Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
                    {statistics.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: false }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-3xl md:text-4xl font-bold text-primary-500">{stat.value}</span>
                            <p className="text-xs md:text-base text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                </div>


            </div>
        </section>
    );
};

export default ServiceCards;