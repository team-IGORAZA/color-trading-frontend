import BannerImage from "./BannerImage";
import HomeGames from "./HomeGames";
import NotificationBar from "./NotificationBar";
import "./Home.css";
import BottomNavbar from "../../Components/BottomNavbar";
import WithdrawalPanel from "./WithdrawlPannel";

export default function Home() {
  return (
    <main className="flex flex-col   py-12 ">
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
