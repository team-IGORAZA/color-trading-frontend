import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import axios from 'axios';
import swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../../constants';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      console.log('Login successful:', response.data);
      let accessToken = response.data.response.accessToken;
      localStorage.setItem('accessToken', accessToken);
      swal.fire('Success', 'Login successful!', 'success');
      navigate('/home');
    } catch (error: any) {
      setError(error.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020A4A] flex items-center justify-center">
      <div className="bg-[#1F2C62] p-8 rounded-lg shadow-md min-h-96 lg:w-[30rem]">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Login</h2>
        <p className="text-sm text-white mb-6 text-center">
          Please enter your login details to continue
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="text-gray-400" />
              </span>
              <input
                className="input input-bordered w-full pl-10 bg-[#020A4A] text-white"
                id="email"
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-gray-400" />
              </span>
              <input
                className="input input-bordered w-full pl-10 bg-[#020A4A] text-white"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <button className="btn btn-bg text-black border-none w-full" type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text hover:underline">
            Forgot Password?
          </a>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-white">
            Don't have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
