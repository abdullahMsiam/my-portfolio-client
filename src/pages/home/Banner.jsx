
import { Link } from 'react-router-dom';
// import banner from '../../assets/banner/Designer.jpeg'
import banner from '../../assets/images/banner.png';
import Beeping from '../common/Beeping';
import { FaDownload, FaFacebook, FaFolderOpen, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Banner = () => {

    const handleDownload = () => {
        const pdfUrl = "https://ams-porfolio.vercel.app/Abdullah-Muhammad-Siam-React.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.setAttribute("download", "abdullah_muhammad_siam_resume.pdf"); // Set the filename for download.
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up the DOM.
    };

    return (
        <div id='top' className="h-[600px] md:h-screen bg-cover bg-center " style={{ backgroundImage: `url(${banner})` }}>
            <div className='bg-[#00a4d6]/70 md:bg-[#00a4d6]/95 h-screen '>
                <div className="max-w-5xl mx-auto h-full flex flex-col md:justify-center md:gap-4 ">
                    <h1 className='ms-2 md:ms-0 mt-24 md:mt-1  bg-cyan-500/40 text-black border-2 border-cyan-600 rounded-full w-fit px-5 py-0.5 inline-flex items-center gap-3 shadow-lg'>
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-700 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-700"></span>
                        </span>
                        <span className='text-sm md:text-lg font-semibold'>
                            Open to new opportunities
                        </span>
                    </h1>
                    <h1 className='text-white ms-3 text-xl md:text-3xl font-thin mt-7 md:mt-3'>Hello,  I`m <br /> <span className='text-white text-3xl font-semibold md:text-5xl '>Abdullah Muhammad Siam</span></h1>
                    <div className="mt-2 md:mt-1 flex items-center max-w-[280px] md:max-w-[870px] space-x-4 text-3xl md:text-5xl font-bold overflow-hidden
                    "
                    style={{ transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden' }}>
                        <div className=" text-black animate-scroll flex space-x-8 ">
                            <span>Web Developer  ||</span>
                            <span>MERN Developer || </span>
                            <span>Software Engineer</span>
                        </div>
                    </div>
                    <div className='mt-10 md:mt-10 flex flex-col md:flex-row gap-4 w-11/12 mx-auto md:mx-0'>
                        <button onClick={() => handleDownload()} className=' animated-gradient btn btn-outline border-none bg-[#00a4d6] text-md md:px-10 text-black hover:shadow-lg hover:shadow-black flex items-center gap-3'>
                            <FaDownload />Download Resume
                        </button>
                        <Link to={"/projects"} className='btn btn-md btn-outline rounded-lg border-none text-md md:px-10 bg-slate-900 text-white hover:shadow-lg hover:shadow-black flex items-center gap-3'>
                            <FaFolderOpen /> View Projects
                        </Link>
                    </div>
                    {/* <h1 className='text-black font-semibold text-3xl max-w-80 md:max-w-[870px] w-full ms-7 mt-8'>Find Me</h1> */}
                    <div className='mt-7 md:mt-4 md:max-w-[870px] flex justify-evenly md:justify-start md:gap-4 w-full'>
                        <div>
                            <Link to={"https://github.com/abdullahMsiam"} target='_blank' className='btn btn-link p-0 text-3xl md:text-2xl text-black hover:text-green-950 hover:-translate-y-1'> <FaGithub /> <span className='hidden md:block'>Github</span> </Link>
                        </div>
                        <div>
                            <Link to={"https://www.linkedin.com/in/abdullah-muhammad-siam"} target='_blank' className=' btn btn-link p-0 text-3xl md:text-2xl text-black hover:text-green-950 hover:-translate-y-1'> <FaLinkedin /> <span className='hidden md:block'>LinkedIn</span> </Link>
                        </div>
                        <div>
                            <Link to={"https://x.com/Abdullah_M_Siam"} target='_blank' className='btn btn-link p-0 text-3xl md:text-2xl text-black hover:text-green-950 hover:-translate-y-1'> <FaSquareXTwitter /> <span className='hidden md:block'>X-Twitter</span> </Link>
                        </div>
                        <div>
                            <Link to={"https://www.facebook.com/abdullah.muhammadsiam.7/"} target='_blank' className='btn btn-link p-0 text-3xl md:text-2xl text-black hover:text-green-950 hover:-translate-y-1'> <FaFacebook /> <span className='hidden md:block'>Facebook</span> </Link>
                        </div>

                    </div>
                    
                    <div className=' absolute bottom-5 left-0 w-full h-16 hidden md:block '>
                        <Beeping />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;