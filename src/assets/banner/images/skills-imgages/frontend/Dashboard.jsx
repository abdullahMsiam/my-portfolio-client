import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../../AuthProviders/AuthProvider";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../../../../pages/error/ErrorPage";
import PostProject from "./PostProject";
import UpdateProject from "./UpdateProject";

const Dashboard = () => {
    // const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const { user, loading } = auth;
    console.log(auth)

    useEffect(() => {
        if (!user && !loading) {
            navigate('/');
        }

    }, [user, navigate, loading])


    if (!user) {
        return <ErrorPage />;
    }

    return (
        <div className="container mx-auto mt-16">
            <h1 className="text-center text-4xl font-semibold">Change What you want</h1>
            <PostProject />
            <UpdateProject />
        </div>
    );
};

export default Dashboard;