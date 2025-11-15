import React from 'react';
import { Star } from 'lucide-react';

const ProfileOrderCard = ({ order }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white/80 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-200">
      <div className="w-12 h-12 rounded-xl overflow-hidden">
        <img src={order.image} alt={order.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-800 truncate">{order.name}</h4>
        <p className="text-sm text-gray-600">{order.restaurant}</p>
        <div className="flex items-center space-x-2 text-xs text-gray-500">
          <span>{order.date}</span>
          <span>•</span>
          <span>${order.price}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center space-x-1">
          {[...Array(order.rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-xs text-green-600 font-medium">{order.status}</span>
      </div>
    </div>
  );
};

export default ProfileOrderCard;