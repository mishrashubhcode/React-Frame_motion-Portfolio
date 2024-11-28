import logo from "../assets/shubhamlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-15 flex items-centre justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="#top" className="mx-2">
                    <img className="w-10" src={logo} alt="logo" />
                </a>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/shubham-kumar-mishra/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-600" />
                </a>

                <a href="https://github.com/mishrashubhcode" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-gray-800" />
                </a>

                <a href="https://x.com/mishraasshubham" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="hover:text-blue-400" />
                </a>

                <a href="https://www.instagram.com/mishraa_sshubham/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-pink-500" />
                </a>

            </div>
        </nav>
    )
}

export default Navbar;
