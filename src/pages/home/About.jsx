
// import { useContext } from 'react';
// import myImage from '../../assets/images/my-image.jpeg';
// import { AuthContext } from '../../AuthProviders/AuthProvider';
import { FaDownload } from 'react-icons/fa';
import myImage from '../../assets/images/abdullah2.png';

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

    // const auth = useContext(AuthContext);
    // const { googleLogin, logOut, user } = auth;

    // const handleGoogleLogin = () => {
    //     googleLogin();
    //     // setAllow(true);
    // }
    // const handleLogOut = () => {
    //     logOut();
    //     alert('something went wrong');
    // };



    const profileInfo = [
        { label: 'NICKNAME', value: 'Abdullah' },
        { label: 'NATIONALITY', value: 'Bangladeshi' },
        { label: 'AVAILABLE', value: 'Remote/On-Site' },
        { label: 'LANGUAGES', value: 'English, Bangla' },
        { label: 'FOCUS', value: 'Web Development' },
        { label: 'EMAIL', value: 'abdullah.siam.chat@gmail.com' },
    ];

    return (
        <div className="bg-zinc-900 -mb-2" id='about'>
            <div className="max-w-5xl mx-auto">
                {/* <h1 className="font-serif pt-16 pb-2 ps-1 text-lg md:text-2xl text-[#00a4d6]">{user ? <a href='/dashboard' >— 02· About</a> : <button>— 02· About</button>} <button onClick={!user ? (() => handleGoogleLogin()) : (() => handleLogOut())}>Me</button> </h1> */}
                <div className="max-w-5xl mx-auto px-4 md:px-0">
                    <h1 className="font-serif pt-16 pb-2 ps-1 text-lg md:text-2xl text-[#00a4d6]">— 02· About</h1>
                    <hr className="pb-2" />
                </div>
                <div className="text-white text-xl md:text-2xl flex flex-col-reverse md:flex-row justify-center
                 gap-8 mt-4 pb-12 mx-auto
                max-w-5xl w-full lg:gap-12 items-start
                ">
                    <div className='flex-1 w-full px-4 md:px-1 md:ms-4'>
                        <div className="">
                            {/* Bio Paragraph */}
                            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-normal max-w-3xl text-justify">
                                B.Sc. Engineering student and full-stack developer focused on the MERN stack.
                                I like building complete systems — from database schema to responsive UI —
                                and I`m currently deepening my backend skills with TypeScript and PostgreSQL.
                            </p>

                            {/* Info Details Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
                                {profileInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        className="border-b border-slate-800/70 pb-3 flex flex-col justify-end min-h-[60px]"
                                    >
                                        <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-1.5">
                                            {info.label}
                                        </span>
                                        <span className="text-white text-sm sm:text-base font-medium tracking-wide">
                                            {info.label === 'EMAIL' ? (
                                                <a
                                                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${info.value}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-cyan-400 transition-colors duration-200 break-all"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                info.value
                                            )}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='mt-2 flex gap-4'>
                            <button onClick={() => handleDownload()} className=' animated-gradient w-full btn btn-sm md:btn-md btn-outline border-cyan-600 bg-[#00a4d6] text-md md:text-lg flex items-center gap-3
                            hover:shadow hover:shadow-black'> <FaDownload /> Resume</button>
                        </div>

                    </div>
                    <div className="w-full md:max-w-80">
                        <div className="w-5/6 mx-auto md:w-full aspect-square rounded-2xl border border-slate-800 bg-[#051422] flex items-center justify-center p-2 relative overflow-hidden group hover:border-slate-700 transition-colors duration-300">
                            {/* Replace the src path below with your actual image file */}
                            <img
                                src={myImage}
                                alt="Profile"
                                className=" w-full h-full object-cover rounded-xl opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                onError={(e) => {
                                    // Hides the broken icon fallback gracefully if image fails to load
                                    e.target.style.display = 'none';
                                }}
                            />
                            {/* Subtle background glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;