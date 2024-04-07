import React from "react";
import Heading from "../components/Heading";

function Login() {
    return(
        <>
        <Heading text="Login" />
        <div className="absolute top-7 right-10">
            <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</a>
        </div>
        
      <form className="mt-8 space-y-4" >
        <div>
          <label htmlFor="username" className="block">Name:</label>
          <input
            type="text"
            id="username"
            className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full"
          />
        </div>
        <div>
          <label htmlFor="password" className="block">Password:</label>
          <input
            type="password"
            id="password"
            className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Login
        </button>
      </form>
    </>
    );
}
export default Login;
