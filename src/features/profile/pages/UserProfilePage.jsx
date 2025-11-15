import React, { useState, useRef } from 'react';
import { ShoppingBag, Star, Heart, Trophy } from 'lucide-react';
import Profile from "../components/Profile";
import ProfileHeader from '../components/ProfileHeader';

const UserProfilePage = ({ onBack, onFavoritesClick, onCartClick }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [profileData, setProfileData] = useState({
    name: 'Ahmed Hassan',
    email: 'ahmed.hassan@email.com',
    phone: '+971 50 123 4567',
    location: 'Dubai, UAE',
    joinDate: 'January 2024',
    bio: 'Middle Eastern cuisine enthusiast. Love exploring authentic flavors and traditional dishes.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  });


  const profileRef = useRef(null);

  const handleMouseMove = (e) => {
    if (profileRef.current) {
      const rect = profileRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };


  const achievements = [
    {
      title: 'Arabian Explorer',
      description: 'Tried 25+ Middle Eastern dishes',
      icon: '🏜️',
      progress: 78,
      color: 'from-orange-400 to-red-400',
      level: 'Gold',
      points: 350
    },
    {
      title: 'Taste Critic',
      description: 'Written 20+ detailed reviews',
      icon: '⭐',
      progress: 85,
      color: 'from-yellow-400 to-amber-400',
      level: 'Gold',
      points: 425
    },
    {
      title: 'Loyal Foodie',
      description: '6 months of regular orders',
      icon: '👑',
      progress: 65,
      color: 'from-purple-400 to-pink-400',
      level: 'Silver',
      points: 275
    },
    {
      title: 'Spice Master',
      description: 'Tried all spice levels',
      icon: '🌶️',
      progress: 92,
      color: 'from-red-400 to-orange-400',
      level: 'Platinum',
      points: 500
    }
  ];

  const recentOrders = [
    {
      id: 1,
      name: 'Chicken Shawarma Platter',
      restaurant: 'The Urban Oven',
      date: '1 day ago',
      rating: 5,
      price: 18,
      status: 'Delivered',
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg'
    },
    {
      id: 2,
      name: 'Mixed Grill Special',
      restaurant: 'The Urban Oven',
      date: '3 days ago',
      rating: 5,
      price: 35,
      status: 'Delivered',
      image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg'
    },
    {
      id: 3,
      name: 'Baklava Selection',
      restaurant: 'The Urban Oven',
      date: '1 week ago',
      rating: 4,
      price: 12,
      status: 'Delivered',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'
    }
  ];

  const favoriteItems = [
    {
      name: 'Lamb Biryani',
      category: 'Main Course',
      orders: 8,
      rating: 4.9,
      lastOrder: '1 day ago',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg'
    },
    {
      name: 'Chicken Shawarma',
      category: 'Fast Food',
      orders: 12,
      rating: 4.8,
      lastOrder: '3 days ago',
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg'
    },
    {
      name: 'Margherita Pizza',
      category: 'Italian',
      orders: 5,
      rating: 4.7,
      lastOrder: '1 week ago',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg'
    }
  ];

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdateProfile = (updatedData) => {
    setProfileData(updatedData);
    setIsEditing(false);
  };

  return (
    <>
      <ProfileHeader 
        title="User Profile"
        onBack={onBack}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onFavoritesClick={onFavoritesClick}
        onCartClick={onCartClick}
      />
      
      <Profile
        profileData={profileData}
        achievements={achievements}
        recentOrders={recentOrders}
        favoriteItems={favoriteItems}
        isEditing={isEditing}
        activeTab={activeTab}
        mousePosition={mousePosition}
        profileRef={profileRef}
        onMouseMove={handleMouseMove}
        onEditProfile={handleEditProfile}
        onUpdateProfile={handleUpdateProfile}
        onTabChange={setActiveTab}
      />
    </>
  );
};

export default UserProfilePage;