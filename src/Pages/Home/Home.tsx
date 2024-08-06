import BannerImage from "./BannerImage";
import HomeGames from "./HomeGames";
import NotificationBar from "./NotificationBar";
import "./Home.css";
import BottomNavbar from "../../Components/BottomNavbar";
import WithdrawalPanel from "./WithdrawlPannel";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center max-w-4xl py-12 mx-auto">
      <section className="mb-16">
        <NotificationBar />
        <BannerImage />
        <HomeGames />
        <WithdrawalPanel />
      </section>
      <BottomNavbar />
    </main>
  );
}
