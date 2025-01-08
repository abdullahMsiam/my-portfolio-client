/* eslint-disable react/prop-types */
import { useState } from "react";


const SProject = ({ project }) => {

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
        const imageUrl = form.imageUrl.value;
        const title = form.title.value;
        const overview = form.overview.value;
        const skills = form.skills.value.split(",");
        const server = form.server.value;
        const client = form.client.value;
        const siteLink = form.siteLink.value;
        const type = form.type.value;

        const demandProject = { imageUrl, title, overview, skills, server, client, siteLink, type };

        if (isUpdate) {
            const response = await fetch(`https://portfolio-dusky-six-32.vercel.app/projects/${project._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(demandProject)

            });
            const data = await response.json();
            if (data) {
                alert('Project Updated Successfully');
            } else {
                alert('Failed to update project');
            }
        }

        //-----------------Create Project-----------------
        if (isCreate) {
            const response = await fetch(`https://portfolio-dusky-six-32.vercel.app/projects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(demandProject)

            });
            const data = await response.json();
            if (data) {
                alert('Project Created Successfully');
            } else {
                alert('Failed to create project');
            }
        }

        //-----------------Delete Project-----------------
        if (isDelete) {
            const response = await fetch(`https://portfolio-dusky-six-32.vercel.app/projects/${project._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(demandProject)

            });
            const data = await response.json();
            if (data) {
                alert('Project Deleted Successfully');
            } else {
                alert('Failed to delete project');
            }
        }
    }


    return (
        <div className="border p-2 my-2 bg-yellow-200 bg-opacity-50 text-white">
            {project.title}
            <div>
                <form onSubmit={handleSubmit} >
                    <div className="">
                        <label htmlFor="imageUrl" className="">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            defaultValue={project.imageUrl}
                            className="border p-2 w-full"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="title" className="block">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            defaultValue={project.title}
                            className="border p-2 w-full"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="overview" className="block">Overview:</label>
                        <textarea
                            id="overview"
                            name="overview"
                            defaultValue={project.overview}
                            className="border p-2 w-full"
                        ></textarea>
                    </div>

                    <div className="">
                        <label htmlFor="skills" className="block">Skills (comma separated):</label>
                        <input
                            type="text"
                            id="skills"
                            name="skills"
                            defaultValue={project.skills.join(",")}
                            className="border p-2 w-full"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="server" className="block">Server URL:</label>
                        <input
                            type="text"
                            id="server"
                            name="server"
                            defaultValue={project.server}
                            className="border p-2 w-full"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="client" className="block">Client URL:</label>
                        <input
                            type="text"
                            id="client"
                            name="client"
                            defaultValue={project.client}
                            className="border p-2 w-full"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="siteLink" className="block">Site Link:</label>
                        <input
                            type="text"
                            id="siteLink"
                            name="siteLink"
                            defaultValue={project.siteLink}
                            className="border p-2 w-full"
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="type" className="block">Type:</label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            defaultValue={project.type}
                            className="border p-2 w-full"
                        />
                    </div>

                    <button onClick={handleUpdate} type="submit" className="bg-yellow-400 text-black p-2">Update Project</button>
                    <button onClick={handleCreate} type="submit" className="bg-green-800 text-white p-2 ms-3">Create Project</button>
                    <button onClick={handleDelete} type="submit" className="bg-red-800 text-white p-2 ms-3">Delete Project</button>
                </form>
            </div>
        </div>
    );
};

export default SProject;