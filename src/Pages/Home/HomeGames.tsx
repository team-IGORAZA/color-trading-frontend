import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomeGames() {
  const [currentBtn, setCurrentBtn] = useState(0);

  const btnLabels = [
    { label: "All" },
    { label: "Popular" },
    { label: "Casino" }
  ];

  const images = [
    { image: "/games/game-1.png", path: "/win-go-1-min", category: "all" },
    { image: "/games/game-2.png", path: "/", category: "all" },
    { image: "/games/game-3.png", path: "/", category: "popular" },
    { image: "/games/game-4.png", path: "/", category: "popular" },
    { image: "/games/game-5.png", path: "/", category: "casino" },
  ];

  const filteredImages = images.filter((image) => {
    if (currentBtn === 0) return true;
    if (currentBtn === 1) return image.category === "popular";
    if (currentBtn === 2) return image.category === "casino";
    return false;
  });

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
        {filteredImages.map((image, index) => (
          <Link key={index} to={image.path}>
          <img  src={image.image} alt={`Game image ${index + 1}`} />
          </Link>
        ))}
      </div>
    </section>
  );
}
