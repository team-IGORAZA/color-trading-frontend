import { useNavigate } from "react-router-dom"
import Auth from "../Pages/Auth/Auth"
import { useEffect } from "react"

export default function HomePage() {
    const navigate = useNavigate()
    const accessToken = localStorage.getItem("accessToken")
    useEffect(() => {
      if(accessToken) {
        navigate('/home')
      }
    },[])
  return accessToken ? null : <Auth/>
}
