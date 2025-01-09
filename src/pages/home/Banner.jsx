
import { Link } from 'react-router-dom';
import banner from '../../assets/banner/Designer.jpeg'
import Beeping from '../common/Beeping';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div id='top' className="h-screen bg-cover bg-center " style={{ backgroundImage: `url(${banner})` }}>
            <div className='bg-[#00a4d6] h-screen bg-opacity-90 flex flex-col justify-center items-center'>
                <h1 className='text-white text-4xl md:text-5xl font-bold ms-10'>Hello,  I`m <br /> <span className='text-white text-6xl md:text-7xl'>Abdullah Muhammad Siam</span></h1>
                <div className="ms-10 mb-7 flex items-center max-w-[280px] md:max-w-[870px] space-x-4 text-3xl md:text-5xl font-bold overflow-hidden">
                    <div className=" text-black animate-scroll flex space-x-8">
                        <span>Web Developer  ||</span>
                        <span>MERN Developer || </span>
                        <span>Full Stack Developer</span>
                    </div>
                </div>
                {/* <h1 className='text-black font-semibold text-3xl max-w-80 md:max-w-[870px] w-full ms-7 mt-8'>Find Me</h1> */}
                <div className='max-w-72 md:max-w-[870px] flex justify-evenly md:justify-start md:gap-4 w-full md:ms-7'>
                    <div>
                        <Link to={"https://github.com/abdullahMsiam"} target='_blank' className='btn btn-link p-0 text-3xl md:text-2xl text-black'> <FaGithub /> <span className='hidden md:block'>Github</span> </Link>
                    </div>
                    <div>
                        <Link to={"https://www.linkedin.com/in/abdullah-muhammad-siam"} target='_blank' className=' btn btn-link p-0 text-3xl md:text-2xl text-black'> <FaLinkedin /> <span className='hidden md:block'>LinkedIn</span> </Link>
                    </div>
                    <div>
                        <Link to={"https://x.com/Abdullah_M_Siam"} target='_blank' className='btn btn-link p-0 text-3xl md:text-2xl text-black'> <FaSquareXTwitter /> <span className='hidden md:block'>X-Twitter</span> </Link>
                    </div>

                </div>
                <div className='absolute bottom-3'>
                    <Beeping />
                </div>
            </div>
        </div>
    );
};

export default Banner;