import React from 'react';
import { Users } from 'lucide-react';

export default function FeaturedGames({ games, getTwitchUrl }) {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Featured Games</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <div 
              key={index}
              className="game-card bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-purple-600 rounded-full text-xs font-semibold">
                    {game.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/60 px-2 py-1 rounded-full">
                  <Users className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-semibold">{game.viewers}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <a
                  href={getTwitchUrl(game.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 inline-block text-center bg-purple-600/20 hover:bg-purple-600 rounded-lg transition-all duration-300 font-semibold"
                >
                  Watch Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
