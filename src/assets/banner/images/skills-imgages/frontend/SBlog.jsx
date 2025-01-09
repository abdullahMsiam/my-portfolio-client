/* eslint-disable react/prop-types */
import { useState } from "react";

const SBlog = ({ blog }) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [isCreate, setIsCreate] = useState(false);

    const handleUpdate = () => {
        setIsUpdate(true);
    };
    const handleDelete = () => {
        setIsDelete(true);
    }

    const handleCreate = () => {
        setIsCreate(true);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const picture = form.picture.value;
        const banner = form.banner.value;
        const title = form.title.value;
        const date = form.date.value;
        const tags = form.tags.value.split(",");
        const overview = form.overview.value;
        const content = form.content.value;
        const readTime = form.readTime.value;
        const demandBlog = {
            writer: { name, picture }, banner, title, date, tags, overview, content, readTime
        };

        // -----------------create blog-----------------
        if (isCreate) {
            const response = await fetch('https://portfolio-dusky-six-32.vercel.app/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(demandBlog)
            });
            const data = await response.json();
            if (data) {
                alert('Blog Created Successfully');
            } else {
                alert('Failed to create blog');
            }
        }

        // -----------------update blog-----------------
        if (isUpdate) {
            const response = await fetch(`https://portfolio-dusky-six-32.vercel.app/blogs/${blog._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(demandBlog)
            });
            const data = await response.json();
            if (data) {
                alert('Blog Updated Successfully');
            } else {
                alert('Failed to update blog');
            }
        };

        // -----------------delete blog-----------------
        if (isDelete) {
            alert('Are you sure you want to delete this blog?');
            const response = await fetch(`https://portfolio-dusky-six-32.vercel.app/blogs/${blog._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            if (data) {
                alert('Blog Deleted Successfully');
            } else {
                alert('Failed to delete blog');
            }
        }
    }
    return (
        <div className="border-2 p-2 my-2 bg-green-200 bg-opacity-20 text-white">
            {blog.title}
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full" defaultValue={blog.writer.name} />
                    </div>
                    <div>
                        <label htmlFor="picture">Picture</label>
                        <input type="text" name="picture" id="picture" placeholder="Enter your picture" className="w-full" defaultValue={blog.writer.picture} />
                    </div>
                    <div>
                        <label htmlFor="banner">Banner</label>
                        <input type="text" name="banner" id="banner" placeholder="Enter your banner" className="w-full" defaultValue={blog.banner} />
                    </div>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" placeholder="Enter your title" className="w-full" defaultValue={blog.title} />
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" placeholder="Enter your date" className="w-full" defaultValue={blog.date} />
                    </div>
                    <div>
                        <label htmlFor="tags">Tags</label>
                        <input type="text" name="tags" id="tags" placeholder="Enter your tags" className="w-full" defaultValue={blog.tags.join(",")} />
                    </div>
                    <div>
                        <label htmlFor="overview">Overview</label>
                        <textarea type="text" name="overview" id="overview" placeholder="Enter your overview" className="w-full" defaultValue={blog.overview} />
                    </div>
                    <div>
                        <label htmlFor="content">Content</label>
                        <textarea type="text" name="content" id="content" placeholder="Enter your content" className="w-full h-96" defaultValue={blog.content} />
                    </div>
                    <div>
                        <label htmlFor="readTime">Read Time</label>
                        <input type="text" name="readTime" id="readTime" placeholder="Enter your read time" className="w-full" defaultValue={blog.readTime} />
                    </div>
                    <button onClick={handleUpdate} type="submit" className="bg-yellow-400 text-black p-2">Update Project</button>
                    <button onClick={handleCreate} type="submit" className="bg-green-800 text-white p-2 ms-3">Create Project</button>
                    <button onClick={handleDelete} type="submit" className="bg-red-800 text-white p-2 ms-3">Delete Project</button>
                </form>
            </div>

        </div>
    );
};

export default SBlog;