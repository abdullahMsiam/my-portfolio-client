import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import img from "../../assets/blog.jpg"

const SingleBlogPage = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://portfolio-dusky-six-32.vercel.app/blogs/${id}`);
            const data = await res.json();
            setData(data)
        };
        fetchData();
    }, [id]);

    const { title, banner, date, readTime, writer, content, tags } = data;

    return (
        <div className="bg-zinc-900 text-white pb-6 pt-24">
            <div className="max-w-5xl mx-auto">
                <div>
                    <div className="w-11/12 mx-auto">
                        <p className="text-gray-300">Date:{date} || {readTime} min read </p>
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <div className="flex items-center gap-2 border-2 border-white border-opacity-20 rounded-md px-2 bg-black w-4/5 mt-1 py-1">
                            <img className="rounded-full h-12" src={writer?.picture} alt="" />
                            <div>
                                <h1 className="text-xl text-gray-300 font-semibold ">{writer?.name}</h1>
                                <h1 className="text-base text-gray-300 -mt-1 ">Personal Blog</h1>
                            </div>
                        </div>
                    </div>

                    <img className=" w-11/12  mx-auto h-40 md:h-72 mt-6 rounded-md" src={banner} alt="" />
                    <p style={{ whiteSpace: "pre-line" }} className="text-wrap mt-4 w-11/12 mx-auto">{content}</p>
                    <div className="flex flex-wrap gap-2 justify-stretch md:justify-center mt-4 text-lg font-bold">
                        <p>Tags:</p>
                        {
                            tags?.map((tag, index) => (
                                <p key={index} className="bg-[#00a4d6] text-black px-2 rounded-badge hover:scale-105">{tag}</p>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleBlogPage;