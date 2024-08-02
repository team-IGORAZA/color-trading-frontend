import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./Pages/Register/Register"
import PrivateRoute from "./Components/PrivateRoute"
import Home from "./Pages/Home/Home"
import "./App.css"
import WinGO1Min from "./Pages/WinGO1Min/WinGO1Min"
import HomePage from "./Components/HomePage"
import Profile from "./Pages/Profile/Profile"

export default function App() {
  return (
    <main className="App min-h-screen">
      <BrowserRouter>
        {/* ? unprotected routes */}
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<Register />} />
          {/* ? protected routes */}
          <Route element={<PrivateRoute />}>
            {/* * protected paths place here */}
            <Route path="/home" element={<Home />} />
            <Route path="/win-go-1-min" element={<WinGO1Min/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}
