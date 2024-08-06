import { IoIosArrowBack } from "react-icons/io";
import BottomNavbar from "../../Components/BottomNavbar";
import { FaRegClock } from "react-icons/fa";
import { GiftColorBanner } from "./GiftColorBanner";
import GiftForm from "./GiftForm";

export default function Gift() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full py-12 ">
        <header className="flex items-center justify-between p-2 h-auto header-bg">
          <button
            onClick={() => history.back()}
            className="btn text-xl bg-white/30 hover:bg-white/45 backdrop-blur-md text-white "
          >
            <IoIosArrowBack />
          </button>
          <h2 className="text-xl text-white font-bold">Gift</h2>
          <button className="text-xl text-white">
            <FaRegClock />
          </button>
        </header>
      </div>
      {/* ?body */}
      <section className="mb-12 min-h-screen">
        <GiftColorBanner />
        <GiftForm/>
      </section>
      {/* ? to fix in the bottom */}
      <BottomNavbar />
    </div>
  );
}
