import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../AuthProviders/AuthProvider";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../../../../pages/error/ErrorPage";
import SProject from "./SProject";
import ShowEdu from "./ShowEdu";

const Dashboard = () => {
    const [projects, setProjects] = useState([])
    const [qualifications, setQualifications] = useState([])
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const { user, loading } = auth;
    console.log(auth)

    useEffect(() => {
        if (!user && !loading) {
            navigate('/');
        }

        if (!loading) {
            const getProjects = async () => {
                const response = await fetch('https://portfolio-dusky-six-32.vercel.app/projects');
                const data = await response.json();
                setProjects(data);
            }
            const getQualifications = async () => {
                const response = await fetch('https://portfolio-dusky-six-32.vercel.app/qualifications');
                const data = await response.json();
                setQualifications(data);
            }
            getProjects();
            getQualifications();
        }

    }, [user, navigate, loading])

    console.log(qualifications);

    if (!user) {
        return <ErrorPage />;
    }


    return (
        <div className="container mx-auto mt-16">
            <h1 className="text-center text-4xl font-semibold">Change What you want</h1>

            <h1 className="text-2xl text-center font-bold text-yellow-500">All Project</h1>
            <div className="grid md:grid-cols-2 gap-2 mb-8">
                {
                    projects.map((project) => {
                        return (
                            <SProject key={project._id} project={project} />
                        )
                    })
                }

            </div>
            <h1 className="text-2xl text-center font-bold text-yellow-500">All Qualifications</h1>
            <div className="grid md:grid-cols-2 gap-2 mb-8">
                {
                    qualifications.map((qualification) => {
                        return (
                            <ShowEdu key={qualification._id} qualification={qualification} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Dashboard;