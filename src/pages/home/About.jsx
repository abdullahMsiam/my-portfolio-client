
import { useContext } from 'react';
import myImage from '../../assets/images/my-image.jpeg';
import { AuthContext } from '../../AuthProviders/AuthProvider';

const About = () => {
    // const [allow, setAllow] = useState(false)

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
        <div className="bg-black" id='about'>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-center pt-16 font-bold text-4xl text-[#00a4d6]">{user ? <a href='/dashboard' >About</a> : <button>About</button>} <button onClick={!user ? (() => handleGoogleLogin()) : (() => handleLogOut())}>Me</button> </h1>
                <hr className="pb-2" />
                <div className="text-white text-2xl flex flex-col-reverse md:flex-row justify-center items-center gap-8 mt-4 pb-12 mx-auto">
                    <div className='w-full mx-1'>
                        <ol>
                            <li className='font-semibold'> <span className='text-[#00a4d6]'>Name:</span> Abdullah Muhammad Siam</li>
                            <li className='font-semibold'> <span className='text-[#00a4d6]'>DOB:</span> November, 2001</li>
                            <li className='font-semibold'> <span className='text-[#00a4d6]'>Nationality:</span> Bangladeshi</li>
                            <li className='font-semibold'> <span className='text-[#00a4d6]'>Available:</span> Remote</li>
                            <li className='font-semibold'> <span className='text-[#00a4d6]'>Language:</span> English, Bangla</li>
                            <li className='font-semibold'> <span className='text-[#00a4d6]'>Contact:</span> +8801637-271447</li>
                            <li className='font-semibold'> <span className='text-[#00a4d6]'>Skill:</span> Web Developer</li>
                            <li className='font-semibold text-wrap text-lg md:text-2xl'> <span className='text-[#00a4d6]'>Mail:</span>abdullahmuhammadsiam99@gmail.com</li>
                        </ol>
                        <div className='mt-6 flex gap-4 w-11/12'>
                            <button className=' animated-gradient w-1/2 btn btn-outline bg-[#00a4d6] text-lg text-black'>Resume</button>
                            <button className=' animated-gradient w-1/2 btn btn-outline bg-[#00a4d6] text-lg text-black'>My CV</button>
                        </div>
                    </div>
                    <div className='w-full'>
                        <img className=' w-5/6 pb-6 pe-8 border-r-8 border-b-8 border-[#00a4d6] mx-auto border-dashed rounded-2xl' src={myImage} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;