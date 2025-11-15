import React from 'react';
import {
  User,
  Settings,
  Heart,
  Star,
  Award,
  MapPin,
  Calendar,
  Camera,
  Edit3,
  ShoppingBag
} from 'lucide-react';

import ProfileAchievementCard from './ProfileAchievementCard';
import ProfileOrderCard from './ProfileOrderCard';
import ProfileFavoriteCard from './ProfileFavoriteCard';

const Profile = ({
  profileData,
  achievements,
  recentOrders,
  favoriteItems,
  isEditing,
  activeTab,
  mousePosition,
  profileRef,
  onMouseMove,
  onEditProfile,
  onUpdateProfile,
  onTabChange
}) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div
      ref={profileRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden"
      onMouseMove={onMouseMove}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-slate-200 rounded-full opacity-10 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gray-200 rounded-full opacity-15 blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-slate-300 rounded-full opacity-8 blur-3xl animate-pulse"></div>

        {/* Floating sparkles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-slate-400 rounded-full animate-twinkle opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 relative z-10">
        {/* Profile Header Section */}
        <div className="relative mb-8">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-200 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-gray-200 to-slate-200 animate-pulse"></div>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-gray-400 rounded-full animate-twinkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              {/* Mobile Profile Layout */}
              <div className="lg:hidden">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
                      <img
                        src={profileData?.avatar}
                        alt={profileData?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200">
                      <Camera className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{profileData?.name}</h2>
                  <p className="text-gray-600 mb-2">{profileData?.bio}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{profileData?.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {profileData?.joinDate}</span>
                    </div>
                  </div>
                </div>



              </div>

              {/* Desktop Profile Layout */}
              <div className="hidden lg:flex items-center justify-between">
                <div className="flex items-center space-x-8">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                      <img
                        src={profileData?.avatar}
                        alt={profileData?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200">
                      <Camera className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-4xl font-bold text-gray-800">{profileData?.name}</h2>
                    <p className="text-lg text-gray-600 max-w-md">{profileData?.bio}</p>
                    <div className="flex items-center space-x-6 text-gray-500">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5" />
                        <span>{profileData?.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>Joined {profileData?.joinDate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={onEditProfile}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl font-semibold hover:scale-105 transition-all duration-200 shadow-lg flex items-center space-x-2"
                  >
                    <Edit3 className="w-5 h-5" />
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-gray-200">
            <div className="flex overflow-x-auto justify-between space-x-1 scrollbar-hide">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:block">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in-up">
              {/* Achievements Section */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Achievements</h3>
                  </div>
                  <span className="text-sm text-gray-500">{achievements?.length} earned</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {achievements?.map((achievement, index) => (
                    <ProfileAchievementCard key={achievement.title} achievement={achievement} />
                  ))}
                </div>
              </div>

              {/* Recent Activity Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Orders */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Recent Orders</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {recentOrders?.map((order) => (
                      <ProfileOrderCard key={order.id} order={order} />
                    ))}
                  </div>
                </div>

                {/* Favorite Items */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Favorite Items</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {favoriteItems?.map((item, index) => (
                      <ProfileFavoriteCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}


          {activeTab === 'orders' && (
            <div className="space-y-6 animate-fade-in-up">

              {/* Recent Activity Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Recent Orders */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Recent Orders</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {recentOrders?.map((order) => (
                      <ProfileOrderCard key={order.id} order={order} />
                    ))}
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Completed Orders</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {recentOrders?.map((order) => (
                      <ProfileOrderCard key={order.id} order={order} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}


          {activeTab === 'favorites' && (

            < div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                
              </div>
              <div className="space-y-4">
                {favoriteItems?.map((item, index) => (
                  <ProfileFavoriteCard key={index} item={item} />
                ))}
              </div>
            </div>

          )}


          {/* Other tabs content */}
          {activeTab !== 'overview' && (
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-gray-200 text-center">
              <div className="text-gray-500">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Coming Soon</h3>
                <p className="text-gray-600">This section is under development.</p>
              </div>
            </div>
          )}
        </div>
      </div >

      {/* Custom Animations */}
      < style > {`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style >
    </div >
  );
};

export default Profile;