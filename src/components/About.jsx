import { motion } from "framer-motion";
import aboutImg from "../assets/aboutMe-2.png";
import { ABOUT_TEXT } from "../constants";

const About = () => {
    // Parse the ABOUT_TEXT into sections for individual animations
    const parseAboutText = (text) => {
        const lines = text.split('\n').filter(line => line.trim() !== '');
        return lines.map(line => line.trim());
    };

    const textLines = parseAboutText(ABOUT_TEXT);

    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-3xl" src={aboutImg} alt="About" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <div className="my-2 max-w-xl py-6 space-y-4">
                            {textLines.map((line, index) => (
                                <motion.div
                                    key={index}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="text-neutral-300 leading-relaxed"
                                >
                                    {line.startsWith('•') ? (
                                        <div className="flex items-start ml-8">
                                            <span className="text-neutral-100 mr-2 mt-1 text-sm">•</span>
                                            <span className="text-sm leading-relaxed">
                                                {line.substring(1).trim()}
                                            </span>
                                        </div>
                                    ) : line.includes('Proven Impact:') ? (
                                        <p className="font-semibold text-neutral-100 mb-2">{line}</p>
                                    ) : (
                                        <p className="leading-relaxed">{line}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About;
