import React, { useEffect, useState } from 'react';
import { Edit, MapPin, Calendar, Mail, Phone, Globe, Camera, Settings, Star, Users, FileText, Award } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  const location = useLocation()
  const profileData = location.state?.userInfo;
// console.log("ppp ",profileData)

useEffect(()=>{
    console.log(profileData)
}, [profileData])

  const stats = [
    { label: "Posts", value: "127", icon: FileText },
    { label: "Followers", value: "2.5k", icon: Users },
    { label: "Following", value: "186", icon: Users },
    { label: "Rating", value: "4.8", icon: Star }
  ];

  
  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 font-medium rounded-lg transition-all duration-200 ${
        isActive 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-700 overflow-hidden">
        <img 
        //   src={profileData.profile_pic || } 
          alt="Cover" 
          className="w-full h-full object-cover opacity-50 bg-amber-900"
        />
       {/* can able to change it */}
      </div>

      {/* Profile Header */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Avatar Section */}

            <div className="relative flex-shrink-0">
              <img
                src={profileData.profile_pic || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"}
                // alt={profileData.name}
                className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-xl"
              />
             
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{profileData.first_name+" "+profileData.last_name}</h1>
                  <p className="text-xl text-gray-600 mb-3">{profileData.role}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {profileData.address}
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg"
                  >
                    <Edit size={16} />
                    Edit Profile
                  </button>
                  
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-700 mt-6 leading-relaxed">{profileData.bio}</p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 mt-6">
                <a href={`mailto:${profileData.email}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail size={16} />
                  {profileData.email}
                </a>
                <a href={`tel:${profileData.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Phone size={16} />
                  {profileData.phone}
                </a>

              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-200">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="text-blue-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="flex gap-2 bg-white p-2 rounded-xl shadow-sm">
          <TabButton id="overview" label="Overview" isActive={activeTab === 'overview'} onClick={setActiveTab} />
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto px-6 mt-8 pb-12">
        {activeTab === 'overview' && (
          <div className="grid gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Experienced frontend developer with a passion for creating intuitive user experiences. 
                  Specialized in React ecosystem with expertise in TypeScript, state management, and modern 
                  development practices. Strong advocate for clean code, testing, and continuous learning.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When not coding, I enjoy contributing to open-source projects, mentoring junior developers, 
                  and exploring new technologies. Always excited to collaborate on innovative projects that 
                  make a positive impact.
                </p>
              </div>
            </div>

            
          </div>
        )}

      </div>
    </div>
  );
}