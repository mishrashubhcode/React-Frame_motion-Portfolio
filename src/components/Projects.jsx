import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4 lg:mr-8"
                        >
                            <div className="relative group">
                                <img
                                    src={project.image}
                                    // width={200}
                                    // height={200}
                                    alt={project.title}
                                    className="mb-6 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                                />
                                {/* Project Links Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="flex space-x-4">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                                className="text-white hover:text-cyan-400 transition-colors">
                                                <FaGithub size={24} />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                                className="text-white hover:text-cyan-400 transition-colors">
                                                <FaExternalLinkAlt size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-3 text-2xl font-semibold text-white">{project.title}</h6>

                            {/* Project Overview */}
                            <p className="mb-4 text-neutral-300 leading-relaxed">{project.description}</p>

                            {/* Key Features */}
                            {project.features && (
                                <div className="mb-4">
                                    <motion.h7
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: 16 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-lg font-medium text-neutral-200 mb-2 block"
                                    >
                                        Key Features:
                                    </motion.h7>
                                    <ul className="space-y-1">
                                        {project.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start text-sm text-neutral-400">
                                                <span className="text-cyan-400 mr-2 mt-1">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Technical Implementation */}
                            {project.implementation && (
                                <div className="mb-4">
                                    <motion.h7
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: 16 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-lg font-medium text-neutral-200 mb-2 block"
                                    >
                                        Technical Implementation:
                                    </motion.h7>
                                    <p className="text-sm text-neutral-400 leading-relaxed">{project.implementation}</p>
                                </div>
                            )}

                            {/* Impact/Results */}
                            {project.impact && (
                                <div className="mb-4">
                                    <motion.h7
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: 16 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-lg font-medium text-neutral-200 mb-2 block"
                                    >
                                        Impact & Results:
                                    </motion.h7>
                                    <p className="text-sm text-neutral-400 leading-relaxed">{project.impact}</p>
                                </div>
                            )}

                            {/* Technologies */}
                            <div className="mb-4">
                                <motion.h7
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 16 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-lg font-medium text-neutral-200 mb-2 block"
                                >
                                    Technologies Used:
                                </motion.h7>
                                <div className="flex flex-wrap">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="mr-2 mb-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-cyan-300 border border-neutral-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-4 mt-6">
                                {/* For DuckDB project with separate Frontend and Backend repo */}
                                {project.title === "SuperAI DuckDB - NLP to SQL Converter" ? (
                                    <>
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                                className="flex items-center space-x-2 bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg transition-colors text-sm">
                                                <FaGithub />
                                                <span>Frontend Code</span>
                                            </a>
                                        )}
                                        {project.backendUrl && (
                                            <a href={project.backendUrl} target="_blank" rel="noopener noreferrer"
                                                className="flex items-center space-x-2 bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg transition-colors text-sm">
                                                <FaGithub />
                                                <span>Backend Code</span>
                                            </a>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                                className="flex items-center space-x-2 bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg transition-colors text-sm">
                                                <FaGithub />
                                                <span>View Code</span>
                                            </a>
                                        )}
                                    </>
                                )}
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors text-sm">
                                        <FaExternalLinkAlt />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
