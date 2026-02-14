import React from 'react';
import { Calendar } from 'lucide-react';

export default function Schedule({ schedule, setSchedule, scheduleRef }) {
  return (
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
  );
}
