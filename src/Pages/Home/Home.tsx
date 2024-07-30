import BannerImage from "./BannerImage";
import HomeGames from "./HomeGames";
import NotificationBar from "./NotificationBar";
import "./Home.css"


export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center max-w-4xl py-12 mx-auto">
      <NotificationBar/>
      <BannerImage/>
      <HomeGames/>
    </main>
  )
}
