import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Dashboard from "../assets/banner/images/skills-imgages/frontend/Dashboard";
import ErrorPage from "../pages/error/ErrorPage";
import Blogs from "../pages/blog/Blogs";
import SingleBlogPage from "../pages/blog/SingleBlogPage";
import ProjectPage from "../pages/projec/ProjectPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "*",
                element: <ErrorPage />
            },
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/projects",
                element: <ProjectPage />
            },
            {
                path: "/blogs/:id",
                element: <SingleBlogPage />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            }
        ]
    },
]);