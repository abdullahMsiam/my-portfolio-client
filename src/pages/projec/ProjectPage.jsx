import { useEffect, useState } from "react";
import SngProject from "../common/SngProject";
import Loader from "../common/loader/Loader";

const ProjectPage = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://portfolio-dusky-six-32.vercel.app/projects");
            const data = await res.json();
            setProjects(data.reverse());
            setLoading(false);
        }
        fetchData();
    }, [])
    return (
        <div className="bg-zinc-900 text-white pb-6">
            {
                loading ? <Loader /> :
                    <div className=" max-w-5xl mx-auto" >
                        <h1 className="ms-5 text-4xl font-bold text-[#00a4d6] pt-20">Latest Projects</h1>
                        <div className="grid grid-cols-1 gap-3 mt-6">
                            {
                                projects.map((project) => (
                                    <SngProject key={project._id} project={project} />
                                ))
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default ProjectPage;