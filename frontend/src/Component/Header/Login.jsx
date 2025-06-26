
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UseContext";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)

  const handleLogin = async()=>{
    console.log("oooo")
    const res = await fetch("http://localhost:8000/api/v1/users/login",{
        method:"POST",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify({email, password}),
        credentials: "include"
    })

    const result = await res.json()

    console.log(result.status)
    if(result && result.success===true){
      setUser(email)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    handleLogin()
  };


  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="max-w-sm w-full">
          <h2 className="text-2xl font-semibold mb-2">Start your journey</h2>
          <h1 className="text-3xl font-bold mb-6">Sign Up to InsideBox</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">E-mail</label>
              <input
                type="email"
                placeholder="example@mail.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Sign Up</button>
          </form>

          <div className="my-6 text-center text-gray-500">or sign up with</div>

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
            Have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:w-1/2">
        <img
          src='./login.jpg'
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
