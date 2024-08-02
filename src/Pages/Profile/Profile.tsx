import { useNavigate } from "react-router-dom";
import BottomNavbar from "../../Components/BottomNavbar";
import ProfileBalance from "./ProfileBalance";
import ProfileCard from "./ProfileCard";
import ProfileMenu from "./ProfileMenu";

export default function Profile() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen">
      <section className="p-3">
        <h3 className="text-white text-3xl font-bold">Profile</h3>
        <ProfileCard />
        <ProfileBalance/>
        <ProfileMenu/>
       <div className="flex justify-center">
       <button 
       onClick={() => {
        localStorage.clear()
        navigate("/")
        
       }}
       className="w-full max-w-2xl btn text-black font-bold border-none rounded-xl mb-6"
       style={{background: "linear-gradient(90deg, #F09819 0%, #EDDE5D 100%)"}}>Logout</button>
       </div>
      </section>
      <BottomNavbar />
    </div>
  )
}
