'use client'

import React from 'react';

export function Meteors() {
  const meteors = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    top: -Math.floor(Math.random() * 5) + '%', // Starts slightly off the top of the screen
    left: Math.floor(Math.random() * 100) + '%', // Random position across the screen width
    animationDelay: Math.random() * 2 + 's', // Randomized delay for each meteor
    animationDuration: Math.floor(Math.random() * 8 + 5) + 's', // Random duration for varied
  }));

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        >
          <span className="absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent"></span>
        </span>
      ))}
    </div>
  );
}
