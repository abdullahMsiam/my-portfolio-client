import { useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { VscCode, VscVerifiedFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";

const navButton = <>
    <li>
        <button onClick={() => scrollToSection('about')} className="btn btn-sm bg-[#00a4d6] md:bg-opacity-0 border-none hover:bg-opacity-0 rounded-none text-black"><BsPersonWorkspace /> About Me</button>
    </li>
    <li>
        <button onClick={() => scrollToSection('skills')} className="btn btn-sm bg-[#00a4d6] md:bg-opacity-0 border-none hover:bg-opacity-0 rounded-none text-black"> <VscCode className="text-xl" /> Skills</button>
    </li>
    <li>
        <button onClick={() => scrollToSection('projects')} className="btn btn-sm bg-[#00a4d6] md:bg-opacity-0 border-none hover:bg-opacity-0 rounded-none text-black "> <FaDiagramProject /> Projects</button>
    </li>
    <li>
        <button onClick={() => scrollToSection('education')} className="btn btn-sm bg-[#00a4d6] md:bg-opacity-0 border-none hover:bg-opacity-0 rounded-none text-black"><VscVerifiedFilled /> Qualifications</button>
    </li>
    <li>
        <Link to={"/blogs"} className="btn btn-sm bg-[#00a4d6] md:bg-opacity-0 border-none hover:bg-opacity-0 rounded-none text-black"><FaBloggerB /> Blogs</Link>
    </li>
</>;
const scrollToSection = (id, duration = 1000) => {
    const targetElement = document.getElementById(id);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // easing effect 
        window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // "ease-in-out" effect
    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    requestAnimationFrame(animation);
};



const TopNav = () => {
    const [isVisible, setIsVisible] = useState(true);
    const toggleButton = () => {
        setIsVisible(preState => !preState);
    }
    return (
        <div className="navbar text-black bg-[#00a4d6] bg-opacity-80 top-0 fixed z-30" >
            <div className="md:w-[1024px] md:mx-auto md:flex md:justify-between ">
                <div>
                    <div className="dropdown">
                        <button onClick={() => toggleButton()} tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <ul onClick={() => toggleButton()}
                            tabIndex={0}
                            className={`menu text-black menu-sm dropdown-content bg-black bg-opacity-30 rounded-box z-[1] mt-3 w-48 p-2 shadow ${isVisible ? 'hidden' : 'none'} rounded-none `}>
                            {
                                navButton
                            }
                        </ul>
                    </div>
                    <Link onClick={() => scrollToSection('top')} className="btn btn-ghost text-2xl rounded-none " to={"/"}>ABDULLAH M.S.</Link>
                    {/* <a className="btn btn-ghost text-xl">ABDULLAH M.S.</a> */}
                </div>
                <div className=" hidden  lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {
                            navButton
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopNav;