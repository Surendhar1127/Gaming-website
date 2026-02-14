import React from 'react';
import { Youtube, Twitch, Star as StarIcon } from 'lucide-react';

export default function Nav({ activeTab, onNavClick, scrolled }) {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <StarIcon className="w-10 h-10 text-purple-500 glow" fill="currentColor" />
            <div className="absolute inset-0 blur-xl bg-purple-500 opacity-50"></div>
          </div>
          <span className="text-3xl font-bold gradient-text">STARz</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['Home', 'Games', 'Schedule', 'About'].map((item) => (
            <button
              key={item}
              onClick={() => onNavClick(item.toLowerCase())}
              className={`nav-link ${activeTab === item.toLowerCase() ? 'active text-purple-400' : 'text-white'} hover:text-purple-400 font-semibold`}
            >
              {item}
            </button>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href="https://www.youtube.com/@Tamilanj"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-purple-500/20 rounded-full transition-all inline-flex"
          >
            <Youtube className="w-6 h-6 text-red-500" />
          </a>
          <a
            href="https://www.twitch.tv/valorant_emea"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-purple-500/20 rounded-full transition-all inline-flex"
          >
            <Twitch className="w-6 h-6 text-purple-500" />
          </a>
        </div>
      </div>
    </nav>
  );
}
