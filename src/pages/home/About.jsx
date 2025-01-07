
import { useContext } from 'react';
import myImage from '../../assets/images/my-image.jpeg';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import { FaDownload } from 'react-icons/fa';

const About = () => {
    // const [allow, setAllow] = useState(false)

    const handleDownload = () => {
        const pdfUrl = "https://ams-porfolio.vercel.app/Abdullah-Muhammad-Siam-React.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.setAttribute("download", "abdullah_muhammad_siam_resume.pdf"); // Set the filename for download.
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up the DOM.
    };

    const auth = useContext(AuthContext);
    const { googleLogin, logOut, user } = auth;
    console.log(user);

    const handleGoogleLogin = () => {
        googleLogin();
        // setAllow(true);
    }
    const handleLogOut = () => {
        logOut();
        alert('something went wrong');
    };
    return (
        <div className="bg-zinc-900" id='about'>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-center pt-16 font-bold text-4xl text-[#00a4d6]">{user ? <a href='/dashboard' >About</a> : <button>About</button>} <button onClick={!user ? (() => handleGoogleLogin()) : (() => handleLogOut())}>Me</button> </h1>
                <hr className="pb-2" />
                <div className="text-white text-xl md:text-2xl flex flex-col-reverse md:flex-row justify-center items-center gap-8 mt-4 pb-12 mx-auto">
                    <div className='w-full px-4 md:px-1 md:ms-4'>
                        <ol>
                            <li className='font-semibold'> <span className='text-[#00a4d6]'>Nick Name:</span> Abdullah</li>
                            <li className='font-semibold'> <span className='text-[#00a4d6]'>DOB:</span> November, 2001</li>
                            <li className='font-semibold'> <span className='text-[#00a4d6]'>Nationality:</span> Bangladeshi</li>
                            <li className='font-semibold'> <span className='text-[#00a4d6]'>Available:</span> Remote</li>
                            <li className='font-semibold'> <span className='text-[#00a4d6]'>Language:</span> English, Bangla</li>
                            <li className='font-semibold'> <span className='text-[#00a4d6]'>Contact:</span> +8801637-271447</li>
                            <li className='font-semibold'> <span className='text-[#00a4d6]'>Skill:</span> Web Developer</li>
                            <li className='font-semibold text-wrap text-lg md:text-2xl'> <span className='text-[#00a4d6]'>Mail:</span>chat.abdullah.ms@gmail.com</li>
                        </ol>
                        <div className='mt-8 flex gap-4 w-11/12'>
                            <button onClick={() => handleDownload()} className=' animated-gradient w-1/2 btn btn-outline bg-[#00a4d6] text-lg text-black flex items-center gap-3'>Resume <FaDownload /></button>
                            <button onClick={() => handleDownload()} className=' animated-gradient w-1/2 btn btn-outline bg-[#00a4d6] text-lg text-black flex items-center gap-3'>My CV <FaDownload /></button>
                        </div>
                    </div>
                    <div className='w-full'>
                        <img className=' w-5/6 pb-5 pe-5 border-r-8 border-b-8 border-[#00a4d6] mx-auto border-dashed rounded-2xl' src={myImage} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;