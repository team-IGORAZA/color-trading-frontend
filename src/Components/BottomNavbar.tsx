import { FaHome } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { CiDollar } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BottomNavbar() {
    const [selectedIcon, setSelectedIcon] = useState(0);
    const navigate = useNavigate();

    const navLinks = [
        { label: "Home", icon: <FaHome />, link: "/" },
        { label: "Promotion", icon: <GrAnnounce />, link: "/" },
        { label: "Wallet", icon: <CiDollar />, link: "/" },
        { label: "Account", icon: <MdOutlineAccountCircle />, link: "/" },
    ];

    const handleClick = (path: string, index: number) => {
        setSelectedIcon(index);
        navigate(path);
    };

    return (
        <nav className="flex fixed z-50 bottom-0 bottom-bg w-full h-16 items-center justify-between px-4">
            {navLinks.map((data, index) => (
                <div key={data.label} className="flex flex-col items-center ">
                    <button
                        onClick={() => handleClick(data.link, index)}
                        className={`${
                            index === selectedIcon
                                ? "bg-[#FF4D6E] -translate-y-4 shadow-lg"
                                : "text-white"
                        } p-2 rounded-full transition-all duration-300 ease-in-out`}
                    >
                        <span className={`text-2xl ${index === selectedIcon && "text-3xl"} text-white }`}>
                            {data.icon}
                        </span>
                    </button>
                    {index === selectedIcon && (
                        <span className="text-white font-bold">{data.label}</span>
                    )}
                </div>
            ))}
        </nav>
    );
}