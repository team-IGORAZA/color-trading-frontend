import { FaHome } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { CiDollar } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

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
        <nav className="flex fixed z-50 bottom-0 bottom-bg w-full h-16 items-center justify-between px-4 bg-gradient-to-r from-purple-400 to-pink-500">
            {navLinks.map((data, index) => (
                <div key={data.label} className="flex flex-col items-center">
                    <motion.button
                        onClick={() => handleClick(data.link, index)}
                        initial={{ y: 0 }}
                        animate={index === selectedIcon ? { y: -16, scale: 1.2 } : { y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`${
                            index === selectedIcon
                                ? "bg-[#FF4D6E] shadow-lg"
                                : "bg-transparent"
                        } p-2 rounded-full transition-all duration-300 ease-in-out`}
                    >
                        <motion.span className={`text-2xl ${index === selectedIcon ? "text-3xl" : ""} text-white`}>
                            {data.icon}
                        </motion.span>
                    </motion.button>
                    {index === selectedIcon && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="text-white font-bold"
                        >
                            {data.label}
                        </motion.span>
                    )}
                </div>
            ))}
        </nav>
    );
}
