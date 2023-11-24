import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import API from "../../API";
import { GoogleLogin } from "@react-oauth/google";

function SignUp() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const { data } = await axios.post(
      `${API}/users/register`,
      {
        name,
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
          <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
            SignUp.
          </h2>
        </div>

        <div className="mt-8">
          <div className="mt-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  for="name"
                  className="block text-sm font-medium text-neutral-600"
                >
                  {" "}
                  Full Name{" "}
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autocomplete="name"
                    required
                    value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  />
                </div>
              </div>
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-neutral-600"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    required=""
                    placeholder="Your Email"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  for="password"
                  className="block text-sm font-medium text-neutral-600"
                >
                  {" "}
                  Password{" "}
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    autocomplete="current-password"
                    required=""
                    placeholder="Your Password"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    placeholder="Your password"
                    className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                  />
                  <label
                    for="remember-me"
                    className="block ml-2 text-sm text-neutral-600"
                  >
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Signup
                </button>
              </div>
            </form>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-neutral-600 bg-white">
                  {" "}
                  Or continue with{" "}
                </span>
              </div>
            </div>
            <div>
            <div className='flex justify-center'>
                <GoogleLogin
              useOneTap
              onSuccess={async (credentialResponse) => {
                console.log(credentialResponse)
                const response = await axios.post(
                  `${API}/users/login-google`,
                  {
                    token: credentialResponse.credential,
                  }
                );
                const data = response.data;

                localStorage.setItem('authToken', JSON.stringify(data.authToken));
                navigate("/");
                toast.success(data.message);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
                </div>
              <div className="flex my-5 justify-center font-semibold">
                Already have an account?
                <Link
                  to={"/login"}
                  className="mx-2 text-blue-600 cursor-pointer"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
