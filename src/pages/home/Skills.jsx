import img1 from '../../assets/skills/api.png'
import img2 from '../../assets/skills/bootstrap.png'
import img3 from '../../assets/skills/c-.png'
import img4 from '../../assets/skills/css.png'
import img5 from '../../assets/skills/figma.png'
import img6 from '../../assets/skills/firebase.png'
import img7 from '../../assets/skills/github-sign.png'
import img8 from '../../assets/skills/html.png'
import img9 from '../../assets/skills/java-script.png'
import img10 from '../../assets/skills/javascript.png'
import img11 from '../../assets/skills/mongodb.png'
import img12 from '../../assets/skills/nextjs.jpg'
import img13 from '../../assets/skills/nodejs.png'
import img14 from '../../assets/skills/react.png'
import img15 from '../../assets/skills/router.png'
import img16 from '../../assets/skills/tailwind.png'
import img17 from '../../assets/skills/typescript.png'

const Skills = () => {
    return (
        <div className="bg-zinc-900 text-white" id='skills'>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-center pt-16 font-bold text-4xl text-[#00a4d6]">My Skills</h1>
                <hr className="pb-2" />
                {/* Main content */}
                <div className="flex justify-around md:gap-8 ">
                    <div className='w-11/12 md:w-1/2 ms-1 md:ms-6'>
                        <h1 className="text-2xl font-semibold mb-2 md:-ms-4">Frontend and Tools</h1>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">1.Javascript</p>
                            <img className='w-8' src={img9} alt="" />
                        </div>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">2.Typescript</p>
                            <img className='w-8' src={img17} alt="" />
                        </div>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">3.HTML-5</p>
                            <img className='w-8' src={img8} alt="" />
                        </div>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">4.CSS-3</p>
                            <img className='w-8' src={img4} alt="" />
                        </div>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">5.ReactJS</p>
                            <img className='w-8' src={img14} alt="" />
                        </div>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">6.React Router</p>
                            <img className='w-8' src={img15} alt="" />
                        </div>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">7.Bootstrap</p>
                            <img className='w-8' src={img2} alt="" />
                        </div>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">8.Tailwind</p>
                            <img className='w-8' src={img16} alt="" />
                        </div>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">9.Figma</p>
                            <img className='w-8' src={img5} alt="" />
                        </div>


                    </div>
                    <div className='w-11/12 md:w-1/2 md:ms-2'>
                        <h1 className="text-2xl font-semibold mb-2 md:-ms-4">Backend and Tools</h1>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">1.NodeJS</p>
                            <img className='w-8' src={img13} alt="" />
                        </div>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">2.ExpressJS</p>
                            <img className='w-8' src={img10} alt="" />
                        </div>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">3.Rest API</p>
                            <img className='w-8' src={img1} alt="" />
                        </div>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">4.C program</p>
                            <img className='w-8' src={img3} alt="" />
                        </div>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">5.MongoDB</p>
                            <img className='w-8' src={img11} alt="" />
                        </div>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">6.Firebase</p>
                            <img className='w-8' src={img6} alt="" />
                        </div>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">7.GitHub</p>
                            <img className='w-8' src={img7} alt="" />
                        </div>
                        {/* skill */}
                        <div className="border-2 p-1 w-11/12 flex justify-between skills-gradient mb-1">
                            <p className="text-xl">8.NextJS</p>
                            <img className='w-8' src={img12} alt="" />
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;