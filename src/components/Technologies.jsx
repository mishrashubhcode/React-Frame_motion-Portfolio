import { RiReactjsLine } from "react-icons/ri";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { SiCsharp, SiFigma, SiMongodb, SiSnowflake, SiMysql, SiDbeaver, SiPostman, SiMicrosoftazure, SiJavascript, SiTailwindcss, SiAdobe } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { FaGithub } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si'; // ChatGPT real icon
import { VscGithubInverted } from 'react-icons/vsc'; // GitHub Copilot
import { VscVscode } from 'react-icons/vsc';
import { BiSearch } from 'react-icons/bi'; // Perplexity
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    const technologies = [
        { icon: RiReactjsLine, name: "React.js", color: "text-cyan-400", duration: 2.5 },
        { icon: FaNodeJs, name: "Node.js", color: "text-green-500", duration: 4 },
        { icon: SiCsharp, name: "C#", color: "text-purple-600", duration: 5 },
        { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500", duration: 3.5 },
        { icon: SiMongodb, name: "MongoDB", color: "text-green-500", duration: 3 },
        { icon: SiMysql, name: "MySQL", color: "text-blue-600", duration: 5 },
        { icon: FaAws, name: "AWS", color: "text-orange-400", duration: 3 },
        { icon: SiMicrosoftazure, name: "Azure", color: "text-blue-500", duration: 4.5 },
        { icon: DiPython, name: "Python", color: "text-yellow-600", duration: 7 },
        { icon: SiSnowflake, name: "Snowflake", color: "text-cyan-400", duration: 3 },
        { icon: FaGithub, name: "GitHub", color: "text-white", duration: 9.5 },
        { icon: VscVscode, name: "VS Code", color: "text-blue-400", duration: 2.8 },
        { icon: SiPostman, name: "Postman", color: "text-orange-600", duration: 5.5 },
        { icon: SiDbeaver, name: "DBeaver", color: "text-cyan-300", duration: 2.5 },
        { icon: SiFigma, name: "Figma", color: "text-fuchsia-700", duration: 5 },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400", duration: 4.2 },
        { icon: SiOpenai, name: "ChatGPT", color: "text-green-400", duration: 6 },
        { icon: VscGithubInverted, name: "GitHub Copilot", color: "text-purple-400", duration: 3.8 },
        { icon: SiAdobe, name: "AEM", color: "text-red-500", duration: 4.7 }, // Changed this line
        { icon: BiSearch, name: "Perplexity", color: "text-blue-300", duration: 5.2 }
    ];

    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">

                {technologies.map((tech, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants(tech.duration)}
                        initial="initial"
                        animate="animate"
                        className="group relative rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-600 transition-colors duration-300 cursor-pointer">
                        <tech.icon className={`text-7xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} />

                        {/* Hover Tooltip */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-neutral-700 z-10">
                            {tech.name}
                            {/* Tooltip Arrow */}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900"></div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Technologies;
