
import { Link } from 'react-router-dom';
import Flower from "../assets/flower.png"
import google from "../assets/google.svg"
import Apple from '../assets/Apple.svg';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden">
        
        <div className="p-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Get Started Now</h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="w-4 h-4" />
              <label>
                I agree to the <span className="text-green-600 underline cursor-pointer">terms & policy</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 rounded-md transition duration-300"
            >
              Signup
            </button>
          </form>

          <div className="my-6 flex items-center justify-center">
            <span className="border-t border-gray-300 w-full"></span>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <span className="border-t border-gray-300 w-full"></span>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 w-full">
              <img src={google} alt="Google" className="w-5 h-5" />
              Sign in with Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 w-full">
              <img src={Apple} alt="Apple" className="w-5 h-5" />
              Sign in with Apple
            </button>
          </div>

          <p className="text-sm mt-6 text-center">
            Have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>

      
        <div className="hidden md:block">
          <img src={Flower} alt="Plant" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
