import { useEffect, useState } from "react";
import SngProject from "../common/SngProject";
import { Link } from "react-router-dom";



const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const response = await fetch('https://portfolio-dusky-six-32.vercel.app/projects');
            const data = await response.json();
            setProjects(data);
        }
        getProjects();
    }, [])

    return (
        <div className="bg-zinc-900 text-white " id='projects'>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-center pt-16 font-bold text-4xl text-[#00a4d6]">Projects</h1>
                <hr className="pb-2" />
                <div>
                    <div className="grid grid-cols-1 gap-6 mt-6">
                        {
                            projects.slice(-3).map((project) => {
                                return (
                                    <SngProject key={project._id} project={project} />
                                )
                            })
                        }

                    </div>
                    <div className="mx-auto mt-6 flex justify-center">
                        <button className="animated-gradient w-1/2 md:w-4/12 btn btn-outline bg-[#00a4d6] text-lg text-black"> <Link to={"/projects"}>All Projects</Link> </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;