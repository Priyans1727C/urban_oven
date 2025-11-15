import React from 'react';
import { Star } from 'lucide-react';

const ProfileFavoriteCard = ({ item }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white/80 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-200">
      <div className="w-12 h-12 rounded-xl overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-800 truncate">{item.name}</h4>
        <p className="text-sm text-gray-600">{item.category}</p>
        <div className="flex items-center space-x-2 text-xs text-gray-500">
          <span>{item.orders} orders</span>
          <span>•</span>
          <span>Last: {item.lastOrder}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center space-x-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-gray-700">{item.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileFavoriteCard;