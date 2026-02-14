import React from 'react';
import { Play, Gamepad2 } from 'lucide-react';

export default function Hero({ setVideoPlaying }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-gray-900"></div>
      <div className="container mx-auto px-6 z-10">
        <div className="text-center space-y-8 slide-in">
          <div className="inline-block">
            <h1 className="text-7xl md:text-9xl font-black mb-4">
              <span className="gradient-text">STAR z</span>
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
            Elite Gaming Content • Epic Moments • Legendary Plays
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setVideoPlaying(true)}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg hover:scale-110 transition-all duration-300 flex items-center space-x-2 glow"
            >
              <Play className="w-6 h-6" fill="currentColor" />
              <span>Watch Live</span>
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 rounded-full font-bold text-lg hover:bg-purple-500/20 transition-all duration-300">
              Join Community
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 right-20 hidden lg:block float">
        <Gamepad2 className="w-32 h-32 text-purple-500/30" />
      </div>
    </section>
  );
}
