import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/shubhamProfilePic-2.png";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-12 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Shubham Mishra
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.div
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-300 leading-relaxed">
                            {HERO_CONTENT}
                        </motion.div>
                        <motion.span
                            variants={container(1.2)}
                            initial="hidden"
                            animate="visible"
                            className="mb-10 mt-6 lg:mb-0">
                            <a
                                href="https://mishrashubhcode.github.io/My-Resume/Shubham_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="bg-white rounded-full px-6 py-3 text-sm text-stone-800 font-medium hover:bg-gray-100 transition-colors duration-200">
                                Download Resume
                            </a>
                        </motion.span>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            className="rounded-3xl max-w-lg"
                            src={profilepic}
                            alt="Shubham Mishra - Full Stack Developer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
