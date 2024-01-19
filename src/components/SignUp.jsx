import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {  redirect, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";

const SignUp = () => {

    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [user, loading ,error]=useAuthState(auth)
    const navigate= useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
      }, [user, loading]);

      user && redirect("/")
  return (
<section className="bg-gray-50  dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mt-12 md:h-screen lg:py-0">
    
    <div className="w-full bg-violet-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign Up
        </h1>
        <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your name
            </label>
            <input
            required
              value={name}
              type="text"
              name="name"
              id="name"
               onChange={(e)=>setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
           
          </div>
          <button
            onClick={()=>registerWithEmailAndPassword(name, email, password)}
            className="w-full text-white  bg-violet-400 hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Sign Up
          </button>
          <button
            onClick={() => signInWithGoogle()}
            className="w-full text-white  bg-violet-400 hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Sign Up with Google
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account yet?{" "}
            <a
              href="/login"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login
            </a>
          </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default SignUp