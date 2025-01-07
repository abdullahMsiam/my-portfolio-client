import { FaDatabase, FaJava, FaTools } from 'react-icons/fa'
import api from '../../assets/skills/api.png'
import bootstrap from '../../assets/skills/bootstrap.png'
import cc from '../../assets/skills/c-.png'
import css from '../../assets/skills/css.png'
import figma from '../../assets/skills/figma.png'
import firebase from '../../assets/skills/firebase.png'
import github from '../../assets/skills/github-sign.png'
import html from '../../assets/skills/html.png'
import javascript from '../../assets/skills/java-script.png'
import javaScript from '../../assets/skills/javascript.png'
import mongodb from '../../assets/skills/mongodb.png'
import nextJs from '../../assets/skills/nextjs.jpg'
import nodeJs from '../../assets/skills/nodejs.png'
import react from '../../assets/skills/react.png'
import router from '../../assets/skills/router.png'
import tailwind from '../../assets/skills/tailwind.png'
import typescript from '../../assets/skills/typescript.png'
import ShowBtn from '../common/ShowBtn'
import vercel from '../../assets/skills/Vercel.svg'
import dbms from '../../assets/skills/dbms.png'
import postgresSql from '../../assets/skills/elephant.png'
import mongoose from '../../assets/skills/mongoose.png'
import redux from '../../assets/skills/redux.svg'
import sql from '../../assets/skills/SQL.png'
import vs from '../../assets/skills/vs.png'

import { BsTvFill } from 'react-icons/bs'

const Skills = () => {
    return (
        <div className="bg-zinc-900 pb-2 text-white" id='skills'>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-center pt-16 font-bold text-4xl text-[#00a4d6]">My Skills</h1>
                <hr className="pb-2" />
                {/* Main content */}
                <div className="mt-6 mx-5">
                    <div className='grid md:grid-cols-2 gap-3'>
                        {/* skill */}
                        <div className="border-2 border-white border-opacity-25 p-2 py-3 skills-gradient mb-1 rounded-md">
                            <h1 className="text-xl font-bold flex items-center gap-2 mb-3"><FaDatabase className='text-green-300' /> Backend Development</h1>
                            <div className='flex flex-wrap gap-1 justify-evenly'>
                                <ShowBtn img={nodeJs} title='NodeJs' />
                                <ShowBtn img={typescript} title={'Typescript'} />
                                <ShowBtn img={javaScript} title={'ExpressJS'} />
                                <ShowBtn img={mongodb} title={'MongoDB'} />
                                <ShowBtn img={api} title={'Rest Api'} />
                                <ShowBtn img={mongoose} title={'Mongoose'} />
                                <ShowBtn img={sql} title={'SQL'} />
                                <ShowBtn img={postgresSql} title={'PostgresSQL'} />
                                <ShowBtn img={dbms} title={'DBMS'} />
                            </div>
                        </div>
                        {/* skill */}
                        <div className="border-2 border-white border-opacity-25 p-2 py-3 skills-gradient mb-1 rounded-md">
                            <h1 className="text-xl font-bold flex items-center gap-2 mb-3"><BsTvFill className='text-red-400' />Frontend Development</h1>
                            <div className='flex flex-wrap gap-1 justify-evenly'>
                                <ShowBtn img={react} title='ReactJs' />
                                <ShowBtn img={nextJs} title='NextJs' />
                                <ShowBtn img={redux} title={'Redux'} />
                                <ShowBtn img={router} title={'Router'} />
                                <ShowBtn img={html} title={'HTML5'} />
                                <ShowBtn img={css} title={'CSS3'} />
                                <ShowBtn img={tailwind} title={'Tailwind'} />
                                <ShowBtn img={bootstrap} title={'Bootstrap'} />
                            </div>
                        </div>
                        {/* skill */}
                        <div className="border-2 border-white border-opacity-25 p-2 py-3 skills-gradient mb-1 rounded-md">
                            <h1 className="text-xl font-bold flex items-center gap-2 mb-3"><FaJava className='text-red-400' />Programming Languages</h1>
                            <div className='flex flex-wrap gap-1 justify-evenly md:justify-normal'>
                                <ShowBtn img={javascript} title='Javascript' />
                                <ShowBtn img={typescript} title='Typescript' />
                                <ShowBtn img={cc} title={'c program'} />
                            </div>
                        </div>
                        {/* skill */}
                        <div className="border-2 border-white border-opacity-25 p-2 py-3 skills-gradient mb-1 rounded-md">
                            <h1 className="text-xl font-bold flex items-center gap-2 mb-3"><FaTools className='text-yellow-400' />Tools and Tech</h1>
                            <div className='flex flex-wrap gap-1 justify-evenly'>
                                <ShowBtn img={github} title='Github' />
                                <ShowBtn img={vercel} title='Vercel' />
                                <ShowBtn img={figma} title='Figma' />
                                <ShowBtn img={firebase} title='Firebase' />
                                <ShowBtn img={vs} title='VS code' />
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;