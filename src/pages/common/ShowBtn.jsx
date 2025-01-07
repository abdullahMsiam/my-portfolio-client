/* eslint-disable react/prop-types */


const ShowBtn = ({ img, title }) => {
    return (
        <div className="w-28 overflow-hidden flex justify-around text-black items-center gap-2 bg-[#00a4d6] bg-opacity-80 p-1 rounded-md border-2 border-white border-opacity-30">
            <p className="text-sm font-bold">{title}</p>
            <img className="w-4" src={img} alt="" />
        </div>
    );
};

export default ShowBtn;