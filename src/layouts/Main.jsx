import { Outlet } from "react-router-dom";
import Footbar from "../pages/common/footer/Footbar";
import TopNav from "../pages/common/navbar/TopNav";

const Main = () => {
    return (
        <div className="font-mono">
            <TopNav />
            <Outlet />
            <Footbar />
        </div>
    );
};

export default Main;