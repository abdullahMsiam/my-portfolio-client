/* eslint-disable react/prop-types */

import { FaExternalLinkAlt } from "react-icons/fa";

const Qualification = ({ item, index }) => {
    // const { credentialLink, instituteName, major, place, skills, status, type } = course;
    return (
        <div key={index} className="relative pl-8 group">
            {/* Timeline Node / Circle */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#030d16] border-2 border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] z-10" />

            {/* Status and Category Header */}
            <div className="flex items-center gap-2 text-xs font-medium mb-1.5 tracking-wide">
                {
                    item.status == "Running" ? (
                        <>
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                            <span className="text-cyan-400 font-semibold">{item.status}</span>
                        </>
                    ) : (
                        <>
                            <span className="text-emerald-400 text-[10px]">✓</span>
                            <span className="text-emerald-400 font-semibold">completed</span>
                        </>
                    )
                }
                <span className="text-slate-500">—</span>
                <span className="text-slate-500 font-normal">{item.category}</span>
            </div>

            {/* Qualification Title */}
            <h3 className="text-white text-lg font-bold tracking-tight mb-1 group-hover:text-cyan-400 transition-colors duration-200">
                {item.major}
            </h3>
            {/* Institute Name and Location */}
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-1 flex-wrap *:first-letter:capitalize">
                <span>{item.instituteName}</span>
                <span>—</span>
                <span>{item.place}</span>
            </div>
            {/* Credential Link */}
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                {item.credentialLink && (
                    <a
                        href={item.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                        <FaExternalLinkAlt className="text-xs" />
                        View Credential
                    </a>
                )}
            </div>

            {/* Skills */}
            
            <p className="text-sm text-slate-400 font-medium *:first-letter:capitalize">
                {item.skills && item.skills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-cyan-900 text-cyan-300 text-xs px-2 py-1 rounded">
                                {skill}
                            </span>
                        ))}
                    </div>
                ) : null}
            </p>
        </div>
    );
};

export default Qualification;