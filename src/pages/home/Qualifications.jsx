import { useEffect, useState } from "react";
import Qualification from "../common/Qualification";

const Qualifications = () => {
    // const [courses, setCourses] = useState([])
    const [separatedCourses, setSeparatedCourses] = useState({});
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
            const response = await fetch('http://localhost:3000/qualifications');
            const data = await response.json();
            // setCourses(data);
            const separated = separateByType(data);
            setSeparatedCourses(separated);

        }
        fetchData();
    }, [])
    return (
        <div className="bg-zinc-900 text-white" id='education'>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-center pt-16 font-bold text-4xl text-[#00a4d6]">Qualification</h1>
                <hr className="pb-2" />

                {Object.keys(separatedCourses).map((type) => (
                    <div className="px-5" key={type}>
                        <h2 className="text-2xl mt-8">{type}</h2>
                        <div className="grid md:grid-cols-2 gap-3 mt-3">
                            {separatedCourses[type].map((course) => (
                                <Qualification key={course._id} course={course} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Qualifications;