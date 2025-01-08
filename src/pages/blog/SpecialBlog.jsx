
import { FaClock, FaPenAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */


const SpecialBlog = ({ lastBlog, img }) => {
    return (
        <div className="border-2 border-[#00a4d6] border-opacity-30 rounded-md bg-black bg-opacity-50 flex flex-col md:flex-row justify-around gap-3 p-3">
            <img src={img} className="rounded-md h-44 md:h-64 md:w-1/2" alt="" />
            <div className="w-full text-xl">
                <h1 className="font-semibold text-[#00a4d6] mt-2">{lastBlog?.title}</h1>
                <h1 className="flex flex-col md:flex-row md:items-center gap-1 text-yellow-100 text-base mt-2"><span> <FaPenAlt className="inline" /> {lastBlog?.writer?.name}</span>  <span><FaClock className="md:ms-2 me-1 inline" />{lastBlog?.date}</span></h1>
                <h1 className="text-lg text-gray-400 mt-2">{lastBlog?.overview}</h1>
                <Link to={`/blogs/${lastBlog?._id}`} className="text-lg btn-link text-yellow-400">Read More</Link>
            </div>
        </div>
    );
};

export default SpecialBlog;