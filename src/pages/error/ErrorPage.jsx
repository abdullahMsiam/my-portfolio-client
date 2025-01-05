import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-800 text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold">Oops!</h1>
                <p className="mt-4 text-xl">Something went wrong or the page was not found.</p>
                <p className="mt-4 text-lg">Error Code: 404</p>
                <Link
                    to="/"
                    className="mt-6 px-6 py-2 text-lg bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
