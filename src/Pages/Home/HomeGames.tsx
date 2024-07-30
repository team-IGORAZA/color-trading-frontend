import { useState } from "react";

export default function HomeGames() {
  const [currentBtn, setCurrentBtn] = useState(0);

  const btnLabels = [
    { label: "All" },
    { label: "Popular" },
    { label: "Casino" }
  ];

  return (
    <section className="mt-6 p-3 flex flex-col items-center">
      {/* Buttons */}
      <div className="flex items-center space-x-3">
        {btnLabels.map((data, index) => (
          <button
            onClick={() => setCurrentBtn(index)}
            key={data.label}
            className={`text-center ${
              currentBtn === index ? "btn-bg text-[#251448]" : "bg-[#251448] border-[#8732F9] text-white"
            } w-28 h-9 rounded-lg border font-bold`}>
            {data.label}
          </button>
        ))}
      </div>
      {/* Game Images */}
      <div className="grid grid-cols-2 mt-4 gap-3 min-h-96">
        {Array.from({ length: 5 })
          .slice(
            currentBtn === 0 ? 0 : currentBtn === 1 ? 0 : 3,
            currentBtn === 0 ? 6 : currentBtn === 1 ? 3 : 5
          )
          .map((_, index) => (
            <img key={index} src={`/games/game-${index + 1}.png`} alt={`Game image ${index}`} />
          ))}
      </div>
    </section>
  );
}
