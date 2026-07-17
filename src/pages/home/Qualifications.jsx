import { useEffect, useState } from "react";
import Qualification from "../common/Qualification";
import Loader from "../common/loader/Loader";

export default function Qualifications() {

    const [separatedCourses, setSeparatedCourses] = useState({});
    const [loading, setLoading] = useState(true);
    const { Academic, Course } = separatedCourses;
    // const {credentialLink, instituteName, major, place, skills, status, type} = Academic || {};

    // console.log(Academic); 

    const separateByType = (data) => {
        return data.reduce((acc, item) => {
            const type = item.type; // Extract the type
            if (!acc[type]) {
                acc[type] = []; // Initialize an array for this type if it doesn't exist
            }
            acc[type].push(item); // Add the item to the corresponding type array
            return acc;
        }, {}); // Start with an empty object
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch('https://portfolio-dusky-six-32.vercel.app/qualifications');
            const data = await response.json();
            // setCourses(data);
            const separated = separateByType(data);
            setSeparatedCourses(separated);
            setLoading(false);
        }
        fetchData();
    }, [])

    return (
        <div className="bg-zinc-900 text-white" id='education'>

            {
                loading ? <Loader /> :
                    <div className=" max-w-5xl mx-auto -mb-2">
                        <div className="px-4 md:px-0">
                            <h1 className="font-serif pt-16 pb-2 ps-1 text-lg md:text-2xl text-[#00a4d6]">— 05· Qualifications</h1>
                            <hr className="pb-2" />
                        </div>
                        <h1 className="mt-2 text-xl md:text-2xl font-semibold mb-1 ms-1 text-cyan-500">Academic Qualifications</h1>
                        <div className="max-w-2xl w-11/12 mx-auto relative border-l border-cyan-500/40 ml-4 space-y-10 ">
                            {Academic?.map((item, index) => (
                                <Qualification className="my-2" key={index} item={item} index={index} />
                            ))}
                        </div>

                        <h1 className="mt-10 ms-1 text-xl md:text-2xl font-semibold mb-1 text-cyan-500">Coursework</h1>
                        <div className="max-w-2xl w-11/12 mx-auto relative border-l border-cyan-500/40 ml-4 space-y-10">
                            {Course?.map((item, index) => (
                                <Qualification className="mb-2" key={index} item={item} index={index} />
                            ))}
                        </div>
                    </div>
            }
        </div>
    );
}


//     const [separatedCourses, setSeparatedCourses] = useState({});
//     const [loading, setLoading] = useState(true);
//     const separateByType = (data) => {
//         return data.reduce((acc, item) => {
//             const type = item.type; // Extract the type
//             if (!acc[type]) {
//                 acc[type] = []; // Initialize an array for this type if it doesn't exist
//             }
//             acc[type].push(item); // Add the item to the corresponding type array
//             return acc;
//         }, {}); // Start with an empty object
//     }


//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             const response = await fetch('https://portfolio-dusky-six-32.vercel.app/qualifications');
//             const data = await response.json();
//             // setCourses(data);
//             const separated = separateByType(data);
//             setSeparatedCourses(separated);
//             setLoading(false);
//         }
//         fetchData();
//     }, [])
//     return (
//         <div className="bg-zinc-900 text-white" id='education'>
//             {
//                 loading ? <Loader/> :
//                 <div className="max-w-5xl mx-auto">
//                 <h1 className="text-center pt-16 font-bold text-4xl text-[#00a4d6]">Qualification</h1>
//                 <hr className="pb-2" />

//                 {Object.keys(separatedCourses).map((type) => (
//                     <div className="px-5" key={type}>
//                         <h2 className="text-2xl mt-8">{type}</h2>
//                         <div className="grid md:grid-cols-2 gap-3 mt-3">
//                             {separatedCourses[type].map((course) => (
//                                 <Qualification key={course._id} course={course} />
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             }
//         </div>
//     );
// };

// export default Qualifications;