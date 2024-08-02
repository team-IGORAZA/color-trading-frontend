import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaLock, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import axios from "axios";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../constants";

interface FormData {
  first_name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/register/`, {
        first_name: formData.first_name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        confirm_password: formData.confirmPassword,
      });
      console.log("Registration successful:", response.data);
      swal.fire("Success", "Registration successful!", "success");
      navigate("/login");
    } catch (error: any) {
      setError(error.response?.data?.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#1F2C62]  rounded-lg shadow-md w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="text-white text-sm font-semibold block mb-1" htmlFor="first_name">
              First Name
            </label>
            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-gray-400" />
              <input
                className="bg-[#020A4A] text-white w-full py-2 px-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 input"
                type="text"
                id="first_name"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="text-white text-sm font-semibold block mb-1" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
              <input
                className="bg-[#020A4A] text-white w-full py-2 px-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 input"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="text-white text-sm font-semibold block mb-1" htmlFor="phone">
              Phone
            </label>
            <div className="relative">
              <FaPhone className="absolute top-4 left-3 text-gray-400" />
              <input
                className="bg-[#020A4A] text-white w-full py-2 px-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 input"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="text-white text-sm font-semibold block mb-1" htmlFor="password">
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
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="text-white text-sm font-semibold block mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="relative">
              <FaLock className="absolute top-4 left-3 text-gray-400" />
              <input
                className="bg-[#020A4A] text-white w-full py-2 px-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 input"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full btn btn-bg text-black border-none py-2 rounded-md mt-6 font-semibold"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
