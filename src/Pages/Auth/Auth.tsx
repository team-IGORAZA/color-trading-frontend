import { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { CiSquareMore } from "react-icons/ci";
import { FaUnlock } from "react-icons/fa";

export default function Auth() {
  const [isShowLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="h-44 bg-[#020A4A] flex flex-col justify-center items-start p-4">
        <h2 className="text-3xl font-bold text-white ">
          {isShowLogin ? "Login" : "Register"}
        </h2>
        <p>
        {isShowLogin ? "Please Login With your email and password" : "Please Register Your account please"}
        </p>
      </div>
      <div className="flex items-center justify-between mb-6 px-16">
        <button
          onClick={() => setShowLogin(true)}
          className={`p-3 font-bold flex flex-col items-center border border-transparent border-b-black  ${isShowLogin && "border-b-lime-400 border-b-4 text-white" } focus:outline-none`}
        >
          <FaUnlock className="text-3xl"/>
          Login
        </button>
        <button
          onClick={() => setShowLogin(false)}
          className={`p-3 font-bold flex flex-col items-center border border-transparent border-b-black  ${!isShowLogin && "border-b-lime-400 border-b-4 text-white" } focus:outline-none`}
        >
          <CiSquareMore className="text-3xl"/>
          Register
        </button>
      </div>
      {isShowLogin ? (
        <div className="p-3">
          <Login />
        </div>
      ) : (
        <div className="p-3">
          <Register/>
        </div>
      )}
    </div>
  );
}




