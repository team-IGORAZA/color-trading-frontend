import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import PrivateRoute from "./Components/PrivateRoute"
import Home from "./Pages/Home/Home"
export default function App() {
  return (
    <main>
      <BrowserRouter>
        {/* ? unprotected routes */}
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
                    {/* ? protect routes */}
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}
