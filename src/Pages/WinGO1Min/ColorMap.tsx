import { useState } from "react"

export default function ColorMap() {
    const [selectedButton, setSelectedButton] = useState(0)
    return (
        <section className="mt-6 mb-6 flex  w-full gap-4">
            <button onClick={() => setSelectedButton(0)}
                className={` py-4 text-white font-bold p-2 w-full rounded-bl-3xl border ${selectedButton === 0 ? "bg-gradient" : "bg-red-500"}`}>
                {selectedButton === 0 ? "Selected Red" : "Choose Your Color Red"}
            </button>
            <button
                onClick={() => setSelectedButton(1)}
                className={`py-4 p-2 w-full text-white font-bold rounded-br-3xl border ${selectedButton === 1 ? "bg-gradient" : "bg-green-500"}`}>
                {selectedButton === 1 ? "Selected Green" : "Choose Your Color Green"}

            </button>

        </section>
    )
}
