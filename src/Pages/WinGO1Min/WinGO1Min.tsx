import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import TimeBanner from "./TimeBanner";
import ColorMap from "./ColorMap";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../constants";
import BottomNavbar from "../../Components/BottomNavbar";

export default function WinGO1Min() {
  const accessToken = localStorage.getItem("accessToken");
  const [userSlectedColorId, setUserSelectedColorID] = useState("");
  const [loading, setLoading] = useState(false);
  const [eventId, setEventID] = useState("");
  const [isUserParticipated, setIsUserParticipated] = useState(false);

  const getEventDetails = async () => {
    try {
      const req = await axios.get(`${BACKEND_URL}/api/v1/event/details/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const { id } = req.data.response;
      setEventID(id);
      return id;
    } catch (err) {
      console.log(err);
    }
  };

  const participateInTheEvent = async (id: string) => {
    try {
      await axios.post(
        `${BACKEND_URL}/api/v1/play/game/`,
        {
          event: id,
          color: userSlectedColorId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const userSubmitToParticipate = async () => {
    setLoading(true);
    try {
      if (!userSlectedColorId) {
        alert("Please Choose a color");
        return;
      }
      const eventId = await getEventDetails();
      await participateInTheEvent(eventId);
      setIsUserParticipated(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="p-2">
      <header className="flex items-center space-x-4">
        <button
          onClick={() => window.history.back()}
          className="btn rounded-2xl border-none text-3xl bg-gradient-to-br from-indigo-300 to-blue-600 text-white"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <span className="text-xl font-bold text-white">Win Go 1 Minute</span>
      </header>
      <section className="flex flex-col justify-center items-center p-3">
        <Bonus />
        {isUserParticipated && (
          <TimeBanner
            userSlectedColorId={userSlectedColorId}
            isUserParticipated={isUserParticipated}
            eventId={eventId}
            setIsUserParticipated={setIsUserParticipated}
          />
        )}
        <ColorMap setUserSelectedColorID={setUserSelectedColorID} />
        {!isUserParticipated && (
          <button
            onClick={userSubmitToParticipate}
            className="btn mt-6 w-full max-w-4xl btn-bg text-black shadow-xl border-none"
          >
            {loading ? "Loading Please Wait...." : "Participate"}
          </button>
        )}
      </section>
    </main>
    <BottomNavbar/>
    </>
  );
}

const Bonus = () => (
  <div
    style={{ background: "linear-gradient(90deg, #FDF541 0%, #FB9B2A 100%)" }}
    className="mt-6 mb-5 w-full p-2 max-w-6xl rounded-xl py-2 text-center"
  >
    <span className="capitalize text-center text-black font-medium">
      10 % Bonus for the first recharge
    </span>
  </div>
);
