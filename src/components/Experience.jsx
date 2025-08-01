import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const listContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const listItemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Experience
            </motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            {/* Company Logo */}
                            {experience.logo && (
                                <img
                                    src={experience.logo}
                                    alt={experience.company + ' logo'}
                                    className="mb-2 object-contain rounded-lg shadow"
                                    width={200}
                                    height={200}
                                    style={{ background: '#fff', padding: '4px' }} // Optional styling
                                />
                            )}
                            <p className="mb-2 text-sm text-neutral-400 ">{experience.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold">
                                {experience.role} -{" "}
                                <span className="text-purple-100">{experience.company}</span>
                            </h6>

                            {/* Animated list container */}
                            <motion.div
                                className="mb-4 text-neutral-400"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: { staggerChildren: 0.15 }
                                    }
                                }}
                            >
                                {experience.achievements.map((achievement, achIndex) => (
                                    <motion.div
                                        key={achIndex}
                                        className="flex items-start mb-2"
                                        initial={{ opacity: 0, x: 100 }} // Start from right
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: achIndex * 0.07 }}
                                    >
                                        <span className="text-purple-400 mr-2 mt-1">•</span>
                                        <p className="text-sm">{achievement}</p>
                                    </motion.div>
                                ))}
                            </motion.div>


                            {/* Technologies tags */}
                            {experience.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
