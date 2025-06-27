import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../Context/UseContext.js';

const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate= useNavigate()
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    const {user, setUser, userEmail} = useContext(UserContext)

    const handleloginbtn = ()=>{
        navigate("/login")
    }

    const handleLogout = async() => {
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
                navigate("/home")
            }
            else{
                console.log("log out unsuccessfull")
            }
            
        } catch (error) {
            console.log(error)
        }
        
    }

    const getProfileInfo = async()=>{
        try {
            const response = await fetch("http://localhost:8000/api/v1/users/whoami",{
              method: "POST",
              headers:{
                "Content-type": "Application/json"
              },
              credentials: "include"
            })

            const result = await response.json()

            if(result && result.success){
                // console.log(result.data)
                // setUserInfo(result.data) : it not update immeidiatly
                navigate("/profile", { state: { userInfo: result.data } })
            }
            else{
                console.log("Unable to fetch user profile data")
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
                            <div 
                                className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu-button"
                            >
                                {/* User info section (optional) */}
                                <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                                    <p className="text-sm font-medium text-gray-900">{user}</p>
                                    <p className="text-xs text-gray-500 truncate">{userEmail}</p>
                                </div>

                                {/* Navigation items */}
                                <div className="py-1">
                                <button
                                    onClick={() => {
                                        setUserDropdownOpen(false);
                                        getProfileInfo()
                                        
                                    }}
                                    className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                                    role="menuitem"
                                >
                                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    View Profile
                                </button>
                                
                                <button
                                    // onClick={() => navigate("/saved")}
                                    className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                                    role="menuitem"
                                >
                                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>
                                    Saved Items
                                </button>
                                
                                <button
                                    // onClick={() => navigate("/my-posts")}
                                    className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                                    role="menuitem"
                                >
                                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Your Posts
                                </button>
                                
                                <button
                                    // onClick={() => navigate("/following")}
                                    className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                                    role="menuitem"
                                >
                                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Following
                                </button>
                                </div>

                                {/* Separator */}
                                <div className="border-t border-gray-100"></div>

                                {/* Logout section */}
                                <div className="py-1">
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-150"
                                    role="menuitem"
                                >
                                    <svg className="w-4 h-4 mr-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Sign Out
                                </button>
                                </div>
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
