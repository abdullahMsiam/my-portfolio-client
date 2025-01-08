import { Link } from "react-router-dom";
import BlogCard from "../common/BlogCard";
import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://portfolio-dusky-six-32.vercel.app/blogs");
            const data = await res.json();
            setBlogs(data);
        }
        fetchData();
    }, [])

    return (
        <div className="bg-zinc-900 text-white pb-6" >
            <div className="max-w-5xl mx-auto">
                <h1 className="text-center pt-16 font-bold text-4xl text-[#00a4d6]">Blogs</h1>
                <hr className="pb-2" />
                <div className="mx-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
                        {
                            blogs.map((blog) => {
                                return <BlogCard key={blog._id} blog={blog} />
                            })
                        }
                    </div>
                    <div className="mx-auto mt-6 flex justify-center">

                        <Link to={"/blogs"} className="animated-gradient w-1/2 md:w-4/12 btn btn-outline bg-[#00a4d6] text-lg text-black">All Blogs</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;