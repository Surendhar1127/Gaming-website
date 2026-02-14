import React, { useState, useEffect, useRef } from 'react';
import { Camera, Youtube, Twitch, Trophy, Users, Calendar, Play, Star as StarIcon, Gamepad2, Zap } from 'lucide-react';
import About from './components/About';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const gamesRef = useRef(null);
  const scheduleRef = useRef(null);
  const aboutRef = useRef(null);
  const [subscriberEmail, setSubscriberEmail] = useState('');

  const sendSubscriptionEmail = () => {
    const email = (subscriberEmail || '').trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    const to = 'surendhar.com';
    const subject = encodeURIComponent('New User');
    const body = encodeURIComponent(`User Mail Id: ${email}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const games = [
    { 
      title: 'Valorant', 
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
      viewers: '2.5K',
      category: 'FPS'
    },
    { 
      title: 'League of Legends', 
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=600&fit=crop',
      viewers: '3.2K',
      category: 'MOBA'
    },
    { 
      title: 'Apex Legends', 
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop',
      viewers: '1.8K',
      category: 'Battle Royale'
    },
    { 
      title: 'Fortnite', 
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop',
      viewers: '4.1K',
      category: 'Battle Royale'
    }
  ];

  const [schedule, setSchedule] = useState([
    { day: 'Monday', game: 'Valorant Ranked', time: '8:00 PM EST' },
    { day: 'Tuesday', game: 'League of Legends', time: '7:30 PM EST' },
    { day: 'Wednesday', game: 'Apex Legends', time: '8:00 PM EST' },
    { day: 'Thursday', game: 'Community Games', time: '9:00 PM EST' },
    { day: 'Friday', game: 'Tournament Night', time: '7:00 PM EST' },
    { day: 'Saturday', game: 'Variety Stream', time: '6:00 PM EST' },
    { day: 'Sunday', game: 'Chill Sunday', time: '8:00 PM EST' }
  ]);

  const stats = [
    { icon: Users, label: 'Subscribers', value: '125K+' },
    { icon: Trophy, label: 'Tournaments Won', value: '47' },
    { icon: Gamepad2, label: 'Games Played', value: '200+' },
    { icon: Zap, label: 'Total Views', value: '5M+' }
  ];

  const getTwitchUrl = (title) => {
    const key = (title || '').toLowerCase();
    if (key.includes('valorant')) return 'https://www.twitch.tv/directory/category/valorant';
    if (key.includes('league') || key.includes('league of legends')) return 'https://www.twitch.tv/directory/category/league-of-legends';
    if (key.includes('apex')) return 'https://www.twitch.tv/directory/category/apex-legends';
    if (key.includes('fortnite')) return 'https://www.twitch.tv/directory/category/fortnite';
    return 'https://www.twitch.tv/directory';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.5); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(147, 51, 234, 0.6); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .float { animation: float 3s ease-in-out infinite; }
        .glow { animation: glow 2s ease-in-out infinite; }
        .slide-in { animation: slideIn 0.5s ease-out forwards; }
        
        .game-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .game-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .game-card:hover::before {
          left: 100%;
        }
        
        .game-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.4);
        }
        
        .nav-link {
          position: relative;
          transition: color 0.3s;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #a855f7, #ec4899);
          transition: width 0.3s;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
        .star-particle {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 2s infinite;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #a855f7, #ec4899, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star-particle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
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
                onClick={() => {
                  setActiveTab(item.toLowerCase());
                  const key = item.toLowerCase();
                  if (key === 'games' && gamesRef.current) {
                    gamesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else if (key === 'schedule' && scheduleRef.current) {
                    scheduleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else if (key === 'about' && aboutRef.current) {
                    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else if (key === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
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

      {/* Hero Section */}
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

        {/* Floating Game Controller */}
        <div className="absolute bottom-20 right-20 hidden lg:block float">
          <Gamepad2 className="w-32 h-32 text-purple-500/30" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section ref={gamesRef} className="py-20 relative">
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

      {/* Streaming Schedule */}
      <section ref={scheduleRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Weekly Schedule</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {schedule.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/20 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-6">
                  <Calendar className="w-8 h-8 text-purple-400" />
                  <div>
                    <div className="font-bold text-lg">{item.day}</div>
                    <div className="text-gray-400">{item.game}</div>
                  </div>
                </div>
                <div>
                  <input
                    value={item.time}
                    onChange={(e) => {
                      const updated = [...schedule];
                      updated[index] = { ...updated[index], time: e.target.value };
                      setSchedule(updated);
                    }}
                    className="bg-transparent text-right text-purple-400 font-bold text-lg w-40 focus:outline-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About innerRef={aboutRef} />

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl border border-purple-500/30">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Join the Star Community
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe and become part of the most epic gaming community!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                className="px-6 py-4 bg-white/10 backdrop-blur-lg rounded-full border border-purple-500/30 focus:border-purple-500 focus:outline-none text-white placeholder-gray-400 w-full sm:w-auto"
              />
              <button
                onClick={sendSubscriptionEmail}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold hover:scale-105 transition-all duration-300 glow"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <StarIcon className="w-8 h-8 text-purple-500" fill="currentColor" />
              <span className="text-2xl font-bold gradient-text">STAR</span>
            </div>
            <div className="text-gray-400">
              © 2024 Star Gaming. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button className="hover:text-purple-400 transition-colors">Privacy</button>
              <button className="hover:text-purple-400 transition-colors">Terms</button>
              <button className="hover:text-purple-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {videoPlaying && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setVideoPlaying(false)}
        >
          <div className="max-w-6xl w-full aspect-video bg-gray-900 rounded-2xl flex items-center justify-center">
            <p className="text-2xl text-gray-400">Live Stream Player Would Go Here</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
