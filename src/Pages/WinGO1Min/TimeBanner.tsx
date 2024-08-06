import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { BACKEND_URL } from "../../constants";

interface TimeBannerProps {
  isUserParticipated: boolean;
  userSlectedColorId: string;
  eventId: string;
  setIsUserParticipated: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimeBanner: React.FC<TimeBannerProps> = ({ 
  isUserParticipated, 
  userSlectedColorId, 
  eventId, 
  setIsUserParticipated 
}) => {
  const [timeLeft, setTimeLeft] = useState(59);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isUserParticipated) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            if (timerRef.current) clearInterval(timerRef.current);
            getTheWinnerOfTheEvent();
            return 0;
          }
        });
      }, 1000);

      // ?Cleanup the interval when component unmounts or isUserParticipated changes
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    } else {
      setTimeLeft(59); // ? Reset timer when isUserParticipated is false
    }
  }, [isUserParticipated]);

  const getTheWinnerOfTheEvent = async () => {
    try {
      const req = await axios.post(`${BACKEND_URL}/api/v1/get/winner/`, {
        event_id: eventId,
      });
      console.log(req.data.response);
      if (req.data.response.color === userSlectedColorId) {
        Swal.fire("Huray", "You are the winner", "success");
      } else {
        Swal.fire("Opps", "Better Luck next Time", "error");
      }
    } catch (err) {
      console.log(`Error Occured ${err}`);
    } finally {
      setIsUserParticipated(false);
    }
  };

  return (
    <div
      style={{ background: "linear-gradient(180deg, #AFFF00 0%, #699900 100%)" }}
      className="relative w-[370px] lg:w-[407px] h-48 rounded-[24px] p-2 overflow-hidden"
    >
      <div className="absolute left-40 bottom-24 rotate-12">
        <GradientCircle />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start z-50">
          <h2 className="text-black text-xl font-bold relative bottom-10">
            {userSlectedColorId ? userSlectedColorId : "Game ID"}
          </h2>
          <div className="relative -bottom-10">
            <h4 className="text-lg text-white font-bold">Remaining Time:</h4>
            <span className="text-3xl font-bold text-white">
              {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
              {String(timeLeft % 60).padStart(2, "0")}
            </span>
          </div>
        </div>
        <div>
          <img src="/star.png" alt="star image" />
        </div>
        <div className="flex flex-col items-center z-50">
          <button className="badge w-20 py-3 bg-indigo-900 text-white border-none">
            1 min
          </button>
          <img className="mt-4" src="/game.png" alt="game Image" />
        </div>
      </div>
      <div className="relative -left-28 -top-20 rotate-12">
        <GradientCircle />
      </div>
    </div>
  );
};

const GradientCircle = () => (
  <div
    style={{
      background: "linear-gradient(19.38deg, #8FC225 39.14%, #3A5306 84.37%)"
    }}
    className="h-96 rounded-full w-96"
  ></div>
);

export default TimeBanner;
