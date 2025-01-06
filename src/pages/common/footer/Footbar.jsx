import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footbar = () => {
    return (
        <div className=" bg-black text-white pt-8 ">
            <footer className=" max-w-5xl footer flex items-center justify-evenly p-4 mx-auto">
                <aside className="grid-flow-col items-center">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Abdullah Muhammad Siam</p>
                </aside>
                <nav className="grid-flow-col gap-4 flex justify-center">
                    <div>
                        <Link to={"https://github.com/abdullahMsiam"} target='_blank' className='btn btn-link p-0 text-2xl text-white'> <FaGithub />  </Link>
                    </div>
                    <div>
                        <Link to={"https://www.linkedin.com/in/abdullah-muhammad-siam"} target='_blank' className=' btn btn-link p-0 text-2xl text-white'> <FaLinkedin />  </Link>
                    </div>
                    <div>
                        <Link to={"https://x.com/Abdullah_M_Siam"} target='_blank' className='btn btn-link p-0 text-2xl text-white'> <FaSquareXTwitter /> </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footbar;