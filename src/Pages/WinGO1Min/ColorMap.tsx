import React from "react";
import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../../constants";


interface ColorMapProps {
    setUserSelectedColorID: React.Dispatch<React.SetStateAction<string>>
}

const ColorMap: React.FC<ColorMapProps> = ({ setUserSelectedColorID }) => {
    const accessToken = localStorage.getItem('accessToken');

    const getColors = async () => {
        try {
            const req = await axios.get(`${BACKEND_URL}/api/v1/color`, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            console.log(req.data.response);
        } catch (error) {
            console.error("Error fetching colors:", error);
        }
    }


    useEffect(() => {
        getColors()
    }, [])
    const [selectedButton, setSelectedButton] = useState(0)
    return (
        <section className="mt-6 mb-6 flex  w-full max-w-4xl gap-4">
            <button onClick={() => {
                setUserSelectedColorID("")
                setSelectedButton(0)
            }}
                className={`text-nowrap py-4 text-white font-bold p-2 w-full rounded-bl-3xl border ${selectedButton === 0 ? "bg-gradient" : "bg-red-500"}`}>
                {selectedButton === 0 ? "Selected Red" : "Choose Your Color Red"}
            </button>
            <button
                onClick={() => {
                    setUserSelectedColorID("")
                    setSelectedButton(1)
                }}
                className={`text-nowrap py-4 p-2 w-full text-white font-bold rounded-br-3xl border ${selectedButton === 1 ? "bg-gradient" : "bg-green-500"}`}>
                {selectedButton === 1 ? "Selected Green" : "Choose Your Color Green"}
            </button>

        </section>
    )
}
export default ColorMap