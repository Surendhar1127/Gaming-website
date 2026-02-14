import React from 'react';

export default function About({ innerRef }) {
  return (
    <section ref={innerRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto p-12 bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/20">
          <h2 className="text-5xl font-bold text-center mb-8">
            <span className="gradient-text">About</span>
          </h2>
          <div className="text-center text-gray-300 space-y-6 leading-relaxed">
            <p className="text-2xl md:text-3xl font-semibold text-white">Surendhar Jayaprakash.</p>
            <p className="text-lg md:text-xl">This website is created by using Claude AI.</p>
            <p className="text-lg md:text-xl">I'm a Software Developer and gamer.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
