import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UseContext.js";

const Register = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile_pic, setProfilePic] = useState("");


  const handleRegiser = async()=>{
    try {
      const response = await fetch("http://localhost:8000/api/v1/users/register", {
          method: "POST",
          headers: {
                      "Content-type": "Application/json"
                  },          
          body: JSON.stringify({first_name,last_name,email,password,profile_pic})
      })
      const result = await response.json()
      console.log(result)

    } catch (error) {
      console.log("error",error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleRegiser();
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="max-w-sm w-full">
          <h2 className="text-2xl font-semibold mb-2">Create your account</h2>
          <h1 className="text-3xl font-bold mb-6">Sign Up to InsideBox</h1>

          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Profile Pic (URL)</label>
              <input
                type="text"
                value={profile_pic}
                onChange={(e) => setProfilePic(e.target.value)}
                placeholder="Optional"
                className="w-full border border-gray-300 rounded px-4 py-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-1.5 my-0.5 rounded hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="my-4 text-center text-gray-500">or sign up with</div>

          <div className="flex justify-center space-x-4">
            <button className="bg-gray-100 p-2 rounded">
              <img src="https://img.icons8.com/ios-filled/20/facebook--v1.png" alt="fb" />
            </button>
            <button className="bg-gray-100 p-2 rounded">
              <img src="https://img.icons8.com/ios-filled/20/google-logo.png" alt="google" />
            </button>
            <button className="bg-gray-100 p-2 rounded">
              <img src="https://img.icons8.com/ios-filled/20/mac-os.png" alt="apple" />
            </button>
          </div>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="./login.jpg" // You can change this path or use an external URL
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
