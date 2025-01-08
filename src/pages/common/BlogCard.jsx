/* eslint-disable react/prop-types */
import { FaClock, FaPenAlt } from 'react-icons/fa';
import img from '../../assets/blog.jpg';
import { Link } from 'react-router-dom';
const BlogCard = ({ blog }) => {
    return (
        <div className="bg-[#040f12] p-4 rounded-lg shadow-lg border-2 border-[#00a4d6] border-opacity-20">
            <img src={img} alt="Blog Image" className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-[#00a4d6]">{blog.title}</h2>
                <h1 className="flex flex-col gap-1 text-yellow-100 text-base mt-2"><span> <FaPenAlt className="inline" /> {blog?.writer?.name}</span>  <span><FaClock className=" me-1 inline" />{blog?.date}</span></h1>
                <p className="text-gray-400 mb-2">{blog.overview}</p>
                <Link to={`/blogs/${blog._id}`} className="text-base btn-link text-yellow-400">Read More</Link>
            </div>
        </div>
    );
};

export default BlogCard;