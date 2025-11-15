import React, { useState, useEffect } from 'react';
import { Home, User, Plus, X, Heart, Bell, Camera, MessageCircle, Share } from 'lucide-react';
import { Link } from 'react-router';

const NavBarDock = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const handleTabClick = (tabLabel) => {
        setActiveTab(tabLabel);
    };

    // Auto-hide on scroll functionality
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show navbar if at the top of the page
            if (currentScrollY < 10) {
                setIsVisible(true);
            }
            // Hide navbar when scrolling down, show when scrolling up
            else if (currentScrollY > lastScrollY && currentScrollY > 10) {
                // Scrolling down & past threshold
                setIsVisible(false);
                setIsExpanded(false); // Close expanded menu when hiding
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        // Throttle scroll events for better performance
        let timeoutId = null;
        const throttledHandleScroll = () => {
            if (timeoutId === null) {
                timeoutId = setTimeout(() => {
                    handleScroll();
                    timeoutId = null;
                }, 16); // ~60fps
            }
        };

        window.addEventListener('scroll', throttledHandleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [lastScrollY]);

    const mainNavItems = [
        { icon: Home, label: 'Home', link: '/' },
        { icon: User, label: 'Profile', link: '/profile' },
    ];

    const rightNavItems = [
        { icon: Heart, label: 'Favorites', link: '/favorites' },
        { icon: Bell, label: 'Notifications', link: '/cart' },
    ];

    const expandedItems = [
        { icon: Camera, label: 'Camera', angle: -45 },
        { icon: MessageCircle, label: 'Message', angle: -90 },
        { icon: Share, label: 'Share', angle: -135 },
    ];

    return (
        <div className={`fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6 px-4 transition-all duration-300 ease-in-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-orange-300 rounded-full animate-twinkle opacity-40"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            {/* Semi-circular Expanded Menu Panel */}
            <div className="absolute bottom-20 flex justify-center">
                <div
                    className={`relative transition-all duration-500 ease-out ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
                        }`}
                >
                    {/* Semi-circular background with gradient */}
                    <div
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-24 bg-gradient-to-br from-white via-orange-50 to-pink-50 rounded-t-full shadow-2xl border border-orange-200/30 backdrop-blur-md transition-all duration-500 ease-out ${isExpanded ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                            }`}
                    >
                        {/* Animated gradient overlay */}
                        <div className="absolute inset-0 opacity-20 rounded-t-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-pink-200 to-orange-200 animate-pulse rounded-t-full"></div>
                        </div>
                    </div>

                    {/* Expanded Menu Items */}
                    {expandedItems.map((item, index) => {
                        const Icon = item.icon;
                        const radius = 80;
                        const angleRad = (item.angle * Math.PI) / 180;
                        const x = radius * Math.cos(angleRad);
                        const y = radius * Math.sin(angleRad);

                        return (
                            <button
                                key={item.label}
                                className={`group absolute w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-xl border border-orange-200/50 flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 hover:shadow-2xl hover:bg-white hover:border-orange-300 ${isExpanded
                                        ? 'opacity-100 translate-x-0 translate-y-0'
                                        : 'opacity-0 translate-x-0 translate-y-4 pointer-events-none'
                                    }`}
                                style={{
                                    transform: isExpanded
                                        ? `translate(${x}px, ${y}px) scale(1)`
                                        : `translate(0px, 10px) scale(0.8)`,
                                    transitionDelay: isExpanded ? `${index * 80}ms` : `${(2 - index) * 50}ms`,
                                    left: '50%',
                                    bottom: '8px',
                                    marginLeft: '-28px',
                                }}
                            >
                                <Icon size={20} className="text-orange-600 group-hover:text-pink-600 transition-all duration-300 group-hover:scale-110" />
                                {/* Light animated effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Main Navigation Container */}
            <div className="relative">
                {/* Elevated Center Button */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <button
                        onClick={toggleExpanded}
                        className={`group w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ease-out hover:scale-105 relative overflow-hidden ${isExpanded
                                ? 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rotate-45'
                                : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rotate-0'
                            }`}
                    >
                        {/* Light animated background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>

                        <div className="relative flex items-center justify-center w-full h-full z-10">
                            <Plus
                                size={20}
                                className={`text-white absolute transition-all duration-300 group-hover:scale-110 ${isExpanded ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'
                                    }`}
                            />
                            <X
                                size={20}
                                className={`text-white absolute transition-all duration-300 group-hover:scale-110 ${isExpanded ? 'opacity-100 rotate-0' : 'opacity-0 rotate-45'
                                    }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Main Navigation Bar */}
                <div className="bg-white/95 backdrop-blur-md rounded-full shadow-2xl border border-orange-200/30 px-8 py-4 flex items-center justify-between min-w-80 relative overflow-hidden">
                    {/* Light animated background overlay */}
                    <div className="absolute inset-0 opacity-10 rounded-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-pink-100 to-orange-100 animate-pulse rounded-full"></div>
                    </div>

                    {/* Floating particles */}
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-orange-300 rounded-full animate-twinkle opacity-30"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}

                    {/* Left Navigation Items */}
                    <div className="flex items-center space-x-8 relative z-10">
                        {mainNavItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.label;
                            return (
                                <Link to={item.link} key={item.label}>
                                    <button
                                        onClick={() => handleTabClick(item.label)}
                                        className={`group p-3 rounded-full transition-all duration-300 hover:scale-110 relative overflow-hidden ${isActive
                                                ? 'text-orange-600 bg-orange-100/80 backdrop-blur-md border border-orange-200 shadow-lg'
                                                : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50 backdrop-blur-md border border-gray-200 hover:border-orange-200'
                                            }`}
                                    >
                                        {/* Active item light effect */}
                                        {isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-pink-200 opacity-30 rounded-full"></div>
                                        )}
                                        <Icon size={22} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                                    </button>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Center Space for Elevated Button */}
                    <div className="w-16"></div>

                    {/* Right Navigation Items */}
                    <div className="flex items-center space-x-8 relative z-10">
                        {rightNavItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.label;
                            return (
                                <Link to={item.link} key={item.label}>
                                    <button
                                        onClick={() => handleTabClick(item.label)}
                                        className={`group p-3 rounded-full transition-all duration-300 hover:scale-110 relative overflow-hidden ${isActive
                                                ? 'text-orange-600 bg-orange-100/80 backdrop-blur-md border border-orange-200 shadow-lg'
                                                : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50 backdrop-blur-md border border-gray-200 hover:border-orange-200'
                                            }`}
                                    >
                                        {/* Active item light effect */}
                                        {isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-pink-200 opacity-30 rounded-full"></div>
                                        )}
                                        <Icon size={22} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                                    </button>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Light Backdrop for expanded state */}
            <div
                className={`fixed inset-0 bg-white/20 backdrop-blur-sm transition-all duration-300 ${isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                style={{ zIndex: -1 }}
                onClick={toggleExpanded}
            />
        </div>
    );
};

export default NavBarDock;