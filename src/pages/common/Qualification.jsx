/* eslint-disable react/prop-types */

import { FaExternalLinkAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { Link } from "react-router-dom";

const Qualification = ({ course }) => {
    const { credentialLink, instituteName, major, place, skills, status, type } = course;
    console.log(credentialLink, instituteName, major, place, skills, status, type);
    console.log(course);
    return (
        <div className="border-2 border-[#00a4d6] rounded-md border-opacity-50 bg-[#040f12] bg-opacity-70 p-2 px-3 h-[230px]" >
            <div className="flex justify-between mb-2">
                <h1 className="text-[#00a4d6] font-semibold flex items-center gap-1 text-lg"> <MdCategory /> {type}</h1>
                <Link to={credentialLink} className="text-yellow-300 btn-link flex items-center gap-1" ><FaExternalLinkAlt /> Credential</Link>
            </div>
            <div className="">
                <h1 className="text-xl font-semibold text-white"> {instituteName}</h1>
                <h1 className="text-lg text-white flex gap-1"><p className="text-[#00a4d6]">Title:</p> {major}</h1>
                <h1 className="text-lg text-white flex gap-1"><p className="text-[#00a4d6]">Place:</p> {place}</h1>
                <h1 className="text-lg text-white flex gap-1"><p className="text-[#00a4d6]">Status:</p> {status}</h1>

            </div>
            <div className="flex flex-wrap gap-1">
                {
                    skills.map((skill, index) => (
                        <span key={index} className=" px-3 text-sm mt-2 font-semibold text-black bg-gradient-to-r from-[#00a4d6] to-[#00aeff] rounded-full shadow-lg hover:from-[#479dcf] hover:to-[#00a2ff] focus:ring-2 focus:ring-blue-300 transition-all duration-300">{skill}</span>
                    ))
                }
            </div>
        </div>
    );
};

export default Qualification;