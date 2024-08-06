import { FaHome } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { CiDollar } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import "./BottomNavbar.css"

export default function BottomNavbar() {
    const [selectedIcon, setSelectedIcon] = useState("/home");
    const navigate = useNavigate();
    // TODO Need to change the ui exactly same to the figma
    const navLinks = [
        { label: "Home", icon: <FaHome />, link: "/home" },
        { label: "Promotion", icon: <GrAnnounce />, link: "" },
        { label: "Wallet", icon: <CiDollar />, link: "/" },
        { label: "Account", icon: <MdOutlineAccountCircle />, link: "/profile" },
    ];

    const handleClick = (path: string) => {
        setSelectedIcon(path);
        navigate(path);
    };

    return (
        <nav 
        style={{background: "linear-gradient(88.25deg, #4B0082 44.55%, #10001C 98.52%)"}}
        className="flex fixed z-50 bottom-0 bottom-bg w-full h-16  items-center justify-between px-4">
            {navLinks.map((data) => (
                <div key={data.label} className="flex flex-col items-center">
                    <motion.button
                        onClick={() => handleClick(data.link)}
                        initial={{ y: 0 }}
                        animate={data.link === selectedIcon ? { y: -16, scale: 1.2 } : { y: 0, scale: 1 }}
                        // transition={{ type: "spring", stiffness: 600 }}
                        className={`${
                            data.link === selectedIcon
                                ? "bg-[#1f2c62] shadow-lg"
                                : "bg-transparent"
                        } p-2 rounded-full transition-all duration-300 ease-in-out`}
                    >
                        <motion.span className={`text-2xl ${data.link === selectedIcon ? "text-3xl" : ""} text-white`}>
                            {data.icon}
                        </motion.span>
                    </motion.button>
                    {data.link === selectedIcon && (
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
