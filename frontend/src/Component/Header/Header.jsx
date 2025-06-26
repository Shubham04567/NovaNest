import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../Context/UseContext.js';

const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate= useNavigate()
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    const {user, setUser} = useContext(UserContext)


    const handleloginbtn = ()=>{
        navigate("/login")
    }

    const handeLogout = async() => {
        try {

            const response = await fetch("http://localhost:8000/api/v1/users/logout",{
                method: "POST",
                headers: {
                    "Content-type":"Application/json"
                    },
                credentials: "include"
            })

            const result = await response.json()

            if(result && result.success===true){
                setUser(null)
            }
            else{
                console.log("log out unsuccessfull")
            }
            
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <nav className="bg-gray-700 text-white px-6 py-1.5">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
                        alt="Logo"
                        className="w-10 h-10"
                    />
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-6 font-medium">
                    <li><a href="#" className="hover:text-yellow-300"></a></li>
                    <li><a href="#" className="hover:text-yellow-300"></a></li>
                    <li><a href="#" className="hover:text-yellow-300"></a></li>
                    <li><a href="#" className="hover:text-yellow-300"></a></li>
                </ul>

                {/* Search Box */}
                <div className="hidden md:flex items-center bg-white text-black rounded-full px-3 py-1">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none px-2"
                    />
                    <img
                        src="https://img.icons8.com/ios-filled/24/000000/search--v1.png"
                        alt="Search"
                        className="w-4 h-4"
                    />
                </div>

                {/* Icons and Login */}
                <div className="flex items-center space-x-4">
                    <img
                        src="https://img.icons8.com/ios-filled/30/ffffff/sun--v1.png"
                        alt="Toggle"
                        className="w-6 h-6 cursor-pointer"
                    />
                    {user ? (
                        <div className="relative">
                            <img
                                src="https://img.icons8.com/ios-filled/30/ffffff/user-male-circle.png"
                                alt="User"
                                className="w-8 h-8 rounded-full cursor-pointer"
                                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                            />
                            {userDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50">
                                    <button
                                        onClick={() => navigate("/profile")}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                    View Profile
                                    </button>
                                    <button
                                    onClick={handeLogout}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                    Logout
                                    </button>
                                </div>
                            )}
                        </div>
                        ) : (
                        <button
                            onClick={handleloginbtn}
                            className="bg-white text-violet-700 px-4 py-1 rounded-full font-semibold hover:bg-yellow-400"
                        >
                            Login
                        </button>
                        )}

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-3 space-y-2">
                    <ul className="space-y-2 text-center font-medium">
                        <li><a href="#" className="block hover:text-yellow-300"></a></li>
                        <li><a href="#" className="block hover:text-yellow-300"></a></li>
                        <li><a href="#" className="block hover:text-yellow-300"></a></li>
                        <li><a href="#" className="block hover:text-yellow-300"></a></li>
                    </ul>
                    <div className="mt-2 flex justify-center">
                        <div className="flex items-center bg-white text-black rounded-full px-3 py-1 w-2/3">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent outline-none px-2 w-full"
                            />
                            <img
                                src="https://img.icons8.com/ios-filled/24/000000/search--v1.png"
                                alt="Search"
                                className="w-4 h-4"
                            />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Dashboard;
