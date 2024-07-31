import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import TimeBanner from "./TimeBanner";
import ColorMap from "./ColorMap";
import { useState } from "react";




export default function WinGO1Min() {
    const [userSlectedColorId,setUserSelectedColorID] = useState('')
    console.log(userSlectedColorId)
    return (
        <main className="p-2">
            <header className="flex items-center space-x-4">
                <button onClick={() => history.back()} className="btn rounded-2xl border-none text-3xl bg-gradient-to-br from-indigo-300 to-blue-600 text-white">
                    <MdOutlineKeyboardArrowLeft />
                </button>
                <span className="text-xl font-bold text-white">Win Go 1 Minute</span>
            </header>
            <section className="flex flex-col justify-center items-center p-3">
                <Bonus />
                <TimeBanner />
                <ColorMap setUserSelectedColorID={setUserSelectedColorID}/>
                {/* ? participate button */}
                <button className="btn mt-6 w-full max-w-4xl btn-bg text-black shadow-xl border-none">Participate</button>
            </section>
        </main>
    )
}


const Bonus = () => (
    <div
        style={{ background: "linear-gradient(90deg, #FDF541 0%, #FB9B2A 100%)" }}
        className="mt-6 mb-5 w-full p-2 max-w-6xl rounded-xl py-2 text-center">
        <span className="capitalize text-center text-black font-medium">10 % Bonus for the first recharge</span>
    </div>
)
