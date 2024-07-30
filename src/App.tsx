import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import PrivateRoute from "./Components/PrivateRoute"
import Home from "./Pages/Home/Home"
import "./App.css"

export default function App() {
  return (
    <main className="App min-h-screen">
      <BrowserRouter>
        {/* ? unprotected routes */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* ? protected routes */}
          <Route element={<PrivateRoute />}>
            {/* * protected paths place here */}
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}
