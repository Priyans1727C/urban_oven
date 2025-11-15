import React from 'react';

const ProfileAchievementCard = ({ achievement }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{achievement.icon}</div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">{achievement.title}</h4>
            <p className="text-sm text-gray-600">{achievement.description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className={`px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${achievement.color}`}>
            {achievement.level}
          </div>
          <div className="text-xs text-gray-500 mt-1">{achievement.points} pts</div>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${achievement.color} transition-all duration-1000`}
          style={{ width: `${achievement.progress}%` }}
        ></div>
      </div>
      <div className="text-xs text-gray-500 mt-2 text-right">{achievement.progress}% complete</div>
    </div>
  );
};

export default ProfileAchievementCard;