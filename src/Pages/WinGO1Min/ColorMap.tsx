import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../constants";

interface ColorMapProps {
  setUserSelectedColorID: React.Dispatch<React.SetStateAction<string>>;
}
interface ApiResponse {
  color: string;
  created_at: string;
  id: string;
}

const ColorMap: React.FC<ColorMapProps> = ({ setUserSelectedColorID }) => {
  const accessToken = localStorage.getItem("accessToken");

  const getColors = async () => {
    try {
      const req = await axios.get(`${BACKEND_URL}/api/v1/color`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      console.log(req.data.response);
      setColors(req.data.response);
      setSelectedButton(req.data.response[0].id);
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  };

  useEffect(() => {
    getColors();
  }, []);
  const [selectedButton, setSelectedButton] = useState("");
  const [colors, setColors] = useState<ApiResponse[]>([]);
  return (
    <section className="mt-6 mb-6 flex items-center justify-center w-full max-w-4xl gap-4">
      {colors.length === 0  && <>Loading....</>}
      {colors?.map((color) => (
        <React.Fragment key={color.id}>
          {/* {selectedButton === color.id
            ? "Selected Red"
            : "Choose Your Color Red"} */}
          <button
            onClick={() => {
              setUserSelectedColorID(color.id);
              setSelectedButton(color.id);
            }}
            style={{
              background: color.color,
            }}
            className={`p-2 rounded-full h-12 w-12 ${color.id === selectedButton ? "border" : null}`}
          ></button>
        </React.Fragment>
      ))}
    </section>
  );
};
export default ColorMap;
