import React, { useState } from 'react';
import ProfileLinks from './ProfileLinks';
import SocialIcons from './SocialIcons';
import ThemeToggle from './ThemeToggle';

const ProfileCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative w-full max-w-md mx-auto overflow-hidden transition-all duration-500 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-3xl shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Profile Header */}
      <div className="relative h-96">
        <img 
          src="/image.jpg" 
          alt="K Bharath's profile background" 
          className={`object-cover w-full h-full brightness-90 transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4 z-10">
          <ThemeToggle />
        </div>
        
        {/* Profile Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center transform transition-transform duration-500">
          <h1 className="text-3xl font-bold tracking-wider mb-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300">
            K BHARATH
          </h1>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            <span className="text-sm font-semibold">AIML Engineer</span>
          </div>
        </div>
      </div>
      
      {/* Social Icons */}
      <div className="flex justify-center py-6 space-x-8 border-b border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
        <SocialIcons />
      </div>
      
      {/* Profile Links */}
      <div className="p-6 space-y-4 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
        <ProfileLinks />
      </div>
    </div>
  );
};

export default ProfileCard;
