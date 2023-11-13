import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import API from '../../API';

function Login() {
    let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const { data } = await axios.post(
      `${API}/users/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    if (data.success === true) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("authToken", data.authToken);
      navigate("/");
     toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div className="flex flex-col justify-center flex-1 px-4 py-12 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div className="w-full max-w-xl mx-auto lg:w-96">
        <div>
            <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">Login.</h2>
        </div>

        <div className="mt-8">
            <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label for="email" className="block text-sm font-medium text-neutral-600"> Email address </label>
                        <div className="mt-1">
                            <input id="email" name="email" type="email" autocomplete="email" required placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label for="password" className="block text-sm font-medium text-neutral-600"> Password </label>
                        <div className="mt-1">
                            <input id="password" name="password" type="password" autocomplete="current-password" required="" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"/>
                            <label for="remember-me" className="block ml-2 text-sm text-neutral-600"> Remember me </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500"> Forgot your password? </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Login</button>
                    </div>
                </form>
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 text-neutral-600 bg-white"> Or continue with </span>
                    </div>
                </div>
                <div>
                    <button type="submit" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <div className="flex items-center justify-center">
                            <FcGoogle className="text-2xl"/>
                            <span className="ml-4"> Login with Google</span>
                        </div>
                    </button>
                    <div className="flex my-5 justify-center font-semibold">Don't have an account?<Link to="/signup" className="mx-2 text-blue-600 cursor-pointer">SignUp</Link></div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login