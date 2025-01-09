/* eslint-disable react/prop-types */

import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const SngProject = ({ project }) => {
    const { imageUrl, title, overview, skills, server, client, type, siteLink } = project;
    // console.log(imageUrl, title, overview, skills, server, client,);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-0 mx-5 bg-[#00a4d6] p-2 bg-opacity-40 rounded-md">
            <div className="w-full">
                <img className="h-[350px] w-5/6 md:w-full rounded-md overflow-hidden mx-auto" src={imageUrl} alt="" />
            </div>
            <div className="w-full bg-black bg-opacity-95 md:bg-opacity-80 h-[400px] md:h-[340px] md:col-span-3 p-4 md:p-8 rounded-md border-2 border-white border-opacity-60 -mt-28 md:mt-0 md:-ms-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center md:-ms-2">
                    <h1 className="text-xl font-semibold text-[#00a4d6] flex gap-2 items-center"><BiSolidCategoryAlt /> {type}</h1>
                    <div className="flex -ms-4 -mt-3 md:mt-0">
                        <Link target="_blank" to={server} className="flex md:items-center gap-0 md:gap-1 btn btn-link text-yellow-300"><FaGithub />Backend </Link>
                        <Link target="_blank" to={client} className="flex md:items-center gap-0 md:gap-1 btn btn-link text-yellow-300"><FaGithub />Frontend </Link>
                        <Link target="_blank" to={siteLink} className="flex md:items-center gap-0 md:gap-1 btn btn-link text-yellow-300"> <FaExternalLinkAlt /> Site </Link>
                    </div>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-4">{title}</h1>
                <p className="overflow-y-auto overflow-hidden h-[100px] mb-3">{overview}</p>
                <div className="flex flex-wrap gap-1">
                    {
                        skills.map((skill, index) => (
                            <span key={index} className=" px-3 font-semibold text-black bg-gradient-to-r from-[#00a4d6] to-[#00aeff] rounded-full shadow-lg hover:from-[#479dcf] hover:to-[#00a2ff] focus:ring-2 focus:ring-blue-300 transition-all duration-300">{skill}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SngProject;