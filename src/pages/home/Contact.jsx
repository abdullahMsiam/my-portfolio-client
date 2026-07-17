import { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Contact() {
    // State to monitor which section is copied
    const [copiedId, setCopiedId] = useState(null);

    const handleCopy = (e, id, value) => {
        e.preventDefault(); // Blocks parent trigger on link boxes
        e.stopPropagation();
        navigator.clipboard.writeText(value);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <section className="bg-zinc-900 text-white " id="contact">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-2">
                {/* HEADER SECTION */}
                <div className=" mb-12 space-y-3">
                    <h1 className="font-serif pt-16 pb-2 ps-1 text-lg md:text-2xl text-[#00a4d6]">— 07· Connect</h1>
                    <hr className="pb-2" />

                    <p className="text-slate-400 text-sm md:text-base font-normal max-w-xl leading-relaxed">
                        Pick whichever way`s easiest for you — every card here opens the right app automatically.
                    </p>
                </div>

                {/* THREE-COLUMN CARDS GRID */}
                <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

                    {/* EMAIL CARD (Highlighted Active State) */}
                    <a
                        href="mailto:chat.abdullah.ms@gmail.com"
                        className="relative block text-left bg-[#040f12] hover:bg-cyan-500/20 rounded-2xl p-6 shadow-lg shadow-cyan-500/5 group transform-gpu hover:-translate-y-1 transition-all duration-200 ease-out"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                                {/* Mail Icon */}
                                <FaEnvelope className="w-6 h-6" />
                            </div>
                            <div className="flex items-center gap-2">
                                <a
                                    href="mailto:chat.abdullah.ms@gmail.com"
                                    className="text-[11px] font-bold text-cyan-400 tracking-wider flex items-center gap-1 group-hover:underline">
                                    opens mail
                                </a>

                                <p className="text-xs font-bold text-slate-500 tracking-wider">OR</p>

                                {/* COPY TRIGGER */}
                                <button
                                    onClick={(e) => handleCopy(e, 'email', 'abdullah.siam.chat@gmail.com')}
                                    className=" px-1 text-sm rounded-md bg-slate-800/40 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/50 transition-colors duration-150"
                                    title="Copy Email"
                                >
                                    {/* {copiedId === 'email' ? <FaCheck className="w-3 h-3 text-emerald-400" /> : <FaRegCopy className="w-3 h-3" />} */}
                                    {copiedId === 'email' ? <p className="text-emerald-400"> Copied</p> : <p className="text-rose-400/70">Copy</p>}
                                </button>
                            </div>
                        </div>
                        <span className="block text-xs font-bold text-slate-500 tracking-widest uppercase mb-1">
                            Email
                        </span>
                        <span className="block text-lg font-semibold text-white break-all tracking-wide">
                            abdullah.siam.chat@gmail.com
                        </span>
                    </a>

                    {/* WHATSAPP CARD */}
                    <a
                        href="https://wa.me/8801637271447"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block text-left bg-[#040f12] hover:bg-green-900/20 rounded-2xl p-6 shadow-lg shadow-cyan-500/5 group transform-gpu hover:-translate-y-1 transition-all duration-200 ease-out"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-green-400">
                                {/* WHATSAPP Icon */}
                                <FaWhatsapp className="w-6 h-6" />
                            </div>
                            <div className="flex items-center gap-2">
                                <a
                                    href="https://wa.me/8801637271447"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[11px] font-bold text-green-400 tracking-wider flex items-center gap-1 group-hover:underline"
                                >
                                    opens whatsapp
                                </a>

                                <p className="text-xs font-bold text-slate-500 tracking-wider">OR</p>

                                {/* COPY TRIGGER */}
                                <button
                                    onClick={(e) => handleCopy(e, 'whatsapp', '+880 1637-271447')}
                                    className="px-1 text-sm rounded-md bg-slate-800/40 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/50 transition-colors duration-150"
                                    title="Copy WhatsApp Number"
                                >
                                    {copiedId === 'whatsapp' ? <p className="text-emerald-400"> Copied</p> : <p className="text-rose-400/70">Copy</p>}
                                </button>
                            </div>
                        </div>
                        <span className="block text-xs font-bold text-slate-500 tracking-widest uppercase mb-1">
                            WhatsApp
                        </span>
                        <span className="block text-lg font-semibold text-white break-all tracking-wide">
                            +880 1637-271447
                        </span>
                    </a>

                    {/* PHONE CARD */}
                    <a
                        href="tel:+8801637271447"
                        className="relative block text-left bg-[#040f12] hover:bg-rose-400/10 rounded-2xl p-6 shadow-lg shadow-cyan-500/5 group transform-gpu hover:-translate-y-1 transition-all duration-200 ease-out"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-rose-400">
                                {/* Phone Icon */}
                                <FaPhone className="w-6 h-6" />
                            </div>
                            <div className="flex items-center gap-2">
                                <a
                                    href="tel:+8801637271447"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[11px] font-bold text-rose-400 tracking-wider flex items-center gap-1 group-hover:underline"
                                >
                                    opens phone
                                </a>

                                <p className="text-xs font-bold text-slate-500 tracking-wider">OR</p>

                                {/* COPY TRIGGER */}
                                <button
                                    onClick={(e) => handleCopy(e, 'phone', '+880 1637-271447')}
                                    className="px-1 text-sm rounded-md bg-slate-800/40 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/50 transition-colors duration-150"
                                    title="Copy Phone Number"
                                >
                                    {copiedId === 'phone' ? <p className="text-emerald-400"> Copied</p> : <p className="text-rose-400/70">Copy</p>}
                                </button>
                            </div>
                        </div>
                        <span className="block text-xs font-bold text-slate-500 tracking-widest uppercase mb-1">
                            Phone
                        </span>
                        <span className="block text-lg font-semibold text-white break-all tracking-wide">
                            +880 1637-271447
                        </span>
                    </a>

                </div>

                {/* MIDDLE DIVIDER OR FIND ME ON */}
                <div className="w-full max-w-4xl mx-auto flex items-center justify-center my-8 select-none">
                    <div className="flex-grow h-[1px] bg-slate-800/60"></div>
                    <span className="px-4 text-[10px] font-bold text-slate-500 tracking-[0.25em] uppercase whitespace-nowrap">
                        Or Find Me On
                    </span>
                    <div className="flex-grow h-[1px] bg-slate-800/60"></div>
                </div>

                {/* ROUND SOCIAL LINK BUBBLES */}
                <div className="flex items-center gap-4 mb-12 justify-center">
                    <a href="https://github.com/abdullahMsiam" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-slate-800 bg-[#131c2e]/40 hover:bg-[#131c2e] text-slate-300 hover:text-white flex items-center justify-center font-bold text-sm tracking-wide shadow-sm hover:-translate-y-0.5 transition-all duration-200">
                        <FaGithub className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/abdullah-muhammad-siam" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-slate-800 bg-[#131c2e]/40 hover:bg-[#131c2e] text-slate-300 hover:text-white flex items-center justify-center font-bold text-sm tracking-wide shadow-sm hover:-translate-y-0.5 transition-all duration-200">
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="https://x.com/Abdullah_M_Siam" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-slate-800 bg-[#131c2e]/40 hover:bg-[#131c2e] text-slate-300 hover:text-white flex items-center justify-center font-bold text-sm tracking-wide shadow-sm hover:-translate-y-0.5 transition-all duration-200">
                        <FaX className="w-5 h-5" />
                    </a>
                </div>

                {/* FOOTER REPLY INDICATOR */}
                <div className="flex items-center justify-center gap-2.5 select-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 opacity-90 animate-pulse shadow-sm shadow-emerald-400/40"></span>
                    <span className="text-xs text-slate-500 tracking-wide font-medium">
                        Usually replies within a day
                    </span>
                </div>
            </div>

        </section>
    );
}