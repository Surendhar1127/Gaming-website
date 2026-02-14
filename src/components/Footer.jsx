import React from 'react';
import { Star as StarIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-purple-500/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <StarIcon className="w-8 h-8 text-purple-500" fill="currentColor" />
            <span className="text-2xl font-bold gradient-text">STAR</span>
          </div>
          <div className="text-gray-400">© 2024 Star Gaming. All rights reserved.</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="hover:text-purple-400 transition-colors">Privacy</button>
            <button className="hover:text-purple-400 transition-colors">Terms</button>
            <button className="hover:text-purple-400 transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
