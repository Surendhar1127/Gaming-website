import React from 'react';

export default function Stats({ stats }) {
  return (
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
  );
}
