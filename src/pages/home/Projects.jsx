import { useEffect, useState } from "react";
import SngProject from "../common/SngProject";
import { Link } from "react-router-dom";
import Loader from "../common/loader/Loader";
import { FaFolderOpen } from "react-icons/fa6";



const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProjects = async () => {
            setLoading(true);
            const response = await fetch('https://portfolio-dusky-six-32.vercel.app/projects');
            const data = await response.json();
            setProjects(data);
            setLoading(false);
        }
        getProjects();
    }, [])

    return (
        <div className="bg-zinc-900 text-white -mb-2" id='projects'>

            {
                loading ? <Loader /> :
                    <div className="max-w-5xl mx-auto">
                <h1 className="font-serif pt-16 pb-2 ps-1 text-lg md:text-2xl text-[#00a4d6]">— 04· Projects</h1>
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
                                <button className="animated-gradient w-5/6 md:w-4/12 btn btn-sm md:btn-md btn-outline text-md md:text-lg border-cyan-600 hover:shadow hover:shadow-black"> <Link className="flex items-center gap-2" to={"/projects"}>
                                <FaFolderOpen/> All Projects</Link> </button>
                            </div>
                        </div>
                    </div>
            }



        </div>
    );
};

export default Projects;