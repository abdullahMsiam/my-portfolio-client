import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Dashboard from "../assets/banner/images/skills-imgages/frontend/Dashboard";
import ErrorPage from "../pages/error/ErrorPage";

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
                path: "/dashboard",
                element: <Dashboard />
            }
        ]
    },
]);