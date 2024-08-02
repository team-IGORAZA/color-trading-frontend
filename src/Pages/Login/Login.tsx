import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { RiLockPasswordFill,RiCustomerService2Fill } from "react-icons/ri";
import axios from "axios";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../constants";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/login/`, { email, password });
      console.log("Login successful:", response.data);
      const accessToken = response.data.response.accessToken;
      localStorage.setItem("accessToken", accessToken);
      swal.fire("Success", "Login successful!", "success");
      navigate("/home");
    } catch (error: any) {
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (

      <div className="bg-[#1F2C62]  rounded-lg  w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="text-white text-base font-semibold flex items-center gap-4 mb-3" htmlFor="email">
             <FaUser/>
              Email
            </label>
            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-gray-400" />
              <input
                className="bg-[#020A4A] text-white w-full py-2 px-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 input"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div>
            <label className="flex  items-center text-white text-base font-semibold gap-4 mb-3" htmlFor="password">
              <FaLock/>
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute top-4 left-3 text-gray-400" />
              <input
                className="bg-[#020A4A] text-white w-full py-2 px-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 input"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full btn btn-bg text-black border-none py-2 rounded-md mt-6 font-semibold"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </form>
      <div className="mt-6 flex items-center justify-evenly">
        <div className="flex flex-col items-center gap-1">
          <RiLockPasswordFill className="text-3xl text-white"/>
          <span  className="font-bold">Forgot Password</span>
        </div>
        <div  className="flex flex-col items-center gap-1">
        <RiCustomerService2Fill className="text-3xl text-white"/>
          <span className="font-bold">Customer Service</span>
          </div>

      </div>
      </div>
  );
};

export default Login;
