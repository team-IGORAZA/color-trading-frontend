
const Login = () => {
  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center">
      <div className="bg-blue-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="text-center text-white mb-6">
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="text-sm">Please Login with your phone number</p>
          <p className="text-sm">If you forgot password please contact customer service</p>
        </div>
        <div className="flex justify-center mb-4">
          <button className="flex-1 text-center text-white bg-blue-700 py-2 rounded-l-lg">Login</button>
          <button className="flex-1 text-center text-white bg-blue-900 py-2 border-l border-blue-700 rounded-r-lg">Sign up</button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">Phone Number</label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                +91
              </span>
              <input
                type="text"
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-r-md border border-gray-300 bg-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Password</label>
            <div className="mt-1 relative">
              <input
                type="password"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 bg-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 4a6 6 0 00-6 6v2a1 1 0 001 1h10a1 1 0 001-1v-2a6 6 0 00-6-6zM6 10a4 4 0 118 0v2H6v-2z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember_me" className="ml-2 block text-sm text-white">
              Remember Password
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm text-white">
          Don't Have Account? <a href="#" className="font-medium text-yellow-500 hover:text-yellow-600">Register</a>
        </div>
        <div className="mt-4 flex justify-between text-sm text-white">
          <a href="#" className="font-medium flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.9 14.32a5.54 5.54 0 01-1.9.34 5.56 5.56 0 01-4.8-8.56L6.7 5.5a3.5 3.5 0 105 5l1.16-1.17a5.54 5.54 0 01.04 4.99zM8.7 9.28a1.5 1.5 0 111.6-1.6l-1.6 1.6z" clipRule="evenodd" />
            </svg>
            Forgot Password
          </a>
          <a href="#" className="font-medium flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 8a6 6 0 1012 0A6 6 0 006 8zm8-2a4 4 0 11-8 0 4 4 0 018 0zm2 7a6 6 0 01-12 0H2a8 8 0 1016 0h-2z" clipRule="evenodd" />
            </svg>
            Customer Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
