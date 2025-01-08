import { useEffect, useState } from "react";
import img from "../../assets/blog.jpg"
import BlogCard from "../common/BlogCard";
import SpecialBlog from "./SpecialBlog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://portfolio-dusky-six-32.vercel.app/blogs")
            const data = await res.json();
            setBlogs(data)
        }
        fetchData();
    }, [])

    const lastBlog = blogs[blogs.length - 1];
    return (
        <div className="bg-zinc-900 pb-2 text-white">
            <div className="max-w-5xl mx-auto">
                <h1 className=" ms-5 pt-20 mb-3 font-bold text-4xl text-[#00a4d6]">Latest Blog</h1>
                <div className="mx-5">
                    <div>
                        <SpecialBlog lastBlog={lastBlog} img={img} />
                    </div>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                        {
                            blogs.map((blog) => {
                                return <BlogCard key={blog._id} blog={blog} />
                            })
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blogs;