import { Link } from "react-router-dom";
import BlogCard from "../common/BlogCard";
import { useEffect, useState } from "react";
import Loader from "../common/loader/Loader";
import { FaBlogger } from "react-icons/fa";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch("https://portfolio-dusky-six-32.vercel.app/blogs");
            const data = await res.json();
            setBlogs(data);
            setLoading(false);
        }
        fetchData();
    }, [])

    return (
        <div className="bg-zinc-900 text-white -mb-2" id="blogs" >
            {
                loading ? <Loader /> :
                    <div className="max-w-5xl mx-auto">
                        <div className="px-4 md:px-0">
                            <h1 className="font-serif pt-16 pb-2 ps-1 text-lg md:text-2xl text-[#00a4d6]">— 06· Blogs</h1>
                            <hr className="pb-2" />
                        </div>

                        <div className="mx-5">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
                                {
                                    blogs.slice(0, 3).map((blog) => {
                                        return <BlogCard key={blog._id} blog={blog} />
                                    })
                                }
                            </div>
                            <div className="mx-auto mt-6 flex justify-center">
                                <Link to={"/blogs"} className="animated-gradient w-1/2 md:w-4/12 btn btn-sm md:btn-md btn-outline border-cyan-600 text-md md:text-lg hover:shadow hover:shadow-black">
                                    <FaBlogger />
                                    All Blogs</Link>
                            </div>
                        </div>
                    </div>
            }


        </div>
    );
};

export default Blogs;