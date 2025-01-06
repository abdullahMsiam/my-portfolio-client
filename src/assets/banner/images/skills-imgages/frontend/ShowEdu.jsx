/* eslint-disable react/prop-types */

import { useState } from "react";

const ShowEdu = ({ qualification }) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [isCreate, setIsCreate] = useState(false);

    const { credentialLink, type, instituteName, major, place, skills, status, title } = qualification;
    console.log(credentialLink, type, instituteName, major, place, skills, status, title);

    const handleUpdate = () => { setIsUpdate(true); }
    const handleDelete = () => { setIsDelete(true); }
    const handleCreate = () => { setIsCreate(true); }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const credentialLink = form.credentialLink.value || null;
        const instituteName = form.instituteName.value;
        const type = form.type.value;
        const major = form.major.value;
        const place = form.place.value;
        const skills = form.skills.value.split(",");
        const status = form.status.value;

        const demandQualification = { credentialLink, type, instituteName, major, place, skills, status };

        console.log(demandQualification);
        // -----------------create qualification-----------------
        if (isCreate) {
            try {
                const response = await fetch('http://localhost:3000/qualifications', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(demandQualification)
                });
                const data = await response.json();
                if (data) {
                    alert('Qualification Created Successfully');
                } else {
                    alert('Failed to create qualification');
                }
            } catch (error) {
                console.log(error);
                alert('Failed to create qualification');
            }
        }

        // -----------------update qualification-----------------
        if (isUpdate) {
            try {
                const response = await fetch(`http://localhost:3000/qualifications/${qualification._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(demandQualification)
                });
                const data = await response.json();
                if (data) {
                    alert('Qualification Updated Successfully');
                } else {
                    alert('Failed to update qualification');
                }
            } catch (error) {
                console.log(error);
                alert('Failed to update qualification');
            }
        }

        // -----------------delete qualification-----------------
        if (isDelete) {
            try {
                const response = await fetch(`http://localhost:3000/qualifications/${qualification._id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(demandQualification)
                });
                const data = await response.json();
                if (data) {
                    alert('Qualification Deleted Successfully');
                } else {
                    alert('Failed to delete qualification');
                }
            } catch (error) {
                console.log(error);
                alert('Failed to delete qualification');
            }
        }
    }

    return (
        <div className="border p-2 my-2 bg-red-200 bg-opacity-50 text-white">
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="credentialLink">Credential Link</label>
                    <input type="text" name="credentialLink" id="credentialLink" defaultValue={credentialLink} className="border-2 w-full" />
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <input type="text" name="type" id="type" defaultValue={type} className="border-2 w-full" />
                </div>
                <div>
                    <label htmlFor="instituteName">Institute Name</label>
                    <input type="text" name="instituteName" id="instituteName" defaultValue={instituteName} className="border-2 w-full" />
                </div>
                <div>
                    <label htmlFor="major">Major</label>
                    <input type="text" name="major" id="major" defaultValue={major} className="border-2 w-full" />
                </div>
                <div>
                    <label htmlFor="place">Place</label>
                    <input type="text" name="place" id="place" defaultValue={place} className="border-2 w-full" />
                </div>
                <div>
                    <label htmlFor="skills">Skills</label>
                    <input type="text" name="skills" id="skills" defaultValue={skills.join(",")} className="border-2 w-full" />
                </div>
                <div>
                    <label htmlFor="status">Status</label>
                    <input type="text" name="status" id="status" defaultValue={status} className="border-2 w-full mb-4" />
                </div>
                <button onClick={handleUpdate} type="submit" className="bg-yellow-400 text-black p-2">Update Edu</button>
                <button onClick={handleCreate} type="submit" className="bg-green-800 text-white p-2 ms-3">Create Edu</button>
                <button onClick={handleDelete} type="submit" className="bg-red-800 text-white p-2 ms-3">Delete Edu</button>
            </form>
        </div>
    );
};

export default ShowEdu;