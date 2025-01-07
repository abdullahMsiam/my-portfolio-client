import img from '../../assets/blog.jpg';
const BlogCard = () => {
    return (
        <div className="bg-[#040f12] p-4 rounded-lg shadow-lg border-2 border-[#00a4d6] border-opacity-20">
            <img src={img} alt="Blog Image" className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">Blog Title</h2>
                <p className="text-gray-400 mb-4">This is a short description of the blog post. It gives a brief overview of the content.</p>
                <a href="#" className="text-[#00a4d6] hover:underline">Read More</a>
            </div>
        </div>
    );
};

export default BlogCard;